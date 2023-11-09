import KakaoMap from "../atoms/KakaoMap";

import { useEffect, useState } from "react";

const ReservationTemplate = () => {
  const [location, setLocation] = useState({
    latitude: 35.14,
    longitude: 126.9,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);

  console.log("location", location);

  return (
    <div className="overflow-y-auto">
      <div>
        <div className="flex items-end w-screen h-screen gap-0 bg-white">
          {location && (
            <KakaoMap
              currentloc={location}
              className="fixed left-0 z-0 w-screen h-screen"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationTemplate;
