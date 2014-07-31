<?php
class Album extends AppModel {
    public function getAlbum() {
        $sendAlbumList = array();
        $albums = $this->find('all', array('condition' => array(1 => 1)));
        if(!empty($albums)){
            foreach($albums as $key => $album){
                $albumList[$key]['id'] = $album['Album']['id'];
                $albumList[$key]['name'] = $album['Album']['name'];
            }
            $sendAlbumList['albumList']['albums'] = $albumList;
        } else{
            $sendAlbumList['albumList']['albums'] = array('error' => 'No Images');
        }
        return $sendAlbumList;
    }

    public function addAlbum($post) {
        $data = array('Album' => array('user_id' => $post->user_id,'name' => $post->name));
        $this->create($data);
        if ($this->save()) {
            return array('albumId' => $this->id);
        }
        return array('error' => 'Not saved');
    }

    public function getAlbumByUserId($userId){
        $albumList = $this->find('all', array('condition' => array(1 => 1)));
    }
}
