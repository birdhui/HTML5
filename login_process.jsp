<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
	<title>Validation_02_process</title>
</head>
<body>
	<h3>입력에 성공했습니다.</h3>
	<%
		String id = request.getParameter("id");
		String passwd = request.getParameter("passwd");
		out.println("id : " + id + "<br/>");
		out.println("password : "  passwd + "<br/>");
	%>
</body>
</html>