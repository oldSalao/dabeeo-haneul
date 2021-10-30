import styled from "styled-components";
import map from "../images/map.png";

const MapBox = styled.div`
  border: 1px solid black;
  width: 1024px;
  height: 768px;
  overflow: hidden;
`;

const Map = () => {
  return (
    <MapBox>
      <img src={map} alt="map" />
    </MapBox>
  );
};

export default Map;
