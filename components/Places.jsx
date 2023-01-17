import '../src/index.css';
export default function Places(props){
    return (
        <div className="container">
            <div className="image-word">
                <img src={props.image} alt="place image" className="images" />
                <div className="body">
                    <div className="name-location">
                       <h3 className="name">{props.name}</h3>
                   <a href="www.google.com">view on google map</a>
                    </div>
                    <h1>{props.title}</h1>
                    <p>{props.date}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}