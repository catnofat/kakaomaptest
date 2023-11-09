import React, { useEffect } from "react";

const KakaoMap = ({
  currentloc = { latitude: 35.14, longitude: 126.9 },
  className,
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=091e22d31ad42a68fb9223a7aced30d4&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(
            currentloc.latitude,
            currentloc.longitude
          ),
          level: 7,
        };
        const map = new kakao.maps.Map(container, options);

        const markerImage = new kakao.maps.MarkerImage(
          "/myloca.png",
          new kakao.maps.Size(20, 30),
          { offset: new kakao.maps.Point(10, 25) }
        );

        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(
            currentloc.latitude,
            currentloc.longitude
          ),
          image: markerImage,
        });

        marker.setMap(map);

        mapdata.forEach((el) => {
          const position = new kakao.maps.LatLng(
            el.location.latitude,
            el.location.longitude
          );
          const iwContent = `<div style="...">
            ${el.name}
            <div style="..."></div>
          </div>`; // Use the actual styles here

          new kakao.maps.CustomOverlay({
            map: map,
            position: position,
            content: iwContent,
            yAnchor: 1,
          });
        });
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [currentloc, mapdata]);

  return (
    <div
      id="map"
      className={className}
      style={{ width: "100%", height: "350px" }}
    ></div>
  );
};

export default KakaoMap;
