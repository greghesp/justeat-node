# justeat-node

A Node.js library for accessing the JustEat UK API.  This is currently limited to the functions below due to public API key limitations.  Future versions may include the ability to use your own API key, however I have been unable to get my own API key for testing.

Pull requests are welcome.

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

## Testing

justeat-node utilise Mocha testing.  Simply run

```sh
$ npm test
```

# Endpoints

## Restaurants

### Finds all restaurant information

The following scenarios are supported by the ```restaurants``` function

- Search restaurants by postcode and/or cuisine type
- Search restaurants by SEO Names
- Search restaurants by free text

The parameters below are accepted as part of the data object

```javascript
  const data = {q:'EC4M'}; //Optional: {c: <cuisine>, name: <restaurant name>}
  const data = {seonames: 'Pizza Place'}
  const data = {freetext: 'Johns Pizza'} //Optional: {c: <cuisine>, name: <restaurant name>}

justEat.restaurants(data, function(error, response) {
  if(error) return console.log(error);
  console.log(response);
});
```
### Finds data for given restaurant

The following scenarios are supported by the ```restaurantData``` function

- Get restaurant details
- Get menus of a restaurant
- Get paged list of reviews for a given restaurant
- Gets all product categories for a give restaurant
- Get all available menus for a given restaurant and time

The parameters below are accepted as part of the data object

```javascript
  const data = {id: 11245, type: "details"};
  const data = {id: 11245, type: "menus"}; //Optional: params: {delivery: <boolean>, t: <boolean>, postcode: <postcode}
  const data = {id: 11245, type: "reviews", params: { p:1, s: 10 }};
  const data = {id: 11245, type: "productcategories", params: {type: 'delivery', time: new Date().getTime(), zipcode: 'EC4M 7RF'}};
  const data = {id: 11245, type: "availablemenus", params: {time: new Date().getTime() }};

  justEat.restaurantData(data, function(error, response) {
    if(error) return console.log(error);
    console.log(response);
  });
```

### Get restaurant badges

The following scenarios are supported by the ```restaurantBadges``` function

- Get available badges

No parameters are required

```javascript
  justEat.restaurantBadges(function(error, response) {
    if(error) return console.log(error);
    console.log(response);
  });
```

## Menus

### Gets data for given menus

The following scenarios are supported by the ```menuData``` function

- Get delivery areas from a given menu
- Get categories from a give menu

The parameters below are accepted as part of the data object

```javascript
const data = {menuId:39651, type: 'deliveryareas'};
const data = {menuId:39651, type: 'productcategories'};

justEat.menuData(data, function(error, response) {
  if(error) return console.log(error);
  console.log(response);
});
```

### Get products from a menu
The following scenarios are supported by the ```menuProducts``` function

- Get all products from a menu based on the category

The parameters below are accepted as part of the data object

```javascript
const data = {menuId:39651, catId:15 };

justEat.menuProducts(data, function(error, response) {
  if(error) return console.log(error);
  console.log(response);
});
```

## Discovery

### Discover Restaurants

The following scenarios are supported by the ```discoveryRestaurant``` function

- Discover restaurants by postcode

The parameters below are accepted as part of the data object

```javascript
const discovery = {postcode: 'EC4M 7RF', catId: 15 }

justEat.discoveryRestaurant(data, function(error, response) {
  if(error) return console.log(error);
  console.log(response);
});
```
### Discover Metadata

The following scenarios are supported by the ```discoveryMeta``` function

- Get discovery metadata

The parameters below are accepted as part of the data object

```javascript
const discovery = {postcode: 'EC4M 7RF', catId: 15 }

justEat.discoveryMeta(function(error, response) {
  if(error) return console.log(error);
  console.log(response);
});
```


## Terms

### Get Just Eat Terms & Conditions

The following scenarios are supported by the ```terms``` function

- Get latest terms and conditions

No parameters are required

```javascript
justEat.terms(function(error, response) {
  if(error) return console.log(error);
  console.log(response);
});
```

## Health Checks

### Get Just Eat Health

The following scenarios are supported by the ```healthCheck``` function

- Run all known health checks

No parameters are required

```javascript
justEat.healthCheck(function(error, response) {
  if(error) return console.log(error);
  console.log(response);
});
```
