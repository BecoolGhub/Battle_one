import Course from './course';
import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import bs from './assets/bs.jpeg'
import react from './assets/js.png'
import { useState } from 'react';
import { useEffect } from 'react';

function CourseList() {

    const [courses, setCourses] = useState(null);

    const [dummy , setDummy] = useState(true);
    const [dummy1, setDummy1] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/courses')
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(data => setCourses(data))
    }, []);

   

    function handledelete(id) {
        const newCourses = courses.filter((course) => course.id < id);
        setCourses(newCourses);
    }


    if(!courses){
        return <></>
    }

    const courselist = courses.map(
        (course) =>
            <Course
                key={course.id}
                name={course.name}
                image={course.image}
                price={course.price}
                delete={handledelete}
                id={course.id}
            />
    )

    return (
        <>
            {courselist}
            <p onClick={() => {setDummy1(true)}}> FUCK</p>
            <button onClick={ () => {setDummy(false)}}>Dummy button</button>
        </>
    );
}

export default CourseList;