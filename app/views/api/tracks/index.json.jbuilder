json.array! @tracks do |track|
  json.title track.title
  json.user_name track.user.username
  json.image_url track.image.url
end
