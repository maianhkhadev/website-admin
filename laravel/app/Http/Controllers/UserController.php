<?php

namespace App\Http\Controllers;

use App\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
      $users = User::where('id', '!=', 1)->orderBy('updated_at', 'DESC')->paginate(8);
      return view('users.index', ['users' => $users]);
  }

  /**
  * Show the form for creating a new resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function create()
  {
      $roles = Role::all();
      return view('users.create', ['roles' => $roles]);
  }

  /**
  * Store a newly created resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @return \Illuminate\Http\Response
  */
  public function store(Request $request)
  {
      $user = new User();

      $user->role_id = $request->input('role_id');
      $user->name = $request->input('name');
      $user->email = $request->input('email');

      $password = $request->input('password');
      $user->password = Hash::make($password);

      $user->save();

      return redirect()->route('users.index');
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
      $user = User::find($id);

      $user->role_id = $request->input('role_id');
      $user->name = $request->input('name');
      $user->email = $request->input('email');

      $user->save();

      return redirect()->route('users.index');
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
