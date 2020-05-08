class Api::RestaurantsController < ApplicationController 

    def index
       
        if params[:search]

            @restaurants = Restaurant.in_bounds(params[:bounds]).joins(:lunches).search(params[:search][:query])

        else 
            @restaurants = Restaurant.in_bounds(params[:bounds])
        end 
    end 

end 