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

ActiveRecord::Schema.define(version: 2019_05_14_110916) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "matches", force: :cascade do |t|
    t.datetime "made_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "matches_neighbors", id: false, force: :cascade do |t|
    t.bigint "match_id"
    t.bigint "neighbor_id"
    t.index ["match_id"], name: "index_matches_neighbors_on_match_id"
    t.index ["neighbor_id"], name: "index_matches_neighbors_on_neighbor_id"
  end

  create_table "neighbors", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "email"
    t.datetime "signed_up_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "token"
    t.boolean "subscribed"
  end

end
