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

export default App;