import React, { useEffect } from "react";

const KakaoMap = ({
  currentloc = { latitude: 33.450701, longitude: 126.570667 },
  className,
  mapdata = [],
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=091e22d31ad42a68fb9223a7aced30d4&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      // Ensure the global kakao variable is on the window object
      const kakao = window.kakao;

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
          const iwContent = `<div style="position: relative; bottom: -16px; display: inline-block; padding: 5px 10px; background: #0098FF; border-radius: 8px; font-size: 12px; color: #FFFFFF; text-align: center;">
            ${el?.name}
            <div style="position: absolute; left: 50%; bottom: -8px; margin-left: -8px; width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 10px solid #0098FF;"></div>
          </div>`; // Inline styles can be kept as is or moved to CSS classes

          new kakao.maps.CustomOverlay({
            map: map,
            position: position,
            content: iwContent,
            yAnchor: 1,
          });
        });
      });
    };

    // Remove the script from the document when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, [currentloc, mapdata]); // Dependency array to re-run the effect when currentloc or mapdata changes

  return (
    <div
      id="map"
      className={className}
      style={{ width: "1000px", height: "1400px" }}
    ></div>
  );
};

export default KakaoMap;
