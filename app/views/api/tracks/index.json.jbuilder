json.array! @tracks do |track|
  json.id track.id
  json.title track.title
  json.user_id track.user_id
  json.user_name track.user.username
  json.image_url track.image.url
end
