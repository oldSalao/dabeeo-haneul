import styled from "styled-components";
import resetButton from "../images/reset.png";

const ResetButtonBox = styled.div`
  position: relative;
  z-index: 1;
  top: -350px;
  left: 480px;
  cursor: pointer;
`;

const ResetButton = () => {
  return (
    <ResetButtonBox>
      <img src={resetButton} alt="resetButton" />
    </ResetButtonBox>
  );
};

export default ResetButton;
