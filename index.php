<!DOCTYPE html>
<html>
<head>
    <title>dev page</title>
    <link href="/css/basic.css" rel="stylesheet">
    <link href="/css/demo.css" rel="stylesheet">
    <link href="css/hint.css" rel="stylesheet">
	<script type="text/javascript" src="/js/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.simplehint.min.js"></script>
	<script type="text/javascript">
		$(function() {
			$.initHint({
				wide: <?=($_GET['wide'] == 1 ? 'true' : 'false')?>, // false by default, if true - then all hints will be stretchable
				width: '<?=($_GET['width'] ? $_GET['width'] : '200px')?>', // 200px by default. When it not stretchable and text length > than 25, then block will have fixed width
				integrated: <?=($_GET['integrated'] == 0 ? 'false' : 'true')?> // true by default. If set true, then will use title attributes, if false - data-hint-value attributes
			})
	    });
	</script>
</head>
<body>
<div class="main-block block-list">
    <ul class="inside-block block-list">
        <li><a href="op" title>1asdasdad</a></li>
        <li><a href="op" title="oppa">here is title</a></li>
        <li><a href="op" data-hint-value="hehehe">here is data-hint-value</a></li>
        <li><a href="op" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum">here is long text</a></li>
    </ul>
    <div class="inside-block block-list" title="<img src='http://static.jquery.com/files/rocker/images/logo_jquery_215x53.gif' />" data-hint-mode="wide">
        hover me! I'm with data-hint-mode="wide" and image (title)
    </div>
</div>
<div class="main-block block-list">
	<form action>
		<ul>
			<li>
				<label for="width">width:</label>
				<input name="width" id="width" value="200px" />
			</li>
			<li>
				<label for="wide">global wide:</label>
				<input name="wide" id="wide" value="0" />
			</li>
			<li>
				<label for="integrated">integrated:</label>
				<input id="integrated" name="integrated" value="1" />
			</li>
			<li>
				<input type="submit" />
			</li>
		</ul>
	</form>
</div>
<div class="main-block block-list" style="position:absolute; right:0; bottom:0;">
    <ul class="inside-block block-list">
        <li><a href="op">1asdasdad</a></li>
        <li><a href="op" title="oppa">here is title</a></li>
        <li><a href="op" data-hint-value="hehehe">here is data-hint-value</a></li>
        <li><a href="op" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum">here is long text</a></li>
    </ul>
    <div class="inside-block block-list" title="<img src='http://static.jquery.com/files/rocker/images/logo_jquery_215x53.gif' />" data-hint-mode="wide">
        hover me! I'm with data-hint-mode="wide" and image (title)
    </div>
</div>
</body>
</html>