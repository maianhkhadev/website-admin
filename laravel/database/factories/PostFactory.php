<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
  $users = App\User::pluck('id')->toArray();
  $categories = App\Category::pluck('id')->toArray();

  return [
    'user_id' => $faker->randomElement($users),
    'category_id' => $faker->randomElement($categories),
    'title' => $faker->realText(75),
    'thumbnail_url' => $faker->unique()->imageUrl,
    'content' => $faker->realText,
    'status' => '0'
  ];
});
