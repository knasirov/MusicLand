class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  private
  # figure out how to pass in image in params
  def user_params
    params.require(:user).permit(
      :email, :username, :password, :location, :image
    )
  end
end
