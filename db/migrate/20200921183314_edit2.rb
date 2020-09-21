class Edit2 < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :fistname
    add_column :users, :firstname, :string
  end
end
