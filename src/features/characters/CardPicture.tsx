export default function CardPicture({cardImage}:{cardImage: string}) {
  return (
    <div className={"card-image"}>
    <img src={cardImage} />
  </div>
  )
}