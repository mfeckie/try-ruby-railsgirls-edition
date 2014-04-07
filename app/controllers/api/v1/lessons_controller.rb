class Api::V1::LessonsController < ApplicationController
  before_action :set_lesson, only: [:show]


  def show
    render json: @lesson
  end

end

private

def set_lesson
  @lesson = Lesson.find(params[:id])
end