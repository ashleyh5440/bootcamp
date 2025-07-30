function List(props) {
  return (
    <ul className="list-group">
      {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
      {props.groceries.map((item) => { 
        return (
          // TODO: Your code here
          <li key={item.id}>{item.name}{!item.purchased || "✔️"}</li>
          //need a key for anything using map
          // {a || b} used to show the ✔️  
        );
      })}
    </ul>
  );
}

export default List;
