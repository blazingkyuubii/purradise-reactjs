import Navbar from "../../comp-navbar/Navbar";
import Hero from "../../comp-hero/Hero";
import Footer from "../../comp-footer/Footer";
import "./calendar.css";
import React, { useState } from "react";
import { Day, DayPicker } from "react-day-picker";
import { format, isSunday } from "date-fns";
import { Tab } from "@headlessui/react";

//images
import catChart from "./cat-chart.png"

export default function GroomServ() {
  const [selectDay, setSelectDay] = useState();
  const faqData = [
    {
      ques: "Do you accept appointments or walk-ins?",
      ans: "Certainly! You can schedule a grooming appointment through the form below or visit our shop at any time. However, please note that clients with scheduled sessions are given priority, and walk-in customers may be limited for the day. Rest assured, those who are unable to be accommodated as walk-ins will receive priority during their next visit.",
    },
    {
      ques: "What is included in the grooming service?",
      ans: "Our grooming service comprises bathing, brushing, and nail trimming. Owners may choose to exclude any of these services if desired. Additional grooming services such as ear cleaning, fur trimming, dental care, etc., are available for an extra fee.",
    },
    {
      ques: "Can my unvaccinated cat be groomed?",
      ans: "Sadly, we only groom vaccinated cats to ensure the safety of our staff and the cat's owners. We strongly recommend vaccinating your cat, especially against rabies, to protect them from potentially harmful diseases.",
    },
    {
      ques: "My cat has ticks and fleas; can I still bring them for grooming?",
      ans: "Unfortunately, we cannot accommodate cats with tick and flea concerns to prevent the spread of infection among other cats in the grooming area. We recommend bringing your cat for ticks and fleas treatment to maintain clean and healthy skin.",
    },
    {
      ques: "My cat can be aggressive/anxious during grooming; is that acceptable?",
      ans: "Absolutely! Purradise is equipped with feline-friendly tools for special handling during grooming. We always seek the owner's consent before using these specialized grooming tools.",
    },
    {
      ques: "My cat has specific preferences for grooming; is that acceptable?",
      ans: "Yes! Understanding the cat's likes and dislikes is crucial for a positive grooming experience. If you have any concerns, feel free to discuss them with our groomers for a tailored grooming session.",
    },
  ];

  return (
    <div className="">
      <Navbar />
      <Hero />
      {/* ABOUT VET */}
      <div id="content" className="px-10">
        <h1>Squeaky Clean Cats!</h1>
        <p>
          "At Purradise, we are dedicated to ensuring the health and happiness
          of your feline companions. Our veterinary services go beyond just
          treating illnesses – we provide comprehensive care to support your
          cat's well-being. Our team of experienced and compassionate
          veterinarians is here to offer routine check-ups, vaccinations, and
          preventive care to keep your furry friend in the best possible shape.
          We understand that each cat is unique, so we take the time to tailor
          our services to meet their individual needs."
        </p>
        {/* SCHEDULE*/}
        <h1 className="mt-10">
          Grooming Schedule and Frequently Asked Questions
        </h1>
        <Tab.Group>
          <Tab.List className="flex flex-row p-2 flex flex-row justify-around rounded-md bg-blue-900 p-1">
            <Tab>
              {({ selected }) => (
                <button
                  className={`text-2xl px-72 rounded-md ${
                    selected ? "bg-gray-500 text-white" : "bg-blue-900 white"
                  }`}
                >
                  Schedule
                </button>
              )}
            </Tab>
            <Tab>
              {({ selected }) => (
                <button
                  className={`rounded-md px-72 text-2xl ${
                    selected ? "bg-gray-500 text-white" : "bg-blue-900 white"
                  }`}
                >
                  FAQ
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels className="border border-red-400">
            <Tab.Panel className="p-3">
              <h1>Note:</h1>
              <p>
                Please be advised that Purradise is{" "}
                <span className="underline underline-offset-2">
                  closed during holidays
                </span>
                , and that we will not be open for regular appointments. We
                suggest that our valued clients plan ahead and book grooming
                appointments in advance, especially during peak days. This helps
                us ensure that we can provide the best service possible to your
                beloved feline friends. Your cooperation and understanding are
                greatly appreciated!
              </p>
              <table className="w-full mt-5 h-64">
                <tr className="border border-gray-400">
                  <th colSpan={3} className="text-2xl">
                    Mondays - Saturdays
                  </th>
                </tr>
                <tr className="text-center">
                  <td className="text-xl border border-gray-400">
                    Morning Sessions: <br />
                    09:00am - 12:00pm
                  </td>
                  <td className="text-xl border border-gray-400">
                    Lunch Break: <br />
                    12:00pm - 01:00pm
                  </td>
                  <td className="text-xl border border-gray-400">
                    Afternoon Sessions: <br />
                    01:00pm - 06:00pm
                  </td>
                </tr>

                <tr className="border border-gray-400">
                  <th colSpan={3} className="text-center text-2xl">
                    Sundays
                  </th>
                </tr>
                <tr>
                  <td
                    colSpan={3}
                    className="text-center text-red-500 text-xl border border-gray-400"
                  >
                    CLOSED
                  </td>
                </tr>
              </table>
            </Tab.Panel>
            <Tab.Panel className="px-3 pb-3">
              {faqData.map((item, index) => (
                <ul key={index}>
                  <li className="text-xl font-bold">Q: {item.ques}</li>
                  <li>A: {item.ans}</li>
                </ul>
              ))}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        {/* VET SERVICES */}
        <h1 className="mt-10">Rates</h1>
        <div className="border border-red-400 p-3">
          <div id="cat-chart" className="flex justify-center">
            <img src={catChart} />
          </div>

          <p className="mt-3">
            Our grooming rates depends on your cat's weight, check out the list
            below:
          </p>

          <div id="cat-chart-table">
            <table className="w-full mt-3 h-42">
              <thead className="text-1xl border border-gray-400">
                <tr>
                  <th>Less than 5kgs</th>
                  <th>5kgs to 10kgs</th>
                  <th>11kgs to 15kgs</th>
                  <th>16kgs and above</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center text-xl">
                  <td className="text-xl border border-gray-400">₱500</td>
                  <td className="text-xl border border-gray-400">₱600</td>
                  <td className="text-xl border border-gray-400">₱700</td>
                  <td className="text-xl border border-gray-400">₱800</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xl mt-3">Additional Grooming Services:</p>
          <div id="cat-chart-table">
            <table className="w-full mt-3 h-42">
              <thead className="text-1xl border border-gray-400">
                <tr>
                  <th>Ear Cleaning</th>
                  <th>Fur Trimming</th>
                  <th>De-shedding Treatment</th>
                  <th>Nail Trimming Only</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center text-xl">
                  <td className="text-xl border border-gray-400">₱150</td>
                  <td className="text-xl border border-gray-400">₱200</td>
                  <td className="text-xl border border-gray-400">₱300</td>
                  <td className="text-xl border border-gray-400">₱100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* SET APPOINTMENT */}
        <h1 className="mt-10">Schedule a session!</h1>
        <div id="calendar" className="flex flex-row justify-center">
          <div id="calendar">
            <DayPicker
              mode="single"
              selected={selectDay}
              onSelect={setSelectDay}
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
              value={selectDay ? format(selectDay, "PPP") : ""}
              disabled
            />

            <button className="p-1 border border-blue-400">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
