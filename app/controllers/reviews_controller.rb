class ReviewsController < ApplicationController
  def create
    @review = Review.new(params).save
    station = params[:station_id]
    redirect_to station_path(station)
  end
end
