# DevFinder

DevFinder is a React application that allows users to search for GitHub users by their username and display detailed information about them. The app also features a random advice generator, making it a fun and interactive experience for users.

## Table of Contents

1. [Features](#features)
2. [Usage](#usage)
3. [Technologies Used](#technologies-used)
4. [Components](#components)
5. [Routing](#routing)
    - [Routes](#routes)
6. [Installation](#installation)
7. [Contributing](#contributing)

## Features

- Search GitHub users by username.
- Display detailed information about GitHub users.
- Handle errors gracefully with appropriate messages.
- Generate and display random advice.

![DevFinde home page](/src/images/s-1.png)

## Usage

- Enter a GitHub username in the search bar and press Enter or click the search button to view user details.
- View detailed information about the user, including their avatar, name, bio, repositories, followers, following, location, blog, Twitter handle, and company.
- Click the back button to return to the search page.
- Enjoy random pieces of advice displayed below the search bar.

![Aayush259 GitHub info on DevFinder](/src/images/s-2.png)

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Vite:** Next-generation front-end tool for faster builds.
- **React Router DOM:** For handling client-side routing.
- **Tailwind CSS:** For styling the application.
- **Fetch API:** For making network requests.
- **GitHub API:** For fetching GitHub user data.
- **Advice Slip API:** For fetching random advice.

## Components

- **App.jsx:** The main component that sets up the layout and renders child components that sets up the layout and renders child components using *Outlet*.
- **Search.jsx:** Contains the search bar for inputting GitHub usernames and displays random advice.
- **DisplayUserInfo.jsx:** Fetches and displays detailed information about a GitHub user.
- **GitHubUserInfo.jsx:** Displays specific details of a GitHub user in a card format.
- **Error.jsx:** Displays an error message with a retry button when an API request fails.
- **UserNotFound.jsx:** Displays a *"User not found"* message when the searched user does not exist.
- **GoBackButton.jsx:** Provides a button to navigate back to the search page.
- **Header.jsx:** Displays the application header with the title and link to my GitHub profile 😉.
- **Loader.jsx:** A loading component displayed while data is being fetched.
- **Advice.jsx:** Fetches and displays random advice from the Advice Slip API.
- **History.jsx:** Display history and allows users to delete them on single click. Uses local storage for storing history.

## Routing

Routing is handled using *react-router-dom*. This app has several routes defined in **main.jsx** using the *createBrowserRouter* and *createRoutesFromElements* methods.

### Routes

- **/Find-GitHub-User/:**Home page displaying the search bar and random advice.
- **/Find-GitHub-User/username/:** Displays detailed information about a specific GitHub user.

## Installation

1. Clone the repository `git clone https://github.com/Aayush259/Find-GitHub-User.git`.
2. Install the dependencies using `npm install`.
3. Start the application using `npm run dev`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


Thank you for using DevFinder. I hope this app helps you find and explore GitHub user profiles with ease. If you have any questions or feedback, feel free to open an issue or contribute to the project.
