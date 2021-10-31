import styled from "styled-components";
import marker from "../images/marker.png";

const MarkerBox = styled.div`
  position: absolute;
  z-index: 1;
`;

const Marker = ({ x, y }) => {
  return (
    <MarkerBox style={{ left: x - 50 + "px", top: y - 130 + "px" }}>
      <img src={marker} alt="marker" />
    </MarkerBox>
  );
};

export default Marker;
