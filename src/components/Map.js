import { useRef, useState } from "react";
import styled from "styled-components";
import MapImage from "./MapImage";
import ResetButton from "./ResetButton";

const MapBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1024px;
  height: 768px;
  border: 1px solid black;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`;

const Map = () => {
  const mapRef = useRef();
  const [markers, setMarkers] = useState([]);

  return (
    <MapBox ref={mapRef}>
      <ResetButton setMarkers={setMarkers} />
      <MapImage mapRef={mapRef} markers={markers} setMarkers={setMarkers} />
    </MapBox>
  );
};

export default Map;
