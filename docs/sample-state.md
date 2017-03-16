```js
{
  session: {
    currentUser: {
      id: 1,
      username: 'khalil'
    },
    errors: []
  },

  tracks: {
    1: {
      id: 1,
      title: 'run the jewels',
      user_id: 1,
      file_url: https://console.aws.amazon.com/s3/home?region=us-east-1&bucket=musicland-dev&prefix=tracks/files/000/000/001/original/
      image_url: 'https://upload.wikimedia.org/wikipedia/en/2/20/Run_the_jewels_ep_album_cover.jpg'
    },
    2: {
      id: 2,
      ...
    }
  },

  track: {
    id: 1,
    title: 'run the jewels',
    description: 'hip-hop',
    user_id: 1,
    username: 'khalil',
    file_url: https://console.aws.amazon.com/s3/home?region=us-east-1&bucket=musicland-dev&prefix=tracks/files/000/000/001/original/,
    image_url: 'https://upload.wikimedia.org/wikipedia/en/2/20/Run_the_jewels_ep_album_cover.jpg',
    comments: {
      1: {
        id: 1,
        body: 'awesome song',
        user_id: 14,
        username: 'john'
      },
      2: {
        id: 2,
        body: 'great song',
        user_id: 6
        username: 'jane'
      }
    }
  },

  user: {
    id: 1,
    username: 'khalil',
    location: 'San Francisco',
    image_url: 'appacademy.io/khalil.jpg'
  }
}
```
