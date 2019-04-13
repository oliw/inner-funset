class AddSubscribedToNeighbor < ActiveRecord::Migration[5.2]
  def change
    add_column :neighbors, :subscribed, :boolean
  end
end
