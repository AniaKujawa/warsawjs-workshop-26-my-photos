$(function() {
	$('input[type=file]').each(function(){
		var $this = $(this);
		var labeltext = ($this.attr('title')!='' && $this.attr('title')!=undefined)?$(this).attr('title'):'Choose file';

		var $fileContainer = $('<div class="file-container" />');

		var $text_file = $('<input type="text" class="input-text" value="..." />');
		var $uploadbutton = $('<input class="input-browse" type="button" value="'+labeltext+'" />');

		$this.wrap($fileContainer);
		$this.parents('.file-container').append($text_file).append($uploadbutton);
		$this.bind('click', function() {
			$this.parent().find('.input-text').val($this.val().replace("C:\\fakepath\\", ""));
		});
	});
})
