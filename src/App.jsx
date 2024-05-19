import * as React from "react";
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";
React.useEffect(() => {
  fetch(/*Define URL resource*/)
  .then((response) => {
  //Handle response
  })
  .catch(() => {
  //Handle Error
  });
  }, [searchTerm]);

  React.useEffect(() => {
    if (!searchTerm) return;
   fetch(`${API_ENDPOINT}${searchTerm}`)
   .then((response) => {
   //Handle response
   })
   .catch(() => {
   //Handle Error
   });
   }, [searchTerm]);

   React.useEffect(() => {
    if (!searchTerm) return;
   fetch(`${API_ENDPOINT}${searchTerm}`)
   .then((response) => response.json())
   .catch(() => {
   //Handle Error
   });
   }, [searchTerm]);

   React.useEffect(() => {
    if (!searchTerm) return;
   fetch(`${API_ENDPOINT}${searchTerm}`)
   .then((response) => response.json())
   .then((result) => {
   setStories(result.hits);
   })
   .catch(() => {
   //Handle Error
   });
   }, [searchTerm]);

   <List list={stories} onRemoveItem={handleRemoveStory} />

   const [isLoading, setIsLoading] = React.useState(false);
……
React.useEffect(() => {
if (!searchTerm) return;
setIsLoading(true);
fetch(`${API_ENDPOINT}${searchTerm}`)
.then((response) => response.json())
.then((result) => {
setIsLoading(false);
setStories(result.hits);
})
.catch(() => {
});
}, [searchTerm]);
return (
  <div>
  …
  <hr />
  {isLoading ? (
  <p>Loading ...</p>
  ) : (
  <List list={stories} onRemoveItem={handleRemoveStory} />
  )}
  </div>
  );
  };
  const [isError, setIsError] = React.useState(false);
…
React.useEffect(() => {
if (!searchTerm) return;
setIsLoading(true);
fetch(`${API_ENDPOINT}${searchTerm}`)
.then((response) => response.json())
.then((result) => {
setIsLoading(false);
setStories(result.hits);
})
.catch(() => {
setIsLoading(false);
setIsError(true);
});
}, [searchTerm]);

return (
  <div>
  …
  <hr />
  {isError && <p>Something went wrong ...</p>}
  {isLoading ? (
  <p>Loading ...</p>
  ) : (
  <List list={stories} onRemoveItem={handleRemoveStory} />
  )}
  </div>
  );
  };

  <button
type="button"
disabled={!searchTerm}
onClick={handleSearchSubmit}
>
Submit
</button>

const [url, setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`);
const handleSearchSubmit = () => {
setUrl(`${API_ENDPOINT}${searchTerm}`);
};

React.useEffect(() => {
  setIsLoading(true);
  fetch(url)
  .then((response) => response.json())
  .then((result) => {
  setStories(result.hits);
  setIsLoading(false);
  })
  .catch(() => {
  setIsError(true);
  setIsLoading(false);
  });
  }, [url]);
  
export default App;