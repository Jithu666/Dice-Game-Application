import styled from "styled-components";
import { useState } from "react";

const NumberSelector = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();

  console.log(selectedNumber);

  return (
    <NumberContainer>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberContainer>
  );
};

export default NumberSelector;

const NumberContainer = styled.main`
  .flex {
    display: flex;
    gap: 24px;
    margin-top: 16px;
    align-items: center;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    margin-top: 14px;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
