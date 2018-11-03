import * as React from "react";

type Props = {};

const Title: React.SFC<Props> = props => {
  return (
    <h1 className="title">
      <span>Todo</span>
      <span>Todo</span>
      <span>Todo</span>
    </h1>
  );
};

export default Title;
