# Dummy Posts & Users

This project lists posts, users and users profile from https://dummyapi.io/.

## Built with

- ReactJS
- React hooks
- React-router-dom
- Styled Components

## Features

- Re-usable components
- Custom hook
- Infinite Scroll
- Responsive design
- CSS in JS
- Search Input (Posts & Users)

## Scenario

1. The user sees the posts on the home page.
2. The user can do infinite scroll to the posts on the homepage.
3. When clicking on any post, the user can go to the user profile and see the user detail.
4. The user can access the users list with the users icon in the header if he/she wants.
5. The user can do infinite scroll to the users on the users page.
6. When clicking on any user, the user can go to the user profile and see the user details as on the home page.
7. User can search posts or users anywhere
8. Location information has been converted with UTF-8 so that the user does not encounter character problems.
9. Dates are converted to YYYYY--MM-DD format.

### Project Structure

    .
    ├── src                     # Source files
        ├── config              # API endpoints
        ├── lib                 # Includes libs(searchPosts, searchUsers, formatDate, formatText)
        ├── presentation        # This folder contains the visual part of the application, with its pages, components, hooks, assets and styling.
            ├── components      # Tools and utilities
            ├── hooks           # Includes custom API hook to fetch data
            └── icons           # Includes svg icons
            ├── routes          # Includes app routes
            ├── styles          # Includes global spacings, colors.
            ├──index.js         # Collecting application

### Development Setup

- Node ^14.0
- npm ^6.2.0

### Usage

```sh
npm install
npm start
```

### .env file

This file contains environment variables that are used by the application. It should be created in the root directory of the project. Copy the contents of the `.env.example` file into your own .env file and paste your own `app-id` variable.

The following variables should be set in the .env file:

- `REACT_APP_API_KEY`: app-id
