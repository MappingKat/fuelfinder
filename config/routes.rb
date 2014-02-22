Frontend::Application.routes.draw do

  root 'stations#index'

  resources "stations", only: [:show, :index] do
    resources "reviews", only: [:create]
  end
end
