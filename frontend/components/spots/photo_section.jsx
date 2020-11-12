import React from 'react'


class PhotoSection extends React.Component {
    render() {
        const openModal = this.props.openModal
        let i = 0
        const photos = this.props.photos.map(photo => {
            return (<div className="photo-section" key={i++} onClick={() => openModal('gallery', this.props.photos)}>

                <img src={photo} alt="" className="photo-sec-img" />

            </div>)
        })
        debugger
        return (
            <div className="photo-info ">
                
                {photos}

            </div>
            
        )

    }


}

export default PhotoSection