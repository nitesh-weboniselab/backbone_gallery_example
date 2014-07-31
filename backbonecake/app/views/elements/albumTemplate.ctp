<script type="text/html" id="userLoginTemplate">
    <div>
        <form id="userLoginForm" method="post" action="">
        <label>User Name:</label><input type="text" id="username" name="username">
        <label>Password :</label><input type="password" id="password" name="password">
        <span style="display:none" id='loginError'>Username or password is wrong</span>
        </form>
        <button id="userLoginBtn">Login</button>
    </div>
</script>

<script type="text/html" id="dashboardTemplate">
    <div>
      <h3> Dashboard </h3>
        <input type="hidden" id="userId" value="<%= userId%>" />
        <a href="javascript:void(0)" id="createAlbum" >Create Album</a>
        <a href="javascript:void(0)" id="seeList" >List Of album</a>
    </div>
</script>

<script type="text/script" id="createAlbumTemplate">
    <form id="createAlbumForm" method="post" action="">
    <input type="text" id="albumName" name="albumName">
    </form>
    <button id="createAlbumBtn">Create</button>
</script>

<script type="text/script" id="addPhoto">
    <form id="addPhotoForm" method="post" action="" enctype="multipart/form-data">


        <div id="fine-uploader"></div>
    </form>
    <button class="addPhoto">Add Photo</button>
</script>

<script type="text/script" id="albumListTemplate">
    <ol>

    <% _.each(albums, function(album){ %>

<li><a href="javascript:void(0)" class="albumList" id="<%= album.id%>"><%= album.name%></a><button id="<%= album.id%>" class="addMorePhoto">Add more Photo</button></li>
<%});%>

    </ol>
</script>

<script type="text/script" id="photoListTemplate">
    <ul>
        <% _.each(photos, function(photo){ %>
        <li><a href="<%= photo.name%>" class="group1" rel="group1"><img src="<%= photo.name%>" alt="<%= photo.name%>" height="70" width="70"></a></li>
        <%});%>
    </ul>
</script>