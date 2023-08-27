import React from 'react'

 const Card = () => {
  return (
    <div className="card text-white bg-dark border border-info">
        <div className="card-header lead">A picture from here</div>
        <div className="card-body">
            <img 
                src='https://images.pexels.com/photos/16550526/pexels-photo-16550526/free-photo-of-grassy-lakeshore-in-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt=''
                style={{maxHeight: '100%', maxWidth: '100%'}}
                className="mb-3 rounded"
            />
        
            <p className="lead bg-success font-weight-normal text-wrap">
                this is a beautiful scenery
            </p>
            <p className="btn btn-success rounded btn-sm px-4">$5</p>
            <div className="row">
                <div className="col-12">
                    <button 
                        onClick={() => {}}
                        className="btn btn-success btn-outline-success mt-2 mb-2"
                    >Add to Cart</button>
                </div>
                <div className="col-12">
                    <button
                        onClick={() => {}}
                        className="btn btn-block btn-outline-danger mt-2 mb-2"
                    >Remove from cart</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Card