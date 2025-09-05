
function Course(props) {

   if(props.show){
     return (

        <nav className="card" >
            <img src={props.image} className='image' />
            <h3 >{props.name}</h3>
            <p>{props.price}</p>
            <div className="bottom">
                <button>{props.buy}</button>
                <p >{props.rating}</p>
            </div>
        </nav>
    );
   }else{
    return(
        <div className="card">course not available</div>
    );
   }
}

export default Course;