require 'spec_helper'

describe StationFetcher do
  describe "create", :vcr do
    it "returns station and status" do
      params = { "alt_fuel_station" =>
          {
            "station_name" => "Broadway Station",
                "id" => "53943"} }
      station = Station.new(params)
      stations = StationFetcher.find(53943)
      expect(status).to eq(201)
    end
  end
end
