# Web Dev Academy

This is a single-page application that serves as a comprehensive reference guide for web developers. It covers various topics including Frontend Development, Backend Development, React, Mobile Development, and Angular.

## File Structure

```
.
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
├── public
│   └── vite.svg
└── src
    ├── App.css
    ├── App.jsx
    ├── app.txt
    ├── index.css
    ├── main.jsx
    └── assets
        └── react.svg
```

## Dependencies

### Production Dependencies
- `lucide`: ^0.547.1
- `lucide-react`: ^0.547.0
- `react`: ^19.2.0
- `react-dom`: ^19.1.1

### Development Dependencies
- `@eslint/js`: ^9.36.0
- `@types/react`: ^19.1.16
- `@types/react-dom`: ^19.1.9
- `@vitejs/plugin-react`: ^5.0.4
- `eslint`: ^9.36.0
- `eslint-plugin-react-hooks`: ^5.2.0
- `eslint-plugin-react-refresh`: ^0.4.22
- `globals`: ^16.4.0
- `vite`: ^7.1.7

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Lints the project files using ESLint.
- `npm run preview`: Serves the production build locally.

## How to Operate

1.  **Clone the repository:**
    ```sh
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd web-dev-academy
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
4.  **Run the application in development mode:**
    ```sh
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## What it Does

The application provides a detailed and organized collection of topics related to web development. The main component, `App.jsx`, contains a large dataset of information covering:

-   **Frontend Development:** HTML, CSS, and related concepts.
-   **Backend Development:** Node.js, Express, MongoDB, and RESTful APIs.
-   **React:** Core concepts, hooks, state management, and routing.
-   **Mobile Development:** React Native, core components, styling, and navigation.
-   **Angular:** Core architecture, TypeScript, data binding, and services.

The application features a dark/light mode toggle and a searchable interface to easily navigate through the content.