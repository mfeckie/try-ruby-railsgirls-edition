TryRubyRailsgirls::Application.routes.draw do
  root :to => 'assets#index'
  get "assets/index"

  namespace 'api' do
    namespace 'v1' do
      get 'lessons/:id', to: 'lessons#show'
      post 'lessons', to: 'lessons#create'
      get 'lessons', to: 'lessons#index'
    end
  end

end
