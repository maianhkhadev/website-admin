<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
  /**
  * Run the database seeds.
  *
  * @return void
  */
  public function run()
  {
    $user = new User();
    $user->role_id = 1;
    $user->name = 'Mai Anh Kha';
    $user->avatar_url = '';
    $user->email = 'maianhkha.dev@gmail.com';
    $user->email_verified_at = now();
    $user->password = bcrypt('anhkha1811');
    $user->remember_token = str_random(10);
    $user->save();

    factory(App\User::class, 30)->create();
  }
}
