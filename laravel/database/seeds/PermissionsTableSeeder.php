<?php

use App\Permission;
use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $package = App\Package::where('alias', 'customer')->first();

      $this->createPermission($package->id, 'groups.index', 'List of Groups');
      $this->createPermission($package->id, 'groups.view', 'View Group');
      $this->createPermission($package->id, 'groups.create', 'Create Group');
      $this->createPermission($package->id, 'groups.update', 'Update Group');
      $this->createPermission($package->id, 'groups.delete', 'Delete Group');

      $this->createPermission($package->id, 'customers.index', 'List of Customers');
      $this->createPermission($package->id, 'customers.view', 'View Customer');
      $this->createPermission($package->id, 'customers.create', 'Create Customer');
      $this->createPermission($package->id, 'customers.update', 'Update Customer');
      $this->createPermission($package->id, 'customers.delete', 'Delete Customer');


      $package = App\Package::where('alias', 'post')->first();

      $this->createPermission($package->id, 'categories.index', 'List of Categories');
      $this->createPermission($package->id, 'categories.view', 'View Category');
      $this->createPermission($package->id, 'categories.create', 'Create Category');
      $this->createPermission($package->id, 'categories.update', 'Update Category');
      $this->createPermission($package->id, 'categories.delete', 'Delete Category');

      $this->createPermission($package->id, 'posts.index', 'List of Posts');
      $this->createPermission($package->id, 'posts.view', 'View Post');
      $this->createPermission($package->id, 'posts.create', 'Create Post');
      $this->createPermission($package->id, 'posts.update', 'Update Post');
      $this->createPermission($package->id, 'posts.delete', 'Delete Post');


      $package = App\Package::where('alias', 'order')->first();

      $this->createPermission($package->id, 'orders.index', 'List of Orders');
      $this->createPermission($package->id, 'orders.view', 'View Order');
      $this->createPermission($package->id, 'orders.create', 'Create Order');
      $this->createPermission($package->id, 'orders.update', 'Update Order');
      $this->createPermission($package->id, 'orders.delete', 'Delete Order');


      $package = App\Package::where('alias', 'user')->first();

      $this->createPermission($package->id, 'users.index', 'List of Users');
      $this->createPermission($package->id, 'users.view', 'View User');
      $this->createPermission($package->id, 'users.create', 'Create User');
      $this->createPermission($package->id, 'users.update', 'Update User');
      $this->createPermission($package->id, 'users.delete', 'Delete User');
    }

    private function createPermission($package_id, $alias, $name) {
      $permission = new Permission();
      $permission->package_id = $package_id;
      $permission->alias = $alias;
      $permission->name = $name;
      $permission->save();
    }
}
