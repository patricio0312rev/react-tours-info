import React from 'react';
import Tour from '../tour/tour.component';

const Tours = ({tours, removeTour}) => {
    return (
        <section>
            <div className="title">
                <h2>Our tours</h2>
                <div className="underline"></div>
            </div>

            <div>
                {
                    tours.map((tour) => {
                        return (
                            <Tour key={tour.id} removeTour={removeTour} {...tour}/>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Tours;
