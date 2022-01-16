import { ImLocation } from "react-icons/im";

export default function Card(props) {
  console.log(props);
  return (
    <article className="article">
      <div className="article--img">
        <img alt="" src={props.imageUrl} />
      </div>
      <div className="article--infos">
        <div className="article--infos__location">
          <span className="article--infos__location--mark">
            <ImLocation />
          </span>
          <span className="article--infos__location__country">
            {props.location}
          </span>
          <a
            href={props.googleMapsUrl}
            className="article--infos__location__map-link"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="article--infos__position">{props.title}</h2>
        <div className="article--infos__time">
          <span>{props.startDate}</span>-<span>{props.endDate}</span>
        </div>
        <p className="article--infos__description">{props.description}</p>
      </div>
    </article>
  );
}
