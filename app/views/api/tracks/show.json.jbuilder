json.extract! @track, :id, :title, :description, :user_id
json.user_name @track.user.username
json.image_url @track.image.url
json.audio_url @track.file.url
