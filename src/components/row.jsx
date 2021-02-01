import React from "react";

const row = (props) => {
  return (
    <tr>
      <td> {props.task.id} </td>
      <td className="task"> {props.task.value}</td>
      <td className="delete">
        <a href="https://google.com">x</a>
      </td>
    </tr>
  );
};

export default row;
