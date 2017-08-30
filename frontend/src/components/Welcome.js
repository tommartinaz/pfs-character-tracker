import React from 'react'
const Welcome = (props) => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img className="d-block img-fluid" src="../assets/img/golarion_map.png" alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src="..." alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src="..." alt="Third slide"/>
                </div>
            </div>
        </div>
    )
}
export default Welcome;