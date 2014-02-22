class StationFetcher

  def self.connection
    Faraday.new("https://developer.nrel.gov/api/alt-fuel-stations/v1") do |faraday|
      faraday.request  :url_encoded
      faraday.response :logger
      faraday.adapter  Faraday.default_adapter
    end
  end

  def self.find(id)
    response = connection.get "/#{id}.json?api_key=GOMRjS7IKgQCRujXnzJuEWpTEdnzlQgp3s2ZlI9B"
    Station.new(JSON.parse(response.body))
    binding.pry
  end
