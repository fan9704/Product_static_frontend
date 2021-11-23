$(document).ready(() => {
    $('.message a').click(function() {
        $('.form_container').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });
});
const nav_app = {
    data() {
        return {
            show: true
        }
    },

}
Vue.createApp(nav_app).mount('#nav');
const form_app = {
    data() {
        return {
            username: "",
            password: "",
            first_name: "",
            last_name: "",
            login_username: "",
            login_password: "",
            email: "",
            check_password: "",
            show: true,

        }
    },
    methods: {
        login() {
            axios.post('http://127.0.0.1:8000/accounts/login/', {
                    "username": this.login_username,
                    "password": this.login_password,
                }).then((response) => {
                    //console.log(response.data);
                    if (response.data.login == true) {
                        window.location.href = "http://127.0.0.1:5500/index.html";
                        alert("login success")
                    } else {
                        alert(response.data.error)
                    }
                })
                .catch((error) => console.log(error))
        },
        register() {
            if (this.password != this.check_password) {
                alert("password and check_password not same");
            } else {
                axios.post('http://127.0.0.1:8000/accounts/register/', {
                        "username": this.username,
                        "password": this.password,
                        "email": this.email,

                    }).then((response) => {
                        //console.log(response.data);
                        if (response.data.register == true) {
                            alert("register success");
                            $('.form_container').animate({ height: "toggle", opacity: "toggle" }, "slow");
                        } else {
                            alert("register fail");
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        alert("register failed");
                    })
            }

        },
        reset() {
            this.username = "";
            this.password = "";
            this.first_name = "";
            this.last_name = "";
            this.login_username = "";
            this.login_password = "";
            this.email = "";
            this.check_password = "";
        },
        edit() {
            if (this.password != this.check_password) {
                alert("password and check_password not same");
            } else {
                axios.post('http://127.0.0.1:8000/accounts/edit/', {
                        "email": this.email,
                        "first_name": this.first_name,
                        "last_name": this.last_name,
                    }).then((response) => {
                        console.log(response.data);
                        if (response.data.edit == true) {
                            alert("edit success");
                        } else {
                            alert("edit fail");
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        alert("edit failed");
                    })
            }
        },
        get_profile() {
            axios.get('http://127.0.0.1:8000/accounts/get_profile/')
                .then((response) => {
                    console.log(response.data);
                })
        }
    }
}
Vue.createApp(form_app).mount('#form');