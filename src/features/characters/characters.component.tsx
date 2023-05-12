import { FC } from 'react';
import { useGetCharactersQuery } from 'features/characters/characters.endpoints';

import Card from './Card';
import CardActions from './CardActions';
import CardContent from './CardContent';
import CardPicture from './CardPicture';

export type CharactersComponentProps = {
  rickIDDS: number[];
};

const CharactersComponent: FC<CharactersComponentProps> = ({
  rickIDDS
}: CharactersComponentProps) => {
  const { data: characters, error, isLoading } = useGetCharactersQuery({ ids: rickIDDS });

  if (isLoading) return <div>Loading characters...</div>;
  if (error || !characters) return <div>Error when loading. Please try again later.</div>;
  const charactersArray = Array.isArray(characters) ? characters : [characters];

  return (
    <div className={'characters'}>
      {charactersArray.map((iHateThisChars) => (
        <Card key={iHateThisChars.id} iHateThisChars={iHateThisChars}>
          <CardPicture cardImage={iHateThisChars.image} />
          <CardContent iHateThisChars={iHateThisChars} />
          {/*   <CardActions iHateThisChars={iHateThisChars} /> */}
        </Card>
      ))}
    </div>
  );
};

export default CharactersComponent;
