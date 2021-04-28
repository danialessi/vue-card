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

                        // se l'elemento non è incluso nell'array pushalo 
                        if (!this.genres.includes(element.genre)) {
                            this.genres.push(element.genre);
                        }
                        
                    });
                });   
        }
    }
)