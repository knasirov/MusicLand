# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users/:id` - returns user page
- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Tracks

- `GET /api/tracks` - all tracks for stream page
- `GET /api/users/:id/tracks` - tracks filtered by user to show on user's page
- `POST /api/tracks`
- `GET /api/tracks/:id`
- `PATCH /api/tracks/:id`
- `DELETE /api/tracks/:id`

### Comments

- `GET /api/tracks/:id/comments`
- `POST /api/comments`
- `DELETE /api/comments/:id`
