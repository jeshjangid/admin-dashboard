
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const data = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 22 },
  { id: 4, name: "Alice", age: 28 },
];

const ListPage = () => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DetailPage = ({ match }) => {
  const userId = parseInt(match.params.id);
  const user = data.find((u) => u.id === userId);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>User Detail</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ListPage} />
        <Route path="/user/:id" component={DetailPage} />
      </div>
    </Router>
  );
};

export default App;
