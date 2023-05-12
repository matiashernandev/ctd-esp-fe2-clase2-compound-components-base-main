import Character from 'features/characters/characters.types';
import { ReactNode } from 'react';

interface ICardProps {
  iHateThisChars: Character;
  children: ReactNode;
}

export default function Card({ children }: ICardProps) {
  return <div className={'card'}>{children}</div>;
}
