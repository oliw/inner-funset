# Preview all emails at http://localhost:3000/rails/mailers/welcome_mailer
class MatchMailerPreview < ActionMailer::Preview
  def match_email
    MatchMailer.with(neighbor: dummy_neighbor, match: dummy_match, body: "Hey guys great to meet you").forwarder
  end

  private

  def dummy_neighbor
    @dummy_neighbor ||= Neighbor.new(id: 1, name: "Oli", email: "oli@wilkie.com", token: SecureRandom.uuid, description: "Hi there!", signed_up_at: Time.current)
  end

  def dummy_neighbor2
    @dummy_neighbor2 ||= Neighbor.new(id: 2, name: "Ting", email: "ting@chen.com", token: SecureRandom.uuid, description: "Hi there!", signed_up_at: Time.current)
  end

  def dummy_match
    Match.new(id:1, neighbors: [dummy_neighbor, dummy_neighbor2])
  end
end
