# Game of life

This project contains the following technologies:
1. NodeJS- server side
2. ReactJS - client side
3. Typescript

## Prerequisites
### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

## Cloning and Running the Application in local

Clone the project into local directory

Install all the npm packages for both server side and client side. Go to the project directory and type the following commands to install all npm packages

```bash
cd server
npm install
cd ..
cd client
npm install

```

In order to run the server type the following command in the server directory

```bash
npm run start
```

In order to run the client type the following command in the client directory

```bash
npm run start
```
#### URL

The application has just one url /game which ties to *Game* Component

## Project Architecture

There are some misses. it's after this part.
### Client

The client has one main page. I built it with react-router, so it could be extended to more pages.
For styling I used Styled components and made a theme, to make the ui persistent as much as possible and also for easy change of styles properties like colors, fonts, ect.
For communicating with the server I used axios.
I used react context for 3 parts:
api context - contains all the api requests in a way it could be expended to more requests for different services. (Now it only have one - game)
game context - Managing the main components for the game. for examples: contains the dimensions of the grid, the current mode of the game ( init, readt, running ) and error for error handling.
cell context - helps with actions related to the cells of the grid like choosing the living cells of the initial stage and for displaying the living stage of the cell.

### Server

The server is built in a way that every request goes through several middlewares.
In a bigger project there could be more middlewares like token validation if the system has authorization. In this project every request goes through controller -> services,every middleware has its own job. 
The server keeps its local data with usage of singleton. Every request  gets the instance from it and updates its values. so the data persists in a single run.

### Logic:
The client gets from the server the size of the grid - that way it could be changed in the environment variables of the server. Then the component creates the grid by the size of the row and columns and shows the cells.
I keep an object that  contains only the living cells ( by their index). The client keeps one object for the initial state of the game and updates its every step from the data returned from the server so it could change the color of the living cells. ( if the cell indexes (x-y) is a  key in the object it changes its color). I keep another object on the server side. In the first step the object gets the living cells form the request (/first) and after that, for every other request (/next), the server use this object and updates its.
I used an object for the living cells only so that i won't be needing array of matrix of all of the cells.


I went by these rules (from wikipedia):

living cell - 3 or 2 living neighbors -> alive

dead cell - 3 living neighbors -> alive

otherwise -> dead

## Problems

Things I didn't manage to finish:
- If there are no living cells left I'm showing alert and not popup like requested. I would;ve created model component that will serve as a floating container for all the popups and used this to make Popup that shows whene there are no living cells left.
- I think i've styled the component and all of the ui in a good way, but there is some room for improvments. like organazing the theme in a better way.
- Also the game cmponent is a little bit messy but i wasn't able to "clean" it and manage the flow of the game in a better way like the changeing of mode of the game. mayber get rid of the cell context and make the object of the living cells of the client side as state in the game component. Also I didn't quite figure how to imporve the performence of the grid that contains 2500 nodes. I just used very cheap component for the cells that only changes colors, so it will be more easy to render and run.
- i didn't manage to handle errors in a good way. I currently just show a message on the startup and a message in the main page if something going wrong. If I would've more time maybe I would've added toast messages and better text for the errors. (both in client and server).
- I wanted to add validation middlewares on the server side for every request. I would've used Joi and make validation scheme for every request that contains variables in body or query and return error if some of the variables not valid.
- didn't used react query. Never used it so i can't tell how i woul've used it in this project.
- didn't deployed the app.
