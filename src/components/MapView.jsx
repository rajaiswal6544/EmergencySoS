"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

function MapView({ location, lowData }) {
  const { lat, lng } = location
  const mapURL = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="w-full mb-6 rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      {lowData ? (
        <div className="bg-amber-50 border-y border-amber-200 p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-amber-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
            <span className="font-medium">Low Data Mode Active</span>
          </div>
          <p className="mt-2 text-amber-600 text-sm">
            Map is disabled to conserve data. Your location is still being tracked.
          </p>
        </div>
      ) : (
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-80 z-10">
              <Loader2 className="h-8 w-8 text-red-600 animate-spin" />
            </div>
          )}
          <iframe
            title="Live Location Map"
            src={mapURL}
            width="100%"
            height="350"
            allowFullScreen
            loading="lazy"
            className="w-full border-0"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      )}
      <div className="bg-white p-3 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Live Location</span>
          </div>
          <div className="text-xs text-gray-500">
            {lat.toFixed(6)}, {lng.toFixed(6)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapView
