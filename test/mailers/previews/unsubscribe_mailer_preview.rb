# Preview all emails at http://localhost:3000/rails/mailers/unsubscribe_mailer
class UnsubscribeMailerPreview < ActionMailer::Preview
  def success
   UnsubscribeMailer.with(neighbor: dummy_neighbor).success
  end

  private

  def dummy_neighbor
    Neighbor.new(name: "Oli", token: SecureRandom.uuid, email: "oli@wilkie.com", description: "Hi there!", signed_up_at: Time.current)
  end
end
