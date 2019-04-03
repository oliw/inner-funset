class KeepAliveWorker
  include Sidekiq::Worker
  def perform
    Faraday.get 'http://inner-funset.herokuapp.com'
  end
end