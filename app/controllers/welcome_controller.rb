class WelcomeController < ApplicationController
  def index
    @neighbor = Neighbor.new
  end
end
