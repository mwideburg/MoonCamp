class ChangeTable < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :host_id, :integer
  end
end
