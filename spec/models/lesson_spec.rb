require 'spec_helper'

describe Lesson do
  let(:lesson) { FactoryGirl.build_stubbed(:lesson) }

  it { should respond_to :lesson_number }
  it { should respond_to :lesson_title }
  it { should respond_to :lesson_body }
  it { should respond_to :lesson_code }


end
