const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const course_container = document.querySelector("#course_container")

const course_work = document.querySelector("#course_work")

// handle click events for course selectors
const course_btns = {
    all: document.querySelector("#all_courses_btn"),
    cse: document.querySelector("#cse_course_btn"),
    wdd: document.querySelector("#wdd_course_btn")
}

// function for populating course container
const populateCourseContainer = course => {
    const newDiv = document.createElement('div');

    // indicate as completed if completed
    course.completed && newDiv.classList.add('completed');
    newDiv.textContent = `${course.subject} ${course.number}`
    // course is completed
    const completed = document.createElement('span')
    completed.textContent = `✓`
    course.completed && newDiv.prepend(completed)
    course_container.appendChild(newDiv)
}

// function for selecting course and highlighting currently selected course button
const SelectCourse = event => {

    // empty course container repeteadly until empty
    while (course_container.firstChild)
        course_container.removeChild(course_container.firstChild)

    // handle appearance of all buttons using iteration
    Object.entries(course_btns).forEach(([, value]) => {

        // handle the target button
        if (value === event.target)
            value.classList.add('selected')
        // handle all other buttons
        else
            value.classList.remove('selected')

    })


    courses.forEach(course => {
        if (event.target.innerHTML === 'CSE' && course.subject === 'CSE')
            populateCourseContainer(course)
        else if (event.target.innerHTML === 'WDD' && course.subject === 'WDD')
            populateCourseContainer(course)
        else if (event.target.innerHTML === 'All')
            populateCourseContainer(course)
    });

    // handle subject selection
    if (event.target.innerHTML === 'CSE')
        courses.forEach(course => {
            if (course.subject === 'CSE') {
            }

        })
}

// attach click event listeners to all three buttons
Object.entries(course_btns).forEach(([, value]) => {
    value.addEventListener("click", SelectCourse)
})

//populate courses on page load
document.addEventListener('DOMContentLoaded', () => {

    courses.forEach(course => {
        populateCourseContainer(course)


        // populate course work
        const course_work_item = document.createElement("li")
        course_work_item.textContent = course.title
        course_work.appendChild(course_work_item)
    });
})


