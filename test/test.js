const assert = require('assert');
const expect = require("chai").expect;
const chai = require("chai");
const justEat = require('../index.js');
const axios = require('axios');

chai.should();
chai.use(require('chai-things'));

const HEADERS = {
  "Accept-Tenant": "uk",
  "Accept-Language": "en-GB",
  "Authorization": "Basic VGVjaFRlc3RBUEk6dXNlcjI=",
  "Host": "public.je-apis.com"
};

const BASE_URL = "https://public.je-apis.com";


describe('Operations about discovery', function() {
  const discovery = {postcode: 'EC4M 7RF', catId: 15 }

  it("Get discovery restaurants", function(done) {
    justEat.discoveryRestaurant(discovery, function(error, response) {
      if(error) return done(error);
      done();
    });
  });

  it("Get discovery metadata", function(done) {
    justEat.discoveryMeta(discovery, function(error, response) {
      if(error) return done(error);
      done();
    });
  });
});

describe('Operations about Just Eat Health', function() {

  it("Runs all know health checks", function(done) {
    justEat.healthCheck(function(error, response) {
      if(error) return done(error);
      done();
    });
  });
});

describe('Operations about menus', function() {
  const delivery = {menuId:39651, type: 'deliveryareas'};
  const productcategories = {menuId:39651, type: 'productcategories'};
  const menuproducts = {menuId:39651, catId:15 };

  it("Gets delivery areas from a given menu ID 39651", function(done) {
    justEat.menuData(delivery, function(error, response) {
      if(error) return done(error);
      done();
    });
  });

  it("Gets categories for a given menu ID 39651", function(done) {
    justEat.menuData(productcategories, function(error, response) {
      if(error) return done(error);
      done();
    });
  });

  it("Gets all products from categoryI ID 15", function(done) {
    justEat.menuProducts(menuproducts, function(error, response) {
      if(error) return done(error);
      done();
    });
  });
});

describe('Operations about restaurants', function() {
  const postcode = {q:'EC4M 7RF'};
  const seoname = {seonames: 'Pizza Pan'}
  const freetext = {freetext: 'Papa Johns'}
  const details = {id: 11245, type: "details"};
  const menus = {id: 11245, type: "menus"};
  const reviews = {id: 11245, type: "reviews", params: { p:1, s: 10 }};
  const categories = {id: 11245, type: "productcategories", params: {type: 'delivery', time: new Date().getTime(), zipcode: 'EC4M 7RF'}};
  const availablemenus = {id: 11245, type: "availablemenus", params: {time: new Date().getTime() }};

  it("Finds all restaurants that deliver to a postcode", function(done) {
    justEat.restaurants(postcode, function(error, response) {
      if(error) return done(error);
      done();
    });
  });

  it("Finds all restaurants by SEO Name", function(done) {
    justEat.restaurants(seoname, function(error, response) {
      if(error) return done(error);
      done();
    });
  });

  it("Finds all restaurants by Free Text", function(done) {
    justEat.restaurants(freetext, function(error, response) {
      if(error) return done(error);
      done();
    });
  });

  it("Gets restaurant details for ID 11245", function(done) {
    justEat.restaurantData(details, function(error, response) {
      if(error) return done(error);
      done();
    });
  });

  it("Gets restaurant menus for ID 11245", function(done) {
    justEat.restaurantData(details, function(error, response) {
      if(error) return done(error);
      done();
    });
  });

  it("Gets paged list of reviews for restaurant ID 11245 - Page 1, 10 reviews", function(done) {
    justEat.restaurantData(reviews, function(error, response) {
      if(error) return done(error);
      done();
    });
  });

  it("Gets all product categories for restaurant ID 11245 for delivery NOW", function(done) {
    justEat.restaurantData(categories, function(error, response) {
      if(error) return done(error);
      done();
    });
  });

  it("Gets all available menus for restaurant ID 11245 at time NOW", function(done) {
    justEat.restaurantData(availablemenus, function(error, response) {
      if(error) return done(error);
      done();
    });
  });

  it("Gets all available restaurant badges", function(done) {
    justEat.restaurantBadges(function(error, response) {
      if(error) return done(error);
      done();
    });
  });

});

describe('Operations about terms', function() {

  it("Gets the latest terms and conditions", function(done) {
    justEat.terms(function(error, response) {
      if(error) return done(error);
      done();
    });
  });
});
