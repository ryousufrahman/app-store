import React from "react";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const params = useParams();
  const allApp = useLoaderData();
  const { id } = params;
  const clickedId = parseInt(id);

  const clickedApp = allApp.find((clicked) => clicked.id == clickedId);

  return (
    <div>
      <div className="max-w-3xl mx-auto bg-base-100 shadow-lg rounded-2xl p-6 space-y-6">
        {/* Top Section */}
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-gray-200 rounded-2xl"></div>

          <div className="flex-1 space-y-2">
            <h1 className="text-2xl font-bold">{clickedApp.name}</h1>
            <p className="text-sm text-gray-500">{clickedApp.developer}</p>

            <div className="flex gap-3 mt-2">
              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-lg text-sm">
                {clickedApp.downloads}
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-lg text-sm">
                {clickedApp.rating}
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm">
                {clickedApp.category}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-gray-600 leading-relaxed">{clickedApp.description}</p>
        </div>

        {/* Extra Info */}
        <div className="flex justify-between items-center">
          <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm">
            {clickedApp.price}
          </div>

          {clickedApp.featured && (
            <div className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded-lg text-sm">
              {clickedApp.featured}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 py-3 rounded-xl bg-primary text-white">
            Install
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
