export default class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers = {}; 
        this.infoWindows = {}; 
        
    }

    updateMarkers(restaurants){
        let that = this;
        Object.values(restaurants).forEach(restaurant => {
            if (!that.markers[restaurant.id]){
                this.createMarkerFromRestaurant(restaurant)
            }
        })

        for (let key in this.markers) {
            if (!restaurants[key]) {
                this.removeMarker(this.markers[key]);
            }
        }
    }

    createMarkerFromRestaurant(restaurant){
            let myLatLng = new google.maps.LatLng(restaurant.latitude, restaurant.longitude);

            let meal_info = document.createElement('div'); 
            
            let food_pic_url = restaurant.lunch_url; 
            let food_pic = document.createElement('img'); 
            
            food_pic.src = food_pic_url; 

            meal_info.appendChild(food_pic); 
           
        let infoWindow = new google.maps.InfoWindow({
            content: meal_info
        });

        this.infoWindows[restaurant.id] = infoWindow; 
       
            let marker = new google.maps.Marker({
                id: restaurant.id,
                position: myLatLng,
                title: restaurant.name,
                map: this.map, 
                labelContent: restaurant.name, 
                labelClass: `marker-label-${restaurant.id}`
            })
            
            this.markers[restaurant.id] = marker;   
        
        

        let scope_info_windows = this.infoWindows; 
        debugger
        marker.addListener('click', function() {
            infoWindow.open(this.map, marker);
          
            for(let key in scope_info_windows){
                debugger
                if(key != marker.id){
                    scope_info_windows[key].close(); 
                }
            }
        });

        

    
       // marker.addListener('mouseout', () => this.handleHoverOff(marker));

        let lunchItem = document.getElementById(`lunch-${marker.id.toString()}`);

        if (lunchItem) {
            lunchItem.addEventListener('mouseover', () => marker.setAnimation(google.maps.Animation.BOUNCE));
            lunchItem.addEventListener('mouseout', () => marker.setAnimation(null));
        }

    }

    handleHoverOn(marker){
        let the_label = document.getElementsByClassName(`marker-label-${marker.id}`)[0];
        the_label.style.display = 'block'; 
        //infoWindow.open()
    }

    handleHoverOff(marker){
        let the_label = document.getElementsByClassName(`marker-label-${marker.id}`)[0];
        the_label.style.display = 'none'; 
    }

    

    removeMarker(marker){
        marker.setMap(null);
        delete this.markers[marker.id];
    }
    
}