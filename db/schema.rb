# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_06_220054) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "activities", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.string "icon"
  end

  create_table "amenities", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "description"
  end

  create_table "bookings", force: :cascade do |t|
    t.integer "spot_id", null: false
    t.date "end_date", null: false
    t.date "start_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id", null: false
    t.integer "host_id"
    t.integer "total"
    t.integer "guests"
    t.index ["spot_id"], name: "index_bookings_on_spot_id"
    t.index ["user_id"], name: "index_bookings_on_user_id"
  end

  create_table "posts", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "title"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "spot_id", null: false
    t.integer "user_id", null: false
    t.text "content", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "rating"
    t.index ["spot_id"], name: "index_reviews_on_spot_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "saves", force: :cascade do |t|
    t.integer "spot_id", null: false
    t.integer "user_id", null: false
    t.boolean "liked", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["spot_id"], name: "index_saves_on_spot_id"
    t.index ["user_id"], name: "index_saves_on_user_id"
  end

  create_table "spot_activities", force: :cascade do |t|
    t.integer "spot_id"
    t.integer "activity_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "spot_amenities", force: :cascade do |t|
    t.integer "amenity_id"
    t.integer "spot_id"
    t.index ["amenity_id"], name: "index_spot_amenities_on_amenity_id"
    t.index ["spot_id"], name: "index_spot_amenities_on_spot_id"
  end

  create_table "spots", force: :cascade do |t|
    t.integer "host_id", null: false
    t.integer "price", null: false
    t.string "title", null: false
    t.string "moon", null: false
    t.string "planet", null: false
    t.string "description", null: false
    t.float "lng", null: false
    t.float "lat", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "max_guests"
    t.index ["host_id"], name: "index_spots_on_host_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "lastname", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "firstname"
    t.integer "zipcode"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
