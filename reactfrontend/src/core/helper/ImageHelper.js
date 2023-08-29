import React from "react";

const ImageHelper = ({product}) => {
    const imageurl = product ? product.image 
    : 'https://images.pexels.com/photos/17815428/pexels-photo-17815428/free-photo-of-portrait-of-a-brown-border-collie-standing-in-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    return (
        <div className="rounded border border-success p-2">
            <img src={imageurl} 
                style={{maxHeight:"100%", maxWidth:"100%"}}
                alt=""
                className="mb-3 rounded"
            />
        </div>
    )
}

export default ImageHelper;