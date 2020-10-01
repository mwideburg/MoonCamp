class EditSpots < ActiveRecord::Migration[5.2]
  def change
    remove_column :amenities, :spot_id
    remove_column :activities, :spot_id

  end
end
