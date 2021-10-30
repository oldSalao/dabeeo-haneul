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
  const imgRef = useRef();
  const [loc, setLoc] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragStat, setDragStat] = useState(false);

  const onDragStart = (e) => {
    e.preventDefault();
    setDragStat(true);

    setLoc(() => ({
      x: imgRef.current.offsetLeft + "px",
      y: imgRef.current.offsetTop + "px",
    }));
    setPos({
      x: imgRef.current.offsetLeft - e.pageX,
      y: imgRef.current.offsetTop - e.pageY,
    });
  };

  const onDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (dragStat) {
      const curPos = {
        x: imgRef.current.offsetLeft - e.pageX,
        y: imgRef.current.offsetTop - e.pageY,
      };

      let changePosX = curPos.x - pos.x;
      let changePosY = curPos.y - pos.y;

      let changedLocX = parseInt(loc.x) - changePosX / 2;
      let changedLocY = parseInt(loc.y) - changePosY / 2;

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
    e.preventDefault();
    setDragStat(false);
  };
  const onMouseOver = (e) => {
    setDragStat(false);
  };

  return (
    <MapImageBox
      ref={imgRef}
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
