-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 31, 2014 at 10:42 PM
-- Server version: 5.5.35
-- PHP Version: 5.3.10-1ubuntu3.11

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `demo`
--

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE IF NOT EXISTS `photos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `album_id` char(255) NOT NULL,
  `name` char(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dumping data for table `photos`
--

INSERT INTO `photos` (`id`, `album_id`, `name`) VALUES
(1, '5', 'download.jpg'),
(2, '5', 'me.jpg'),
(3, '5', 'yo.jpg'),
(4, '5', 'go.jpg'),
(5, '5', 'home.jpg'),
(9, '43', 'forum-commenter.jpg'),
(10, '43', 'game_win_bg.jpg'),
(11, '43', 'g2_add.jpg'),
(12, '5', 'franklin_photo.jpg'),
(13, '45', 'my_fan_clubs_img.jpg'),
(14, '45', 'fb_profile_photo.jpg'),
(15, '45', 'image_5.jpg'),
(16, '45', 'video_bg.jpg'),
(17, '44', '1406826558_cave_img.jpg'),
(18, '44', 'loader_white.gif');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
