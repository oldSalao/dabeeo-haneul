import styled from "styled-components";
import MapImage from "./MapImage";

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
  return (
    <MapBox>
      <MapImage />
    </MapBox>
  );
};

export default Map;
