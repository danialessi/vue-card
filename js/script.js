var app = new Vue (
    {
        el:"#root",
        data: {
            albums: [],
            genres: [],
            selected: ''
        },

        methods: {
        },
        mounted() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((response) => {
                    const result = response.data;
                    this.albums = result.response;

                    this.albums.forEach(element => {
                        let genre = element.genre
                        
                    });
                });   
        }
    }
)