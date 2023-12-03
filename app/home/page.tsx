import Head from "./head";
import Options from "./options";
import Question from "./question";
import React from "react";

const stats = [
  { label: "QN", value: 70 },
  { label: "Total Mark", value: 100 },
  { label: "Total time", value: "90 minutes" },
  { label: "Remaining Time:", value: "0 : 34 : 29" },
  { label: "Mark", value: 1 },
];

const Home = () => {
  return (
    <>
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <h2 className="sr-only" id="profile-overview-title">
          Profile Overview
        </h2>
        <div className="bg-white p-6">
          <Head />
        </div>
        <div className="border max-w-9xl mx-auto rounded-lg border-gray-300 bg-gray-50 grid grid-cols-1 divide-y divide-gray-300 sm:grid-cols-5 sm:divide-y-0 sm:divide-x">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-6 py-5 text-sm font-medium text-center space-x-1"
            >
              <span className="text-gray-700">{stat.label}:</span>
              <span className="text-gray-900">{stat.value}</span>{" "}
            </div>
          ))}
        </div>
      </div>
      <Question />
      <Options />
    </>
  );
};

export default Home;
