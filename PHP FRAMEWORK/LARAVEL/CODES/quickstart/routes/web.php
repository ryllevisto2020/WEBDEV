<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\authController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/signIn',[authController::class,"signIn"])->name("signIn");

Route::get('/signUp',[authController::class,"signUp"])->name("signUp");

Route::get('/test',[authController::class,"test"])->name("test");

Route::post('/action/signUp',[authController::class,"actionSignUp"])->name("actionSignUp");
