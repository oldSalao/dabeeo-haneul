import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Map from "./components/Map";
import { changeLoc, changePos, dragEnd } from "./features/map/mapSlice";

const MAP_WIDTH = 1024;
const MAP_HEIGHT = 768;

const AppBox = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const pos = useSelector((state) => state.map.pos);
  const loc = useSelector((state) => state.map.loc);
  const dragStat = useSelector((state) => state.map.dragStat);
  const size = useSelector((state) => state.map.size);
  const dispatch = useDispatch();

  const onDrag = (e) => {
    e.preventDefault();

    if (size && dragStat) {
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

      if (MAP_WIDTH - changedLocX > size.width) {
        changedLocX = MAP_WIDTH - size.width;
      }
      if (MAP_HEIGHT - changedLocY > size.height) {
        changedLocY = MAP_HEIGHT - size.height;
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
    dispatch(dragEnd());
  };

  const onMouseLeave = (e) => {
    dispatch(dragEnd());
  };

  return (
    <AppBox
      onMouseMove={onDrag}
      onMouseUp={onDragEnd}
      onMouseLeave={onMouseLeave}
    >
      <Map />
    </AppBox>
  );
};

export default App;
