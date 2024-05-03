function getDresses() {
    let url = 'http://127.0.0.1:8080/dresses';

    $.get(url, function (data, status) {
        if (status == "success") {
            showDresses(data);
        }
    });
}

function showDresses(data) {
    let content = ``;

    for (const dress of data) {
        content += `<div class="col-md-6 col-lg-3">
            <div class="rounded dress-box border">
                <img src="img/${dress.image}" class="rounded-top mb-3 my-image" alt="...">
                <div class="p-3 dress-content">
                    <div class="row">
                        <div class="col-8">
                            <h5>${dress.brand}</h5>
                        </div>
                        <div class="col-2">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <div class="col-2">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                    <p>${dress.name}</p>
                    <p class="price">₹${dress.current_price} <s>MRP ${dress.actual_price}</s></p>
                </div>
            </div>
        </div>`;
    }

    $("#dress-row").html(content);

    $(".fa-heart").click(function () {
        $(this).toggleClass("fa-regular fa-solid");
    });
}

$(document).ready(function () {
    let page = $("#page").val();
    if (page == "home") {
        console.log("Home page");
        getDresses();
    }
});
