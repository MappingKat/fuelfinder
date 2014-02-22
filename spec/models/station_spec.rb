require 'spec_helper'

describe Station do
  describe "creation" do
    describe "with valid params" do
      it "is created", :vcr do
        params = {"name" => "Broadway Station" }
        response = Station.new(params).save
        expect(response[0].name).to eq("Broadway Station")
        # expect(response[0].content).to eq("All the pineapples")
      end
    end
  end
end
