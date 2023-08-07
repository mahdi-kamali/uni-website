<?php

use App\Models\Admin\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Home\HomeController;
use App\Http\Controllers\Admin\FileController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\StaffController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\StaffCategoryController;
use App\Http\Controllers\Admin\GalleryCategoryController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// public routes
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::get('app/staff-category', [HomeController::class, 'staffCategory']);
Route::get('app/staff', [HomeController::class, 'staff']);
Route::get('app/category', [HomeController::class, 'category']);
Route::get('app/gallery-category', [HomeController::class, 'galleryCategory']);
Route::get('app/gallery', [HomeController::class, 'gallery']);
Route::get('app/file', [HomeController::class, 'file']);
Route::get('app/post', [HomeController::class, 'posts']);
Route::get('app/category-posts/{id}', [HomeController::class, 'posts']);



// protected routes

Route::group(['middleware' => ['auth:sanctum']], function () {
Route::get('/logout', [AuthController::class, 'logout']);
Route::resource('admin/category', CategoryController::class);
Route::resource('admin/post', PostController::class);
Route::resource('admin/staff-category', StaffCategoryController::class);
Route::resource('admin/staff', StaffController::class);
Route::resource('admin/gallery-category', GalleryCategoryController::class);
Route::resource('admin/gallery', GalleryController::class);
Route::resource('admin/file', FileController::class);

});