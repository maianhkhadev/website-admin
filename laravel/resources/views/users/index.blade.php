@extends('layouts.default')

@section('content')
  <div class="page">
    <div class="page-header">
      <a class="btn btn-orange" href="{{ route('users.create') }}">Create New User</a>
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
