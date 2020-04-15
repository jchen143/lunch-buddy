class Api::LunchesController < ApplicationController 
    def index
         
        @lunches = Lunch.all

    end 

end 

