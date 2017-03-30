Rails.application.routes.draw do
  # root 'task#index'
 scope "/api" do
 scope "/v1" do
   scope "/tasks" do
     get "/" => "task#all"
   end
  end
 end
 root :to => "task#index"
 get "*unmatched_route" => "task#index"

 get "scrap" => "task#scrap"

end
