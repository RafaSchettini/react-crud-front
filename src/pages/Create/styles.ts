import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column ;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 200px;

  div, button {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  input {
    margin-top: 8px;
    width: 100%;
    border: 0;
    outline: 0;
    box-shadow: 0 0 0 1px #e1e4e8;
    padding: 12px;
    border-radius: 5px;
  }

  span {
    margin-top: 8px;
    font-size: 12px;
    color: #e15964;
  }

  button {
    align-items: center;
    justify-content: center;
    padding: 8px;
    background: none;
    border: 2px solid #e15964;
    border-radius: 5px;
    color: #e15964;
    font-weight: bold;
    transition: background .2s ease-in;

    &:hover {
      background: #e15964;
      color: #fff;
    }

    &:disabled {
      background: #e1e4e8;
      color: #fff;
      border-color: #e1e4e8;
      cursor: not-allowed;
    }
  }
`;
