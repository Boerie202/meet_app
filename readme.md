My Meet App is designed using Test Driven & Behaviour Driven Development proceses.

It will be a serverless app which will use the Google Calendar API to fetch event information and display it as a progressive webb application using React.

Please see below for key app feature user stories:

#Feature 1: Filter events by city
    Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.

    - Given user hasn’t searched for any city
    - When the user opens the app
    - Then the user should see a list of all upcoming events

    Scenario 2: User should see a list of suggestions when they search for a city.

    - Given the main page is open
    - When user starts typing in the city textbox
    - Then the user should see a list of cities (suggestions) that match what they’ve typed

    Scenario 3: User can select a city from the suggested list.

    - Given the user was typing “Berlin” in the city textbox
            And the list of suggested cities is showing
    - When the user selects a city (e.g., “Berlin, Germany”) from the list
    - Then their city should be changed to that city (i.e., “Berlin, Germany”)
            And the user should receive a list of upcoming events in that city

#Feature 2: Show/hide an event's details

    Scenario 1: An event element is collapsed by default

    - Given the user is done viewing an event's details
    - When the user uses an exit key
    - Then the event details will be hidden


    Scenario 2: User can expand an event to see its details

    - Given the user wishes to view an event's details
    - When the user clicks on an event
    - Then the details for an event will be shown and also hidden upon request

    Scenario 3: User can collapse an event to hide its details

    - Given the user wishes to close an event's details
    - When the user uses an exit key
    - Then the event details will be hidden

#Feature 3: Specify number of events

    Scenario 1: When user hasn’t specified a number, 32 is the default number

    - Given the user has opened the events page and not selected any search criteria
    - When the events page is shown
    - Then a default of 32 events will be shown

    Scenario 2: User can change the number of events they want to see

    - Given the user knows some serach criteria or wants to view fewer/more events
    - When the serch criteria is entered
    - Then fewer/more events wil be shown to the user

#Feature 4: Use the app when offline

    Scenario 1: Show cached data when there’s no internet connection

    - Given the user has no internet connection
    - When the app is offline
    - Then use cached data to show previously loaded events or a default number of events if nothing was loaded

    Scenario 2: Show error when user changes the settings (city, time range)

    - Given the app is offline with no internet connection
    - When the user tries to enter new search criteria and refresh the page
    - Then show an error due to being offline

#Feature 5: Data visualization

    Scenario 1: Show a chart with the number of upcoming events in each city

    - Given the user wishes to view which cities have the most/least events happening
    - When the user viws events by city
    - Then show a data chart of how many events will be happening in the city

