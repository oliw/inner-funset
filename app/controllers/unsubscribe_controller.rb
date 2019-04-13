class UnsubscribeController < ApplicationController
  def perform
    neighbor_token = params.require(:token)
    neighbor = Neighbor.find_by_token(neighbor_token)
    neighbor.subscribed = false
    neighbor.save!
    UnsubscribeMailer.with(neighbor: neighbor).success.deliver_later
    render plain: "You have been unsubscribed"
  end
end
