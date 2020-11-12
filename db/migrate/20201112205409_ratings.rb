class Ratings < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :rating, :integer
    add_column :spots, :num_reviews, :integer
  end
end
