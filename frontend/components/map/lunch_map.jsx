import React from 'react';
import MarkerManager from '../../util/marker_manager'

class LunchMap extends React.Component{
    constructor(props){
        super(props)
        this.initMap = this.initMap.bind(this);
    }

    initMap() {
        let burough;
        switch (this.props.location) {
            case "Manhattan":
                burough = { lat: 40.7831, lng: -73.9712 }
                break;
            case "Brooklyn":
                burough = { lat: 40.6782, lng: -73.9442 }
                break;
            case "Queens":
                burough = { lat: 40.7282, lng: -73.7949 }
                break;
            case "Bronx":
                burough = { lat: 40.8448, lng: -73.8648 }
                break;
            case "Staten Island":
                burough = { lat: 40.5795, lng: -74.1502 }
                break;
            default:
                burough = null;
        }
        const mapOptions = {
            center: burough,
            zoom: 13
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        
       
        
        this.MarkerManager = new MarkerManager(this.map);
        

    }

    componentDidMount() {
        this.initMap();
        this.registerListeners(); 
        this.MarkerManager.updateMarkers(this.props.restaurants);
        
    
    }

    registerListeners() {
        this.map.addListener('idle', () => {
            let latLongBnds = this.map.getBounds();
            let northEastLat = latLongBnds.getNorthEast().lat();
            let northEastLng = latLongBnds.getNorthEast().lng()
            let southWestLat = latLongBnds.getSouthWest().lat();
            let southWestLng = latLongBnds.getSouthWest().lng();



            let bounds = { southWest: { lat: southWestLat, lng: southWestLng }, northEast: { lat: northEastLat, lng: northEastLng } };
           
          
            this.props.updateFilter('bounds', bounds);
   
        })

        // let scope_windows = this.MarkerManager.infoWindows ;
        // this.map.addListener('click' , () => {
        //     for(let key in scope_windows){
        //         scope_windows[key].close();
        //     }
        // })
       
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      
        if (this.props.restaurants != prevProps.restaurants) {
           
            this.MarkerManager.updateMarkers(this.props.restaurants);
        }

    }

    componentWillUnmount(){
        this.MarkerManager.removeAllMarkers(); 
    }



    render() {
        
        return (
            <div className="map-sidebar">
            <div id="map-container" ref={map => this.mapNode = map}>

            </div>
            </div>

        )
    }
}

export default LunchMap