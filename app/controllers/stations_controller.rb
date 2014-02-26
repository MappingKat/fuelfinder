class StationsController < ApplicationController
  respond_to :json, :html

  def index
  end

  def show
    @station_id = params[:id]
    @station = StationFetcher.find(params[:id])
    # @reviews = ReviewFetcher.find(params[:id])

    respond_with @station
  end
end
