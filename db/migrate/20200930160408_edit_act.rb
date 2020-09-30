class EditAct < ActiveRecord::Migration[5.2]
  def change
    add_column :activities, :spot_id, :integer
    add_index :activities, :spot_id
    add_column :amenities, :spot_id, :integer
    add_index :amenities, :spot_id
  end
end
