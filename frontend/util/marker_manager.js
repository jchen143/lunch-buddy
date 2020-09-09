//import {createReservation} from '../actions/reservation_actions'

export default class MarkerManager {

    constructor(map){
        this.map = map;
        this.markers = {}; 
        this.infoWindows = {}; 
        this.red_icon = { url: window.red_map_icon, size: new google.maps.Size(10, 10)}; 
        this.blue_icon = {url: window.blue_map_icon, size: new google.maps.Size(10,10)};
        this.removeAllMarkers = this.removeAllMarkers.bind(this); 
    
        
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

       
       
            let marker = new google.maps.Marker({
                id: restaurant.id,
                position: myLatLng,
                title: restaurant.name,
                map: this.map, 
                labelContent: restaurant.name, 
                labelClass: `marker-label-${restaurant.id}`,
                //icon: this.red_icon
            })
            
          
            this.markers[restaurant.id] = marker;   
        
   

        let lunchItem = document.getElementById(`lunch-${marker.id.toString()}`);

        if (lunchItem) {
      
            lunchItem.addEventListener('mouseover', () => marker.setAnimation(google.maps.Animation.BOUNCE));
            lunchItem.addEventListener('mouseout', () => marker.setAnimation(null));
        }

    }
    

    removeMarker(marker){
        marker.setMap(null);
        delete this.markers[marker.id];
    }

    removeAllMarkers(){
        for(let key in this.markers){
            this.removeMarker(this.markers[key])
        }
    }
   
    
}
