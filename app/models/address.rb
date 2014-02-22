class Address
  attr_reader :street, :city, :state, :zipcode, :lat, :lng, :description

  def initialize(station_address)
    @street = station_address["street"]
    @city = station_address["city"]
    @state = station_address["state"]
    @zipcode = station_address["zipcode"]
    @lat = station_address["lat"]
    @lng = station_address["long"]
    @description = station_address["description"]
  end


end
