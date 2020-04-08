class Api::UsersController < ApplicationController 
    skip_before_action :verify_authenticity_token

    def show
        @user = User.find(params[:id])
        render :show
    end
    


    def create
        @user = User.new(user_params)
        #@users = User.all 
        if @user.save
            login!(@user)
            render :show 
        else  
            render json: @user.errors.full_messages, status: 401
            
        end 
    end 


    private 
    def user_params
        params.require(:user).permit(:email, :password, :location)
    end 

end 