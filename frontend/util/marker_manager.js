export default class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers = {}; 

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
            //debugger
            let myLatLng = new google.maps.LatLng(restaurant.latitude, restaurant.longitude);
            let marker = new google.maps.Marker({
                id: restaurant.id,
                position: myLatLng,
                title: restaurant.name,
                map: this.map
            })
            //marker.setMap(this.map)
            this.markers[restaurant.id] = marker;   
        
    }

    removeMarker(marker){
        marker.setMap(null);
        delete this.markers[marker.id];
    }
    
}