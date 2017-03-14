class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:email], user_params[:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['invalid credentials'], status: 401
    end
  end


  def destroy
    @user = current_user
    if @user
      logout
      render 'api/users/show'
    else
      render json: ['Currently no user is signed in.'], status: 404
    end
  end


  private

  def user_params
    params.require(:user).permit(
    :email, :username, :password, :location, :image_url
    )
  end
end
