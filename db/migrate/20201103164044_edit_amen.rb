class EditAmen < ActiveRecord::Migration[5.2]
  def change
    add_column :amenities, :description, :string
  end
end
