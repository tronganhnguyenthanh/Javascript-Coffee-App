function getPaymentForOrderCoffee(){
 var prod_name = document.getElementById("prod_name").value;
 var product_quantity = document.getElementById("prod_quantity").value;
 var product_price = document.getElementById("prod_price").value;
 var product_image_link = document.getElementById("prod_img").value;
 document.getElementById("total_price").innerHTML += "<label>" + "Name: "  + "</label>" + "<b>" + " "  + prod_name + "</b>" + "<br>" + "<hr>";
 document.getElementById("total_price").innerHTML += "<label>" + "Image: " + "</label>" + `<img src=${product_image_link}>` + "<br>" + "<hr>"
 document.getElementById("total_price").innerHTML += "<label>" + "Quantity: " + "</label>" + "<b>" + " " + product_quantity + " cups " + "</b>" + "<br>" + "<hr>";
 document.getElementById("total_price").innerHTML += "<label>" + "Price: " + "</label>" + "<b>" + " " + product_price + " VNĐ " + "</b>" + "<br>" + "<hr>";
 document.getElementById("total_price").innerHTML += "<label>" + "Total price is: " + "</label>" + "<b>" + " " + (product_price * product_quantity) + " VNĐ " + "</b>" + "<br>" + "<hr>";
}