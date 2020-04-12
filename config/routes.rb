Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope '/api' do
  get '/mazines/list' => 'magazines#list'
  post '/magazines/create' => 'magazines#create'
  post '/magazines/delete' => 'magazines#delete'
end

end
