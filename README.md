## Project Summary

This is the 6th Project of Udacity Nanodegree Program. It's the Capstone Project. Here, a ToDo application has been built & deployed in AWS.

- The backend is built on Servrless technology using AWS Lambda
- The client is built on React and deployed in AWS S3 

**GitHub Repository Link:**  
https://github.com/rahmanimran/udacity-capstone-project

**Application Link:**  
http://imran-todo.s3-website.us-east-2.amazonaws.com/

## Functionality of the application
This application will allow creating/removing/updating/fetching TODO items. Each TODO item can optionally have an attachment image. Each user only has access to TODO items that he/she has created.

### Backend
To implement this project, you need to implement the following major  functions and configure them in the [serverless.yml](https://github.com/rahmanimran/cfit-capstone/blob/master/backend/serverless.yml) file:

- **Auth** - this function should implement a custom authorizer for API Gateway that should be added to all other functions.
- **GetTodos** - should return all TODOs for a current user. A user id can be extracted from a JWT token that is sent by the frontend
- **CreateTodo** - should create a new TODO for a current user. A shape of data send by a client application to this function can be found in the [CreateTodoRequest.ts](https://github.com/rahmanimran/cfit-capstone/blob/master/backend/src/requests/CreateTodoRequest.ts) file
- **UpdateTodo** - should update a TODO item created by a current user. A shape of data send by a client application to this function can be found in the [UpdateTodoRequest.ts](https://github.com/rahmanimran/cfit-capstone/blob/master/backend/src/requests/UpdateTodoRequest.ts)  file
- **DeleteTodo** - should delete a TODO item created by a current user. Expects an id of a TODO item to remove.
- **GenerateUploadUrl** - returns a pre-signed URL that can be used to upload an attachment file for a TODO item.

You also need to add any necessary resources to the resources section of the [serverless.yml](https://github.com/rahmanimran/cfit-capstone/blob/master/backend/serverless.yml) file such as DynamoDB table and S3 bucket.

### Frontend

The client folder contains a web application that uses the API that should be developed in the project.

This frontend should work with the serverless application once it is developed, you don't need to make any changes to the code. The only file that you need to edit is the [config.ts](https://github.com/rahmanimran/cfit-capstone/blob/master/client/src/config.ts) file in the client folder. This file configures your client application just as it was done in the course and contains an API endpoint and Auth0 configuration:


```ts
const apiId = '...' API Gateway id
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  domain: '...',    // Domain from Auth0
  clientId: '...',  // Client id from an Auth0 application
  callbackUrl: 'http://localhost:3000/callback'
}
```

### Authentication
To implement authentication this application, [Auth0](http://auth0.com/) has been used. First an Auth0 application was created. Then "domain" and "client id" has been copied to the [config.ts](https://github.com/rahmanimran/cfit-capstone/blob/master/client/src/config.ts) file in the client folder.

## How to run the application
### Backend
To deploy an application in AWS run the following commands:
```bash
cd backend
npm install
sls deploy -v
```
### Frontend
The frontend is currently hosted in AWS S3, for ease of access. Howver, if you want to run it locally then please change the  [config.ts](https://github.com/rahmanimran/cfit-capstone/blob/master/client/src/config.ts) file to set right values in params. After that run the following commands:

```bash
cd client
npm install
npm run start
```
This should start a development server with the React application that will interact with the serverless TODO application.
