import * as React from "react";

type Props = {};

const Card: React.SFC<Props> = props => {
  return <div className="card">{props.children}</div>;
};

export default Card;
