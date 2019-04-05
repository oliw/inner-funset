class WelcomeController < ApplicationController
  def index
    @neighbor = Neighbor.new
  end

  def create
    @neighbor = Neighbor.new(neighbor_params)
    @neighbor.signed_up_at = Time.current
    @neighbor.save!
    flash[:notice] = "Thanks for signing up!"
    redirect_to :root
  end

  private

  def neighbor_params
    params.require(:neighbor).permit(:name, :email, :description)
  end
end
