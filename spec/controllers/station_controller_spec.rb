require 'spec_helper'

describe StationsController do
  describe 'GET index' do 
    it 'renders the index template' do
      get :index
      expect(response.status).to eq 200
    end
  end
end

