//
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Navbar from "../../comp-navbar/Navbar";
import Hero from "../../comp-hero/Hero";
import Footer from "../../comp-footer/Footer";
import Table from "../../comp-table/Table";
import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import "react-day-picker/dist/style.css";

//images
import doctor1 from "./doc1.png";
import doctor2 from "./doc2.png";
import doctor3 from "./doc3.png";
import vetImgForm from "./vet-form-img.png";

export default function VetServ() {
  const doctors = [
    { id: 1, name: "Dr. Kristine Garcia, DVM", image: doctor2 },
    { id: 2, name: "Dr. Kayla Bourbun", image: doctor1 },
    { id: 3, name: "Dr. Tommy Santiago", image: doctor3 },
  ];

  return (
    <div className="bg-weed-green-200">
      <Navbar />
      {/* ABOUT VET */}
      <div id="content" className="px-5 lg:px-40 ">
        <h1 className="text-4xl mt-3 mb-5 text-center font-semibold">Veterinary</h1>
        <p className="text-center">
          At Purradise, not only provide nutritious and healthy feline products,
          we also have Veterinary Services to make sure your cat's health is on
          check!
        </p>
        {/* ABOUT DOCTORS */}
        <h1 className="mt-10 text-2xl text-center">Our Resident Doctors</h1>

        <div className="mt-10 lg:flex lg:flex-row lg:justify-center lg:gap-10">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="flex flex-col items-center">
              <img
                className=" rounded-full w-80 h-80 drop-shadow-lg"
                src={doctor.image}
                alt="doctor-image"
              />
              <p className="mt-2 mb-5">{doctor.name}</p>
            </div>
          ))}
        </div>
        {/* VET SERVICES */}
        <h1 className="mt-10 mb-5 text-2xl text-center">Our Services</h1>
        <div>
          <Disclosure defaultOpen="true">
            <Disclosure.Button className="bg-dark-green text-white p-10 w-full rounded-t py-2">
              Service List
            </Disclosure.Button>
            <Disclosure.Panel className="p-5 border border-dark-green text-black">
              <Table />
            </Disclosure.Panel>
          </Disclosure>
        </div>
        {/* SET APPOINTMENT */}
        <div className="flex flex-col p-3 lg:flex-row bg-white my-10">
          <div>
            <img className="w-auto h-auto" src={vetImgForm} />
          </div>
          <div
            id="input-form"
            className="flex flex-col justify-center w-full lg:px-20"
          >
            <h1 className="text-3xl mb-5">Make an appointment today!</h1>

            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              className="p-1 w-full mb-1 border border-dark-green rounded"
              type="text"
              placeholder="Full Name"
            />

            <label htmlFor="contact">Contact Number</label>
            <input
              id="contact"
              className="p-1 mb-1 border border-dark-green rounded"
              type="text"
              placeholder="Contact Number"
            />

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              className="p-1 mb-1 border border-dark-green rounded"
              type="text"
              placeholder="Email Address"
            />

            <label htmlFor="date">Appointment Date</label>
            <input
              id="date"
              className="p-1 mb-3 border border-dark-green rounded"
              type="date"
              placeholder="Appointment Date"
            />

            <button className="p-2 bg-dark-green text-white rounded">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
