class StationFetcher

  def self.connection
    Faraday.new("http://developer.nrel.gov") do |faraday|
      faraday.request  :url_encoded
      faraday.response :logger
      faraday.adapter  Faraday.default_adapter
    end
  end

  def self.find(id)
    response = connection.get "/api/alt-fuel-stations/v1/nearest.json?api_key=DEMO_KEY"
    station.new(JSON.parse(response.body))
  end
end


# http://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=GOMRjS7IKgQCRujXnzJuEWpTEdnzlQgp3s2ZlI9B
# KigYxE5IUwsFlhOF3hjkpR8J0bx8sSTw8r5vfyYx
# /api/alt-fuel-stations/v1/#{id}.json/api_key=KigYxE5IUwsFlhOF3hjkpR8J0bx8sSTw8r5vfyYx"
