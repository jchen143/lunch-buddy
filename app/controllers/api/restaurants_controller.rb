class Api::RestaurantsController < ApplicationController 

    def index
        #debugger

        @restaurants = Restaurant.in_bounds(params[:bounds])
    end 

end 