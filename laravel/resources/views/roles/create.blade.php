@extends('layouts.fullscreen')

@section('content')
  <div class="page page-users-create">
    <div class="page-header">
      <h3 class="page-title">Create a Role</h3>

      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
        <li class="breadcrumb-item"><a href="{{ route('roles.index') }}">List of Roles</a></li>
        <li class="breadcrumb-item active" aria-current="page">Create</li>
      </ol>
    </div>

    <div class="page-content">
      <form class="form" action="/roles" enctype="multipart/form-data" method="POST">
        <input type="hidden" name="_token" value="{{ csrf_token() }}">

        <div class="form-group">
          <label>Name</label>
          <input type="text" name="name" class="form-control" placeholder="Ex: Admin" autocomplete="off">
        </div>

        <a class="btn btn-secondary" href="{{ route('roles.index') }}">Cancel</a>
        <button class="btn btn-orange">Save & Close</button>
      </form>
    </div>
  </div>
@endsection
