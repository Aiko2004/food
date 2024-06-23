<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // $_POST = json_decode(file_get_contents("php://input"), true);
    echo var_dump($_POST);

} else {
    http_response_code(405);
    echo "Method Not Allowed";
}
?>