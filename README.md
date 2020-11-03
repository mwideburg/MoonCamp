# MoonCamp

[MoonCamp](https://mooncamp.herokuapp.com/#/ "MoonCamp Homepage") is the only site in the universe to book and host spots on the moons of our eathlings' Solar System. Want to explore Titan, Europa, or maybe stay close to home on our moon, MoonCamp is the app for you.




![image](https://user-images.githubusercontent.com/67881422/94927800-c44b4100-0490-11eb-9e7f-177eaa5ddad8.png)




## Moon Maps

One of the fun aspects of moon camp is using Google Maps imageType to map out different surfaces of planets using Nasa's open source satelite images. By utilizing google maps api, moon camp can normalize the longitudes and latitudes of the and imgaeType, making it easy to plot markers for different moon sites to rent out, all with live updates depending on the bounds of the map.


![](map_update.gif)


```javascript
this.map.addListener('bounds_changed', function () {
            // grab the bounds from map
            let northeast = this.getBounds().getNorthEast();
            let southwest = this.getBounds().getSouthWest();

            let bounds = this.getBounds()

            let lat = bounds.getNorthEast().lat();
            let lat2 = bounds.getSouthWest().lat();
            let lng = bounds.getNorthEast().lng();
            let lng2 = bounds.getSouthWest().lng();

            let positions = { bounds: { lat: [lat, lat2], lng: [lng, lng2] } }

            
            // call action to send ajax request and recieve spot with in the bounds
            updateSpots(positions)
        })


```


```javascript
const moonMapType = new google.maps.ImageMapType({
            // retrieve the image to be mapped to tiles, and normalize the cordinates
            getTileUrl: function (coord, zoom) {
                return getHorizontallyRepeatingTileUrl(coord, zoom, function (coord, zoom) {
                    return getMarsTileUrl("http://mw1.google.com/mw-planetary/mars/elevation/", coord, zoom);
                });
            },
            tileSize: new google.maps.Size(256, 256),
            isPng: false,
            maxZoom: 8,
            radius: 3396200,
            name: 'Titan',
            credit: 'Image Credit: NASA/JPL/GSFC'
        });
```


## Auth and Persisting State

MoonCamp uses rails authentication and keep user information safe by utilizing a ByCrypt hashing, a password will always be safe. By doing so we ensure our database is safe and can retirieve a users information quickly and sercurly. MoonCamp also has persisting state, so on refresh a user will no be logged out.


## Creative Modals

MoonCamps top priority is to make an app that is beautiful and quirky. By utilizing modals and animations, MoonCamp has some personality and style that flows through the universe like a nebula. We used both React CSS transitions and good old css keyframes. By utilizing a switch, we can change the background or modal child of the Modal


![](modal.gif)


React Css Transitions:

CSS:

```css

.modal-appear {
  opacity: 0.01;
  background-color: white;
}

.modal-appear.modal-appear-active {
  opacity: .8;
  transition: opacity .25s ease-in;

}

.modal-child-appear {
  opacity: 0.01;
  background-color: white;
}

.modal-child-appear.modal-appear-active {
  opacity: 1;
  transition: opacity .25s ease-in;

}
```


modal.jsx

Using switch to change background and child:
```javascript
    let component
    let background = "modal"
    let noClick
    let modalChild
    let loginButton
   
    switch (modalType.modalType.modalType) {
        case 'login':
            component = <LoginFormContainer/>
            background = "can-he-do-it"
            noClick = modalType.closeModal
            modalChild = "modal-child"
            break;
```

```javascript
<div onClick={noClick} >

        
        <CSSTransitionGroup
            transitionName="modal"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={true}
            transitionLeaveTimeout={500}>
        <div className={background}>
        </div>
        </CSSTransitionGroup>

        <CSSTransitionGroup
            transitionName="modal-child"
            transitionAppear={true}
            transitionAppearTimeout={100}
            transitionEnter={false}
            transitionLeave={true}
            transitionLeaveTimeout={500}>
        
        <div className={modalChild} onClick={e => e.stopPropagation()}>
            
            {component}

            
        </div>
        </CSSTransitionGroup>
</div>

```


## Filter using Curry Furry

The filtering for the spots search page utilizes currying in order to update the state, allowing for multiple filters at once. This is done by creating a filter action that first updates the Filter state, then pulls that updated state for the Ajax request. The backend then makes an active record query utilizing a through association and joins table to grab the specific spot that has the specific filter attributes, such as planet it orbits, or amenities.


Curry Action:
```javascript
export function updateSpotsFilters(filter, bounds) {
    return (dispatch, getState) => {
        dispatch(updateFilters(filter, bounds));
        return filterSpots(getState().ui.filters)(dispatch)
        // CURRY FURRY
    };
}

```


![](filters.gif)


## Beautiful and Quick Show Pages

Utilizing react normalized state, show pages render instantly and are set up for easy CRUD actions that will make every show page look fantastic with ease

![](mooncamp.gif)

