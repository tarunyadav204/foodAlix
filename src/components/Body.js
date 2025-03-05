import React, { useEffect, useState } from 'react';
import restaurants from '../utils/Data';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router';
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]); // Original fetched data
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); // Data to display
    const [searchText, setSearchText] = useState("");

    // Fetch data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

            );
            const jsonData = await data.json();
            // const restaurantsData = jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
            const restaurantsData = restaurants;
            setListOfRestaurants(restaurantsData);
            setFilteredRestaurants(restaurantsData); // Initialize the filtered list
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    // Handle search input change
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchText(query);

        const filtered = listOfRestaurants.filter((rest) =>
            rest.info.name.toLowerCase().includes(query)
        );
        setFilteredRestaurants(filtered); // Update the filtered list
    };

    // Handle filter button click
    const handleFilter = () => {
        const filtered = listOfRestaurants.filter((rest) => rest.info.avgRating >= 4);
        setFilteredRestaurants(filtered);
    };

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="body-search">
                <input
                    type="text"
                    placeholder="Search for restaurants"
                    value={searchText}
                    onChange={handleSearch} // Use the search handler
                />
            </div>
            <div className="btns">
                <button
                    className="filter-btn"
                    onClick={handleFilter}
                >
                    Rating <span>4.0+</span>
                </button>
            </div>

            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (
                    <Link to={"restaurant/" + restaurant.info.id}
                     key={restaurant.info.id}> 
                     <RestaurantCard data={restaurant.info} /> 
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
