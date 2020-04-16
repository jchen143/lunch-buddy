class Api::RestaurantsController < ApplicationController 

    def index
        #debugger
        if params[:search]
            #debugger
            @restaurants = Restaurant.in_bounds(params[:bounds]).joins(:lunches).search(params[:search][:query])
            #debugger

        else 
            #debugger
            @restaurants = Restaurant.in_bounds(params[:bounds])
        end 
    end 

end 