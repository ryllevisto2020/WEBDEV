<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class authController extends Controller
{
    //

    public function signIn(){
        return response()->view('signIn');
    }

    public function signUp(){
        return response()->view('signUp');
    }
}
