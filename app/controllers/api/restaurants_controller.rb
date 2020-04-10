class Api::RestaurantsController < ApplicationController 

    def index
        @restaurants = Restaurant.in_bounds(params[:bounds])
    end 

end 