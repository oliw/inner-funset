class UnsubscribeMailer < ApplicationMailer
  def success
    @neighbor = params[:neighbor]
    mail(to: @neighbor.email, subject: 'You have been unsubscribed')
  end
end
