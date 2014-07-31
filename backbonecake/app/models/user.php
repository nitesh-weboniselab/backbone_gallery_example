<?php
class User extends AppModel {
    public function checkUsernamePassword($userName, $password) {
        $userId = $this->find('first',
                   array('conditions' => array('User.username' => $userName, 'User.password' => $password),
                   'fields' => array('id')
                  ));
        if ($userId) {
            return array('userId' => $userId['User']['id']);
        }
        return array('error' => 'Not Found');
    }
}