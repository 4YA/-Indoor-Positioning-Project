<?php
//服務端crop.php代碼
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
$targ_w = $targ_h = 150;
$jpeg_quality = 90;
$r_path=str_replace(array('\\', '\\\\'), '/', dirname(__FILE__));
$src = $r_path.'/img/pool.jpg';//原圖片路徑
$img_r = imagecreatefromjpeg($src);
$dst_r = ImageCreateTrueColor( $targ_w, $targ_h );
imagecopyresampled($dst_r,$img_r,0,0,$_POST['x'],$_POST['y'],
$targ_w,$targ_h,$_POST['w'],$_POST['h']);
header('Content-type: image/jpeg');
$save_img_path=null;//截圖後保存的路徑
imagejpeg($dst_r,$save_img_path,$jpeg_quality);
exit;
}
?>


