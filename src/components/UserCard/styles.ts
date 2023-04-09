import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #EEEEEE;
  border-radius: 5px;
  padding: 12px;
  width: 100%;
  line-break: anywhere;

  & + & {
    margin-top: 10px;
  }

  button {
    color: #FFFFFF;
    background: #e15964;
    border-radius: 5px;
    padding: 8px;
    font-weight: bold;
    transition: background 0.2s ease-in;

    &:hover {
      background: #c94a55;
    }
  }
`;

export const UserInfo = styled.div`
  strong {
    font-size: 16px;
  }

  p {
    font-size: 14px;
  }
`;
