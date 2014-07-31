var Album = Album || {};
Album.Gallery = Album.Gallery || {};

Album.Gallery.collection= (function(){
    return{
        listAlbumCollection  : Backbone.Collection.extend(),
        listPhotoCollection  : Backbone.Collection.extend()
    };
})();