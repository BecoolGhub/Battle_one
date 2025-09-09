import Course from './course';
import useFetch from './usefetch';

function CourseList() {

    const [courses, dummy, error] = useFetch();

    function handledelete(id) {
        const newCourses = courses.filter((course) => course.id < id);
        setCourses(newCourses);
    }

    if(!courses){
        return (
        <>
        <p>{error}</p>
        </>

        )
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