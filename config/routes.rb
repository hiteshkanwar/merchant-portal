Rails.application.routes.draw do
  devise_for :users
	root to: 'react_examples#component'
  # get 'react_examples/component', to: 'react_examples#component', as: :component
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
