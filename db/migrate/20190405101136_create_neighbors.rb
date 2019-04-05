class CreateNeighbors < ActiveRecord::Migration[5.2]
  def change
    create_table :neighbors do |t|
      t.string :name
      t.string :description
      t.string :email
      t.datetime :signed_up_at
      t.timestamps
    end
  end
end
