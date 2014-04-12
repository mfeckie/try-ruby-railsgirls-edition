TryRubyRailsgirls::Application.routes.draw do
  root :to => 'assets#index'
  get "assets/index"

  namespace 'api' do
    namespace 'v1' do
      resources :lessons, only: [:show, :create, :index, :update]
    end
  end

end
