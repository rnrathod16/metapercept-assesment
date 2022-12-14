import React from 'react'
import "./Card.css"
const Card = ({ val }) => {
    return (
        <>
            <div className="card col-md-3 m-2 align" style={{ height: 'fit-content' }}>
                {/* <img className="card-img-top" src={val.ImageUrl} alt="image" /> */}
                <div className="card-body">
                    <h5 className="card-title">{val.Name}</h5>
                    <div className="mb-2" style={{
                        height: '25vh',
                        overflow: 'hidden'
                    }}>
                        <p className="card-text">{val.ShortDesc}</p>
                    </div>
                    <a href="/" className="btn btn-primary">View</a>
                </div>
            </div>
        </>
    )
}

export default Card