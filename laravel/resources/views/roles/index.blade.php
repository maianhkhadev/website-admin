@extends('layouts.default')

@section('content')
  <div class="page">
    <div class="page-header">
      <div class="row">
        <div class="col-xl-6">
          <h3 class="page-title">List of Roles</h3>

          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">List of Roles</li>
          </ol>
        </div>
        <div class="col-xl-4">
          <div class="field-search">
            <img class="icon" src="/images/icon-search.png" alt="" />
            <input type="text" class="form-control" placeholder="Type to search..."/>
          </div>
        </div>
        <div class="col-xl-2 text-right">
          <a class="btn btn-orange" href="{{ route('roles.create') }}">Create New Role</a>
        </div>
      </div>
    </div>

    <div class="com-table com-table-roles">
      <div class="com-header">
        <span class="com-title">
          #
        </span>
        <span class="com-title">
          Name
        </span>
        <span class="com-title">
          Update At
        </span>
        <span class="com-title">
          Actions
        </span>
      </div>
      <div class="com-content">
        @foreach ($roles as $role)
          <com-table-row-role :index="{{ $roles->firstItem() + $loop->index }}" :data="{{ $role }}"></com-table-row-role>
        @endforeach
      </div>
      <div class="com-footer">
        Showing {{ $roles->firstItem() }} to {{ $roles->lastItem() }} of {{ $roles->total() }} entries

        {{ $roles->links('vendor.pagination.default') }}
      </div>
    </div>
  </div>
@endsection
