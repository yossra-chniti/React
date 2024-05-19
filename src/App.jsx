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
export default App;