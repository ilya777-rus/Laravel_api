import './bootstrap';
import '../sass/app.scss';
import $ from 'jquery';
window.$ = $;
window.jQuery = $;
console.log('333333333333A3PPPPPPPPPPPPP2222');
console.log('APPPPPPPPPPPPP2222');
//$('#getEmployees').on('click', function () {
$(document).ready(function (){

        $.ajax({
            url: '/api/employees', // URL для получения всех сотрудников
            type: 'GET',
            success: function (data) {
                console.log('RESSSSSSSS', data);
                let employeesHtml = '<ul class="list-group">';
                data['data'].forEach(employee => {

                    employeesHtml += `<li class="list-group-item">
                             <img src="/storage/${employee.photo}" alt="Фото сотрудника" style="width: 100px; height: 100px; object-fit: cover;"> <br>
                            <strong>ФИО:</strong> ${employee.fio} <br>
                            <strong>Email:</strong> ${employee.email} <br>
                            <strong>Возраст:</strong> ${employee.age} <br>
                            <strong>Стаж работы:</strong> ${employee.work_experience} лет <br>
                            <strong>Средняя з/п:</strong> ${employee.average_salary} руб. <br>
                            <a href="/employees/${employee.id}"><button class="btn btn-info mt-2" data-id="${employee.id}" >Подробнее</button></a>
                        </li>`;
                });
                employeesHtml += '</ul>';

                $('#employeeList').html(employeesHtml);
            },
            error: function (xhr) {
                console.log('ERRRR');
                console.log('11111Ошибка при получении данных: ' + xhr.responseText);
            }
        });


    $('#employeeList').on('click', '.btn-info', function () {

        let employeeID = $(this).data('id');
        console.log('CLICKKKKKKKKKK',employeeID);
        // $("#employeeDetails").html("333333333333332222222XXXXXXXXXXXXXXX");
        // e.preventDefault();
        // $("#employeeDetails").html(detailsHtml);

    });
    // let urlParams = new URLSearchParams(window.location.search);
    // let employeeID = urlParams.get('id');

    let url = new URL(window.location.href);
    let path = url.pathname;
    let parts = path.split('/');

    let employeeID = parts[parts.length - 1];
    console.log('IDDDDDDD', employeeID, typeof employeeID);

    if (employeeID>0) {
        // window.location.href = `/employee/${employeeID}`;
        $(document).ready(function () {
            // showEmployeeDetails(employeeID);
            $.ajax({
                url: `/api/employees/${employeeID}`,
                type: 'GET',
                success: function (data) {
                    console.log('READDDDDDDDDDDDDDDDDDDDDDEmployeeeeee', data);
                    var data = data['data'];
                    let detailsHtml = `<div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${data.fio}</h5>
                                <p class="card-text">
                                    <strong>Email:</strong> ${data.email} <br>
                                    <strong>Возраст:</strong> ${data.age} <br>
                                    <strong>Стаж работы:</strong> ${data.work_experience} лет <br>
                                    <strong>Средняя з/п:</strong> ${data.average_salary} руб. <br>
                                    <strong>Фото:</strong> <br>
                                    <img src="/storage/${data.photo}" alt="Фото сотрудника" class="img-fluid">
                                </p>
                            </div>
                        </div>`;
                    console.log(detailsHtml);
                    // $("#employeeDetails").html("<p><h1> XCDDDDDDDDDDD</h1></p>");
                    $("#employeeDetails").html(detailsHtml);
                    // $("#employeeDetails").html("2222222XXXXXXXXXXXXXXX");
                },
                error: function (xhr) {
                    alert('222Ошибка при получении данных!');
                    console.log(xhr.responseText);
                }
            });
        });
    }



    $("#employeeForm").on('submit', function (e){
        e.preventDefault();

        let formData = new FormData(this);

        $.ajax({
            url: '/api/employees',
            type: 'POST',
            data: formData,
            contentType:false,
            processData:false,
            success:function(data){
                console.log('POST', data);
                console.log($('#employeeForm'));
                $('#employeeForm')[0].reset();
                alert('Сотрудник добавлен !');
            },
            error:function (xhr){
                alert('Произошла ошибка при добавлении сотрудника...');
                console.log('POST Ошибка:',xhr.responseText);
            }

        });

    });


});

