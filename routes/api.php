<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserAuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return response()->json($request->user(),200);
});

// Route::post('/token', function(Request $request){
//     var_dump("Tata");
// });
Route::get('/token', [UserAuthController::class, 'loginTest']);
Route::post('/auth/signin', [UserAuthController::class, 'login']);
Route::post('/auth/forget-password', [UserAuthController::class, 'forgetPassword']);
Route::post('/auth/reset-password', [UserAuthController::class, 'resetPassword']);
Route::post('/auth/confirm/{code}', [UserAuthController::class, 'userConfirmed']);



