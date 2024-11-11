# Expo App Login Page Example

**Login page and tab navigation**

This is a sample application showing how you can setup login flows for your Expo application.

If the user has not "logged in", it routes the user automatically to /login. Once they login, it stores credentials in local, then routes the user
to the main application.

I'm building my first react native application in 2024, and needing to learn a lot (read: everything) as I go along. I wrote way too much code
before I starting thinking about the important things, like how to actually set up my files and let my user log into the application. As such,
when I got around to needing that part, the codebase was messy and refactors to refactor the application page structure brought too many
side effects from the rest of the application.

So I decided to set up a clean, empty expo project and focus just on the immediate need: if the user is not logged in, direct them to /login. Once they
do log in, store their credentials and route them back to the main application in root (which should itself set up a tabs flow, matching what my application
will use).
