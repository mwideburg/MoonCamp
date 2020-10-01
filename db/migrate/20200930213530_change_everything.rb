class ChangeEverything < ActiveRecord::Migration[5.2]
  def change
    change_table :filters do |t|
      t.remove :activity_id
    end
    rename_table :filters, :spot_activities

    create_table :spot_amenities do |t|
      t.integer :amenity_id
      t.integer :spot_id
    end
  end
end
