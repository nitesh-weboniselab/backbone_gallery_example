<?php
/**
 * Created by JetBrains PhpStorm.
 * User: webonise
 * Date: 15/7/14
 * Time: 9:22 AM
 * To change this template use File | Settings | File Templates.
 */

class AlbumController extends AppController {
    var $helpers = array('Form', 'Html', 'Javascript');
    public $uses = array(
        'Album',
        'User',
        'Photo'
    );
    public $components = array(
        'AjaxFileUpload'
    );

    public function index() {

    }

    public function userlogin(){
        $this->layout = 'ajax';
        $this->autoRender = false;
        $data = json_decode(file_get_contents('php://input'));
        $sendUserId = $this->User->checkUsernamePassword($data->username,$data->password);
        echo json_encode($sendUserId);
    }

    public function addAlbum(){
        $this->layout = 'ajax';
        $this->autoRender = false;
        $data = json_decode(file_get_contents('php://input'));
        $sendAlbumData = $this->Album->addAlbum($data);
        echo json_encode($sendAlbumData);
    }

    public function addPhoto($albumId){
        $this->layout = 'ajax';
        $this->autoRender = false;
        $url = WWW_ROOT . 'img' ;
        $permitted = array("png","jpeg","jpg","gif");
        $uploadFile = ($this->AjaxFileUpload->uploadFiles('img', $permitted));
        $file = json_decode($uploadFile);
        if($file){
            if($this->Photo->addPhoto($albumId,$file->filename[0])){
                echo json_encode($uploadFile);
            } else{
                echo json_encode(array("error" => 'error in upload'));
            }
        }
        echo json_encode(array("error" => 'error in upload'));
        die();
    }

    public function listAlbum($userId){
        $this->layout = 'ajax';
        $this->autoRender = false;
        $sendAlbumList = $this->Album->getAlbum();
        echo json_encode($sendAlbumList);
    }

    public function listPhoto($albumId){
        $this->layout = 'ajax';
        $this->autoRender = false;
        $sendPhotoList = $this->Photo->getPhotos($albumId);
        echo json_encode($sendPhotoList);
    }
}