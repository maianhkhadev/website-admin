<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Album' => 'App\Policies\AlbumPolicy',
        'App\Category' => 'App\Policies\CategoryPolicy',
        'App\Comment' => 'App\Policies\CommentPolicy',
        'App\Customer' => 'App\Policies\CustomerPolicy',
        'App\Group' => 'App\Policies\GroupPolicy',
        'App\Order' => 'App\Policies\OrderPolicy',
        'App\Photo' => 'App\Policies\PhotoPolicy',
        'App\Post' => 'App\Policies\PostPolicy',
        'App\Product' => 'App\Policies\ProductPolicy',
        'App\User' => 'App\Policies\UserPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        
        Gate::define('customers.index', 'App\Policies\CustomerPolicy@index');
        Gate::define('posts.index', 'App\Policies\PostPolicy@index');
        Gate::define('orders.index', 'App\Policies\OrderPolicy@index');
        Gate::define('users.index', 'App\Policies\UserPolicy@index');
    }
}
