<!DOCTYPE html>
<html>
<head>
<style>
body {margin:0;}
* {
    box-sizing: border-box;
}
.row::after {
    content: "";
    clear: both;
    display: block;
}
[class*="col-"] {
    float: left;
    padding: 15px;
}
html {
    font-family: Lucida Sans Unicode, Lucida Grande, sans-serif;
}
.header {
    background-color: #9933cc;
    color: #ffffff;
    padding: 15px;
}
.menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.menu li {
    padding: 8px;
    margin-bottom: 7px;
    background-color: #33b5e5;
    color: #ffffff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.menu li:hover {
    background-color: #0099cc;
}
.aside {
    background-color: #33b5e5;
    padding: 15px;
    color: #ffffff;
    text-align: center;
    font-size: 14px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.footer {
    background-color: #0099cc;
    color: #ffffff;
    text-align: center;
    font-size: 12px;
    padding: 15px;
}

/* topnav code */
.remark-topnav{}

.topnav {
  overflow: hidden;
  background-color: #292a88;
   font-family: Lucida Sans Unicode, Lucida Grande, sans-serif
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav .icon {
  display: none;
}


/* For desktop: */
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

.stub {
  background-color: #fff;
    border: solid;
    color:  #292a88;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 0px 0px;
    cursor: pointer;
    height: 150px;
    width: 150px;
    border: 5px solid  #6981c7;
}
.bttn {
    background-color: #fff;
    border: solid;
    color:  #292a88;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 0px 0px;
    cursor: pointer;
    height: 150px;
    width: 150px;
    border: 5px solid  #8eb1e1;
   font-weight: bold;
}

.bttn:hover{
	background-color: #8eb1e1;
}

.bttn1 {border-radius: 2px;}
.bttn2 {border-radius: 4px;}
.bttn3 {border-radius: 8px;}
.bttn4 {border-radius: 12px;}
.bttn5 {border-radius: 50%;}



@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
  /* For mobile phones: */
    [class*="col-"] {
        width: 100%;
    }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }

}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="#home">Home</a>
  <a href="assignments/">Assignments</a>
  <a href="documentation/">Documentation</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
</div>
<div class="row">
	<div class="col-1">
		 &nbsp;
	</div>
	<div class="col-1">
	 <a href = "assignments/">
			<button class="bttn bttn4">Assignments</button>
	 </a>
	</div>
	<div class="col-1">
	  <a href = "documentation/">
			<button class="bttn bttn4">Documentation</button>
	 </a>
	</div>
	<div class="col-1">
		 		   <a href = "https://tritech-cyber.github.io">
		<button class="bttn bttn3">tritech-cyber.<br/>github.io</button></a>
	</div>
	<div class="col-1">
		 <a href = "https://github.com/tritech-cyber?tab=repositories">
		<button class="bttn bttn3">github.com<br />tritech-cyber <br />repos</button></a>
</div>
</div>

<div class="row">
	<div class="col-1">
	  &nbsp;
	</div>
	<div class="col-1">
	  <a href = "https://tritechsc.github.io">
		<button class="bttn bttn3">tritechsc.<br />github.io</button></a>
	</div>
	<div class="col-1">
	  <a href = "https://github.com/tritechsc?tab=repositories">
		<button class="bttn bttn3">github.com <br /> tritechsc/<br/>repos</button></a>
	</div>
	<div class="col-1">
		
	</div>
	<div class="col-1">
	  
	</div>
	</div>
</div>


<footer>
425c9f	6981c7	8eb1e1
</footer>
<script>
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
</script>
</body>
</html>
