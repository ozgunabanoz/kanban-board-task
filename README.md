# Personal Kanban Board Task

-   React.js has been used for front-end operations.
-   Spring Boot has been used for server side operations.
-   H2 has been used as a database.
-   Redux has been used for maintaning application state.
-   On the front-end side, after installing npm packages, you can start the application by "npm start" command.
-   Http-Proxy-Middleware package has been used to provide Cross-Origin Resource Sharing. Normally, server side application runs on Port:8080 on my machine. But if you have a different configuration, you should change the target url in the client/src/setUpProxy.js file from localhost:8080 to the port you serve the back-end application on.
-   The user can change the status of a task by pressing the buttons below every task item. This solution has been implemented after drag and drop functionality caused problems for the application's mechanism.
