class Api::LunchesController < ApplicationController 
    def index
        
        #debugger

        
        # if params[:search]
            
        #     @lunches = Lunch.joins(:restaurant).search(params[:search][:query])
           
        #else
            @lunches = Lunch.all
        #end

    end 

end 

