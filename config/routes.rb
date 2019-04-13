require 'sidekiq/web'

Rails.application.routes.draw do
  root 'welcome#index'

  resources :welcome, only: %i(show create)

  get '/unsubscribe/:token', to: 'unsubscribe#perform', as: 'unsubscribe'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount Sidekiq::Web => '/sidekiq'

  # mount using default path: /email_processor
  mount_griddler
end
