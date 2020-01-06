<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Blade;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        /*
        // Blade::directive('isActive', function ($string) {
        //     return "<?php echo \URL::current() === url($string) ? 'active' : ''  ?>";
        // });
            */

        \Schema::defaultStringLength(190);
    }
}
