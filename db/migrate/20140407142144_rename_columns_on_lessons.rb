class RenameColumnsOnLessons < ActiveRecord::Migration
  def change
    rename_column :lessons, :body, :lesson_body
    rename_column :lessons, :title, :lesson_title
    rename_column :lessons, :initial_code, :lesson_code
  end
end
