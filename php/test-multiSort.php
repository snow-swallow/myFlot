<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
  	<title><?=$title?></title>
  	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  	<meta name="description" content="">
  	<meta name="author" content="">
  	
  	<link href="../css/bootstrap.min.css" rel="stylesheet">
	<link href="../css/bootstrap-responsive.min.css" rel="stylesheet">
	
	<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
  	<!--[if lt IE 9]>
    	<script src="js/html5shiv.js"></script>
  	<![endif]-->
  	
  	<script src="../js/jquery.min.js"></script>
	<script src="../js/bootstrap.min.js"></script>
	<script src="../js/sorttable.js"></script>
	</head>
	<body>
		<?php 
		$data1[] = array(
			'volume' => 'a', 
			'edition' => 2.5, 
			'name' => 'Jim', 
			'category' => 'OK', 
			'edition3' => '2014-10-10'
			);
		$data1[] = array(
			'volume' => 86, 
			'edition' => 11, 
			'name' => 'Ann', 
			'category' => 'Problematic', 
			'edition3' => '2013-10-10'
			);
		$data1[] = array(
			'volume' => 'b', 
			'edition' => -6, 
			'name' => 'Ann', 
			'category' => 'Moderate', 
			'edition3' => '2014-11-10'
			);
		$data1[] = array(
			'volume' => 98, 
			'edition' => 2, 
			'name' => 'Jack', 
			'category' => 'Problematic', 
			'edition3' => '2014-5-10'
			);
		$data1[] = array(
			'volume' => 86, 
			'edition' => 6, 
			'name' => 'Tom', 
			'category' => 'Moderate', 
			'edition3' => '2014-10-14'
			);
		$data1[] = array(
			'volume' => 86, 
			'edition' => -0.1, 
			'name' => 'David', 
			'category' => 'Severity', 
			'edition3' => '2011-10-10'
			);
		$data1[] = array(
			'volume' => 67, 
			'edition' => 0, 
			'name' => 'Bosh', 
			'category' => 'OK', 
			'edition3' => '2014-10-1'
			);
		?>
		<table class="table table-striped sortable">
			<thead>
				<tr>
					<th style="font-weight:bold">volume</th>
					<th style="font-weight:bold" class="sorthead_2">edition</th>
					<th style="font-weight:bold" class="sorthead_0">name</th>
					<th style="font-weight:bold" class="sorthead_1">category</th>
					<th style="font-weight:bold" class="sorthead_-1">edition3</th>
				</tr>
			</thead>
			<tbody>
				<?php 
					foreach ($data1 as $d) {
				?>
					<tr>
						<td><?=$d['volume'] ?></td>
						<td><?=$d['edition'] ?></td>
						<td><?=$d['name'] ?></td>
						<td><?=$d['category'] ?></td>
						<td><?=$d['edition3'] ?></td>
					</tr>
				<?php 
					}
				?>
			</tbody>
		</table>
	</body>
</html>
