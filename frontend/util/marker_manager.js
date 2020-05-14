export default class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers = {}; 
        debugger
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

           
            let marker = new MarkerWithLabel({
                id: restaurant.id,
                position: myLatLng,
                title: restaurant.name,
                map: this.map, 
                labelContent: restaurant.name, 
                labelClass: `the-marker marker-label-${restaurant.id}`,
                labelVisible: false
                
            })
            // let marker = new google.maps.Marker({
            //     id: restaurant.id,
            //     position: myLatLng,
            //     title: restaurant.name,
            //     map: this.map, 
            //     labelContent: restaurant.name, 
            //     labelClass: `marker-label-${restaurant.id}`
            // })
            
            this.markers[restaurant.id] = marker;   
        debugger
        marker.addListener('mouseover', () => this.handleHoverOn(marker));
        marker.addListener('mouseout', () => this.handleHoverOff(marker));

        let lunchItem = document.getElementById(`lunch-${marker.id.toString()}`);

        if (lunchItem) {
            lunchItem.addEventListener('mouseover', () => marker.setAnimation(google.maps.Animation.BOUNCE));
            lunchItem.addEventListener('mouseout', () => marker.setAnimation(null));
        }

    }

    handleHoverOn(marker){
        let the_label = document.getElementsByClassName(`marker-label-${marker.id}`)[0];
        the_label.style.display = 'block'; 
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