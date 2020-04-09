class Api::LunchesController < ApplicationController 
    def index
        @lunches = Lunch.in_bounds(params[:bounds])

    end 

end 

