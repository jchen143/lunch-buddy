class Api::LunchesController < ApplicationController 
    def index
        debugger
        
        if params[:search]
            debugger
            @lunches = Lunch.joins(:restaurant).search(params[:search][:query])
            debugger
        else
            @lunches = Lunch.all
        end

    end 

end 

