id=prompt('홈페이지를 보고 싶다면 : 1 / 아니라면 : 2');
if(id==1) {
	password=prompt('임선영 교수님이라면 : 1 / 학생이라면 : 2');
	if (password==1) {
		location.href="login_success.html"
	}
	else {
		location.href="login_error.html"
	}
}
else {
	location.href="login_error.html"
}