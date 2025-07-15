"use client"

import { useEffect, useState } from "react"

import SOSButton from "./components/SosButton"
import SafeZoneList from "./components/SafeZoneList"
import NetworkBanner from "./components/NetworkBanner"
import { MapPin } from "lucide-react"
import MapView from "./components/MapView"

function App() {
  const [location, setLocation] = useState(null)
  const [networkType, setNetworkType] = useState("4g")
  const [isLoading, setIsLoading] = useState(true)

  // Geolocation tracking
  useEffect(() => {
    if ("geolocation" in navigator) {
      setIsLoading(true)

      // Try to get last known location from localStorage first
      const lastLocation = localStorage.getItem("lastKnownLocation")
      if (lastLocation) {
        try {
          setLocation(JSON.parse(lastLocation))
        } catch (e) {
          console.error("Failed to parse last location", e)
        }
      }

      const watchId = navigator.geolocation.watchPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords
          setLocation({ lat: latitude, lng: longitude })
          setIsLoading(false)
          localStorage.setItem("lastKnownLocation", JSON.stringify({ lat: latitude, lng: longitude }))
        },
        (err) => {
          console.error(err)
          setIsLoading(false)
        },
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 },
      )

      return () => navigator.geolocation.clearWatch(watchId)
    }
  }, [])

  // Network Info API
  useEffect(() => {
    const updateConnection = () => {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
      if (connection) setNetworkType(connection.effectiveType)
    }

    updateConnection()

    if (navigator.connection) {
      navigator.connection.addEventListener("change", updateConnection)
      return () => navigator.connection.removeEventListener("change", updateConnection)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <div className="bg-white/20 p-2 rounded-full mr-3">
              <MapPin className="h-6 w-6" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">Emergency SOS Tracker</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-3xl">
        <NetworkBanner networkType={networkType} />

        {isLoading ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Acquiring your location...</p>
            <p className="mt-2 text-sm text-gray-500">Please ensure location services are enabled</p>
          </div>
        ) : location ? (
          <MapView location={location} lowData={networkType !== "4g"} />
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 text-center">
            <div className="text-amber-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Location Access Required</h2>
            <p className="text-gray-600">Please enable location services to use the SOS tracker.</p>
          </div>
        )}

        <SafeZoneList currentLocation={location} />
        <SOSButton location={location} />
      </main>

      <footer className="bg-gray-100 border-t border-gray-200 py-4 mt-10">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>Emergency SOS Tracker &copy; {new Date().getFullYear()}</p>
          <p className="mt-1 text-xs">For emergency use only. Always call local emergency services when in danger.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
