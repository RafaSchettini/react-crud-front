import { useState, useEffect } from 'react';
import { api } from '../../services/axios';

import { Link } from 'react-router-dom';

import {
  Container,
  UsersListHeader,
  UsersList
} from './styles';

import { SyncLoader } from 'react-spinners';

import Header from '../../components/Header';
import UserCard from '../../components/UserCard';
import { TUser } from '../../components/UserCard';

export default function Home() {
  const [usersData, setUsersData] = useState<TUser[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const filteredContacts = usersData?.filter(user => {
    return user.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  const amountOfContacts = filteredContacts.length;

  useEffect(() => {
    api.get('/users')
      .then(response => {
        setUsersData(response.data.users);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleRemoveUser = async (id: string) => {
    setIsLoading(true);

    await api.delete(`/users/${id}`)
      .then(() => {
        setUsersData(prev => prev.filter(user => user.id !== id));
      });

    setIsLoading(false);
  };

  return (
    <Container>
      <Header>
        <h1>My<span>Contacts</span></h1>

        <input
          type="text"
          placeholder='Busque pelo nome do contato...'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </Header>

      <UsersListHeader>
        <strong>{amountOfContacts} {amountOfContacts === 1 ? 'contato' : 'contatos'}</strong>

        <Link to='/create'>
          <button>Novo contato</button>
        </Link>
      </UsersListHeader>

      <UsersList>
        {
          !isLoading ? (
            filteredContacts.length > 0 ? (
              filteredContacts.map(user => (
                <UserCard key={user.id} user={user} handleRemoveUser={handleRemoveUser}/>
              ))
            ) : (
              <p
                style={{
                  marginTop: '2rem',
                }}
              >Você ainda não possui nenhum contato :(</p>
            )
          ) : (
            <SyncLoader color='#e15964' />
          )
        }
      </UsersList>
    </Container>
  );
}
