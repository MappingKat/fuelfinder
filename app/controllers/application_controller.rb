class ApplicationController < ActionController::Base
  # http_basic_authenticate_with name: "admin", password: "ENV_SET", only: :admin
  protect_from_forgery with: :exception

  after_filter :set_access_control_headers

  def set_access_control_headers
    headers['Access-Control-Allow-Origin'] = 'http://localhost:3000/' 
    headers['Access-Control-Request-Method'] = '*'
  end

end
