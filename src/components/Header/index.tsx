import {
  Container
} from './styles';

interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}
