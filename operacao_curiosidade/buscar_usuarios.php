<?php
require "config.php";
header('Content-Type: application/json; charset=utf-8');

$sql = "SELECT nome, email, status FROM usuarios ORDER BY id DESC LIMIT 100";
$result = $mysqli->query($sql);

$dados = [];
if ($result) {
    while($row = $result->fetch_assoc()) {
        $dados[] = $row;
    }
}

echo json_encode($dados, JSON_UNESCAPED_UNICODE);
?>
