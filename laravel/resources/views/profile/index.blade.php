@extends('layouts.fullscreen')

@section('content')
  <div class="page page-profile-index">
    <div class="page-header">
      <h3 class="page-title">Profile</h3>

      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Profile</li>
      </ol>
    </div>

    <div class="page-content">

      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="tab" href="#tab-01">General</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#tab-02">Password</a>
        </li>
      </ul>

      <div class="tab-content">
        <div class="tab-pane active" id="tab-01">
          <form class="form" action="/profile" enctype="multipart/form-data" method="POST">
            <input type="hidden" name="_token" value="{{ csrf_token() }}">

            <div class="row">
              <div class="col-xl-3">
                <div class="form-group">
                  <input type="file" name="avatar" class="hidden">
                  <div class="avatar">
                    <img class="icon" src="/images/icon-upload.png" alt="" />
                  </div>
                  <small class="form-text text-muted text-center">Max 1MB</small>
                </div>
              </div>
              <div class="col-xl-9">
                <div class="form-group">
                  <label>Name</label>
                  <input type="text" name="name" class="form-control" value="{{ $user->name }}" placeholder="Ex: Mai Anh Kha" autocomplete="off">
                </div>

                <div class="form-group">
                  <label>Email</label>
                  <input type="email" class="form-control-plaintext" value="{{ $user->email }}">
                </div>
              </div>
            </div>

            <a class="btn btn-secondary" href="{{ route('home') }}">Cancel</a>
            <button class="btn btn-orange">Save & Close</button>
          </form>
        </div>
        <div class="tab-pane" id="tab-02">
          <form class="form" action="/change-password" enctype="multipart/form-data" method="POST">
            <input type="hidden" name="_token" value="{{ csrf_token() }}">

            <div class="form-group">
              <label>Old Password</label>
              <input type="password" name="password" class="form-control" autocomplete="off">
            </div>

            <div class="form-group">
              <label>New Password</label>
              <input type="password" name="password" class="form-control" autocomplete="off">
            </div>

            <div class="form-group">
              <label>Confirm Password</label>
              <input type="password" name="confirm_password" class="form-control" autocomplete="off">
            </div>

            <a class="btn btn-secondary" href="{{ route('home') }}">Cancel</a>
            <button class="btn btn-orange">Save & Close</button>
          </form>
        </div>
      </div>
    </div>
  </div>
@endsection
