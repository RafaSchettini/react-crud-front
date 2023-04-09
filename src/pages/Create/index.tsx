import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { api } from '../../services/axios';

import { useNavigate } from 'react-router-dom';

import {
  Container,
  Form
} from './styles';

import { SyncLoader } from 'react-spinners';

export default function Create() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createUserSchema = z.object({
    name: z.string()
      .nonempty('Nome não pode ser vazio')
      .min(3, 'Nome deve ter no mínimo 3 caracteres')
      .max(25, 'Nome deve ter no máximo 25 caracteres')
      .transform(name => {
        return name.trim().split(' ').map(word => {
          return word[0].toUpperCase().concat(word.substring(1));
        }).join(' ');
      }),
    email: z.string()
      .nonempty('E-mail não pode ser vazio')
      .email('Formato de e-mail inválido')
  });

  type CreateUserFormData = z.infer<typeof createUserSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserSchema)
  });

  const navigate = useNavigate();

  const createUser = async (data : CreateUserFormData) => {
    setIsLoading(true);
    await api.post('/users', data)
      .then(() => navigate('/react-crud-front/'))
      .finally(() => setIsLoading(false));
  };

  return <Container>
    <Form onSubmit={handleSubmit(createUser)}>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          placeholder='Digite o nome do contato...'
          {...register('name')}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder='Digite o e-mail do contato...'
          {...register('email')}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <button disabled={isLoading} type='submit'>Adicionar contato</button>

      {isLoading && <SyncLoader color='#e15964' size={8}/>}
    </Form>
  </Container>;
}
