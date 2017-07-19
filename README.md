# justeat-node

A Node.js library for accessing the JustEat UK API.  Pull requests are welcome.

# Installation

To install with NPM
```sh
$ npm install --save justeat-node
```
# Usage

Access to Just Eats API does require an API key, however they provide a basic key for read only access.
At the moment, justeat-node can only access this basic API's and only caters for the UK market

The code below will return all restaurants near the Just Eat Head Office in London

```javascript
var justEat = require("justeat-node");

justEat.restaurants({q: 'EC4M 7RF'}, function(error, response) {
  if(error) console.log(error);
  console.log(response);
});
```
All functions can be found in the test/test.js file

"# justeat-node"
