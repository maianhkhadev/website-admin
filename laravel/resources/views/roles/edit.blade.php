@extends('layouts.default')

@section('content')
  <div class="page page-roles-edit">
    <div class="page-header">
      <h3 class="page-title">Create a Role</h3>

      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
        <li class="breadcrumb-item"><a href="{{ route('roles.index') }}">List of Roles</a></li>
        <li class="breadcrumb-item active" aria-current="page">Create</li>
      </ol>
    </div>

    <div class="page-content">
      <form class="form" action="/roles/{{ $role->id }}" enctype="multipart/form-data" method="POST">
        <input type="hidden" name="_method" value="PUT">
        <input type="hidden" name="_token" value="{{ csrf_token() }}">

        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Name</label>
              <input type="text" name="name" class="form-control" value="{{ $role->name }}" placeholder="Ex: Admin" autocomplete="off">
            </div>
          </div>
        </div>

        <hr/>

        <section>
          <h4 class="section-title">Permissions:</h4>

          <div class="row">
            @foreach ($packages as $package)
            <div class="col-xl-4">
              <fieldset>
                <legend>{{ $package->name }}</legend>
                @foreach ($package->permissions as $permission)
                  <div class="form-check">
                    <input type="checkbox" name="permissions[]" class="form-check-input" value="{{ $permission->id }}" {{ $role->permissions->contains('id', $permission->id) ? 'checked' : '' }}>
                    <label class="form-check-label">{{ $permission->name }}</label>
                  </div>
                @endforeach
              </fieldset>
            </div>
            @endforeach
          </div>
        </section>

        <a class="btn btn-secondary" href="{{ route('roles.index') }}">Cancel</a>
        <button class="btn btn-orange">Save & Close</button>
      </form>
    </div>
  </div>
@endsection
