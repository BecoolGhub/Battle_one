
function Course(props) {

    return (
    
        <nav className="card">
            <img src={props.image} className='image' />
            <h3 >{props.name}</h3>
            <p>{props.price}</p>
            <div className="bottom">
                <button>{props.buy}</button>
                <p className="rat">{props.rating}</p>
            </div>

        </nav>
    );
}

export default Course;