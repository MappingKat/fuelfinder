class Station

  attr_reader :name

  def initialize(json_response)
    station = json_response["fuel_stations"]
    @name = station["station_name"]
  end
end
