class Api::V1::LessonsController < ApplicationController
  before_action :set_lesson, only: [:show, :update]

  def index
    render json: @lessons = Lesson.all
  end

  def show
    render json: @lesson
  end

  def create
    @lesson = Lesson.new(lesson_params)
    if @lesson.save
      render json: @lesson
    else
      render json: @lesson.errors, status: 422
    end
  end

  def update
    if @lesson.update(lesson_params)
      render json: @lesson
    else
      render json: @lesson.errors, status: 422
    end

  end

end

private

def set_lesson
  @lesson = Lesson.find(params[:id])
end

def lesson_params
  params.require(:lesson).permit(:lesson_number, :lesson_title, :lesson_body, :lesson_code)
end