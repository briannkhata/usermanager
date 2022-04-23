/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 10.4.19-MariaDB : Database - employeedb
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`employeedb` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `employeedb`;

/*Table structure for table `employee` */

DROP TABLE IF EXISTS `employee`;

CREATE TABLE `employee` (
  `empID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `EmpCode` varchar(45) DEFAULT NULL,
  `Salary` int(11) DEFAULT NULL,
  PRIMARY KEY (`empID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `employee` */

insert  into `employee`(`empID`,`Name`,`EmpCode`,`Salary`) values 
(1,'Brian Nkhata','emp1',2000),
(2,'John Bande','emp2',3000),
(3,'Brico','emp3',5000),
(4,'Jane Butao','emp4',6777);

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `comments` text DEFAULT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'active',
  `address` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

/*Data for the table `user` */

insert  into `user`(`id`,`first_name`,`last_name`,`email`,`phone`,`comments`,`status`,`address`,`city`) values 
(1,'Brian','Nkhata','briannkhata@gmail.com','0888015904','Am in love','active',NULL,NULL),
(2,'BKkkkkkkkkkk','nnnnnnnnnnnnnnnnn','mmmmmmmmmbrian@gmail.com','0999999999999','commentooooooooooo','active',NULL,NULL),
(8,'MELINA','BANDA','M@YAHOO.COM','0999676','childish','active',NULL,NULL),
(9,'John','Kumwenda','jkumwenda@gmail.com','0998745456','KUMWENDA','active',NULL,NULL);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(250) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `contact` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

/*Data for the table `users` */

insert  into `users`(`user_id`,`email`,`password`,`username`,`name`,`contact`) values 
(1,'b@yaho.com','admin','admin',NULL,NULL),
(2,NULL,NULL,NULL,NULL,NULL),
(3,'briannkhata@gmail.com',NULL,NULL,'Brian','0888015904'),
(4,'briannkhata@gmail.com',NULL,NULL,'Brian','0888015904'),
(5,'briannkhata@gmail.com',NULL,NULL,'Brian','0888015904'),
(6,NULL,NULL,NULL,NULL,NULL),
(7,NULL,NULL,NULL,NULL,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
