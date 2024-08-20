# React Joke Fetcher

This is a mini React application that fetches jokes from an API. The main purpose of this project is to learn how to work with API requests in React.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Technologies Used](#technologies-used)
- [Application Description](#application-description)
- [Future Improvements](#future-improvements)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-repository/joke-fetcher.git
   ```

2. Navigate to the project directory:

   ```bash
   cd http-requests-starter
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Project

To start the project in development mode, run:

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Technologies Used

- **React** - A JavaScript library for building user interfaces.
- **React DOM** - Library for working with the virtual DOM.
- **React Scripts** - A set of scripts to support React applications.

## Application Description

The application makes requests to an API to fetch random jokes, which are then displayed on the page. The main goal of the application is to demonstrate how to work with APIs and asynchronous requests in React.

### Key Features

- Fetch jokes from an API.
- Display jokes on the page.
- Refresh jokes on user request.

### Example of API Usage

The following API is used to fetch jokes:

```javascript
fetch('https://api.example.com/jokes/random')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Future Improvements

- Add error handling for API requests.
- Support multiple joke categories.
- Improve the user interface with CSS.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
