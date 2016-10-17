var vm = new Vue({
	el:'#app',
	data: {
		complete: [],
		view: "all",
		favs: []
	},
	computed: {
		filtered: function(){
			if(this.view === 'favourites'){
				return this.favourites;
			}

			return this.complete;
		},
		favourites: function(){
			var favData = [];
			var that = this;
			this.complete.forEach(function(item){
				if(that.isFavourite(item.id)){
					favData.push(item);
				}
			});
			return favData;
		}
	},
	methods: {
		fetchData: function(){
			this.$http.get('content/data.json').then(function(response) {
				this.complete = response.body;
			});
		},

		toggleFavourite: function(id){
			this.getFavourites();

			if(this.isFavourite(id)){
				this.favs.splice(this.favs.indexOf(id),1);
			}else{
				this.favs.push(id);
			}

			this.setFavourites();
		},
		isFavourite: function(id){
			return this.favs.indexOf(id) !== -1;
		},
		getFavourites: function(){
			try{
				favs = JSON.parse(localStorage.getItem('favourites'));
				if(favs === null){
					this.favs = [];
				}else{
					this.favs = favs;
				}
			}catch(e){
				this.favs = [];
			}
		},
		setFavourites(){
			localStorage.setItem('favourites', JSON.stringify(this.favs));
		}
	}
});

vm.fetchData();
vm.getFavourites();