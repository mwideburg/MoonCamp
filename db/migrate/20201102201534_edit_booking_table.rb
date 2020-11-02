class EditBookingTable < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :total, :integer
    
  end
end
