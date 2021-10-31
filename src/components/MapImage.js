import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLoc,
  changePos,
  dragStart,
  setSize,
} from "../features/map/mapSlice";
import styled from "styled-components";
import map from "../images/map.png";
import Marker from "./Marker";
import { addMarker } from "../features/marker/markerSlice";

const MapImageBox = styled.div`
  position: absolute;
  cursor: move;
`;

const MapImage = ({ mapRef }) => {
  const imgRef = useRef(null);
  const loc = useSelector((state) => state.map.loc);
  const markers = useSelector((state) => state.marker.markers);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("load", () => {
      dispatch(
        setSize({
          width: imgRef.current.offsetWidth,
          height: imgRef.current.offsetHeight,
        })
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDragStart = (e) => {
    dispatch(dragStart());

    dispatch(
      changeLoc({
        x: imgRef.current.offsetLeft + "px",
        y: imgRef.current.offsetTop + "px",
      })
    );

    dispatch(
      changePos({
        x: e.pageX,
        y: e.pageY,
      })
    );
  };

  const onContextMenu = (e) => {
    e.preventDefault();

    dispatch(
      addMarker({
        x:
          e.pageX -
          mapRef.current.getBoundingClientRect().left -
          imgRef.current.offsetLeft,
        y:
          e.pageY -
          mapRef.current.getBoundingClientRect().top -
          imgRef.current.offsetTop,
      })
    );
  };

  return (
    <MapImageBox
      ref={imgRef}
      onMouseDown={onDragStart}
      onContextMenu={onContextMenu}
      style={loc && { left: loc.x, top: loc.y }}
    >
      <img src={map} alt="map" />
      {markers &&
        markers.map((marker, idx) => (
          <Marker key={idx} x={marker.x} y={marker.y} />
        ))}
    </MapImageBox>
  );
};

export default MapImage;
