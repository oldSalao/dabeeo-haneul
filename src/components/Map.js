import { useRef } from "react";
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

  return (
    <MapBox ref={mapRef}>
      <ResetButton />
      <MapImage mapRef={mapRef} />
    </MapBox>
  );
};

export default Map;
