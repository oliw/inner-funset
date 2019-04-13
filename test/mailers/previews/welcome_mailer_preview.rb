# Preview all emails at http://localhost:3000/rails/mailers/welcome_mailer
class WelcomeMailerPreview < ActionMailer::Preview
  def welcome_email
    WelcomeMailer.with(neighbor: dummy_neighbor).welcome_email
  end

  private

  def dummy_neighbor
    Neighbor.new(name: "Oli", email: "oli@wilkie.com", token: SecureRandom.uuid, description: "Hi there!", signed_up_at: Time.current)
  end
end
