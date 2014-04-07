class CreateLessons < ActiveRecord::Migration
  def change
    create_table :lessons do |t|
      t.integer :lesson_number
      t.string :title
      t.string :body
      t.string :initial_code

      t.timestamps
    end
  end
end
