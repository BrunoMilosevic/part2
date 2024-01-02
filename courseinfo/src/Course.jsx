import React from "react";

const Course = ({ parts, course }) => {
  return (
    <div>
      <h1>{course}</h1>
      <div>
        <ul>
          {parts.map((part) => (
            <li key={part.id}>
              {part.name} : {part.exercises} exercises
            </li>
          ))}
        </ul>
        <p>
          Total of {parts.reduce((sum, part) => sum + part.exercises, 0)}{" "}
          exercises
        </p>
      </div>
    </div>
  );
};

export default Course;
