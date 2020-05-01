## Ajax Type Ahead

**Specifications:**

1. When user starts typing in the input field display a list of matched suggestions highlighting the words that match.

**Approach:**

1. Fetch data (json blob) and push it into a new array using the spread operator so the array is flat.

2. Query the html document to get the input field and the placeholder for the list of matched data.

3. Add an event to the input field to call a function everytime a new input is typed.

4. Create method to display results. This method uses a well defined method that returns an array of find matches. Get that array and map over it to create the markup. Pass the markup in the innerHtml of the placeholder.
