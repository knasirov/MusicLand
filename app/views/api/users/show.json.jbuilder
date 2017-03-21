json.extract! @user, :id, :username, :location
json.image_url @user.image.url
json.tracks @user.tracks
