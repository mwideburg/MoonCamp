class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.integer :host_id, null: false
      t.integer :price, null: false
      t.string :title, null: false
      t.string :moon, null: false
      t.string :planet, null: false
      t.string :description, null: false
      t.float :lng, null: false
      t.float :lat, null: false
      t.timestamps
    end

    add_index :spots, :host_id
    
    

  end
end
