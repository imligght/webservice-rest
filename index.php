<?php
// Inclui o arquivo de inicialização do Fat-Free Framework
require('lib/base.php');

// Instancia a classe Base
$f3 = Base::instance();

// Define a rota para o método endpoint '/soma'
$f3->route('GET /soma', function($f3) {
    // Pega os parâmetros passados pela URL
    $num1 = $f3->get('GET.num1');
    $num2 = $f3->get('GET.num2');

    // Checa se os parâmetros são de fato números
    if (is_numeric($num1) && is_numeric($num2)) {
        // Realiza a soma dos números
        $soma = $num1 + $num2;

        // Retorna o resultado da soma em formato JSON
        echo json_encode(['soma' => $soma]);
    } else {
        // Em caso de parâmetros inválidos, retorna um erro
        echo json_encode(['error' => 'Parâmetros inválidos']);
    }
});

$f3->run();

?>