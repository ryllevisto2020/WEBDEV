<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\accountModel;
use Illuminate\Support\Facades\Hash;

class authController extends Controller
{
    //

    public function signIn(){
        return response()->view('signIn');
    }

    public function signUp(){
        return response()->view('signUp');
    }

    public function test(){
        return response()->view('test');
    }

    public function actionSignUp(Request $request,Response $response){
        $email = $request->request->get("email");
        $user = $request->request->get("username");
        $isExist = new isExist($email,$user);
        $emailIsExist = $isExist->email_exist();
        $userIsExist = $isExist->user_exist();
        $arr = [$emailIsExist,$userIsExist];
        for ($i=0; $i < sizeof($arr); $i++) {
            # code...
            print_r($arr[$i]);
        }
        /*if($isExist->email_exist()){
            return response()->json(["response"=>["code"=>"err","message"=>"email/username is already exists!","icon"=>"error"]]);
        }else{
            accountModel::create([
                "username"=>$request->request->get("username"),
                "email"=>$request->request->get("email"),
                "country"=>$request->request->get("country"),
                "password"=>Hash::make($request->request->get("password")),
            ]);
            return response()->json(["response"=>["code"=>"suc","message"=>"Sign Up Complete!","icon"=>"success"]]);
        }*/
    }
}
class isExist{
    public $emailCount;
    public $userCount;
    public function __construct(string $email,string $user){
        /* CHECK IF EMAIL EXIST */
        $accountModel = new accountModel;
        $this->emailCount = $accountModel->where('email',"LIKE",$email)->count();
        $this->userCount = $accountModel->where('username',"LIKE",$user)->count();
    }
    public function email_exist(){
        if($this->emailCount>0){
            return ["bool"=>true,"message"=>"Email exist!"];
        }else{
            return false;
        }
    }
    public function user_exist(){
        if($this->userCount>0){
            return ["bool"=>true,"message"=>"User exist!"];
        }else{
            return false;
        }
    }
}
