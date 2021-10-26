import React from 'react';

const Header = ({course}) =>
<div><h1>
        {course.name}
</h1></div>

const Content = ({course}) =>
<div>
      <p>{course.parts.parts[0].name} {course.parts.parts[0].exercises}</p>
      <p>{course.parts.parts[1].name} {course.parts.parts[1].exercises}</p>
      <p>{course.parts.parts[2].name} {course.parts.parts[2].exercises}</p>
</div>

const Total = ({course}) => 
<div><p>
  {course.parts.parts[3].sumName} {course.parts.parts[3].sum} 
</p></div>

//const Part = (props) => {
//  return (
//    <div>
  //    <p>{props.part1} {props.exercise1}</p>
  //    <p>{props.part2} {props.exercise2}</p>
  //    <p>{props.part3} {props.exercise3}</p>
//    </div>
//  )
//}



const  App = () => {

  const course = {
   name: "Half Stack application development",
   parts: {
    parts: [
    {
    name: "Fundamentals of React",
    exercises: 10
  },
    {
    name: "Using props to pass data",
    exercises: 7
  },
    {
    name: "State of a component",
    exercises: 14,
  }, 
    {
    sumName: "Total number of exercises: ",
    sum: 31
  }
  ]}
}

    return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/>
    </div>
  
  );
}

export default App;