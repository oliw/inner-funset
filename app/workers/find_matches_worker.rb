class FindMatchesWorker
  include Sidekiq::Worker
  
  GROUP_SIZE = 3
  MATCH_PERIOD = 30.days
  
  def perform
   neighbors = Neighbor.where(subscribed: true)
   neighbors = neighbors.select do |neighbor|
    !neighbor.matches.where("made_at > ?", MATCH_PERIOD.ago).exists?
   end
   neighbors = neighbors.take((neighbors.length / GROUP_SIZE) * GROUP_SIZE)
   neighbors.shuffle!
   neighbors.each_slice(GROUP_SIZE) do |matched_neighbors|
    match = Match.new(made_at: Time.current)
    matched_neighbors.each do |neighbor|
      match.neighbors << neighbor
    end
    match.save!
    match.neighbors.each do |neighbor|
      MatchMailer.with(match: match, neighbor: neighbor).match.deliver_now
    end
   end
  end
end