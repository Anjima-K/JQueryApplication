function getDresses() {
    let url = 'http://127.0.0.1:8080/admin/dresses';

    $.get(url, function (data, status) {
        if (status == "success") {
            showDresses(data);
        }
    });
}

function showDresses(data) {
    let content = ``;

    for (const dress of data) {
        content += `<tr>
        <td>${dress.name}</td>
        <td>${dress.brand}</td>
        <td>${dress.image}</td>
        <td>${dress.actual_price}</td>
        <td>${dress.current_price}</td>
        <td>Edit | Delete</td>
    </tr>`;
    }

    $("#dress-table").html(content);
}

function saveDress() {
    let url = 'http://127.0.0.1:8080/admin/dresses';
    let data = {
        "name": $("#name").val(),
        "brand": $("#brand").val(),
        "image": $("#image").val(),
        "actual_price": $("#actualPrice").val(),
        "current_price": $("#currentPrice").val(),
        "dress_detail": {
            "detail": $("#detail").val(),
            "rating": $("#rating").val(),
            "material": $("#material").val()
        }
    };

    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(data),
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            console.log(result);
            window.location.href= "admin-dress.html";
        }
    });
}

$(document).ready(function () {
    let page = $("#page").val();
    if(page == "admin-dress") {
        console.log("Admin-dress page");
        getDresses();
        $("#addDressBtn").click(function (event) {
            event.preventDefault();
            saveDress();
        });
    } else if(page == "admin") {
        console.log("Admin page");
    }
});
