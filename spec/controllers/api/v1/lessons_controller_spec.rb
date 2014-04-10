require 'spec_helper'

describe Api::V1::LessonsController do

  describe 'GET requests' do
    it 'has a show route' do
      @lesson = FactoryGirl.create(:lesson)
      get :show, id: @lesson.id, format: :json
      assigns(:lesson).should eq(@lesson)
    end

    it 'has an index route' do
      @lessons = FactoryGirl.create_list(:lesson, 2)
      get :index
      assigns(:lessons).should eq(@lessons)
    end
  end

  describe 'POST requests' do
    it 'saves the model' do
      @lesson = FactoryGirl.attributes_for(:lesson)
      expect{post :create, lesson: @lesson, format: :json}.to change(Lesson, :count).by(1)
    end
  end

end