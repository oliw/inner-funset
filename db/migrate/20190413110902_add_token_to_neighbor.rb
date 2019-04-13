class AddTokenToNeighbor < ActiveRecord::Migration[5.2]
  def change
    add_column :neighbors, :token, :string
  end
end
