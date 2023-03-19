# Courses Genesis
This project was made for a test task for the company "Genesis". The web project is a SPA (single-page application) platform for learning. In which there were such tasks as (completed ones are marked with a tick):
* [x]  The last 10 courses must be displayed in the course feed. The course includes:
    *  [x]  Photo of the course 
    *  [x] Course title
    * [x] Number of lessons, skills and rating
    * [x] Display 10 courses on the page and add pagination
    * [x] Additionally:
        * [x] Play video without sound when hovering   
* [x] The course view page displays the first video from the course, details about the course, and a list of lessons:
    * [x] When clicking on a lesson (if it is not blocked), the current video will open for viewing
    * [x] Video and course lesson progress must be saved (save locally)
    * [x] If the lesson is blocked, show it to the user
    * [ ] Additionally:
        * [] Make a functional picture in picture (without third-party libraries)
        * [x] Add video playback speed change via keyboard (without third-party libraries)
* [ ] Additional tasks:
    * [ ] Work through errors from the API (network error, ...)
    * [ ] Adaptive for the mobile version 
    * [ ] Video loading animation
    * [ ] The code is covered by tests
# Installation
1. Clone the repository: `https://github.com/TryNoRage/genesis-courses.git`
2. Navigate to the project directory: `cd genesis-courses`
3. Install dependencies: `npm install`
# Usage
1. Start the development server: `npm start`
2. Open `http://localhost:3000` to view it in the browser.
# Dependencies
* React
* MUI
* React Router Dom
* Hls.js
# Architecture
To begin with, I wanted to use a modular architecture, but I realized that it was too cumbersome for such a project, so I abandoned it. I divided the project into several folders for different functionality:
* `api`: In this folder, I implemented the fetch functions for token requests and courses, and also made common values into constants for future convenience if refactoring is needed
* `components`: This folder contains reusable UI components that can be used in the application. Lists, accordions, banners, etc. were implemented here.
* `customHook`: This folder contains custom hooks that can be reused across components. There are the  hook that connects our work with api and gets data about courses in json format and a hook that allows you to divide the array for pagination.
* `helpers`: This folder contains utility functions that may be used across the application. Here are the functions for generating a key for rendering lists if there is no suitable unique indicator and converting seconds into minutes for correct display for the user.
* `pages`:  This folder stores pages for display through the react router, they contain all the components, custom hooks and helpers.
* `router`: This folder contains a file that specifies the routes and components that should be displayed along these routes using the React Router.
