import styled from 'styled-components';

export const Alert = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 200px;
  height: 60px;
  margin: 10px;
  background-color: var(--red);

  >h1 {
      font-size: 18px;
      font-weight: 500;
      margin: 10px;
  }
`;
