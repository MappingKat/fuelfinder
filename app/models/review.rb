class Review
  attr_reader :name, :email, :title, :content, :station_id

  def initialize(params)
    @name = params["name"]
    @email = params["email"]
    @title = params["title"]
    @content = params["content"]
    @market_id = params["station_id"]
  end

  def save
    ReviewFetcher.create(self)
  end

end
