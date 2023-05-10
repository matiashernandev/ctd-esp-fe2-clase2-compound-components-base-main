interface ICardContentProps {
  name: string;
}

export default function CardContent({ name }: ICardContentProps) {
  return (
    <div className={'card-body'}>
      <span>{name}</span>
    </div>
  );
}
