import {
  Container,
  UserInfo
} from './styles';

export interface TUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface UserProps {
  user: TUser;
  handleRemoveUser: (id: string) => void;
}

import { formatDate } from '../../utils/formatDate';

export default function UserCard({ user, handleRemoveUser } : UserProps) {
  return (
    <Container>
      <UserInfo>
        <strong>{user.name}</strong>
        <p>{user.email}</p>
        <p>since {formatDate(user.createdAt)}</p>
      </UserInfo>

      <button onClick={() => handleRemoveUser(user.id)}>Remover</button>
    </Container>
  );
}
