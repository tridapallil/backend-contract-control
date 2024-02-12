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

2. In the repo root directory, run `npm install` to gather all dependencies.

3. Next, `npm run seed` will seed the local SQLite database. **Warning: This will drop the database if it exists**. The database lives in a local file `database.sqlite3`.

4. Then run `npm start` which should start both the server and the React client.

5. The server will by running on ```http://localhost:3001```.

6. The swagger ui will be running on ```http://localhost:3001/api-docs```.

7. The tests can be run with ```npm run test```.


## Notes
If there were more time, more things could be done to make the project better. The main things that would be implemented is:

- At this project, was only developed one test to demonstraded that is configured and ready for it. So the next thing would be to make sure that
100% of the project is full test covered.

- Some validations are important to keep a minimum standard to a project. One example is to add: spellcheck.

- Make some UML diagrams to represent the models and the project architecture.
