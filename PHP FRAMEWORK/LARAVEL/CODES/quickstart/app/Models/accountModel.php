<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class accountModel extends Model
{
    use HasFactory;

    protected $table = "account_models";
    protected $fillable = ['username','email','country','password'];
}
