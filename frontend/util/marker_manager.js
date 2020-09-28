

export default class MarkerManager{
    constructor(map){
        this.map = map;
        this.markers = {}
        this.state = {
            markers: {}
        }
        this.updateMarker = this.updateMarker.bind(this)
        this.createMarkerFromSpot = this.createMarkerFromSpot.bind(this)
    }

    updateMarker(spots){
        console.log("time to update");
        const moonSpots = Object.values(spots);
        let markers = this.markers
        let createMarkerFromSpot = this.createMarkerFromSpot
        debugger
        moonSpots.forEach(spot =>
            
            createMarkerFromSpot(spot)
        )
    }

    createMarkerFromSpot(spot){
        debugger
        let myLatLng = {lat: Number(spot.lat), lng: Number(spot.lng)}
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            title: spot.title
        });
        return marker.setMap(this.map)
    }
}