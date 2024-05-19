import * as React from "react";

const App = () => {
  const stories = [ ... ];
  
  const [searchTerm, setSearchTerm] = React.useState('React');
  
  ..
  
  return (
  <div>
  <h1>My Hacker Stories</h1>
  
  <Search search={searchTerm} onSearch={handleSearch} />
  
  ..
  </div>
  
  );
};
const Search = ({ search, onSearch }) => (
  <div>
  <label htmlFor="search">Search: </label>
  <input
  id="search"
  type="text"
  value={search}
  onChange={onSearch}
  />
  </div>

  const List = ({ list }) => (
    <ul>
    {list.map((item) => (
    <Item key={item.objectID} item={item} />
    ))}
    </ul>
    
    );
    
    const Item = ({ item }) => (
    <li>
    
    <span>
    <a href={item.url}>{item.title} </a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments} </span>
    <span>{item.points}</span>
    </li>
    );
export default App;