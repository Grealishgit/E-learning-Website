import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CoursesSection = () => {

    const { allCourses } = useContext(AppContext)

    return (
        <div className='py-16 md:px-40 px-8'>
            <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
            <p className='text-sm md:text-base text-gray-500 mt-3'>
                Our courses are designed to help you learn from the best in the industry.
                With a wide range of courses to choose from, you can learn new skills,
                earn certificates and degrees, and advance your career.Also discover our-top rated courses across various categories.
                From coding and designe to business and wellness, we have courses for everyone.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-4 md:px-0 my-10 md:my-16 gap-4">

                {allCourses.slice(0, 4).map((course, index) => <CourseCard key={index} course={course} />)}
            </div>


            <Link to={'/course-list'} onClick={() => scrollTo(0, 0)}
                className='text-gray-500 border hover:bg-green-500 hover:text-white duration-500 border-gray-500/30 rounded-md px-10 py-3'
            >Explore Courses</Link>
        </div>
    )
}

export default CoursesSection
