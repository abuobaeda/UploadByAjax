var _submit = document.getElementById('_submit'),
_file = document.getElementById('_file'),
_progress = document.getElementById('_progress');
				
var upload = function() {

	if (_file.files.length === 0) {
		return;
	}

	var data = new FormData();
	data.append('SelectedFile', _file.files[0]);

	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if (request.readyState == 4) {
			document.getElementById('_uploaded').src = _file.files[0]['name'];
		};
	};

	request.upload.addEventListener('progress', function(e){
		_progress.style.width = Math.ceil(e.loaded/e.total) * 100 + '%';
	}, false);

	request.open('POST', 'upload.php');
	request.send(data);
};

_submit.addEventListener('click', upload);
