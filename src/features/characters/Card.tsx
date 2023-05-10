import Character from 'features/characters/characters.types';
import CardPicture from './CardPicture';
import CardContent from './CardContent';
import CardActions from './CardActions';

interface ICardProps {
  iHateThisChars: Character;
}

export default function Card({ iHateThisChars }: ICardProps) {
  return (
    <div className={'card'}>
      <CardPicture cardImage={iHateThisChars.image} />
      <CardContent name={iHateThisChars.name} />
      <CardActions iHateThisChars={iHateThisChars} />
    </div>
  );
}
