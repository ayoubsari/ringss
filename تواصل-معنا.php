<?php $title = "تواصل معنا | شركة الجودة المتقدمة الطبية" ?>
<?php include("header.php");     ?>


	

<div class="exercice">	
<div class="container">
<h1>
تواصل معنا</h1>

</div>
</div>



<div class="contact_p">
<div class="container">
<div class="row"> 
<div class="col-md-3">
<div class="conetnu_logo">
<div class="logo_c">
	<i class="fa-solid fa-location-dot"></i>
</div>
<h2>العنوان</h2>
<p>8383 –12623 | C.R : 1010742014 الرياض - المملكة العربية السعودية+</p>

</div>	
</div>

<div class="col-md-3">
<div class="conetnu_logo">
<div class="logo_c">
	<i class="fa fa-envelope-o"></i>
</div>
<h2>البريد الإلكتروني</h2>
<p>info@aqmc-sa.com</p>

</div>	

</div>

<div class="col-md-3">

<div class="conetnu_logo ">
<div class="logo_c">
	<i class="fa fa-mobile"></i>
</div>
<h2>الجوال</h2>
<p>966112910080+</p>

</div>	


</div>


<div class="col-md-3">

<div class="conetnu_logo none">
<div class="logo_c">
	<i class="fa fa-phone"></i>
</div>
<h2>الهاتف</h2>
<p>966112910080+</p>

</div>	

</div>


</div>
</div>
</div>	



<div class="para_section">
<div class="container">
<div class="row">
	<div class="col-md-6">
		<div class="google-map">
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d115926.18268761934!2d46.692119597867915!3d24.771705867494035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1702486273275!5m2!1sen!2sus" width="600" height="450" style="border:0;width: 100%;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
	</div>
	<div class="col-md-6">
		<h3>
تواصل معنا</h3>


<form action="funtion.php" method="post">

    <div class="row">
    

   
          <div class="col-md-12">  
          <input type="text" name="nom" placeholder="الإسم" class="form-controll " data-toggle="p" data-content="Enter le Nom s'il vous plais"  id="user_name" data-placement="bottom" required>
          <input type="text" name="email" placeholder="البريد الإلكتروني" class="form-controll" data-toggle="em" data-content="Enter le email est bien valider exmepl: ayoub56@gmail.com" id="user_email" data-placement="bottom" required>
      <input type="text" name="tel" placeholder="رقم الهاتف" class="form-controll"     data-toggle="pr" data-content="Enter le Sujet s'il vous plais" data-placement="bottom"   id="user_prenom" required>

                <textarea style=" height:100px!important;" placeholder="الرسالة" name="message" class="form-controll mystyle_text" id="user_message"
     data-toggle="prm" data-content="Enter le Message s'il vous plais"  data-placement="bottom" required></textarea>
          </div>


      
    </div>
    <button type="submit" class=" contact_p_moi">إرسال</button> 
    <br><center>    <?php  if(isset($_SESSION['statue'])){

       ?>      
        <div class="alert alert-info" role="alert">

        <?php echo $_SESSION['statue'];unset($_SESSION['statue']);  ?>

         </div>
    
   <?php   
    }
?></center>





    </form>




	</div>


</div>
</div>
</div>
<?php include("footer.php");     ?>