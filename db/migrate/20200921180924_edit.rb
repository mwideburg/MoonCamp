class Edit < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :zip
  end
end
