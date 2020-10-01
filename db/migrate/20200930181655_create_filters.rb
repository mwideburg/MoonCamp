class CreateFilters < ActiveRecord::Migration[5.2]
  def change
    create_table :filters do |t|
      t.integer :spot_id
      t.integer :activity_id
      t.integer :amenity_id
      t.timestamps
    end
  end
end
