<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('home');
})->name('home');

Route::get('/employees', function() {
    return view('list_employees');
})->name('employees.show_index');

Route::get('/employees/{employee?}', function($employee=null) {
    return view('detail_employee', ['employee' => $employee]);
})->name('detail');



//Route::get('/employees', [\App\Http\Controllers\EmployeeController::class, 'show_index'])->name('employees.show_index');

