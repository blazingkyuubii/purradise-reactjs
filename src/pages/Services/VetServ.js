import Navbar from "../../comp-navbar/Navbar";
import Hero from "../../comp-hero/Hero";
import Footer from "../../comp-footer/Footer";
import './calendar.css'
import React, { useState } from "react";
import { Day, DayPicker } from "react-day-picker";
import { format, isSunday } from "date-fns";
import "react-day-picker/dist/style.css";

export default function VetServ(){

    const [selectedDay, setSelectedDay] = useState()

    return (
      <div>
        <Navbar />
        <Hero />
        <h1>Make an appointment today!</h1>
        <div className="grid grid-cols-2 p-10">
          <div id="calendar">
            <DayPicker
          mode="single"
          selected={selectedDay}
          onSelect={setSelectedDay}
          disabled={isSunday}
          className="calendar-style"
        />
          </div>
          <div id="input-form" className="flex flex-col">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Contact Number" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Appointment Date" disabled />
          </div>
        </div>
        <Footer />
      </div>
    );
}