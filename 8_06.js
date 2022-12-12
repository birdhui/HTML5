id=prompt('아이디 입력');
if(id=='admin') {
	password=prompt('비밀번호 입력');
	if(password==='123456') {
		location.href="login_success.html"
	}
	else {
		location.href="login_error.html"
	}
}
else {
	location.href="login_error.html"
}