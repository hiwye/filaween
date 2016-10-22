module.exports = {
    data: function () {
        return {
            favs: []
        }
    },

    created() {
        this.getFavourites();
    },

    methods: {
        toggleFavourite(id) {
            this.getFavourites();

            if(this.isFavourite(id)){
                this.favs.splice(this.favs.indexOf(id),1);
            }else{
                this.favs.push(id);
            }

            this.setFavourites();
        },

        isFavourite(id) {
            return this.favs.indexOf(id) !== -1;
        },

        getFavourites() {
            try{
                var favs = JSON.parse(localStorage.getItem('favourites'));
                if(favs === null){
                    this.favs = [];
                }else{
                    this.favs = favs;
                }
            }catch(e){
                this.favs = [];
            }
        },

        setFavourites() {
            localStorage.setItem('favourites', JSON.stringify(this.favs));
        }
    }
};