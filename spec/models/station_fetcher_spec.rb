require 'spec_helper'

describe StationFetcher do
  describe "create", :vcr do
    it "returns station and status" do
      params = {"name" => "Broadway Station",
                "station_id" => "1"}
      review, status = Station.new(params).save
      expect(status).to eq(201)
    end
  end
end
