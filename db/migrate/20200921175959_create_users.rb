class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :fistname, null: false
      t.string :lastname, null: false
      t.string :email, null: false
      t.integer :zip, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end

    add_index :users, :session_token
    add_index :users, :email, unique: true
  end
end
