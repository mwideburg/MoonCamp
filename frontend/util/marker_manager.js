import React from 'react';
import Spot from '../components/spots/spot_single_view'
export default class MarkerManager{
    constructor(map){
        this.map = map;
        // this.markers = {}
        this.state = {
            markers: {}
        }
        // this.handleClick = handleClick;
        this.updateMarker = this.updateMarker.bind(this)
        this.createMarkerFromSpot = this.createMarkerFromSpot.bind(this)
        this.removeMarker = this.removeMarker.bind(this)
    }

    updateMarker(obj){
        
        let spots = Object.values(obj);

        const spotObj = {};
        spots.forEach(spot => spotObj[spot.id] = spot);
        

        spots
            .filter(spot => !this.state.markers[spot.id])
            .forEach(newSpot => this.createMarkerFromSpot(newSpot))

        Object.keys(this.state.markers)
            .filter(spotId => !spotObj[spotId])
            .forEach((spotId) => this.removeMarker(this.state.markers[spotId]))
            
    }

    createMarkerFromSpot(spot){
        
        const contentString =
            '<div id="content">' +
            '<div >' +
            "</div>" +
             spot.title
             
            "</div>" +
            "</div>";
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });
        let myLatLng = {lat: Number(spot.lat), lng: Number(spot.lng)}
        const marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            title: spot.title,
            spotId: spot.id
        });
        marker.addListener("mouseover", () => {
            infowindow.open(this.map, marker);
            
        });
        marker.addListener("mouseout", () => {
            infowindow.close(this.map, marker);
        });
        marker.addListener("click", () => {
            infowindow.close(this.map, marker);
        });
        return this.state.markers[marker.spotId] = marker
        // return marker.setMap(this.map)
    }

    removeMarker(marker){
        
        this.state.markers[marker.spotId].setMap(null);
        delete this.state.markers[marker.spotId]
    }
}