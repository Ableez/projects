
export default function Travel(props) {

    console.log(props.imgUrl)
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.imgUrl} alt="image" />
            </div>
            <div className="card-info">
                <div className="card-location">
                    <img src="./image/location.png" alt="location icon" />
                    <h4>{props.location}</h4>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="card-desc">
                    <h2>{props.title}</h2>
                    <h4>{props.startDate} - {props.endDate}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}