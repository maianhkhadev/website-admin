@extends('layouts.default')

@section('content')
  <div class="page">
    <div class="page-header">
      <div class="row">
        <div class="col-xl-6">
          <h3 class="page-title">List of Posts</h3>

          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">List of Posts</li>
          </ol>
        </div>
        <div class="col-xl-6">
          <div class="tool-box">
            <div class="field-search">
              <img class="icon" src="/images/icon-search.png" alt="" />
              <input type="text" class="form-control" placeholder="Type to search..."/>
            </div>
            <a class="btn btn-orange btn-create" href="{{ route('posts.create') }}">Create</a>
          </div>
        </div>
      </div>
    </div>

    <div class="page-content">
      <div class="com-table com-table-posts">
        <div class="com-header">
          <span class="com-title">
            #
          </span>
          <span class="com-title">
            title
          </span>
          <span class="com-title">
            Update At
          </span>
          <span class="com-title">
            Actions
          </span>
        </div>
        <div class="com-content">
          @foreach ($posts as $post)
            <com-table-row-post :index="{{ $posts->firstItem() + $loop->index }}" :data="{{ $post }}"></com-table-row-post>
          @endforeach
        </div>
        <div class="com-footer">
          Showing {{ $posts->firstItem() }} to {{ $posts->lastItem() }} of {{ $posts->total() }} entries

          {{ $posts->links('vendor.pagination.default') }}
        </div>
      </div>
    </div>
  </div>
@endsection
