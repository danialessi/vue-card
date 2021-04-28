var app = new Vue (
    {
        el:"#root",
        data: {

        },

        methods: {

        },
        mounted() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((response) => {
                    console.log(response);
                })
            
        }
    }
)