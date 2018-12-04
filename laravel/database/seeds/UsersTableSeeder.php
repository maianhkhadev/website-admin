<?php

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
    DB::table('users')->insert([
      'role_id' => 1,
      'name' => 'Mai Anh Kha',
      'email' => 'maianhkha.dev@gmail.com',
      'email_verified_at' => now(),
      'password' => bcrypt('anhkha1811'),
      'remember_token' => str_random(10),
    ]);

    factory(App\User::class, 30)->create();
  }
}
