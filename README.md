# Pug Dashboard

This project is a simple dashboard built using Pug templating, SCSS for styling, and Parcel for bundling and serving the app. The dashboard is designed to be lightweight and easy to develop with a modular structure for scalability.

## Project Overview

- **Name**: `pug-dashboard`
- **Version**: 2.0.0
- **Homepage**: [Dashboard Pug](https://vi7ality.github.io/dashboard-pug)
- **Technologies Used**:
  - **Pug**: HTML template engine.
  - **SCSS**: CSS pre-processor for better styling management.
  - **Parcel**: A fast and zero-config web application bundler.
  - **Concurrently**: Utility to run multiple npm scripts concurrently.

## Features

- Modular Pug templates for reusability and readability.
- SCSS support for modular and maintainable CSS.
- Modern browser normalization with `modern-normalize`.
- Bundling and serving with Parcel for fast development and production builds.
- Automated build tasks with npm scripts and Pug watchers.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vi7ality/dashboard-pug.git
   ```

2. Navigate into the project directory:

   ```bash
   cd dashboard-pug
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Running the Application

To run the development server and watch for Pug changes, use the following commands:

1. **Start the development server**:

   ```bash
   npm start
   ```

2. **Watch for changes**:
   The project uses `concurrently` to run both the Parcel dev server and a Pug watcher simultaneously. You can start both processes by running:

   ```bash
   npm run dev
   ```

## Building the Application

To build the project for production, use the following command:

```bash
npm run build
```

This will bundle the application and output the production-ready files in the `dist` folder.

## Scripts

- `start`: Runs the development server using Parcel.
- `dev`: Runs both the development server and watches Pug files for changes concurrently.
- `build:pug`: Compiles Pug files into HTML.
- `watch`: Watches Pug files for changes and recompiles them automatically.
- `build`: Creates a production build with Parcel and outputs it to the `dist` directory.

## Folder Structure

- **src**: Contains all source files.
  - **pug**: All Pug templates for the dashboard.
  - **scss**: SCSS files for styling the project.
- **public**: Folder for static assets (e.g., images, icons).
- **dist**: Output folder for production builds (generated automatically by Parcel).

## Deployment

To deploy the dashboard to GitHub Pages, run the following build command:

```bash
npm run build
```

The built project will be available at the provided homepage URL: [Dashboard Pug](https://vi7ality.github.io/dashboard-pug).
