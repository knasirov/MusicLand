json.extract! @track, :title, :desciption
json.username @track.user.username
json.image_url @track.image.url
json.audio_url @track.file.url
