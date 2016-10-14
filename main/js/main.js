function _(id){ return document.getElementById(id); }
function submitForm(){
	_("btn").disabled = true;
	_("status").innerHTML = 'please wait ...';
	var formdata = new FormData();
	formdata.append( "n", _("n").value );
	
	var ajax = new XMLHttpRequest();
	ajax.open( "POST", "login.php" );
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				_("my_form").innerHTML = '<h2>Thanks '+_("n").value+', your message has been sent.</h2>';
				$("#start").load('ques1.html');
			} else {
				_("status").innerHTML = ajax.responseText;
				_("btn").disabled = false;
			}
		}
	}
	ajax.send( formdata );
}






function getAnswer(){

_("a").disabled = true;
_("b").disabled = true;
_("status").innerHTML = 'Loading Next Question....';
var formdata = new FormData();
	formdata.append( "a", _("a").value );
	formdata.append( "b", _("b").value );


var ajax = new XMLHttpRequest();
ajax.open( "POST", "new.php" );
ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				_("my_form").innerHTML = '<h3>U are going great!!!</h3>';

				
				_('status').innerHTML='';
				$("#q1").load('ques2.html');
				

			} else {
				
				_("a").disabled = false;
				_("b").disabled = false;
			}
		}
	}
	ajax.send( formdata );



}
function getAnswer2(){

_("a").disabled = true;
_("b").disabled = true;
_("status").innerHTML = 'Loading Next Question....';
var formdata = new FormData();
	formdata.append( "a", _("a").value );
	formdata.append( "b", _("b").value );


var ajax = new XMLHttpRequest();
ajax.open( "POST", "new.php" );
ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				_("my_form").innerHTML = '<h3>U are going great!!!</h3>';
				$("#q2").load('ques3.html');
				_('status').innerHTML='';
			} else {
				
				_("a").disabled = false;
				_("b").disabled = false;
			}
		}
	}
	ajax.send( formdata );



}
function getAnswer3(){

_("a").disabled = true;
_("b").disabled = true;
_("status").innerHTML = 'Loading Next Question....';
var formdata = new FormData();
	formdata.append( "a", _("a").value );
	formdata.append( "b", _("b").value );


var ajax = new XMLHttpRequest();
ajax.open( "POST", "new.php" );
ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				_("my_form").innerHTML = '<h3>U are going great!!!</h3>';
				$("#q3").load('ques4.html');
				_('status').innerHTML='';
			} else {
				
				_("a").disabled = false;
				_("b").disabled = false;
			}
		}
	}
	ajax.send( formdata );



}
function getAnswer4(){

_("a").disabled = true;
_("b").disabled = true;
_("status").innerHTML = 'Loading Next Question....';
var formdata = new FormData();
	formdata.append( "a", _("a").value );
	formdata.append( "b", _("b").value );


var ajax = new XMLHttpRequest();
ajax.open( "POST", "new.php" );
ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				_("my_form").innerHTML = '<h3>U are going great!!!</h3>';
				$("#q4").load('ques5.html');
				_('status').innerHTML='';
			} else {
				
				_("a").disabled = false;
				_("b").disabled = false;
			}
		}
	}
	ajax.send( formdata );



}

