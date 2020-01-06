export default {
    gc_data: {
        grades: [],
        isLoadingGrades: false,
        gradesAlreadyLoaded: false,
        user: [],
        userLoaded: false,
        isLoadingUser: false,
    },

    gc_methods: {
        async getGrades() {
            GCDATA.isLoadingGrades = true;
            Toast.fire({ title: "Grade Request on its way to Server, Please Wait! ", type: "info" });
            await axios.get('/api/grades').catch(err => {
                console.log(err);
                GCDATA.isLoadingGrades = false;
                GCDATA.gradesAlreadyLoaded = false;
                Toast.fire({ title: "An Error Occured, Developers is fixing this", type: "error" });
            }).then(data => {
                GCDATA.grades = data.data
                GCDATA.isLoadingGrades = false;
                GCDATA.gradesAlreadyLoaded = true;
                Toast.fire({ title: "Your grades have arrived, Refresh the Grade Table now !", type: "success" });
            })
        },

        async getUser() {
            GCDATA.isLoadingUser = true;
            Toast.fire({ title: "Loading Student Information, Please Wait! ", type: "info" });
            await axios.get('/api/user/data').catch(err => {
                console.log(err);
                GCDATA.isLoadingUser = false;
                GCDATA.userLoaded = false;
                Toast.fire({ title: "An Error Occured on Student Information, Developers is fixing this", type: "error" });
            }).then(data => {
                GCDATA.user = data.data
                GCDATA.isLoadingUser = false;
                GCDATA.userLoaded = true;
                Toast.fire({ title: "Student Information Loaded", type: "success" });
                return true;
            })
        }
    }
}