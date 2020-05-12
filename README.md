![LunchBudLogo](https://github.com/jchen143/lunch-buddy/blob/master/app/assets/images/logo_red.svg)

[LunchBud](https://lunchbud.herokuapp.com/#/), a clone of [MealPal](https://mealpal.com/), is a subscription-based service where users get access to a bevy of lunchtime meal options from participating restaurants. It is built with Ruby on Rails, a PostgreSQL Database, Javascript, React, and Redux.

## Technologies Used: 
* Ruby
* Ruby on Rails 
* PostgreSQl 
* React 
* Redux 
* Google Maps API 
* AJAX
* CSS 
* Heroku

## Notable Features and Challenges: 

### Filtered search within map bounds: 
A user can search for meals based on keywords that match a meal's name, description, or restaurant name. However, the search is limited only to restaurants that are currently in bounds on the map. 

In order to achieve this functionality, LunchBud stores the current bounds of the map in a slice of state, and passes that information along with every search query. 

```Ruby
#Restaurants Controller 
def index
       
       if params[:search]
              @restaurants = Restaurant.in_bounds(params[:bounds]).joins(:lunches).search(params[:search][:query])
       else 
              @restaurants = Restaurant.in_bounds(params[:bounds])
       end 
end 
```
Here, in_bounds refers to a custom class method in the Restaurant model that takes in a bounds object from our Google Maps object and filters our list of restaurants to those within the latitude/longitudinal limits: 

```Ruby
# Restaurant Model
def self.in_bounds(bounds)
     
        min_lat = bounds["southWest"]["lat"].to_f
        max_lat = bounds["northEast"]["lat"].to_f
        min_long= bounds["southWest"]["lng"].to_f
        max_long = bounds["northEast"]["lng"].to_f
           
        in_bounds_restaurants = self.where("(latitude > ? AND latitude < ?) AND (longitude > ? AND longitude < ?)" , min_lat, max_lat, min_long, max_long)
  
        return in_bounds_restaurants 
end

```

### Custom one-per-day validation: 
A user is only allowed to reserve a meal once per day. In order to prevent conflicting reservations, I wrote a custom validation in the Reservation model: 
 ``` Ruby
 #Reservation Model
 def ensure_one_per_day
        user = User.find(diner_id)

        if !(user.reservations.empty? || Time.now.utc.strftime("%A, %d/%m/%Y") != user.reservations.last.created_at.strftime("%A, %d/%m/%Y"))
            errors.add(:daily_limit, "You can only reserve one meal per day ")
        end 
end 
```
On the frontend, I was able to use the custom error message to display the illegal request to the user, but give them the option to continue on with their new reservation and cancel their old one: 
![Cancel](https://github.com/jchen143/lunch-buddy/blob/master/app/assets/images/cancel_modal.JPG)

To accomplish this, I added a click handler to the modal button you see above (temp_lunch_id refers to the new lunch the user is trying to reserve). Once the user confirms cancellation of his/her old reservation, the new reservation is executed as a part of the success callback of the cancellation action: 

``` Javascript
//Unsuccessful Reservation Modal Component 
handleClick(e){
        let res_id = parseInt(this.props.reservationId);
        let current_user_id = parseInt(this.props.currentUserId); 
        let temp_lunch_id = parseInt(this.props.tempLunchId)

        this.props.cancelReservation(res_id).then(() => this.props.createReservation({ diner_id: current_user_id, lunch_id: temp_lunch_id }).then(() => this.props.openModal('successful_reservation')))
        
        this.props.closeModal()
}

```

## Future Direction: 
* Filter by size
* My account page showing meals left in your subscription plan
* Lunch index item shows on hover over map marker
* Map marker pops out when hovering over a lunch index item
* Favoriting system 





