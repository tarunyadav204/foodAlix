import React from 'react';

const Shimmer = () => {
    const shimmer_len = 20;  // Number of shimmer cards to display
    const shimmerCards = [];

    // Generate shimmer cards using a for loop
    for (let i = 0; i < shimmer_len; i++) {
        shimmerCards.push(
            <div key={i} className="shimmer-card">
                <div className="shimmer-card-img"></div>
                <div className="shimmer-card-details">
                    <h3></h3>
                    <p></p>
                    <div className="rating">
                        <p></p>
                    </div>
                </div>
                <div className="shimmer-card-address">
                    <p className="cuisines"></p>
                    <div className="address">
                        <p></p>
                    </div>
                </div>
            </div>
        );
    }

    return <div className="shimmer-card-container">{shimmerCards}</div>;
}

export default Shimmer;
