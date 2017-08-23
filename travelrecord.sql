-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2017 at 08:00 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travelrecord`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_travel`
--

CREATE TABLE `data_travel` (
  `datatravel_no` int(11) UNSIGNED ZEROFILL NOT NULL,
  `date_travel` date NOT NULL,
  `start` varchar(45) NOT NULL,
  `end` varchar(45) NOT NULL,
  `conveyance` varchar(20) NOT NULL,
  `code_conveyance` varchar(10) DEFAULT NULL,
  `distance` int(6) DEFAULT NULL,
  `expenses` int(6) DEFAULT NULL,
  `orther` varchar(20) DEFAULT NULL,
  `charges` int(6) DEFAULT NULL,
  `bill` varchar(45) DEFAULT NULL,
  `reason` varchar(20) NOT NULL,
  `travelwith` varchar(45) DEFAULT NULL,
  `user_id` int(10) UNSIGNED ZEROFILL NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `for_admin`
--

CREATE TABLE `for_admin` (
  `user_id` int(10) UNSIGNED ZEROFILL NOT NULL,
  `rate_car` int(5) NOT NULL,
  `rate_motorcycle` int(5) NOT NULL,
  `scheduled` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `for_admin`
--

INSERT INTO `for_admin` (`user_id`, `rate_car`, `rate_motorcycle`, `scheduled`) VALUES
(0000000000, 5, 2, '2017-08-25');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `name_location` varchar(50) NOT NULL,
  `address_location` varchar(100) NOT NULL,
  `location_lat` varchar(45) NOT NULL,
  `location_lng` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(10) UNSIGNED ZEROFILL NOT NULL,
  `role` varchar(10) NOT NULL,
  `username` varchar(16) NOT NULL,
  `password` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `user_detail`
--

CREATE TABLE `user_detail` (
  `user_id` int(10) UNSIGNED ZEROFILL NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `position` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_travel`
--
ALTER TABLE `data_travel`
  ADD PRIMARY KEY (`datatravel_no`);

--
-- Indexes for table `for_admin`
--
ALTER TABLE `for_admin`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`name_location`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`);

--
-- Indexes for table `user_detail`
--
ALTER TABLE `user_detail`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data_travel`
--
ALTER TABLE `data_travel`
  MODIFY `datatravel_no` int(11) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
