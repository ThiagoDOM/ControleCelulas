<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\PastorController;
use App\Http\Controllers\Admin\DiscipuladorController;
use App\Http\Controllers\Admin\LiderController;
use App\Http\Controllers\Admin\CelulaController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\RelatorioController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return redirect()->route('admin.dashboard');
});
Route::get('/dev', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



//Tests
Route::get('/home', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth'])->name('home');

Route::get('/email-test', fn () => "Just simple email test.")
    ->middleware(['auth', 'verified'])->name('email-test');

Route::middleware(['auth','admin'])->name('admin.')->prefix('admin')->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');

    Route::resource('admins', AdminController::class);
    Route::resource('pastores', PastorController::class);
    // Route::resource('discipuladores', DiscipuladorController::class);
    // Route::resource('lideres', LiderController::class);
    // Route::resource('celulas', CelulaController::class);
    // Route::resource('celulas/{celula}/relatorios', RelatorioController::class);
});

Route::middleware(['auth','pastor'])->name('pastor.')->prefix('pastor')->group(function () {
    Route::resource('discipuladores', DiscipuladorController::class);
});

Route::middleware(['auth','discipulador'])->name('discipulador.')->prefix('discipulador')->group(function () {
    Route::resource('lideres', LiderController::class);
});

Route::middleware(['auth', 'lider'])->name('lider.')->prefix('lider')->group(function () {
    Route::resource('celulas', CelulaController::class);
    Route::resource('celulas/{celula}/relatorios', RelatorioController::class);
});
//Auth and Profile Routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
require __DIR__ . '/auth.php';
