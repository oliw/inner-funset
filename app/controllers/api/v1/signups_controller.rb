module Api
  module V1
    class SignupsController < BaseController
      def create
        @neighbor = Neighbor.new(neighbor_params)
        @neighbor.signed_up_at = Time.current
        @neighbor.token = SecureRandom.uuid
        @neighbor.subscribed = true
        @neighbor.save!
        WelcomeMailer.with(neighbor: @neighbor).welcome_email.deliver_later
        return {}
      end

      private

      def neighbor_params
        params.require(:neighbor).permit(:name, :email, :description)
      end
    end
  end
end
