<?php
// Form verilerini al
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Verileri rapor.txt dosyasına yaz
$file = fopen("rapor.txt", "a");
fwrite($file, "Gönderen Adı: " . $name . "\n");
fwrite($file, "E-posta: " . $email . "\n");
fwrite($file, "Mesaj: " . $message . "\n");
fclose($file);

echo "Veriler başarıyla rapor.txt dosyasına kaydedildi.";
?>
