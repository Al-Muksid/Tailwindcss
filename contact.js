var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/abcdefghijklmnopqrstuvwxyz1234567890/https://script.googleusercontent.com/macros/echo?user_content_key=-yfr_A7gxpC0wibbQTHhgcwJ497Xm-upqX6bESdDuNQ7BHdpa8Jt33uoQbQseknHUCAWeuXnBelcDKo8RCYxy-8y2gijL9LXm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGmY3DVNn5W-1tWzDDYidRDqm_0-XBxn85GFNHbLyRqsMJKpZ6s3EAHP78SRIkLpz0W-dnclfdIe&lib=MZ1KhOihmJmA8CvqSkjSr02v3WnYuTGXI'

$('#submit-form').on('click', function(e) {
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
    }).success(
        // do something
    );
})