class StationsController < ApplicationController
  def index
  end

  def show
    @station_id = params[:id]
    @station = StationFetcher.find(params[:id])
    @stations = Station.all
    # @reviews = ReviewFetcher.find(params[:id])
  end
end
