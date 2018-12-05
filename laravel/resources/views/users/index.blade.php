@extends('layouts.default')

@section('content')
  <div class="page">
    <div class="page-header">
      <div class="row">
        <div class="col-xl-6">
          <h3 class="page-title">List of Users</h3>

          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">List of Users</li>
          </ol>
        </div>
        <div class="col-xl-6">
          <div class="tool-box">
            <div class="field-search">
              <img class="icon" src="/images/icon-search.png" alt="" />
              <input type="text" class="form-control" placeholder="Type to search..."/>
            </div>
            <a class="btn btn-orange btn-create" href="{{ route('users.create') }}">Create</a>
          </div>
        </div>
      </div>
    </div>

    <div class="page-content">
      <div class="com-table com-table-users">
        <div class="com-header">
          <span class="com-title">
            #
          </span>
          <span class="com-title">
            Name
          </span>
          <span class="com-title">
            Email
          </span>
          <span class="com-title">
            Update At
          </span>
          <span class="com-title">
            Actions
          </span>
        </div>
        <div class="com-content">
          @foreach ($users as $user)
            <com-table-row-user :index="{{ $users->firstItem() + $loop->index }}" :data="{{ $user }}"></com-table-row-user>
          @endforeach
        </div>
        <div class="com-footer">
          Showing {{ $users->firstItem() }} to {{ $users->lastItem() }} of {{ $users->total() }} entries

          {{ $users->links('vendor.pagination.default') }}
        </div>
      </div>
    </div>
  </div>
@endsection
