import * as React from "react";
function getTitle(title) {
  return title;
}

const App = () => {
  const stories = [
 {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
},
  {
  
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
  
  ];
  
  return ( ... );
};

const App = () => {
  const stories = [ ... ];
  
  return (
  <div>
  
  <h1>My Hacker Stories</h1>
  
  <Search />
  
  <hr />
  
  <List list={stories} />
  </div>
  
  );
};

const List = (props) => (
  <ul>
  
  {props. list.map((item) => (
  <li key={item.objectID}>
  <span>
  <a href={item.url}>{item.title}</a>
  </span>
  <span>{item.author} </span>
  <span> {item.num_comments} </span>
  <span>{item.points} </span>
  </li>
  ))}
  </ul>
  
  );

  const List = (props) => (
    <ul>
    {props.list.map((item) => (
    <Item key={item.objectID} item={item} />
    ))}
    </ul>
    
    );
    
    const Item = (props) => (
    <li>
    
    <span>
    <a href={props. item.url}>{props. item.title} </a>
    </span>
    <span> {props.item.author} </span>
    <span> {props. item.num_comments} </span>
    <span>{props.item.points} </span>
    </li>
    
    );


    const Search = () => {
      const [searchTerm, setSearchTerm] = React.useState("');
    };
  
      const Search = () => {
      const [searchTerm, setSearchTerm] = React.useState(");
      
      const handleChange = (event) => {
      setSearchTerm(event.target.value);
      };
      
      return (
      <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      
      <p>
      Searching for <strong>{searchTerm} </strong>.
      </p>
      </div>
      );
    };
          
    const App = () => {
      const stories = [ ... ];
      
      // A
      const handleSearch = (event) => {
      // C
      console.log(event.target.value);
      };
      return (
      <div>
      <h1>My Hacker Stories</h1>
      
      {/* // B */}
      <Search onSearch={handleSearch} />
      
      <hr />
      
      <List list={stories} />
      </div>
      
      );
    };

    const Search = (props) => {
      const [searchTerm, setSearchTerm] = React.useState("');
      
      const handleChange = (event) => {
      setSearchTerm(event.target.value);
      
      // B
      props.onSearch(event);
      };
      
      return ( ... );
      
      };

      const App = () => {
        const stories = [ ... ];
        
        const [searchTerm, setSearchTerm] = React.useState(");
        
        const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        };
        return (
        <div>
        <h1>My Hacker Stories</h1>
        
        <Search onSearch={handleSearch} />
        
        <hr />
        
        <List list={stories} />
        </div>
        );
      };
        const Search = (props) => (
        <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={props.onSearch} />
        </div>
        );

        const App = () => {
          const stories = [ ... ];
          
          const [searchTerm, setSearchTerm] = React.useState('');
          
          const handleSearch = (event) => {
          setSearchTerm(event.target.value);
          };
          const searchedStories = stories. filter(function (story) {
          return story. title. includes(searchTerm);
          });
          
          return (
          <div>
          
          <h1>My Hacker Stories</h1>
          
          <Search onSearch={handleSearch} />
          
          <hr />
          
          <List list={searchedStories} />
          </div>
          );
        };
        

          export default App;