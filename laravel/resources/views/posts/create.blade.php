@extends('layouts.default')

@section('content')
  <div class="page page-posts-create">
    <div class="page-header">
      <div class="row">
        <div class="col-xl-6">
          <h3 class="page-title">Create a Post</h3>

          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
            <li class="breadcrumb-item"><a href="{{ route('posts.index') }}">List of Posts</a></li>
            <li class="breadcrumb-item active" aria-current="page">Create</li>
          </ol>
        </div>
      </div>
    </div>

    <div class="page-content">
      <form class="form" action="/posts" method="POST">
        <input type="hidden" name="_token" value="{{ csrf_token() }}">

        <div class="form-group">
          <label>Title</label>
          <textarea class="form-control" rows="2"></textarea>
        </div>

        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Category</label>
              <select class="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div class="form-group">
              <label>Tags</label>
              <select class="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div class="form-group">
              <label>Status</label>
              <select class="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>

          <div class="col-xl-6">
            <div class="form-group">
              <label>Thumbnail</label>
              <duv class="thumbnail"></div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label>Content</label>
          <input name="content" type="hidden">
          <quill ref="quill" class="form-quill"></quill>
        </div>

        <a class="btn btn-secondary" href="{{ route('posts.index') }}">Cancel</a>
        <button class="btn btn-primary">Preview</button>
        <button class="btn btn-orange">Save & Close</button>
      </form>

    </div>
  </div>
@endsection
