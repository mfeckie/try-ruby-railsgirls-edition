# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :lesson do
    lesson_number 1
    lesson_title 'The first lesson'
    lesson_body 'The body of the lesson'
    lesson_code 'puts "Hello World!"'
  end
end
