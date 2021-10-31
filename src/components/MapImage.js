import { useRef, useState } from "react";
import styled from "styled-components";
import map from "../images/map.png";

const MAP_WIDTH = 1024;
const MAP_HEIGHT = 768;

const MapImageBox = styled.div`
  position: absolute;
  cursor: move;
`;

const MapImage = () => {
  const boxRef = useRef();
  const [loc, setLoc] = useState(null);
  const [pos, setPos] = useState(null);
  const [dragStat, setDragStat] = useState(false);

  const onDragStart = (e) => {
    setDragStat(true);

    setLoc(() => ({
      x: boxRef.current.offsetLeft + "px",
      y: boxRef.current.offsetTop + "px",
    }));
    setPos({
      x: e.pageX,
      y: e.pageY,
    });
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

      setLoc(() => ({
        x: changedLocX + "px",
        y: changedLocY + "px",
      }));

      setPos(curPos);
    }
  };

  const onDragEnd = (e) => {
    setDragStat(false);
  };
  const onMouseOver = (e) => {
    setDragStat(false);
  };

  return (
    <MapImageBox
      ref={boxRef}
      onMouseDown={onDragStart}
      onMouseMove={onDrag}
      onMouseUp={onDragEnd}
      onMouseOver={onMouseOver}
      style={loc && { left: loc.x, top: loc.y }}
    >
      <img src={map} alt="map" />
    </MapImageBox>
  );
};

export default MapImage;
