json.extract! @user, :id, :username, :location
json.image_url @user.image.url
json.set! :tracks do
  json.array! @user.tracks do |track|
    json.title track.title
    json.image_url track.image.url
  end
end
