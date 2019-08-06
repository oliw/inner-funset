class MatchMailer < ApplicationMailer
  default from: 'match@innerfunset.com'

  def match
    @match = params[:match]
    @neighbor = params[:neighbor]
    @names = @match.neighbors.map(&:name).join(', ')
    reply_to = "match-#{@match.id}@innerfunset.com"
    mail(to: @neighbor.email, subject: 'Its an Inner Sunset Match!', reply_to: reply_to)
  end

  def forwarder
    @match = params[:match]
    @neighbor = params[:neighbor]
    @body = params[:body]
    reply_to = "match-#{@match.id}@innerfunset.com"
    mail(to: @neighbor.email, subject: 'Its an Inner Sunset Match!', reply_to: reply_to)
  end
end
