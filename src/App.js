import React, { Component } from 'react';
import './App.css';
import CitySearch from './CitySearch';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    NumberOfEvents: 32,
    currentLocation: 'all',
  }




  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          currentLocation: location,
        });
      }
    });
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }


  updateNumberOfEvents = (numberOfEvents) => {
    this.setState(
      {
        numberOfEvents,
      },
      this.updateEvents(this.state.locations, numberOfEvents)
    );
  };



  render() {
    return (
      <div className="App" >

        <NumberOfEvents numberOfEvents={NumberOfEvents}
          updateNumberOfEvents={this.updateNumberOfEvents} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />


      </div>
    );
  }
}
export default App;
