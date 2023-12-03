import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/24/solid";

import React from "react";

const features = [
  {
    name: "A",
    description: "10000 Gigabytes (GB)",
    icon: CloudArrowUpIcon,
  },
  {
    name: "B",
    description: "20000 Gigabytes (GB)",
    icon: LockClosedIcon,
  },
  {
    name: "C",
    description: "40000 Gigabytes (GB)",
    icon: ServerIcon,
  },
];
const Question = () => {
  return (
    <div className="overflow-hidden bg-white py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          1 Petabytes (PB) of memory is equal to how many Gigabytes (GB) ?
        </h2>
        {/* <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better workflow
              </p> */}
        {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p> */}
        <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-indigo-700">
                {/* <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                  aria-hidden="true"
                /> */}
                {feature.name + ")"}
              </dt>{" "}
              <dd className="inline font-semibold text-gray-900">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Question;
