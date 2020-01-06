export default async function checkStatus() {
    await axios
        .get("api/user/data")
        .catch(err => {
            if (err.response.status === 401) {
                Swal.fire(
                    "Kicking You Out!",
                    "You were not logged in",
                    "error"
                );
            } else {
                Swal.fire(
                    "Something went wrong!",
                    "The Developers currently fixing this",
                    "error"
                );
            }

            setTimeout(function() {
                location.replace('/login');
            }, 2000);

        })
        .then(data => {
            // OK
        });
}