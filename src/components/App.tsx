import * as React from 'react';
import Title from './Title';
import Card from './Card';
import NewTodo from './NewTodo';

type Props = {};

const App: React.SFC<Props> = ({}) => {
  return (
    <div className="container">
      <Card>
        <Title />
        <NewTodo />
      </Card>
    </div>
  );
};

export default App;
