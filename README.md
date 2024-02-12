# DEEL BACKEND TASK

This project was developed using the best practicies to run a simple api. The main objective of this project is to simulate a contractor api service, where you can
pay, deposit and get some contract informations.

## Technologies

Thinking to use the best libs from the market, some of them was choosen, such as:

1. Yup: to validate query params.
2. Swagger: to documentation and to run the tests with a simple frontend User Interface.
3. Sequelize: an ORM to deal with database.
4. Jest: to deal with tests.
5. ESLint: To lint the code and keep a standard.

## Data Models

> **All models are defined in src/model.js**

## Getting Set Up

The project requires [Node.js](https://nodejs.org/en/) to be installed. Is recommended to use the LTS version.

1. Start by creating a local repository for this folder.

1. In the repo root directory, run `npm install` to gather all dependencies.

1. Next, `npm run seed` will seed the local SQLite database. **Warning: This will drop the database if it exists**. The database lives in a local file `database.sqlite3`.

1. Then run `npm start` which should start both the server and the React client.

❗️ **Make sure you commit all changes to the master branch!**

## Technical Notes

- The server is running with [nodemon](https://nodemon.io/) which will automatically restart for you when you modify and save a file.

- The database provider is SQLite, which will store data in a file local to your repository called `database.sqlite3`. The ORM [Sequelize](http://docs.sequelizejs.com/) is on top of it. You should only have to interact with Sequelize - **please spend some time reading sequelize documentation before starting the exercise.**

- To authenticate users use the `getProfile` middleware that is located under src/middleware/getProfile.js. users are authenticated by passing `profile_id` in the request header. after a user is authenticated his profile will be available under `req.profile`. make sure only users that are on the contract can access their contracts.
- The server is running on port 3001.
