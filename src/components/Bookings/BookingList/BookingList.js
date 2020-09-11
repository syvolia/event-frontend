import React from 'react';

import './BookingList.css';

const bookingList = props => (
   
    <ul className="bookings__list">
    
        {props.bookings.map(booking => {
            console.log(booking, 'testing booking')
            return (
                console.log(booking, 'testing booking'),
                <li key={booking.id} className="bookings__item">
                    <div className="bookings__item-data">
                        {booking.eventId.title} -{' '}
                        {new Date(booking.createdAt).toLocaleDateString()}
                    </div>
                    <div className="bookings__item-actions">
                        <button
                            className="btn"
                            onClick={props.onDelete.bind(this, booking.id)}
                        >
                            Cancel
                        </button>
                    </div>
                </li>
            );
        })}
    </ul>
);

export default bookingList;
