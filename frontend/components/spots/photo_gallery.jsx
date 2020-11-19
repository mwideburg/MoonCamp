import React from 'react'


class PhotoGallery extends React.Component {
    render(){
        let i = 0
        const openModal = this.props.openModal
        const photos = this.props.photos.map(photo => {
            return (<div className="galery-container" key={i++} onClick={() => openModal('gallery', this.props.photos )}>

                <img src={photo} alt="" className="show-img-full" />

            </div>)
        })
        
        return(
            photos
        )

    }


}

export default PhotoGallery