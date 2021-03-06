$(() => {
    $("#add").submit(() => {
        let data = {prodId: $("#add input[name=prodId]").val(),
            prodCount: $("#add input[name=prodCount]").val()};
        console.log(data);
        $.post("/addToCart", {
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done((res) => {
            let json = JSON.parse(res);
            $(".message-div").empty()
                .text('Success!! Added to the cart.')
                .addClass('success')
                .removeClass('error');
            $("#cart_size").empty().text(json.cartSize);
        }).fail(() => {
            $(".message-div").empty()
                .text('Error!! Cannot add to the cart.')
                .addClass('error')
                .removeClass('success');
        });
        return false;
    });
});