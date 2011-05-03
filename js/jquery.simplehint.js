/*************************************************
**  jQuery SimpleHint version 1.2.0
**  copyright Anton Konovalov, licensed GPL
**  http://extempl.com/
**************************************************/

(function($) {

	$.initHint = function(options) {
		var options = $.extend({
			wide:           false,
			width:          '200px',
			integrated:    true
		}, options);
		var attributes = options.integrated ? 'title' : 'data-hint-value';

		var $hintBlock = $('<div />', {id: 'hintBlock'});
		$(document.body).append($hintBlock);
		$('[' + attributes + '!=""]').each( function() {
			var $elem = $(this);
			var wide = ($elem.attr('data-hint-mode') == 'wide');
			$(this)
				.hover(
					function () {startShowHintWindow($elem, $hintBlock, wide, options.wide, options.width, attributes)},
					function () {hideHintWindow($elem, $hintBlock, attributes)}
				)
				.mousemove(function(e) {showHintWindow($hintBlock, e)});
		});
		return this;
	};

	var startShowHintWindow = function($elem, $hintBlock, wide, all_wide, width, attributes) {

		var contentSrc = $elem.attr(attributes);
		$hintBlock.css('width', contentSrc.length < 25 || contentSrc.indexOf('  ') != -1 || wide || all_wide ? 'auto' : width);
		$elem
			.attr(attributes, '')
			.data('contentSrc', contentSrc)
			.data('tm',setTimeout(function() {
				$hintBlock
					.html(contentSrc.replace(new RegExp('  ', 'g'), '<br />'))
					.fadeIn(100);
			}, 500));
		return $elem;

	};

	var hideHintWindow = function($elem, $hintBlock, attributes) {

		if($elem.data('tm') != null) {
			clearTimeout($elem.data('tm'));
			$hintBlock.fadeOut(100);
			$elem.attr(attributes, $elem.data('contentSrc'));
		}
		return $elem;

	};

	var showHintWindow = function($elem, e) {

		$elem.css({
			left:
				(e.pageX + $elem.outerWidth() + 10) > $(document.body).outerWidth() ?
				e.pageX - $elem.outerWidth() - 10 :
				e.pageX + 10 + 'px',
			top :
				(e.pageY + $elem.outerHeight() + 10) > $(document.body).outerHeight() ?
				e.pageY - $elem.outerHeight() - 10 :
				e.pageY + 10 + 'px'
		});
		return $elem;

	};

})(jQuery);