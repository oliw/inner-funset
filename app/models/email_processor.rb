class EmailProcessor

  def initialize(email)
    @email = email
  end

  def process
    Rails.logger.info "Email received!"
    from = @email.from[:email]
    to = @email.to[0][:email]
    body = @email.body
    neighbor = Neighbor.find_by_email(from)
    return if neighbor.blank?
    regex_matches = /match-(.*)@.*/i.match(to)
    return if regex_matches.blank?
    match_id = regex_matches.captures[0].to_i
    match = Match.joins(:neighbors).where(neighbors: {id: neighbor.id}).find_by(id: match_id)
    return if match.blank?

    other_neighbors = match.neighbors.select do |other_neighbor|
      other_neighbor.id != neighbor.id
    end

    other_neighbors.each do |other_neighbor|
      MatchMailer.with(match: match, neighbor: other_neighbor, body: body).forwarder.deliver_now
    end
  end
end