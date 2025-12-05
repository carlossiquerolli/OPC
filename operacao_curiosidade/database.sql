-- Criação do banco e tabela para Operação Curiosidade

CREATE DATABASE IF NOT EXISTS operacao_curiosidade
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE operacao_curiosidade;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    status ENUM('Ativo', 'Inativo') NOT NULL DEFAULT 'Ativo',
    criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (nome, email, senha, status)
VALUES
('Stephanie Nichols', 'stephanienichols@gmail.com', MD5('123456'), 'Ativo'),
('Jeffrey Kane', 'jeffrey_kane@yahoo.com', MD5('123456'), 'Ativo'),
('Darin Miller', 'darinmiller01@gmail.com', MD5('123456'), 'Ativo'),
('Andrew Stuart', 'andrewstuart@outlook.com', MD5('123456'), 'Ativo'),
('Valerie Aguilar', 'valerie_aguilar@gmail.com', MD5('123456'), 'Inativo');
