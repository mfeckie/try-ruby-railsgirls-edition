# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :lesson do
    lesson_number 1
    title 'The first lesson'
    body 'The body of the lesson'
    initial_code 'puts "Hello World!"'
  end
end
