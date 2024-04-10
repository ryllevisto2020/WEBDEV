<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\authController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/signIn',[authController::class,"signIn"])->name("signIn");

Route::get('/signUp',[authController::class,"signUp"])->name("signUp");

