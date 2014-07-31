<?php
class Photo extends AppModel {
    public function getPhotos($albumId) {
        $sendPhotoList = array();
        $photos = $this->find('all', array('conditions' => array('Photo.album_id' => $albumId)));
        foreach($photos as $key => $photo){
            $photoList[$key]['id'] = $photo['Photo']['id'];
            $photoList[$key]['name'] = 'app/webroot/img/'.$photo['Photo']['name'];
        }
        $sendAlbumList['photoList']['photos'] = $photoList;
        return $sendAlbumList;
    }

    public function addPhoto($albumId,$fileName){
     $data = array('album_id' => $albumId, 'name'=>$fileName);
     $this->create($data);
     if($this->save()){
         return true;
     }
     return false;
    }
}