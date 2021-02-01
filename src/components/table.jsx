import React from "react";
import Row from "./row";

const table = (props) => {
  const renderTasks = props.tasks.map((task, index) => {
    return <Row task={task} key={index} />;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>N</th>
          <th>Tasks</th>
          <th style={{ width: "60px" }}>Action</th>
        </tr>
      </thead>

      <tbody>{renderTasks}</tbody>
    </table>
  );
};

export default table;
