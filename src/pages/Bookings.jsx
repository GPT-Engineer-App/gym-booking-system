import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const initialTimeSlots = [
  "6:00 AM - 7:00 AM",
  "7:00 AM - 8:00 AM",
  "8:00 AM - 9:00 AM",
  "5:00 PM - 6:00 PM",
  "6:00 PM - 7:00 PM",
];

const Bookings = () => {
  const [availableSlots, setAvailableSlots] = useState(initialTimeSlots);
  const [bookedSlots, setBookedSlots] = useState([]);

  const bookSlot = (slot) => {
    setAvailableSlots(availableSlots.filter((s) => s !== slot));
    setBookedSlots([...bookedSlots, slot]);
  };

  const cancelBooking = (slot) => {
    setBookedSlots(bookedSlots.filter((s) => s !== slot));
    setAvailableSlots([...availableSlots, slot]);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Available Time Slots</h2>
      <ul className="mb-6">
        {availableSlots.map((slot) => (
          <li key={slot} className="flex justify-between items-center mb-2">
            <span>{slot}</span>
            <Button onClick={() => bookSlot(slot)}>Book</Button>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mb-4">Your Bookings</h2>
      <ul>
        {bookedSlots.map((slot) => (
          <li key={slot} className="flex justify-between items-center mb-2">
            <span>{slot}</span>
            <Button variant="destructive" onClick={() => cancelBooking(slot)}>Cancel</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookings;