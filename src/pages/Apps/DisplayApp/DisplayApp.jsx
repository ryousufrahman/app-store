import React from 'react';

const DisplayApp = ({singleApp}) => {
    return (
        <div>
              <div className="card bg-base-100 shadow p-4 rounded-xl">
      
      {/* App Icon Placeholder */}
      <div className="w-full h-40 bg-gray-200 rounded-xl mb-4"></div>

      {/* App Info */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">{singleApp.name}</h2>
        <p className="text-sm text-gray-500">{singleApp.description}</p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        <div className="px-3 py-1 bg-green-100 text-green-600 rounded-lg text-sm font-medium">
          {singleApp.downloads}
        </div>
        <div className="px-3 py-1 bg-orange-100 text-orange-600 rounded-lg text-sm font-medium">
          {singleApp.rating}
        </div>
      </div>

    </div>
        </div>
    );
};

export default DisplayApp;