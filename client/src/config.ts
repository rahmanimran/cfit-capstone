// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'juajfk4bud'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'rahmanimran.auth0.com',            // Auth0 domain
  clientId: 'p3NaEQXLsLGahp7dQqB3UiZugLyTBh7Z',          // Auth0 client id
  callbackUrl: 'http://imran-todo.s3-website.us-east-2.amazonaws.com/callback'
}
