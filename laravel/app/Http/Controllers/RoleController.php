<?php

namespace App\Http\Controllers;

use App\Package;
use App\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
    $roles = Role::where('id', '!=', 1)->orderBy('updated_at', 'DESC')->paginate(8);
    return view('roles.index', ['roles' => $roles]);
  }

  /**
  * Show the form for creating a new resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function create()
  {
    return view('roles.create');
  }

  /**
  * Store a newly created resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @return \Illuminate\Http\Response
  */
  public function store(Request $request)
  {
    $role = new Role();

    $role->name = $request->input('name');

    $role->save();

    return redirect()->route('roles.index');
  }

  /**
  * Display the specified resource.
  *
  * @param  int  $id
  * @return \Illuminate\Http\Response
  */
  public function show($id)
  {
    //
  }

  /**
  * Show the form for editing the specified resource.
  *
  * @param  int  $id
  * @return \Illuminate\Http\Response
  */
  public function edit($id)
  {
    $role = Role::find($id);
    $packages = Package::all();

    return view('roles.edit', ['role' => $role, 'packages' => $packages]);
  }

  /**
  * Update the specified resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @param  int  $id
  * @return \Illuminate\Http\Response
  */
  public function update(Request $request, $id)
  {
    $role = Role::find($id);

    $role->name = $request->input('name');

    $permissions = $request->input('permissions');
    $role->permissions()->sync($permissions);

    $role->save();

    return redirect()->route('roles.index');
  }

  /**
  * Remove the specified resource from storage.
  *
  * @param  int  $id
  * @return \Illuminate\Http\Response
  */
  public function destroy($id)
  {
    //
  }
}
