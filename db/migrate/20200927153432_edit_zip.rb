class EditZip < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :zip_code, :integer
    add_column :users, :zipcode, :integer
  end
end
