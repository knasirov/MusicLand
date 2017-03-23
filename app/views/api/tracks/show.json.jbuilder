json.extract! @track, :id, :title, :description, :user_id
json.user_name @track.user.username
json.user_img @track.user.image.url
json.image_url @track.image.url
json.audio_url @track.file.url
json.set! :comments do
  json.array! @track.comments do |comment|
    json.id comment.id
    json.body comment.body
    json.user_id comment.user_id
    json.user_name comment.user.username
    json.user_img comment.user.image.url
  end
end
