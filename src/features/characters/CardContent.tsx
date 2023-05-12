import CardActions from './CardActions';
import Character from './characters.types';

interface ICardContentProps {
  iHateThisChars: Character;
}

export default function CardContent({ iHateThisChars }: ICardContentProps) {
  return (
    <div className={'card-body'}>
      <span>{iHateThisChars.name}</span>
      <CardActions iHateThisChars={iHateThisChars} />
    </div>
  );
}
