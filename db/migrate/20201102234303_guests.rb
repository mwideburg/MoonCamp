class Guests < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :guests, :integer
  end
end
