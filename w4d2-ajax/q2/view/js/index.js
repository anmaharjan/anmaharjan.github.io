$(() => {
    let textBox = $("#text_box"), form = $("#magic8"),
        btn = $("#btn"), error = $("#error");

    form.submit(() => {
       askQuestion();
       return false;
    });

    function askQuestion(){
        $.get('/ask',
            {
                contentType: "application/json; charset=utf-8"
            })
            .done((res) => {
                let json = JSON.parse(res);
                textBox.val(json.answer);
                textBox.focus(function () {
                    this.select();
                });
            })
            .fail(() => {
                error.removeClass("hidden");
                error.addClass("show");
            });
    }

});