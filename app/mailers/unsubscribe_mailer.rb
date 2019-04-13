class UnsubscribeMailer < ApplicationMailer
  default from: 'no-reply@inner-funset.com'
  
  def success
    @neighbor = params[:neighbor]
    mail(to: @neighbor.email, subject: 'You have been unsubscribed')
  end
end
