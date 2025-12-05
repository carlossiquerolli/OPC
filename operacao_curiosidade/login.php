<?php
session_start();
require "config.php";

$email = isset($_POST['email']) ? $mysqli->real_escape_string($_POST['email']) : '';
$senha_raw = isset($_POST['senha']) ? $_POST['senha'] : '';
$senha = md5($senha_raw);

if (empty($email) || empty($senha_raw)) {
    echo "ERRO";
    exit;
}

$query = $mysqli->prepare("SELECT id, nome, email, status FROM usuarios WHERE email=? AND senha=? LIMIT 1");
$query->bind_param("ss", $email, $senha);
$query->execute();
$result = $query->get_result();

if ($result && $result->num_rows === 1) {
    $usuario = $result->fetch_assoc();
    $_SESSION['usuario'] = $usuario;
    echo "OK";
} else {
    echo "ERRO";
}
?>
