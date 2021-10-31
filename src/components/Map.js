import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeLoc, changePos, dragStart } from "../features/map/mapSlice";
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
  const imgRef = useRef();
  const mapRef = useRef();
  const [markers, setMarkers] = useState([]);
  const dispatch = useDispatch();

  // const onDragStart = (e) => {
  //   dispatch(dragStart);

  //   dispatch(
  //     changeLoc({
  //       x: imgRef.current.offsetLeft + "px",
  //       y: imgRef.current.offsetTop + "px",
  //     })
  //   );

  //   dispatch(
  //     changePos({
  //       x: e.pageX,
  //       y: e.pageY,
  //     })
  //   );
  // };

  return (
    <MapBox ref={mapRef}>
      <ResetButton setMarkers={setMarkers} />
      <MapImage
        ref={imgRef}
        mapRef={mapRef}
        markers={markers}
        setMarkers={setMarkers}
      />
    </MapBox>
  );
};

export default Map;
