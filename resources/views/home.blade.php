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
    <h1 class="mt-5">Добавление сотрудника</h1>
    @csrf
    <form id="employeeForm" class="mt-4" method="post">
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" required>
        </div>
        <div class="mb-3">
            <label for="fio" class="form-label">ФИО</label>
            <input type="text" class="form-control" id="fio" name="fio" required>
        </div>
        <div class="mb-3">
            <label for="age" class="form-label">Возраст</label>
            <input type="number" class="form-control" id="age" name="age" required>
        </div>
        <div class="mb-3">
            <label for="work_experience" class="form-label">Стаж работы</label>
            <input type="number" class="form-control" id="work_experience" name="work_experience" required>
        </div>
        <div class="mb-3">
            <label for="photo" class="form-label">Фото сотрудника</label>
            <input type="file" class="form-control" id="photo" name="photo" accept="image/*" >
        </div>
        <div class="mb-3">
            <label for="average_salary" class="form-label">Средняя з/п</label>
            <input type="number" class="form-control" id="average_salary" name="average_salary" required>
        </div>
        <button type="submit" class="btn btn-primary">Добавить сотрудника</button>
    </form>

    <hr>

    <a href="{{route('employees.show_index')}}"><button id="getEmployees" class="btn btn-success mt-3">Получить всех сотрудников</button></a>


</div>
</body>
</html>
