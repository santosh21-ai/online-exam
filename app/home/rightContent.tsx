const RightContent = () => {
  return (
    <>
      <a
        href="#"
        className=" block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Finish Exam
      </a>
      <section
        aria-labelledby="summary-heading"
        className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-4 lg:p-4 lg:mt-2 lg:col-span-5 border shadow"
      >
        <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
          Question status
        </h2>

        <dl className="mt-2 space-y-4">
          <div className="flex items-center justify-between">
            <dt className="text-sm text-gray-700">Attempted</dt>
            <div className="w-5 h-5 bg-green-500 rounded-full shadow" />
            {/* <dd className="text-sm font-medium text-gray-900">$99.00</dd> */}
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm text-gray-700">Not attempted</dt>
            <div className="w-5 h-5 bg-red-500 rounded-full shadow" />

            {/* <dd className="text-sm font-medium text-gray-900">$99.00</dd> */}
          </div>
        </dl>
      </section>
    </>
  );
};

export default RightContent;
