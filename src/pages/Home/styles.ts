import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const UsersListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;

  button {
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

export const UsersList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 360px;
`;
