@extends('layouts.fullscreen')

@section('content')
  <div class="page">
    <div class="page-header">
      <div class="row">
        <div class="col-xl-6">
          <h3 class="page-title">Create a Role</h3>

          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
            <li class="breadcrumb-item"><a href="{{ route('roles.index') }}">List of Roles</a></li>
            <li class="breadcrumb-item active" aria-current="page">Create</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
@endsection
