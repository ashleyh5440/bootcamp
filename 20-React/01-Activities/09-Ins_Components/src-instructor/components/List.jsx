// This List component accepts props from App.js
// We pluck off the "users" property of the props object using destructuring assignment
// This prevents us from having to type `props.users` each time we want to refer to the users object
export default function List({ users }) {
  return (
    <div className="container">
      <h1>Random Users:</h1>
      <ul className="list-group">
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {users.map((user, index) => (
          /* use the unique id of the data for keys whenever possible, second best use the index from map */
          /* key is absolutely necessary to reduce errors in React app*/
          <li className="list-group-item" key={user.login.uuid} /*ul>key={index} */>
            {`${user.name.first} ${user.name.last} (${user.login.username}) from ${user.location.country}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
