<div id='loginUser'></div>
<div id="album"></div>
 <ul id='list'></ul>
  <div id="NewAlbumcreate">

  </div>
<?php echo $html->css('backbone/colorbox.css'); ?>
<?php echo $html->css('backbone/fineuploader.css'); ?>
<?php echo $this->element('albumTemplate'); ?>
<?php echo $this->Javascript->link('backbone/jquery-1.9.1.min'); ?>
<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>-->
<?php echo $this->Javascript->link('backbone/jquery.validate.min'); ?>
<?php echo $this->Javascript->link('backbone/jquery.fineuploader-3.4.1'); ?>
<?php echo $this->Javascript->link('backbone/jquery.ui'); ?>
<?php echo $this->Javascript->link('backbone/jquery.upload'); ?>
<?php echo $this->Javascript->link('backbone/underscore-min'); ?>
<?php echo $this->Javascript->link('backbone/backbone-min'); ?>
<?php echo $this->Javascript->link('backbone/bbassetsupload'); ?>
<?php echo $this->Javascript->link('backbone/model'); ?>
<?php echo $this->Javascript->link('backbone/view'); ?>
<?php echo $this->Javascript->link('backbone/collection'); ?>
<?php echo $this->Javascript->link('backbone/router'); ?>
<?php echo $this->Javascript->link('backbone/jquery.colorbox'); ?>


