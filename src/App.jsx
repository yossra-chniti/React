import * as React from "react";

const App = () => {
  ...
  return (
  <div>
  <h1>My Hacker Stories</h1>
  
  <InputWithLabel
  id="search"
  label="Search"
  value={searchTerm}
  onInputChange={handleSearch}
  >
search:
</InputWithLabel>
  </div>
  
  );
  };
  
  const InputWithLabel = ({
  id,
  label,
  value,
  type= 'text',
  onInputChange,
  children,
  }) => (
  <>
  <label htmlFor={id}>{children}</label>
  &nbsp;
  <input
  id={id}
  type="type"
  value={value}
  onChange={onInputChange}
  />
  </>
  );
  const [stories, setStories] = React.useState(initialStories);
  const App = () => {

    const [stories, setStories] = React.useState(initialStories);
    const handleRemoveStory = (item) => {
    const newStories = stories.filter(
    (story) => item.objectID !== story.objectID
    );
    setStories(newStories);
    };
    ..
    return
    <div>
    <h1>My Hacker Stories</h1>
    
    <hr />
    <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </div>
    );
    };

    const List = ({ list, onRemoveItem }) => (
      <ul>
      {list.map((item) => (
      <Item
      key={item.objectID}
      item={item}
      onRemoveItem={onRemoveItem}
      />
      ))}
      </ul>
      );

const Item = ({ item, onRemoveItem }) => (
<li>
<span>
<a href={item.url}>{item.title}</a>
</span>
<span>{item.author} </span>
<span>{item.num_comments} </span>
<span> {item.points} </span>
<span>
<button type="button" onClick={() => onRemoveItem(item)}>
Dismiss
</button>
</span>
</li>

);
export default App;