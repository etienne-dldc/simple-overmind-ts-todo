import * as React from "react";
import Title from "./Title";
import Card from "./Card";
import Input from "./Input";

type Props = {};

const App: React.SFC<Props> = ({ app }) => {
  return (
    <div className="container">
      <Card>
        <Title />
        <Input />
      </Card>
    </div>
  );
};

export default App;
