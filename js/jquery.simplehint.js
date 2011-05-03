/*************************************************
**  jQuery SimpleHint version 1.2.0
**  copyright Anton Konovalov, licensed GPL & MIT
**  http://extempl.com/
**************************************************/

(function($) {

	var $body, bodyDim, $hintBlock;
	
	$(function () {
		$body = $(document.body);
		bodyDim = [$body.outerWidth(), $body.outerHeight()];
		$hintBlock = $('<div />', {id: 'hintBlock'}).appendTo($body);
	});

	var startShowHintWindow = function($elem, options, attributes) {

		var wide = ($elem.attr('data-hint-mode') == 'wide');
		var contentSrc = $elem.attr(attributes);
		$hintBlock.css('width', contentSrc.length < 25 || contentSrc.indexOf('  ') != -1 || wide || options.wide ? 'auto' : options.width);
		$elem
			.attr(attributes, '')
			.data('contentSrc', contentSrc)
			.data('tm', setTimeout(function() {
				$hintBlock
					.html(contentSrc.replace(/  /g, '<br />'))
					.fadeIn(100);
			}, 500));

	};

	var hideHintWindow = function($elem, attributes) {

		if($elem.data('tm') != null) {
			clearTimeout($elem.data('tm'));
			$hintBlock.fadeOut(100);
			$elem.attr(attributes, $elem.data('contentSrc'));
		}

	};

	var showHintWindow = function(e) {

		$hintBlock.css({
			left:
				(e.pageX + $hintBlock.outerWidth() + 10) > bodyDim[0] ?
					e.pageX - $hintBlock.outerWidth() - 10 :
					e.pageX + 10 + 'px',
			top :
				(e.pageY + $hintBlock.outerHeight() + 10) > bodyDim[1] ?
					e.pageY - $hintBlock.outerHeight() - 10 :
					e.pageY + 10 + 'px'
		});

	};

	$.initHint = function(options) {
		var options = $.extend({
			wide      :    false,
			width     :    '200px',
			integrated:    true
		}, options);
		var attributes = options.integrated ? 'title' : 'data-hint-value';

		$('[' + attributes + '!=""]').each( function() {
			var $elem = $(this);
			$elem
				.hover(
					function () {startShowHintWindow($elem, options, attributes)},
					function () {hideHintWindow($elem, attributes)}
				)
				.mousemove(function(e) {showHintWindow(e)});
		});
	};

})(jQuery);