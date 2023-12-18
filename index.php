<?php
	include('./php/auto.php');
?>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>C4 - Eindopdracht</title>
	
	<!-- Begin Angular link -->
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.min.js"></script>
	<!-- End Angular link -->
	
	<!-- Begin internal links -->
	<link href="inc/master.css" rel="stylesheet">
	<script src="inc/model.js"></script>
	<script src="inc/controller.js"></script>
	<script src="inc/config.js"></script>
	<!-- End internal links -->

	<!-- Begin Bootstrap link -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
	<!-- End Bootstrap link  -->
</head>
<body class="body">
	<div ng-app="myApp" ng-controller="myCtrl">
		<div class="banner">
			<div class="row p-3">
				<div class="col-3">
					<a href="./">
						<div class="button">
							Home
						</div>
					</a>
				</div>
				<div class="col-3">
					<a href="#!alter_data">
						<div class="button">
							alter_data
						</div>
					</a>
				</div>
				<div class="col-3">
					<a href="#!add_person">
						<div class="button">
							add_person
						</div>
					</a>
				</div>
			</div>
		</div>
		<div class="container mt-3">
			<?php 
				print $created ?? 'table loaded';
			?>
			<br/>
			<div ng-view></div>
		</div>
	</div>
</body>
</html>