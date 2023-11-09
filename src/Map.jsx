import React, { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    // 여기에 실제 appKey를 직접 입력합니다. 이 코드는 테스트 용도로만 사용해야 합니다.
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=091e22d31ad42a68fb9223a7aced30d4&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById("map");
        var options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        new window.kakao.maps.Map(container, options); // 변수 할당을 제거하고 지도 인스턴스를 직접 생성
      });
    };

    // 스크립트가 더 이상 필요하지 않을 때 제거합니다.
    return () => {
      document.head.removeChild(script);
    };
  }, []); // 의존성 배열을 비워서 마운트될 때만 실행되도록 합니다.

  return <div id="map" style={{ width: "1000px", height: "1000px" }}></div>;
};

export default Map;
