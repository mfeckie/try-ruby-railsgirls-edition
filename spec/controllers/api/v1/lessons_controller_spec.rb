require 'spec_helper'

describe Api::V1::LessonsController do

  describe 'GET requests' do
    it 'has a show route' do
      @lesson = FactoryGirl.create(:lesson)
      get :show, id: @lesson.id, format: :json
      assigns(:lesson).should eq(@lesson)
    end
  end

  describe 'POST requests' do
    it 'saves the model' do
      @lesson = FactoryGirl.attributes_for(:lesson)
      expect{post :create, lesson: @lesson, format: :json}.to change(Lesson, :count).by(1)
    end
  end

end