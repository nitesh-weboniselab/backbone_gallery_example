var Album = Album || {};
Album.Gallery = Album.Gallery || {};
Album.Gallery.model = (function(){
    return{
        addAlbum:Backbone.Model.extend({
            initialize:function(id){
                this.url ='album/addAlbum/';
            },
            url:this.url
        }),
        userLoginModel : Backbone.Model.extend({
            initialize:function(){
                this.url = 'album/userlogin/'
            },
            url:this.url
        }),
        addPhotoModel : Backbone.Model.extend({
            initialize:function(){
                this.url = 'album/addPhoto/'
            },
            url:this.url
        }),
        listAlbumModel : Backbone.Model.extend({
            default:{
              userId:0
            },
            initialize:function(){
                this.url = 'album/listAlbum/'
            },
            url:this.url
        }),
        listPhotoModel : Backbone.Model.extend({
            initialize:function(albumId){
                this.url = 'album/listPhoto/'+albumId
            },
            url:this.url
        }),
        deletePhotoModel : Backbone.Model.extend({
            initialize:function(photoId){
                this.url = 'album/deletePhoto/'+photoId
            },
            url:this.url
        })
    };
})();