class Api::SessionsController < ApplicationController 
    skip_before_action :verify_authenticity_token

    def new
        render :new 
    end 

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        #debugger
        if @user 
            login!(@user)
            render 'api/users/show'
        else 
            #debugger
            render json: ["Invalid username or password"], status: 404
          
        end 
    end 
    
    def destroy
        if !current_user
            render json: ['No current user'], status: 404
        else
            if logout!
                render json: {}
            end
        end
    end 

end 