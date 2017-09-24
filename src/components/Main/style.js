import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 196px auto;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Cell = styled.div`
  width: 32px;
  height: 24px;
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const GridHeader = styled.div`
  height: 24px;
  position: relative;
  align-items: center;
  display: flex;
`;

export const Block = styled.div`
  position: absolute;
  width: ${props => props.width};
  height: 16px;
  background-color: rgba(255, 0, 0, 0.3);
  top: 4px;
  left: 0;
  z-index: 1;
`;
