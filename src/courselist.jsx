import Course from './course';
import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import bs from './assets/bs.jpeg'
import react from './assets/js.png'

function CourseList() {

    const courses = [
        {
            id : 1,
            name: "HTML",
            price: 199,
            buy: "Buy Course",
            image: html,
            rating: 5
        },
        {
            id : 2,
            name: "CSS",
            price: 299,
            buy: "Buy Course",
            image: css,
            rating: 5
        },
        {
            id : 3,
            name: "JS",
            price: 399,
            buy: "Buy Course",
            image: js,
            rating: 5
        },
        {
            id : 4,
            name: "BS",
            price: 350,
            buy: "Buy Course",
            image: bs,
            rating: 5
        },
        {
            id : 5,
            name: "REACT",
            price: 1000,
            buy: "Buy Course",
            image: react,
            rating: 5
        },
    ]

    courses.sort((x,y) => y.price - x.price)

    // const bgcourse = courses.filter((course) => course.price < 200)

    const courselist = courses.map(
        (course) =>
            <Course
                key={course.id}
        name={course.name}
                image={course.image}
                price={course.price}
                rating={course.rating}
                buy={course.buy}
            />
    )

    return (
        <>
            {courselist}
        </>
    );
}

export default CourseList;