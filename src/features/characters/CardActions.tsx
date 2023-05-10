import { FollowingButtonComponent } from 'features/following/button';
import {
  addCharacterToFollowingList,
  removeCharacterToFollowingList
} from 'features/following/following.slices';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import Character from 'features/characters/characters.types';

interface ICardActionsProps {
  iHateThisChars: Character;
}

export default function CardActions({ iHateThisChars }: ICardActionsProps) {
  const dispatch = useAppDispatch();
  const onToggleFavorite = (character: Character, setFav: boolean) => {
    if (setFav) {
      dispatch(addCharacterToFollowingList(character.id));
    } else {
      dispatch(removeCharacterToFollowingList(character.id));
    }
  };

  const followingIds = useAppSelector((state) => state.following.followingIds);
  return (
    <FollowingButtonComponent
      isFav={followingIds.indexOf(iHateThisChars.id) >= 0}
      onToggleFavorite={(setFav) => onToggleFavorite(iHateThisChars, setFav)}
    />
  );
}
