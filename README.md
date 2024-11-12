# Expo App Login Page Example

**Login page and tab navigation**

This is a sample application showing how you can setup login flows for your Expo application.

If the user has not "logged in", it routes the user automatically to /login. Once they login, it stores credentials in local, then routes the user
to the main application.

I'm building my first react native application in 2024, and needing to learn a lot (read: everything) as I go along. I wrote way too much code
before I starting thinking about the important things, like how to actually set up my files and let my user log into the application. As such,
when I got around to needing that part, the codebase was messy and refactors to refactor the application page structure brought too many
side effects from the rest of the application. One such problem was the main application pages trying to access and utilize user data, when no user was
logged in! This was a clear problem I needed to resolve, to ensure the main application did not load until we had a valid user and session.


So I decided to set up a clean, empty expo project and focus just on the immediate need: if the user is not logged in, direct them to /login. Once they
do log in, store their credentials and route them back to the main application in root (which should itself set up a tabs flow, matching what my application
will use).

## Testing it out
Pull the repo down, `npm install` then start it up with `npm start`. 
`w` will load the sample app into a web browser.
`i` will load the sample app into the iOS simulator, if you have it set up

## How it works
For anyone who doesnt already understand how Expo file based path routing works (I assume why you are here), an explanation of the file structure.

1. `app/_layout.tsx` is the root view of the application.
2. `login/index.tsx` is the login page, for when the user is not "logged in"
3. `(authorized)/_layout` is the root of the main application. From here we will kick people to the login screen if they do not have a valid session, to avoid the primary app from loading before the user is authoriazed to access it.
4. `(authorized)/(tabs)/*` is the tab based navigation and associated pages - the main app for when the user is "logged in"
5. `providers/AuthProvider.tsx` handles signing the user in and logging them out, and the associated storing / cleaning of their session
