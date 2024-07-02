<?php

namespace App\Providers;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Schema::defaultStringLength(191);
        // JsonResource::withoutWrapping();
        if (env('APP_ENV') === 'production' || env('APP_URL') == 'https://celulas.thiagodom.dev.br') {
            // URL::forceSchema('https');
            $this->app['request']->server->set('HTTPS', true);
        }
    }
}
