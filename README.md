# HappyProgrammers
## Getting Started

- Add a `.env` file to `server` directory to run locally. Use `server/.env.example` as a template.

- `npm start` script: Production startup. Only runs backend server.

- `npm run develop` script: Uses `concurrently` to run the back-end with `nodemon` and launches the `create-react-app` development server for front-end development. `concurrently` runs these within the same terminal. Logging is tagged with `[server]` or `[client]`.

- `npm run client` script: Launches the `create-react-app` development server for the client only. Will not start back-end.

- `npm run server` script: Starts the back-end server with `nodemon` for easy development without launching the client.

- The `npm install` script: Installs all dependencies for root as wells as `client` and `server`.

- The `npm run build` script: Runs `create-react-app` build script to create client bundles and assets.
