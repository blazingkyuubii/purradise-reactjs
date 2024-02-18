import Navbar from "../../comp-navbar/Navbar";
import Hero from "../../comp-hero/Hero";
import Footer from "../../comp-footer/Footer";
import React, { useState } from "react";
import { Day, DayPicker } from "react-day-picker";
import { format, isSunday } from "date-fns";
import { Tab } from "@headlessui/react";

//images
import catChart from "./cat-chart.png"
import groomImgForm from "./groom-form-img.png";

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
    <div className="bg-weed-green-200">
      <Navbar />
      {/* ABOUT VET */}
      <div id="content" className="px-5 lg:px-40">
        <h1 className="text-4xl mt-3 mb-5 text-center font-semibold">
          Grooming Service
        </h1>
        <p className="text-center">
          Not sure how to take care of your cat's fluffy fur? Bring your feline
          friends to the nearest Purradise grooming center to keep your cats
          clean and fresh!
        </p>
        {/* SCHEDULE*/}
        <h1 className="mt-10 text-2xl text-center">
          Grooming Schedule and Frequently Asked Questions
        </h1>
        <Tab.Group>
          <Tab.List className="grid grid-cols-2 px-3 justify-evenly rounded-t-md bg-dark-green p-1 ">
            <Tab>
              {({ selected }) => (
                <button
                  className={`text-2xl w-full rounded-l-md ${
                    selected
                      ? "bg-weed-green-400 text-weed-green-200"
                      : "dark-green text-white"
                  }`}
                >
                  Schedule
                </button>
              )}
            </Tab>
            <Tab>
              {({ selected }) => (
                <button
                  className={`text-2xl w-full rounded-r-md ${
                    selected
                      ? "bg-weed-green-400 text-weed-green-200"
                      : "dark-green text-white"
                  }`}
                >
                  FAQ
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels className="border border-dark-green">
            <Tab.Panel className="p-3">
              <h1 className="text-xl font-semibold">Note:</h1>
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
                <tr className="border-2 border-dark-green">
                  <th colSpan={3} className="text-2xl">
                    Mondays - Saturdays
                  </th>
                </tr>
                <tr className="text-center">
                  <td className="text-xl border-2 border-dark-green">
                    Morning Sessions: <br />
                    09:00am - 12:00pm
                  </td>
                  <td className="text-xl border-2 border-dark-green">
                    Lunch Break: <br />
                    12:00pm - 01:00pm
                  </td>
                  <td className="text-xl border-2 border-dark-green">
                    Afternoon Sessions: <br />
                    01:00pm - 06:00pm
                  </td>
                </tr>

                <tr className="border-2 border-dark-green">
                  <th colSpan={3} className="text-center text-2xl">
                    Sundays
                  </th>
                </tr>
                <tr>
                  <td
                    colSpan={3}
                    className="text-center text-red-500 text-xl border-2 border-dark-green"
                  >
                    CLOSED
                  </td>
                </tr>
              </table>
            </Tab.Panel>
            <Tab.Panel className="p-3 pb-3">
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
        <h1 className="mt-10 text-2xl text-center">Rates</h1>
        <div className="border border-dark-green p-3">
          <div id="cat-chart" className="flex justify-center">
            <img src={catChart} />
          </div>

          <p className="text-xl mt-3">
            Our grooming rates depends on your cat's weight, check out the list
            below:
          </p>

          <div id="cat-chart-table">
            <table className="w-full mt-3 h-42">
              <thead className="text-1xl border-2 border-dark-green">
                <tr>
                  <th>Less than 5kgs</th>
                  <th>5kgs to 10kgs</th>
                  <th>11kgs to 15kgs</th>
                  <th>16kgs and above</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center text-xl">
                  <td className="text-xl border-2 border-dark-green">₱500</td>
                  <td className="text-xl border-2 border-dark-green">₱600</td>
                  <td className="text-xl border-2 border-dark-green">₱700</td>
                  <td className="text-xl border-2 border-dark-green">₱800</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xl mt-3">Additional Grooming Services:</p>
          <div id="cat-chart-table">
            <table className="w-full mt-3 h-42">
              <thead className="text-1xl border-2 border-dark-green">
                <tr>
                  <th>Ear Cleaning</th>
                  <th>Fur Trimming</th>
                  <th>De-shedding Treatment</th>
                  <th>Nail Trimming Only</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center text-xl">
                  <td className="text-xl border-2 border-dark-green">₱150</td>
                  <td className="text-xl border-2 border-dark-green">₱200</td>
                  <td className="text-xl border-2 border-dark-green">₱300</td>
                  <td className="text-xl border-2 border-dark-green">₱100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* SET APPOINTMENT */}
        <div className="flex flex-col p-3 lg:flex-row bg-white my-10">
          <div>
            <img className="w-auto h-auto" src={groomImgForm} />
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
