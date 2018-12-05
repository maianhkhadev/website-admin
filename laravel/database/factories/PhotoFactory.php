<?php

use Faker\Generator as Faker;

$factory->define(App\Photo::class, function (Faker $faker) {
  $albums = App\Album::pluck('id')->toArray();

  return [
    'album_id' => $faker->randomElement($albums),
    'url' => $faker->imageUrl
  ];
});
