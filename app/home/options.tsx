import React from "react";

const accounts = [
  { id: "checking", name: "A", description: "CIBC ••••6610" },
  { id: "savings", name: "B", description: "Bank of America ••••0149" },
  { id: "mastercard", name: "C", description: "Capital One ••••7877" },
];
const stats = [
  { label: "QN", value: 70 },
  { label: "Total Mark", value: 100 },
  { label: "Total time", value: "90 minutes" },
  { label: "Remaining Time:", value: "0 : 34 : 29" },
  { label: "Mark", value: 1 },
];
const Options = () => {
  return (
    <div className="max-w-5xl mx-auto rounded-lg border border-gray-400 bg-gray-50 grid grid-cols-1 divide-y divide-gray-300 sm:grid-cols-5 sm:divide-y-0 sm:divide-x">
      {accounts.map((account, accountIdx) => (
        <div
          key={accountIdx}
          //   className="px-6 py-5 text-sm font-medium text-center space-x-1"
          className="relative flex items-start py-4 space-x-2"
        >
          <div className="ml-3 flex items-center h-5">
            <input
              id={`account-${account.id}`}
              aria-describedby={`account-${account.id}-description`}
              name="account"
              type="radio"
              defaultChecked={account.id === "checking"}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
          </div>
          <div className="min-w-0 flex-1 text-sm">
            <label
              htmlFor={`account-${account.id}`}
              className="font-medium text-gray-700"
            >
              {account.name}
            </label>
            {/* <p
              id={`account-${account.id}-description`}
              className="text-gray-500"
            >
              {account.description}
            </p> */}
          </div>
        </div>
      ))}

      <div className="relative flex items-start py-4 space-x-2 justify-around">
        <a
          href="#"
          className="rounded-2xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit answer
        </a>
      </div>

      <div className="relative flex items-start py-4 space-x-2  justify-around">
        <a
          href="#"
          className="rounded-2xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Reset answer
        </a>
      </div>
    </div>
  );
};

export default Options;
