json.extract! @user, :username, :location
json.image_url asset_path(@user.image.url)
