import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const SearchForm = () => {
  const [location, setLocation] = useState('Delhi');
  const [checkIn, setCheckIn] = useState<Date | null>(new Date());
  const [checkOut, setCheckOut] = useState<Date | null>(new Date());
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg max-w-6xl mx-auto -mt-8 relative z-10">
      <div className="flex items-center space-x-4 mb-6">
        <label className="flex items-center space-x-2">
          <input type="radio" checked className="text-blue-500" />
          <span>Upto 4 Rooms</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" className="text-blue-500" />
          <span>Group Deals</span>
          <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">NEW</span>
        </label>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1">
          <label className="block text-sm text-gray-600 mb-1">City, Property Name Or Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <div className="text-xs text-gray-500 mt-1">India</div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Check-In</label>
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
            className="date-input"
            dateFormat="dd MMM'yy"
          />
          <div className="text-xs text-gray-500 mt-1">Wednesday</div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Check-Out</label>
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date)}
            className="date-input"
            dateFormat="dd MMM'yy"
          />
          <div className="text-xs text-gray-500 mt-1">Friday</div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Rooms & Guests</label>
          <div className="flex items-center space-x-2 p-2 border border-gray-300 rounded">
            <span>{rooms} Room</span>
            <span>{adults} Adults</span>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Price Per Night</label>
          <div className="p-2 border border-gray-300 rounded text-sm">
            ₹0-₹1500, ₹1500-₹2500,...
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="search-button text-white font-bold uppercase">
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchForm;