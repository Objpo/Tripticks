<?php

use Illuminate\Support\Facades\Route;

Route::get('/admin', function () {
    return view('admin.dashboard');
});

Route::prefix('admin')->group(function () {

Route::get('/login', function () {
    return view('pages.samples.login');
});

Route::get('/register', function () {
    return view('pages.samples.register');
});

Route::get('/quanlykhachsan', function () {
    return view('pages.samples.quanlykhachsan');
});

Route::get('/quanlytour', function () {
    return view('pages.samples.quanlytour');
});

});

