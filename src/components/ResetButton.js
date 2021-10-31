import { useDispatch } from "react-redux";
import styled from "styled-components";
import { clear } from "../features/marker/markerSlice";
import resetButton from "../images/reset.png";

const ResetButtonBox = styled.div`
  position: absolute;
  z-index: 2;
  top: 5px;
  left: 965px;
  cursor: pointer;
`;

const ResetButton = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(clear());
  };

  return (
    <ResetButtonBox onClick={onClick}>
      <img src={resetButton} alt="resetButton" />
    </ResetButtonBox>
  );
};

export default ResetButton;
