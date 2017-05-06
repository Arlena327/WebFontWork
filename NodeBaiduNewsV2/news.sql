-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-03-03 10:58:39
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=47 ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newimg`, `newstime`, `newssrc`) VALUES
(19, '本地', '测试数据第三条', '../images/news2.jpg', '2017-03-18 00:00:00', '111111'),
(23, '推荐', '测试修改数据1', '../images/news6.jpg', '2017-03-02 00:00:00', '333333'),
(25, '娱乐', '测试修改数据2', '../images/news8.jpg', '2017-03-13 00:00:00', '33333'),
(41, '推荐', 'node测试1', '/images/news4.jpg', '2017-03-04 00:00:00', '11'),
(42, '推荐', 'node测试2', '/images/news8.jpg', '2017-03-02 00:00:00', '2'),
(43, '推荐', 'node测试3', '/images/news3.jpg', '2017-03-13 00:00:00', '3');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
