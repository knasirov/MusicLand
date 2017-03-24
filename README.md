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

MusicLand was built and designed in two weeks


## Technology

MusicLand is a single-page web application that utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with Redux framework on the frontend.

### Backend

MusicLand runs on Ruby on Rails and is hosted on Heroku. Data is sent and received in JSON format using RESTful APIs.

Some of the dependencies used include:
- ImageMagick and Paperclip for attaching and processing media files
- Amazon Web Services for file storage on Amazon Simple Storage Service (S3)
- BCrypt for hashing passwords and secure authentication
