class Station

  attr_reader :name, :address, :payment_types

  def initialize(json_response)
    station = json_response["station"]
    @name = station["name"]
    # @address = station["address"]
    # @payment_types = station["payment_types"].each do |type|
    #   PaymentType.new(type)
    end
  end
end
