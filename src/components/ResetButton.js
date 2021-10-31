import styled from "styled-components";
import resetButton from "../images/reset.png";

const ResetButtonBox = styled.div`
  position: absolute;
  z-index: 2;
  top: 5px;
  left: 965px;
  cursor: pointer;
`;

const ResetButton = ({ setMarkers }) => {
  const onClick = () => {
    setMarkers([]);
  };

  return (
    <ResetButtonBox onClick={onClick}>
      <img src={resetButton} alt="resetButton" />
    </ResetButtonBox>
  );
};

export default ResetButton;
