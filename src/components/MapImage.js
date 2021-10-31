import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLoc, changePos } from "../features/map/mapSlice";
import styled from "styled-components";
import map from "../images/map.png";
import Marker from "./Marker";

const MAP_WIDTH = 1024;
const MAP_HEIGHT = 768;

const MapImageBox = styled.div`
  position: absolute;
  cursor: move;
`;

const MapImage = ({ mapRef, markers, setMarkers }) => {
  const boxRef = useRef();
  const loc = useSelector((state) => state.map.loc);
  const pos = useSelector((state) => state.map.pos);
  const dispatch = useDispatch();

  const [dragStat, setDragStat] = useState(false);

  const onDragStart = (e) => {
    setDragStat(true);

    dispatch(
      changeLoc({
        x: boxRef.current.offsetLeft + "px",
        y: boxRef.current.offsetTop + "px",
      })
    );

    dispatch(
      changePos({
        x: e.pageX,
        y: e.pageY,
      })
    );
  };

  const onDrag = (e) => {
    e.preventDefault();

    if (dragStat) {
      const curPos = {
        x: e.pageX,
        y: e.pageY,
      };

      let changePosX = pos.x - curPos.x;
      let changePosY = pos.y - curPos.y;

      let changedLocX = parseInt(loc.x) - changePosX;
      let changedLocY = parseInt(loc.y) - changePosY;

      if (changedLocX > 0) {
        changedLocX = 0;
      }
      if (changedLocY > 0) {
        changedLocY = 0;
      }
      if (MAP_WIDTH - changedLocX > e.target.clientWidth) {
        changedLocX = MAP_WIDTH - e.target.clientWidth;
      }
      if (MAP_HEIGHT - changedLocY > e.target.clientHeight) {
        changedLocY = MAP_HEIGHT - e.target.clientHeight;
      }

      dispatch(
        changeLoc({
          x: changedLocX + "px",
          y: changedLocY + "px",
        })
      );

      dispatch(changePos(curPos));
    }
  };

  const onDragEnd = () => {
    setDragStat(false);
  };
  const onMouseOver = () => {
    setDragStat(false);
  };
  const onContextMenu = (e) => {
    e.preventDefault();
    setMarkers((prevMarkers) => {
      return prevMarkers.concat({
        x:
          e.pageX -
          mapRef.current.getBoundingClientRect().left -
          boxRef.current.offsetLeft,
        y:
          e.pageY -
          mapRef.current.getBoundingClientRect().top -
          boxRef.current.offsetTop,
      });
    });
  };

  return (
    <MapImageBox
      ref={boxRef}
      onMouseDown={onDragStart}
      onMouseMove={onDrag}
      onMouseUp={onDragEnd}
      onMouseOver={onMouseOver}
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
