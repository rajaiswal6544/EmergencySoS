"use client"

import { useState } from "react"
import { AlertCircle } from "lucide-react"

const SOSButton = ({ location }) => {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleClick = () => {
    if (!location) return alert("Location not available")

    setSending(true)

    // Simulate sending SOS
    setTimeout(() => {
      setSending(false)
      setSent(true)
      alert(`📍 Emergency SOS sent!\nLat: ${location.lat}, Lng: ${location.lng}`)

      // Reset sent state after 3 seconds
      setTimeout(() => setSent(false), 3000)
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50">
      <div className="relative">
        {/* Pulsing background effect */}
        <div
          className={`absolute inset-0 rounded-full bg-red-600 opacity-30 ${!sending && !sent ? "animate-ping" : ""}`}
        ></div>

        <button
          onClick={handleClick}
          disabled={sending || !location}
          className={`
            relative flex items-center gap-2 px-8 py-4 rounded-full shadow-lg transition-all transform
            ${sending ? "bg-gray-500 cursor-not-allowed" : sent ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700 hover:scale-105"}
            text-white font-bold text-lg
          `}
        >
          {sending ? (
            <>
              <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
              <span>Sending...</span>
            </>
          ) : sent ? (
            <>
              <span>✓</span>
              <span>SOS Sent</span>
            </>
          ) : (
            <>
              <AlertCircle className="h-5 w-5" />
              <span>SEND SOS</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default SOSButton
