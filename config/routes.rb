Rails.application.routes.draw do
  # get 'react_examples/component', to: 'react_examples#component', as: :component
  # get 'dashboard/index'

  devise_for :users
  root :to => redirect('/dashboard')
  # root to: 'dashboard#index'
  resources :dashboard, path: "/dashboard", only: [:index] do
    collection do
      resources :items, only: [:index] do
        get :library, on: :collection
        get :modifier, on: :collection
        get :category, on: :collection
      end
    end
  end

  
  
  
	# root to: 'react_examples#component'
	# root to: 'settings#index'
  # get 'react_examples/component', to: 'react_examples#component', as: :component
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
