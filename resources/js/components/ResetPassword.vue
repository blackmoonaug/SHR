<template>
    <div class="container">
        <div class="row justify-content-center mb-4">
            <div class="col-md-12 col-lg-3">
                <img src="/images/fp.png" class="img-fluid" />
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-8">
                <div class="card card-primary card-outline">
                    <div class="card-header">Reset Password</div>
                    <div class="card-body">
                        <form @submit.prevent="submitReset" @keydown="reset_pass.onKeydown($event)">
                            <div class="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    v-model="reset_pass.password"
                                    required
                                    :class="{'is-invalid' : reset_pass.errors.has('password')}"
                                    id="password_"/>

                                <has-error :form="reset_pass" field="password"></has-error>
                            </div>
                            <div class="form-group">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    v-model="reset_pass.password_confirmation"
                                    required
                                    :class="{'is-invalid' : reset_pass.errors.has('password_confirmation')}"
                                    id="password_confirmation_"/>

                                <has-error :form="reset_pass" field="password_confirmation"></has-error>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary" :disabled="reset_pass.busy">Reset Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Form, HasError, AlertError} from "vform";

    Vue.component(HasError.name, HasError);
    Vue.component(AlertError.name, AlertError);

    export default {
        data() {
            return {
                reset_pass: new Form({password: "", password_confirmation: ""})
            };
        },
        methods : {
            submitReset() {
                Swal.fire({
                    title: "Are you sure?",
                    text: "Are you sure you want to change your password?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, Proceed",
                    showLoaderOnConfirm: true,
                    preConfirm: () => {
                        return this
                            .reset_pass
                            .post("/api/AuthRPW")
                            .catch(err => {
                                //Swal.fire("Opps!", "An Error Occured!, Please contact the developer", "error");
                                Swal.close();
                            })
                            .then(data => {
                                return data.data;
                            });
                    }
                }).then(data => {
                    if (!data.value.success) {
                        Swal.fire("Opps!", data.value.message, "error");
                    }
                    if (data.value.success) {
                        Swal.fire("Success", "Password was changed", "success");
                        Router.push("home");
                    }
                })
            }
        },
        mounted() {}
    };
</script>

<style></style>