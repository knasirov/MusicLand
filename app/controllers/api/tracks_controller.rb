class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render :index
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def show
    @track = Track.find(params[:id])
    if @track
      render :show
    else
      render json: @track.errors.full_messages, status: 404
    end
  end

  def update
    @track = Track.find(params[:id])
    if @track.update(track_params)
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])
    if @track.destroy
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  private
  # figure out how to pass in image and file in params
  def track_params
    params.require(:track).permit(
      :title, :desciprtion, :user_id, :image_url, :file_url
    )
  end
end
