SimpleHint plugin
=================

This is tooltip replacement for default title-tooltip with some expanded opportunities.


To add script to your website add the nex lines in head-block:

	<script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="jquery.simplehint.min.js"></script>
	<script type="text/javascript">
		$(function() {
			$.initHint({
				wide      : false,    // false by default, if true - then all hints will be stretchable
				width     : '200px',  // 200px by default. When it not stretchable and text length > than 25, then block will have fixed width
				integrated: true      // true by default. If set true, then will use title attributes, if false - data-hint-value attributes

			})
		});
	</script>

Also, if the default options suite you, you can write only:

	<script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="jquery.simplehint.min.js"></script>
	<script type="text/javascript">$(function() {$.initHint()});</script>

How it work
-----------

For simple replacement you don't need anithing, will be use default title attribute:
	<div title="Some text"></div>

For wide (non-autobreakable content), which limited by width option (200px by default) use `data-hint-mode="wide"`:
	<div data-hint-mode="wide" title="Some very very looooooooooooooong text"></div>

For set `wide` to all titles use `wide: true` in `initHint` params

For use your custom breaklines use double-spacebar instead (if javascript is blocked on client machine it will be only double-spacebar):
	<div title="first line  second line  third line"></div>

For set tooltip content as image (or any html-code, as you wish) simply type it into `title`:
	<div title="<img src='http://www.google.com/logos/classicplus.png' />" data-hint-mode="wide"></div>

If you afraid, that JavaScript is may be disabled, you can use non-integrated mode (`$.initHint({integrated:false})`) and if JavaScript is enabled - it will be work as standart `title`, if not - nothing will happend.
It was maked for html-code, which with disabled JavaScript float with text `<img src='http://www.google.com/logos/classicplus.png' />`. Not nice, doesn't it?:
	<div data-hint-value="<img src='http://www.google.com/logos/classicplus.png' />" data-hint-mode="wide"></div>
