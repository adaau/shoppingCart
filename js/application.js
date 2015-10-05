window.onload = function() {

/* Function to create new row in shopping list */
function newRow() {
  /* Create a new div row with four divs inside */
  var newDiv = $("<div>", {class: "item-row"});
  var newChildDiv1 = $("<div>", {class: "item-name col1"});
  var newChildDiv2 = $("<div>", {class: "item-price col2"});
  var newChildDiv3 = $("<div>", {class: "item-qty col3"});
  var newChildDiv4 = $("<div>", {class: "item-total col4"});

  var newLabel = $("<label>QTY</label>");
  var newInput = $("<input>");
  var newBtn = $("<button>Cancel</button>", {class: "cancel-btn"});

  newChildDiv3.append(newLabel, newInput, newBtn);
  newDiv.append(newChildDiv1, newChildDiv2, newChildDiv3, newChildDiv4);
  
  /* Prepend the new row to the top of the shopping list */
  $("#shop-list").prepend(newDiv);
  
  /* Get item name input - why need to put inside function?? */
  var itemNameInput = $("input#item-name-input").val();

  /* Get item price input */
  var itemPriceInput = $("input#item-price-input").val();

  /* Put item name in first column of new row */
  $("#shop-list div.item-row:first div:first").html(itemNameInput);

  /* Put item price in second column of new row */
  $("#shop-list div.item-row:first div:nth-child(2)").html(itemPriceInput);

  /* Put $0 in 4th column of new row (to be calculated) */
  $("#shop-list div.item-row:first div:nth-child(4)").html("$0.00");
}

/* Add event listener to Create button */
$("#create-btn").click(newRow);


/* Function to calculate and set total price of item */
function setItemTotal() {
  /* Get item qty input */
  var itemQtyInput = $("#shop-list div.item-row:first div:nth-child(3) input").val();

  /* Get item price */
  var itemP = $("#shop-list div.item-row:first div:nth-child(2)").html();

  /* Calculate product of item price and item qty */
  var itemTotal = itemQtyInput * itemP;

  /* put in col4*/ 
  $("#shop-list div.item-row:first div:nth-child(4)").html(itemTotal);
}

/* Add event listener to set item total in column 4 when item qty input blurs out - works when I paste function and call into console but not as is*/
$("#shop-list div.item-row:first div:nth-child(3) input").blur(setItemTotal);

/* When Cancel button is clicked, change the item qty to 0 - doesn't work */
$(".cancel-btn").click(function() {
  var qtyInput = $(this).closest("input");
  qtyInput.val("0");
  });

/* Sum all item totals to get the total price ... getting NaN */
var sum = 0;
$(".item-total").each(function() {
	sum += parseFloat($(this).text());
})

/* Set the total price to the sum */
$("#total-price").html(sum);

}