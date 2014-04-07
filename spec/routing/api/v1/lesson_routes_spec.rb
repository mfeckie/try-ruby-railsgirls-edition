require 'spec_helper'

describe Api::V1::LessonsController do

  it 'returns an individual lesson' do
    expect(get '/api/v1/lessons/1').to route_to('api/v1/lessons#show', id: "1")
  end

end
