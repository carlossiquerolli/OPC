<?php
// Ajuste os valores de conexão se necessário
$DB_HOST = "localhost";
$DB_USER = "root";
$DB_PASS = "";
$DB_NAME = "operacao_curiosidade";

$mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);

if ($mysqli->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Erro ao conectar: " . $mysqli->connect_error]);
    exit;
}
?>
