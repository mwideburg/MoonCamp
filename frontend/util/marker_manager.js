import React from 'react';
import Spot from '../components/spots/spot_single_view'
export default class MarkerManager{
    constructor(map){
        this.map = map;
        // this.markers = {}
        this.state = {
            markers: {}
        }
        this.updateMarker = this.updateMarker.bind(this)
        this.createMarkerFromSpot = this.createMarkerFromSpot.bind(this)
        this.removeMarker = this.removeMarker.bind(this)
    }

    updateMarker(spots){
        console.log("time to update");
        const moonSpots = Object.values(spots);
        let markers = this.markers
        let createMarkerFromSpot = this.createMarkerFromSpot
        // debugger
        
        moonSpots.forEach(spot =>{
            createMarkerFromSpot(spot)
        })
        let removeMarker = this.removeMarker
        Object.values(this.state.markers).map(mark => {
                spots[mark.id] ? "" : removeMarker(mark)
            })
            
    }

    createMarkerFromSpot(spot){
        // debugger
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
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            title: spot.title
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
        return this.state.markers[spot.id] = spot
        // return marker.setMap(this.map)
    }

    removeMarker(marker){
       delete this.state.markers[marker.id]
    }
}