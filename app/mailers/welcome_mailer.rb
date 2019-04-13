class WelcomeMailer < ApplicationMailer
  default from: 'no-reply@inner-funset.com'

  def welcome_email
    @neighbor = params[:neighbor]
    mail(to: @neighbor.email, subject: 'Welcome to My Awesome Site')
  end
end
