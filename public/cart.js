$('[data-role="getAllBooksInCart"]').click(function () {
  $.get("/cart", (response) => {
    const wrapperBooks = $('[data-role="wraperBooks"]');
    populateOptions(wrapperBooks, response);
  });
});

function populateOptions(selectElement, itratable) {
  selectElement.html("");
  $.each(itratable, function (_, itrate) {
    const div = $("<div>");
    div.text(itrate.title);
    div.attr("value", itrate._id);
    const removeFromCart = $(`<button>remove book from cart</button>`);
    removeFromCart.attr("value", itrate._id);
    div.append(removeFromCart);
    selectElement.append(div);

    removeFromCart.click(()=>{
        const bookRemoved = itrate._id;
      console.log(bookRemoved);
      fetch("/cart/" + bookRemoved, {
        method: "DELETE",
        headers: {
          contentType: "application/json",
        }
        //   .then((res) => res.json()) 
        //   .then((res) => console.log(res)),
      });
    })
  });
}


