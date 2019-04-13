# https://stackoverflow.com/questions/17775264/rails-url-helpers-not-working-in-mailers
include Rails.application.routes.url_helpers

class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'
end
