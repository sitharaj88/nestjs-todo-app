# NestTodoApp

## Description

This is a Todo application built with NestJS. The application allows users to manage their tasks effectively. It provides features such as creating, updating, deleting, and viewing tasks. This README provides information about the project, its purpose, and instructions on how to set up and run the application.

## API Detail

The application exposes a RESTful API for managing todos. The API endpoints include:

- `/todo` - GET: Get all todos
- `/todo/:id` - GET: Get a specific todo by ID
- `/todo` - POST: Create a new todo
- `/todo/:id` - PUT: Update a todo by ID
- `/todo/:id` - DELETE: Delete a todo by ID

## How to Run the Application

To run the application, follow these steps:

1. Install dependencies by running the following command:
  ```bash
  $ npm install
  ```

2. Start the application in development mode by running the following command:
  ```bash
  $ npm run start:dev
  ```

  This will start the application and enable hot-reloading for development.

3. Access the application by navigating to `http://localhost:3000` in your web browser.

4. Use the provided API endpoints to interact with the application.

## Support

If you need any assistance or have any questions, please refer to the [documentation](https://docs.nestjs.com) or reach out to the project maintainers.

## License

This project is licensed under the [Apache License 2.0](LICENSE).
