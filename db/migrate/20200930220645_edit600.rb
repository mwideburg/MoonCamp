class Edit600 < ActiveRecord::Migration[5.2]
  def change
    rename_column :spot_activities, :amenity_id, :activity_id
  end
end
