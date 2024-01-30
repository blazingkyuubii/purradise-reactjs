import Navbar from "../../comp-navbar/Navbar";
import Hero from "../../comp-hero/Hero";
import Footer from "../../comp-footer/Footer";
import Table from "../../comp-table/Table";
import './calendar.css'
import React, { useState } from "react";
import { Day, DayPicker } from "react-day-picker";
import { format, isSunday } from "date-fns";
import { Disclosure } from "@headlessui/react";
import 'react-day-picker/dist/style.css'

//images
import doctor1 from "./doc1.png"
import doctor2 from "./doc2.png";
import doctor3 from "./doc3.png";

export default function VetServ(){
    const [selectedDay, setSelectedDay] = useState()

    return (
      <div className="">
        <Navbar />
        <Hero />
        {/* ABOUT VET */}
        <div id="content" className="px-10">
          <h1>About Purradise Veterinary </h1>
          <p>
            "At Purradise, we are dedicated to ensuring the health and happiness
            of your feline companions. Our veterinary services go beyond just
            treating illnesses – we provide comprehensive care to support your
            cat's well-being. Our team of experienced and compassionate
            veterinarians is here to offer routine check-ups, vaccinations, and
            preventive care to keep your furry friend in the best possible
            shape. We understand that each cat is unique, so we take the time to
            tailor our services to meet their individual needs."
          </p>
          {/* ABOUT DOCTORS */}
          <h1 className="mt-10">Our Resident Doctors</h1>
          <div className="flex flex-row justify-center gap-10">
            <div className="flex flex-col items-center">
              <img
                className=" rounded-full w-80 h-80 drop-shadow-lg"
                src={doctor1}
                alt="doc1"
              />
              <p className="text-xs mt-2">Dr. Kayla Bourbun</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                className=" rounded-full w-80 h-80 drop-shadow-lg"
                src={doctor2}
                alt="doc2"
              />
              <p className="text-xs mt-2">Dr. Kristine Garcia, DVM</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                className=" rounded-full w-80 h-80 drop-shadow-lg"
                src={doctor3}
                alt="doc3"
              />
              <p className="text-xs mt-2">Dr. Tommy Santiago</p>
            </div>
          </div>
          {/* VET SERVICES */}
          <h1 className="mt-10">Our Services</h1>
          <div>
            <Disclosure>
              <Disclosure.Button className="p-10 w-full border border-red-300 py-2">
                Click to open
              </Disclosure.Button>
              <Disclosure.Panel className="p-5 border border-blue-300 text-gray-500">
                <Table />
              </Disclosure.Panel>
            </Disclosure>
          </div>
          {/* SET APPOINTMENT */}
          <h1 className="mt-10">Make an appointment today!</h1>
          <div id="calendar" className="flex flex-row justify-center">
            <div id="calendar">
              <DayPicker
                mode="single"
                selected={selectedDay}
                onSelect={setSelectedDay}
                disabled={isSunday}
                className="calendar-style"
              />
            </div>
            <div id="input-form" className="flex flex-col py-4 w-1/2">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                className="p-1 w-full mb-1 border border-blue-400"
                type="text"
                placeholder="Full Name"
              />

              <label htmlFor="contact">Contact Number</label>
              <input
                id="contact"
                className="p-1 mb-1 border border-blue-400"
                type="text"
                placeholder="Contact Number"
              />

              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                className="p-1 mb-1 border border-blue-400"
                type="text"
                placeholder="Email Address"
              />

              <label htmlFor="date">Appointment Date</label>
              <input
                id="date"
                className="p-1 mb-1 border border-blue-400"
                type="text"
                placeholder="Appointment Date"
                value={selectedDay ? format(selectedDay, "PPP") : ""}
                disabled
              />

              <button className="p-1 border border-blue-400">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
        <Footer />
        {console.log(selectedDay)}
      </div>
    );
}