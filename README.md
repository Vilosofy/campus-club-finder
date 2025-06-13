# Campus Club Finder

A web application that helps university students discover, learn about, and join student clubs.

## Features

- Browse and sort student clubs
- Toggle between grid and list views
- View detailed information about each club
- Join clubs with persistent storage
- Responsive design for all devices

## Tech Stack

- **Vite**: For project setup and bundling
- **React**: For building the UI and managing state
- **React Router**: For navigation between pages
- **Tailwind CSS**: For styling the application
- **localStorage**: For persisting joined clubs data

## Installation and Setup

1. Clone the repository:

- git clone https://github.com/your-username/campus-club-finder.git
- cd campus-club-finder

2. Install dependencies:

- npm install

3. Run the development server:

- npm run dev

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

To build the app for production:

- npm run build

The build files will be in the `dist` directory.

## Project Structure

- `src/components`: Reusable UI components
- `src/pages`: Page components for each route
- `src/data`: Club data
- `src/hooks`: Custom hooks like useLocalStorage
- `public/images`: Club images
