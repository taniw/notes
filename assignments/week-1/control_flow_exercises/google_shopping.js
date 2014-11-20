var data = require("./products.json")

// Write your solutions below






// Use the product search result in your file to check the following:

// 1.) The `kind` of results you're are dealing  are `shopping#products`. Go through the `items` and find all results that have `kind` of `shopping#product`. 
// How many are there? Where else is this count information stored in the search results?

var count=0;
var items = data.items;
for (var i=0; i<items.length; i++) {
	if(items[i].kind ==="shopping#product") {
		count++;
	}
}
	console.log(count);
// 2.) Find all items with a `backorder` availability in `inventories`.



// 3.) Find all items with more than one image link.


// 4.) Find all `canon` products in the items (careful with case sensitivity).

// 5.) Find all `items` that have **product** **author** **name** of "eBay" and are brand "Canon".

// 6.) Print all the products with their **brand**, **price**, and a **image link**