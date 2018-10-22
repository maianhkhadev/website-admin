<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'name' => 'Member'
        ]);

        DB::table('roles')->insert([
            'name' => 'Leader'
        ]);

        DB::table('roles')->insert([
            'name' => 'Director'
        ]);
    }
}
