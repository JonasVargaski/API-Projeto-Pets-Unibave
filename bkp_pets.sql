-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 29-Out-2018 às 01:40
-- Versão do servidor: 10.1.35-MariaDB
-- versão do PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pets`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `animal`
--

CREATE TABLE `animal` (
  `id` int(10) NOT NULL,
  `nome` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sexo` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `idade` int(15) DEFAULT NULL,
  `raca` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `local` varchar(120) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dt_anuncio` date DEFAULT NULL,
  `status_adocao` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cidade` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `uf` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `imagen` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_usuario_animal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `animal`
--

INSERT INTO `animal` (`id`, `nome`, `sexo`, `idade`, `raca`, `local`, `dt_anuncio`, `status_adocao`, `cidade`, `uf`, `imagen`, `id_usuario_animal`) VALUES
(1, 'rex', 'masc', 12, 'viralata', 'orelans', '2018-10-24', '1', 'orleans', 'SC', 'C://caminho', 1),
(2, 'ScoobyDo', 'masc', 10, 'poodle', 'tubarao', '0000-00-00', '1', 'braco do norte', 'SC', '', 1),
(3, 'Luke', 'masc', 12, 'pincher', 'braco do norte', '2018-09-28', '1', 'braco do norte', 'SC', '', 1),
(4, 'Pitucha', 'femi', 15, 'pincher', 'florianopolis', '2018-09-24', '1', 'grao para', 'SC', '', 1),
(5, 'Tob', 'masc', 2, 'pitbul', 'sao ludgero', '2018-10-24', '1', 'grao para', 'SC', '', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nm_usuario` varchar(80) COLLATE utf8_unicode_ci NOT NULL,
  `sexo` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cpf` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dt_nascimento` date NOT NULL,
  `cep` int(15) DEFAULT NULL,
  `endereco` varchar(80) COLLATE utf8_unicode_ci DEFAULT NULL,
  `numero` int(10) DEFAULT NULL,
  `bairro` varchar(80) COLLATE utf8_unicode_ci DEFAULT NULL,
  `complemento` varchar(120) COLLATE utf8_unicode_ci DEFAULT NULL,
  `uf` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cidade` varchar(60) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telefone` int(60) DEFAULT NULL,
  `email` varchar(80) COLLATE utf8_unicode_ci DEFAULT NULL,
  `senha` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id`, `nm_usuario`, `sexo`, `cpf`, `dt_nascimento`, `cep`, `endereco`, `numero`, `bairro`, `complemento`, `uf`, `cidade`, `telefone`, `email`, `senha`) VALUES
(0, '', NULL, NULL, '0000-00-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1, 'Jonas Vargaski', 'masculino', '10281157928', '0000-00-00', 88870000, 'estrada geral barracao', 21, 'inteiror', 'interior', 'SC', 'Orleans', 2147483647, 'jonasvargaski@hotmail.com', '12345678');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `animal`
--
ALTER TABLE `animal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario_animal` (`id_usuario_animal`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `animal`
--
ALTER TABLE `animal`
  ADD CONSTRAINT `id_usuario_animal` FOREIGN KEY (`id_usuario_animal`) REFERENCES `usuario` (`id`) ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
