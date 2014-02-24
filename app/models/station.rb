class Station
  attr_reader :name, :fuel_type, 
              :open, :payment, 
              :phone_number, :street, 
              :city, :state,
              :zipcode, :location,
              :longitude, :latitude

  def initialize(json_response)
    station_response = json_response["alt_fuel_station"]
    @id = station_response["id"]
    @name = station_response["station_name"]
    @fuel_type = station_response[ "fuel_type_code"]
    @open = station_response["access_days_time"]
    @payment = station_response["cards_accepted"]
    @phone_number = station_response["station_phone"]
    @street = station_response["street_address"]
    @location = station_response["intersection_directions"]
    @city = station_response["city"]
    @state = station_response["state"]
    @zipcode = station_response["zipcode"]
    @longitude = station_response["longitude"]
    @latitude = station_response["latitude"]
  end
end
