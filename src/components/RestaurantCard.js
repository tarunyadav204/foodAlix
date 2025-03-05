import React from 'react'
import Location from '../../assest/location.png';
import Star from '../../assest/star.png';
import { CDN_URL } from '../utils/contants';

const RestaurantCard = ({ data }) => {
    const { name, cloudinaryImageId, locality, areaName, costForTwo, cuisines, avgRating } = data;
    return (
        <div className="res-card">
            <div className="res-card-img">
                <img
                    src={`${CDN_URL}${cloudinaryImageId}`} alt={name}
                />
            </div>
            <div className="res-card-details">
                <h3>{name}</h3>
                <p>{costForTwo}</p>
                <div className="rating">
                    <p>{avgRating}</p>
                    <img src={Star} alt="Star Icon" className="star-icon" />
                </div>

            </div>
            <div className="res-card-address">
                <p className="cuisines">{cuisines.join(", ")}</p>
                <div className="address">
                    <img src={Location} />
                    <p >{`${locality}, ${areaName}`}</p>

                </div>

            </div>
        </div>
    );
};

export default RestaurantCard