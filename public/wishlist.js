$('[data-role="getAllBooksInWishlist"]').click(function () {
  $.get("/wishlist", (response) => {
    const wrapperBook = $('[data-role="wraperBooks"]');
    populateOptionsWishlist(wrapperBook, response);
  });
});

function populateOptionsWishlist(selectElement, itratable) {
  selectElement.html("");
  $.each(itratable, function (_, itrate) {
    const div = $("<div>");
    div.append(`<div data-role="testing"> <span style="font-weight:bold;"> title: ${itrate.title}</span>
    <p>description: ${itrate.description}</p></div>`);

    div.attr("value", itrate._id);
    div.append(
      `<button data-role="btnDeleteWishlist">remove book from wishlist</button>`
    );
    selectElement.append(div);
  });
  $('[data-role="btnDeleteWishlist"]').click(function () {
    let oneWishlistDelete = $('[data-role="testing"]').val();
    $.ajax({
      url: "/wishlist/:delById",
      type: "DELETE",
      data: {
        _id: oneWishlistDelete,
      },
      success: function () {
        $('[data-role="wraperBooks"]').append(
          "<p>The wishlist was deleted</p>"
        );
      },
    });
  });
}
