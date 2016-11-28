Rails.application.routes.draw do
  # get 'dashboard/index'

  devise_for :users
  # root to: 'dashboard#index'
  root to: 'dashboard#index'
  resources :items, only: [:index]
  
	# root to: 'react_examples#component'
	# root to: 'settings#index'
  # get 'react_examples/component', to: 'react_examples#component', as: :component
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
