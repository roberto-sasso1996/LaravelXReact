<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProductController;

Route::post('/contatto', [ContactController::class, 'store']);
Route::get('/products', [ProductController::class, 'index']);