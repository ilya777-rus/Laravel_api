<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
    <title>Document</title>

</head>
<body>
<div class="container">
    <div id="employeeList" class="mt-4"></div>
    <div id="employeeDetails" class="mt-7"></div>
    <div><a href="{{route('home')}}" class="btn btn-primary m-4">Назад</a></div>
</div>

</body>
</html>
