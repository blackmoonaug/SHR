const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

$(document).ready(function () {

    $('#date-rsrv').on('change', function () {
        validate_date($(this).val())
    })

});

function validate_date(date) {

    httpAjax('post', '/payment_reservation/validate_date', {
        data: {
            'date-rsrv': date
        }
    }).then(res => {

        if (res.success) {
            $('#date-rsrv').removeClass('is-invalid');
            $('#date-rsrv').addClass('is-valid');
            Toast.fire({
                type: 'success',
                title: res.message
            })
        } else {
            if (res.data.rt) {
                $('#date-rsrv').removeClass('is-invalid');
                $('#date-rsrv').addClass('is-valid');
                $('#date-rsrv').val(res.data.rsrv.reserved_date);
            } else {
                $('#date-rsrv').removeClass('is-valid');
                $('#date-rsrv').addClass('is-invalid');
            }
            Toast.fire({
                type: 'error',
                title: res.message
            })
        }
    });

}