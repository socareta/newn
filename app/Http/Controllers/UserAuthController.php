<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserAuthController extends Controller
{
    public function login(Request $request){
        $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $accessToken = Auth::user()->createToken('Admin Login')->accessToken;
            return response()->json(['access_token' => $accessToken]);
        }
        return response()->json([
            'message' => 'The provided credentials do not match our records.',
        ]);
    }

    public function forgetPassword(Request $request){
        return 0;
    }

    public function resetPassword(Request $request){
        return 0;
    }

    public function userConfirmed(Request $request){
        return 0;
    }
}
