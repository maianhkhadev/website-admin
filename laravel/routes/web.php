<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::resource('albums', 'AlbumController');

Route::resource('categories', 'CategoryController');

Route::resource('collections', 'CollectionController');

Route::resource('comments', 'CommentController');

Route::resource('customers', 'CustomerController');

Route::resource('groups', 'GroupController');

Route::resource('permissions', 'PermissionController');

Route::resource('photos', 'PhotoController');

Route::resource('posts', 'PostController');

Route::resource('products', 'ProductController');

Route::resource('roles', 'RoleController');

Route::resource('users', 'UserController');
