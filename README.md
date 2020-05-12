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

### Custom one-per-day validation: 
A user is only allowed to reserve a meal once per day. In order to prevent conflicting reservations, I wrote a custom validation in the reservation model: 
 ``` Ruby
 def ensure_one_per_day
        user = User.find(diner_id)

        if !(user.reservations.empty? || Time.now.utc.strftime("%A, %d/%m/%Y") != user.reservations.last.created_at.strftime("%A, %d/%m/%Y"))
            errors.add(:daily_limit, "You can only reserve one meal per day ")
        end 


    end 
```

### Lunch Index change upon moving map

## Future Direction: 
* Filter by size
* My account page showing meals left in your subscription plan
* Lunch index item shows on hover over map marker
* Map marker pops out when hovering over a lunch index item
* Favoriting system 





