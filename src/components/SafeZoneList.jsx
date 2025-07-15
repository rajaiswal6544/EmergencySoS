import React from 'react';
import { safeZones } from '../utils/mockSafeZones';
import { MapPin, ShieldCheck, Hospital } from 'lucide-react';

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(2);
}

const iconMap = {
  'Police Station': <ShieldCheck className="text-blue-600 w-6 h-6" />,
  'Hospital': <Hospital className="text-red-500 w-6 h-6" />,
  'Park': <MapPin className="text-green-600 w-6 h-6" />
};

const SafeZoneList = ({ currentLocation }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">🛡️ Safe Zones Nearby</h2>
    <div className="space-y-4">
      {safeZones.map((zone, index) => (
        <div
          key={index}
          className="flex items-start space-x-4 bg-gray-50 rounded-xl p-4 hover:shadow-md transition"
        >
          <div>{iconMap[zone.type]}</div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">{zone.name}</h3>
            <p className="text-sm text-gray-600">{zone.type}</p>
            {currentLocation && (
              <p className="text-xs text-gray-500 mt-1">
                {getDistanceFromLatLonInKm(currentLocation.lat, currentLocation.lng, zone.lat, zone.lng)} km away
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SafeZoneList;
