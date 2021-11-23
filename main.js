$(document).ready(() => {
    $("h5.product_title").click(() => {
        $(".detail").fadeToggle(300);
        $(".clickme").slideToggle(300);
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
const ListRenderingApp = {
    data() {
        return {
            todos: []
        }
    },
    methods: {
        show() {
            axios.get('http://127.0.0.1:8000/products/?format=json')
                .then((response) => {
                    this.todos = response.data;
                    console.log(response.data)
                })
                .catch((error) => console.log(error))
        }
    },
    beforeMount() {
        axios.get('http://127.0.0.1:8000/products/?format=json')
            .then((response) => {
                this.todos = response.data;
                console.log(response.data)
            })
            .catch((error) => console.log(error))
    },
}
Vue.createApp(ListRenderingApp).mount('#list-rendering');