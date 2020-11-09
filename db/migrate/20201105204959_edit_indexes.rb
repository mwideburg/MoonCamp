class EditIndexes < ActiveRecord::Migration[5.2]
  def change
    add_index :spot_amenities, :spot_id
    add_index :spot_amenities, :amenity_id
  end
end
