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


Route::group(['prefix' => 'admin'], static function () {
    Route::get('{any?}', static function () {
        return view('admin');
    })->where('any', '.*')->name('admin');
});

Route::group(['prefix' => ''], static function () {
	Route::get('/chat/send-message', 'ChatController@send');

	Auth::routes();

    Route::get('{any}', static function () {
        return view('user');
    })->where('any', '.*')->name('user');
});
