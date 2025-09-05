
import Course from './course';
import  html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import bs from './assets/bs.jpeg'
function App() {
  return (
    <>
    <Course name="HTML" price="Rs.200" buy="Buy Course" image={html} rating="Rating" show={true}/>
    <Course name="CSS" price="Rs.300" buy="Buy Course" image={css} rating="Rating" show={true}/>
    <Course name="JAVASCRIPT" price="Rs.400" buy="Buy Course" image={js} rating="Rating" show={true}/>
    <Course name="BOOTSTRAP" price="Rs.400" buy="Buy Course" image={bs} rating="Rating" show={true}/>
    </>
  );
}

export default App;
