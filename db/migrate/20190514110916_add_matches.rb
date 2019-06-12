class AddMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.datetime :made_at
      t.timestamps
    end
 
    create_table :matches_neighbors, id: false do |t|
      t.belongs_to :match, index: true
      t.belongs_to :neighbor, index: true
    end
  end
end
