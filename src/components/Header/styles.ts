import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 48px 0px 16px 0;
  min-width: 360px;

  h1 {
    span {
      color: #e15964;
    }
  }

  input {
    margin-top: 24px;
    width: 100%;
    border: 0;
    outline: 0;
    box-shadow: 0 0 0 1px #e1e4e8;
    padding: 12px;
    border-radius: 5px;
  }
`;
