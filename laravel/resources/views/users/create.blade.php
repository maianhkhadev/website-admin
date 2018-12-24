@extends('layouts.fullscreen')

@section('content')
  <div class="page page-users-create">
    <div class="page-header">
      <h3 class="page-title">Create a User</h3>

      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
        <li class="breadcrumb-item"><a href="{{ route('users.index') }}">List of Users</a></li>
        <li class="breadcrumb-item active" aria-current="page">Create</li>
      </ol>
    </div>

    <div class="page-content">
      <form class="form" action="/users" enctype="multipart/form-data" method="POST">
        <input type="hidden" name="_token" value="{{ csrf_token() }}">

        <div class="form-group">
          <label>Role</label>
          <select name="role_id" class="form-control">
            @foreach ($roles as $role)
            <option value="{{ $role->id }}">{{ $role->name }}</option>
            @endforeach
          </select>
        </div>

        <div class="form-group">
          <label>Name</label>
          <input type="text" name="name" class="form-control" placeholder="Ex: Mai Anh Kha" autocomplete="off">
        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="email" name="email" class="form-control" placeholder="Ex: maianhkha.dev@gmail.com" autocomplete="off">
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" name="password" class="form-control" autocomplete="off">
        </div>

        <div class="form-group">
          <label>Confirm Password</label>
          <input type="password" name="confirm_password" class="form-control" autocomplete="off">
        </div>

        <a class="btn btn-secondary" href="{{ route('users.index') }}">Cancel</a>
        <button class="btn btn-orange">Save & Close</button>
      </form>
    </div>
  </div>
@endsection
