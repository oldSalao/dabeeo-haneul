import styled from "styled-components";
import marker from "../images/marker.png";

const MarkerBox = styled.div``;

const Marker = () => {
  return (
    <MarkerBox>
      <img src={marker} alt="marker" />
    </MarkerBox>
  );
};

export default Marker;
