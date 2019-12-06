<?php
class IpEr{
  public function Get_Ip(){
    if(!empty($_SERVER['HTTP_CLIENT_IP'])){
      $ip=$_SERVER['HTTP_CLIENT_IP'];
    }
    elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
      $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    else{
      $ip=$_SERVER['REMOTE_ADDR'];
    }
    return  $ip;
  }
}

$iper = new IpEr();
$ip_adress = $iper->Get_Ip();

echo gethostbyaddr($ip_adress);

phpinfo();
?>
