<?php

use App\Package;
use Illuminate\Database\Seeder;

class PackagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $this->createPackage('customer', 'Customer');
      $this->createPackage('order', 'Order');
      $this->createPackage('photo', 'Photo');
      $this->createPackage('post', 'Post');
      $this->createPackage('product', 'Product');
      $this->createPackage('user', 'User');
    }

    private function createPackage($alias, $name) {
      $package = new Package();
      $package->alias = $alias;
      $package->name = $name;
      $package->save();
    }
}
