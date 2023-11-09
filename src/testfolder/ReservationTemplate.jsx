import KakaoMap from "./KakaoMap";

import { useEffect, useState } from "react";

const mockdata = [
  {
    id: 2,
    name: "하이세차장",
    image:
      "https://github.com/Step3-kakao-tech-campus/Team10_FE_OWNER/assets/104883910/b214edfd-a3b7-4eb0-aaef-9dd4705ca24e",
    location: {
      id: 18,
      place: "새로운 이름",
      address: "새로운 주소",
      latitude: 35.1759,
      longitude: 126.9,
    },
    distance: 2513,
    rate: 4.0,
    price: 3000,
  },
  {
    id: 3,
    name: "무슨무슨세차장",
    image:
      "https://github.com/Step3-kakao-tech-campus/Team10_FE_OWNER/assets/104883910/b214edfd-a3b7-4eb0-aaef-9dd4705ca24e",
    location: {
      id: 18,
      place: "새로운 이름",
      address: "새로운 주소",
      latitude: 35.1759,
      longitude: 126.93,
    },
    distance: 4189,
    rate: 1.0,
    price: 6000,
  },
];
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

  return (
    <div className="overflow-y-auto">
      <div>
        <div className="flex items-end w-screen h-screen gap-0 bg-white">
          {location && mockdata && (
            <KakaoMap
              currentloc={location}
              mapdata={mockdata}
              className="fixed left-0 z-0 w-screen h-screen"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationTemplate;
