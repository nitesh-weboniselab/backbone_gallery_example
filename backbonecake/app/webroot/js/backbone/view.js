var Album = Album || {};
Album.Gallery = Album.Gallery || {};

Album.Gallery.view = (function () {
    return{
        dashboardView:Backbone.View.extend({
            tagName:"div",
            events:{
                "click #createAlbum":"createAlbum",
                "click #seeList":"seeList"
            },

            dashboardViewTemplate:_.template($('#dashboardTemplate').html()),

            initialize:function(opt) {
                this.userId = opt.userId;
                this.$el = opt.el;
                this.$el.html('');
                this.render();
            },
            render:function() {
                this.$el.html(this.dashboardViewTemplate({userId:this.userId}));
            },
            createAlbum:function() {
                var id = $('#userId').val();
                var create = new Backbone.Router();
                create.navigate('createAlbum/' + id, {trigger:true});
            },
            seeList:function(){
                var listAlbums = new Backbone.Router();
                listAlbums.navigate('listAlbums', {trigger:true});
            }

        }),


        createAlbumView:Backbone.View.extend({
            tagName:"div",
            events:{
                "click #createAlbumBtn":"createUserAlbum"
            },
            createAlbumTemplate:_.template($('#createAlbumTemplate').html()),

            initialize:function(opt) {
                this.createAlbumModel = opt.createAlbumModel;
                this.$el = opt.el;
		this.userId = opt.userId;
                this.$el.html('');
                this.$el.html(this.createAlbumTemplate());
            },

            createUserAlbum:function() {
                self = this;
                if (this.validAlbumName()) {
                    this.createAlbumModel.save(
                        {
                            name:$('#albumName').val(),
                            user_id:this.userId
                        },
                        {
                            wait:true,
                            success:function (model, response) {
                                if (!response.error) {
//                                    self.$el.html(self.addPhotoTemplate);
                                    var addPhotoRouter = new Backbone.Router();
                                    addPhotoRouter.navigate('addPhoto/'+response.albumId,({trigger:true}));
                                }
                            }
                        }
                    );
                }
            },
            validAlbumName:function() {
                $('#createAlbumForm').validate(
                    {
                        rules:{
                            albumName:{required:true}
                        },
                        messages:{
                            albumName:"Please provide album name"
                        }
                    }
                );
                if ($('#createAlbumForm').valid()) {
                    return true;
                }
                return false;
            }


        }),

        userLoginView:Backbone.View.extend({
            events:{
                "click #userLoginBtn":"userAuthenticateAction"
            },
            userLoginTemplate:_.template($("#userLoginTemplate").html()),
            initialize:function(opt) {
                this.userLoginModel = opt.userLoginModel;
                this.$el = opt.el;
                this.render();
            },

            render:function(e) {
                this.$el.html(this.userLoginTemplate());
                return this;
            },

            userAuthenticateAction:function(e) {
                if (this.validateLogin()) {
                    this.userLoginModel.save({
                            username:$('#username').val(),
                            password:$('#password').val()
                        },
                        {
                            wait:true,
                            success:function(model, response) {
                                if (!response.error) {
                                    console.log("Successfull");
                                    console.log(response.userId);
                                    var dashboardRouter = new Backbone.Router();
                                    dashboardRouter.navigate('dashboard/' + response.userId, {trigger:true});
                                } else {
                                    $('#loginError').show();
                                }
                            },
                            error:function(model, error) {

                            }
                        }
                    );
                }
                return true;
            },

            validateLogin:function(e) {
                $('#userLoginForm').validate({
                    rules:{
                        username:{
                            "required":true
                        },
                        password:{
                            "required":true
                        }
                    },
                    messages:{
                        username:"Please provide username",
                        password:"Please provide password"
                    }
                });

                if ($('#userLoginForm').valid()) {
                    return true;
                }
                return false;
            }
        }),

        listAlbumView:Backbone.View.extend({
            events:{
                "click .albumList":"albumList",
                "click .addMorePhoto":"addMorePhoto"
            },

            albumListTemplate:_.template($('#albumListTemplate').html()),
            initialize:function(opt) {
                this.listAlbumModel = opt.listAlbumModel;
                this.$el = opt.el;
                this.$el.html('');
                this.listenTo(this.listAlbumModel, 'change', this.render);
            },
            render:function () {
                this.listAlbumCollection = new Album.Gallery.collection.listAlbumCollection(this.listAlbumModel.get('albumList'));
                if (this.listAlbumCollection) {
                    this.$el.html();
                    this.listAlbumCollection.each(function (model) {
                        this.$el.append(this.albumListTemplate(model.toJSON()));
                    }, this)
                }
            },
            albumList:function(e){
                var albumId = $(e.currentTarget).attr('id');
                var listPhotoRouter = new Backbone.Router();
                listPhotoRouter.navigate('listPhotos/' + albumId, {trigger:true});

            },
            addMorePhoto:function(e){
                var albumId = $(e.currentTarget).attr('id');
                var addPhotoRouter = new Backbone.Router();
                addPhotoRouter.navigate('addPhoto/'+albumId,({trigger:true}));
            }
        }),

        listPhotoView:Backbone.View.extend({
            events:{
                "click .albumList":"albumList"
            },
            photoListTemplate:_.template($('#photoListTemplate').html()),
            initialize:function(opt){
                this.listPhotoModel = opt.listPhotoModel;
                this.$el = opt.el;
                this.$el.html('');
                this.listenTo(this.listPhotoModel, 'change', this.render);
            },
            render:function(){
                this.listPhotoCollection = new Album.Gallery.collection.listPhotoCollection(this.listPhotoModel.get('photoList'));
                if (this.listPhotoCollection) {
                    this.listPhotoCollection.each(function (model) {
                        this.$el.append(this.photoListTemplate(model.toJSON()));
                    }, this)
                }
                $(".group1").colorbox({rel:'group1'});

            }
        }),

        addPhotoView:Backbone.View.extend({
            events:{
                "click .addmorePhotoBtn":"addMorePhoto"
            },
            addPhotoTemplate:_.template($('#addPhoto').html()),

            initialize:function(opt){
                this.addPhotoMode = opt.addPhotoModel;
                this.$el = opt.el;
                this.albumId = opt.albumId;
                this.$el.html('');
                this.$el.append(this.addPhotoTemplate());
                this.render();
            },

            render:function(){

                jQuery('#fine-uploader').fineUploader({
                    request: {
                        endpoint: 'album/addPhoto/'+this.albumId
                    },
                    text:{
                        uploadButton:'<i class="icon-plus icon-white"></i> Select File'
                    },
                    multiple:false,
                    callbacks:{
                        onSubmit:function (id, fileName) {
                        },
                        onCancel:function (id, fileName) {
                        },
                        onComplete:function (id, fileName, responseJSON) {
                        }
                    }

                });
            },

            addMorePhoto:function() {
                this.$el.html('');
                this.$el.append(this.addPhotoTemplate());
                this.render();
            }


        })
    };
})();
