<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header('HTTP/1.1 200 OK');
    exit();
}

// Inclui o arquivo de inicialização do Fat-Free Framework
require('vendor/autoload.php');

// Instancia a classe Base
$f3 = Base::instance();

$f3->route('GET /', function($f3) {
    echo 'Hello, world!';
});

// Define a rota para o método endpoint '/soma'
$f3->route('GET /soma', function($f3) {
    // Pega os parâmetros passados pela URL
    $num1 = $f3->get('GET.num1');
    $num2 = $f3->get('GET.num2');

    // Checa se os parâmetros são de fato números
    try {
        $num1 = floatval($num1);
        $num2 = floatval($num2);
        $soma = $num1 + $num2;

        echo json_encode(['soma' => $soma]);

    } catch (Exception $e) {
        echo json_encode(['error' => 'Parâmetros inválidos']);
    }
});

$f3->run();

?>