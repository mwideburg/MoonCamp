class Reviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :spot_id, null: false
      t.integer :user_id, null: false
      t.text  :content, null: false
      t.timestamps
    end
    create_table :saves do |t|
      t.integer :spot_id, null: false
      t.integer :user_id, null: false
      t.boolean  :liked, default: false
      t.timestamps
    end
    add_index :reviews, :spot_id
    add_index :reviews, :user_id
    add_index :saves, :spot_id
    add_index :saves, :user_id
    
  end
  
end
