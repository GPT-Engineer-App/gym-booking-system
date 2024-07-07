import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
  const [userName, setUserName] = useState("");

  const bookSlot = (slot) => {
    if (userName.trim() === "") {
      alert("Please enter your name before booking.");
      return;
    }
    setAvailableSlots(availableSlots.filter((s) => s !== slot));
    setBookedSlots([...bookedSlots, { slot, userName }]);
    setUserName(""); // Clear the input field after booking
  };

  const cancelBooking = (slot) => {
    setBookedSlots(bookedSlots.filter((s) => s.slot !== slot));
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
        {bookedSlots.map(({ slot, userName }) => (
          <li key={slot} className="flex justify-between items-center mb-2">
            <span>{slot} - {userName}</span>
            <Button variant="destructive" onClick={() => cancelBooking(slot)}>Cancel</Button>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Enter Your Name</h2>
        <Input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your name"
          className="mb-4"
        />
      </div>
    </div>
  );
};

export default Bookings;