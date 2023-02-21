class Rentals < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :spot_id, null: false
      t.date :end_date, null: false
      t.date :start_date, null: false
      t.string :status, null: false

      t.datetime :updated_at, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :bookings, :spot_id
    add_index :bookings, :user_id
  end
end
