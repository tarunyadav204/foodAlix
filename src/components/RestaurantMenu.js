import React, { useEffect, useState } from 'react';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from 'react-router';
import { CDN_URL } from '../utils/contants';
import { MENU_API } from '../utils/contants';
import './RestaurantMenu.css';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState([]);
    const [menu, setMenu] = useState([]);
    const { resID } = useParams();
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        //const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId=44501&catalog_qa=undefined&submitAction=ENTER');
        const response = await fetch(MENU_API + resID);
        const data = await response.json();
        setResInfo(data.data.cards[2].card.card.info);
        //setMenu(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.categories[0].itemCards);
        setMenu(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards);
    }

    //  console.log("ResInfo.....", resInfo);
    console.log("Menu..........", menu);
    const { name, cuisines, cloudinaryImageId, avgRating } = resInfo;


    if (!resInfo) {
        return (
            <div className="not-found">
                <h2>Restaurant Not Found</h2>
                <p>Oops! The restaurant you're looking for doesn't exist.</p>
                <a href="/" className="back-button">Go Back</a>
            </div>
        );
    }

    return (
        <div className="menu-container">
            <div className="restaurant-header">
                <img src={`${CDN_URL}${cloudinaryImageId}`} alt={resInfo.name} className="restaurant-image" />
                <div className="restaurant-info">
                    <h1>{name}</h1>
                    <p>{cuisines}</p>
                    <p className="restaurant-rating">⭐ {avgRating} / 5</p>
                </div>
            </div>

            <div className="menu-list">
                {menu.map(item => (
                    <div key={item.card.info.id} className="menu-item">
                        <img src={`${CDN_URL}${item.card.info.imageId}`} alt={item.card.info.category} className="menu-item-image" />
                        <div className="menu-item-info" >
                            <h3>{item.card.info.name}</h3>
                            <p className="menu-item-price">₹{(item.card.info.price / 100).toFixed(2) || (item.card.info.defaultPrice / 100).toFixed(2)}</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;
