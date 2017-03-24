# MusicLand

[MusicLand live][heroku]

[heroku]: http://musicland.herokuapp.com

MusicLand is a web application inspired by SoundCloud. Users can discover artists and stream their music or upload their own and share it with the community.   

## Features

- User accounts with secure authentication
- Audio uploading and management
- Continuous music streaming
- Image uploading for users and tracks
- Commenting on tracks


## Project Design

MusicLand was built and designed in two weeks. A [proposal](./docs/README.md) was drafted to guide through the development process. The [docs](./docs) folder includes database schema, component hierarchy, sample state, and api-endpoints files that were basis for this project.


## Technology

MusicLand is a single-page web application that utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with Redux framework on the frontend.

### Backend

MusicLand runs on Ruby on Rails and is hosted on Heroku. Data is sent and received in JSON format using RESTful APIs.

Some of the dependencies used include:
- ImageMagick and Paperclip for attaching and processing media files
- Amazon Web Services for file storage on Amazon Simple Storage Service (S3)
- BCrypt for hashing passwords and secure authentication

### Frontend

React.js with Redux framework allows MusicLand to act as a single-page application which is necessary for continuous streaming.

#### npm

Node package manager (npm) is used to install all of the frontend dependencies.

Using a post-install script, webpack bundles all of the frontend files after the deployment to Heroku is complete.

#### Webpack

Webpack conveniently bundles all of the frontend components and Flux parts. The bundled file is located in `/app/assets/javascripts` and included in the main `application.js` file.

#### React & Redux

All front-end files are located in `/frontend` folder, which houses components, actions, reducers, store, and utilities.

#### Babel

All components were written in `.jsx` format, which is transpiled using Babel

#### jQuery

The frontend and back-end communicate via jQuery using AJAX requests.

#### Bootstrap & Sass

Bootstrap is used for modals. The rest of the app layout and styling is done with Sass. 

#### Others

Other frontend dependencies are:

- React DOM
- React Router
- Redux thunk
- Lodash
