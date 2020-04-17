class Api::ReservationsController < ApplicationController 
    before_action :ensure_logged_in, only: [:create, :destroy]
    def show
        @reservation = Reservation.find(params[:id])
    end 

    def index
        @reservations = Reservation.reservations_for_current_user(current_user)
    end 

    def create
        @reservation = Reservation.new(reservation_params) #remember to pass up the current user ID when you you do this on frontend
        #debugger
       # debugger
        if @reservation.save
            #debugger
            #debugger 
            num = current_user.remaining_meals - 1
            current_user.update!(remaining_meals: num)
            render :show
            
        else  
           
            render json: @reservation.errors.full_messages, status: 401
        end 
    end 

    def destroy
        @reservation = Reservation.find(params[:id])
        if current_user.id == @reservation.diner_id
            @reservation.destroy 
            num = current_user.remaining_meals + 1
            current_user.update!(remaining_meals: num)
            render :show 
        end 

    end 


    private
    def reservation_params
        params.require(:reservation).permit(:diner_id, :lunch_id) #Look in phone notes for the feature 
    end 
end 