NewAuthDemo::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resources :gists, :only => [:index] do
  	resource :favorite, :only => [:create, :destroy]
  end

  resource :session, :only => [:create, :destroy, :new]
  resource :favorites, :only => [:index]

  root :to => "root#root"
end
