require 'spec_helper'

describe Api::V1::LessonsController do
  it 'has a show route' do
    @lesson = FactoryGirl.create(:lesson)
    get :show, id: @lesson.id, format: :json
    assigns(:lesson).should eq(@lesson)
  end
end