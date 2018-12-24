@extends('layouts.default')

@section('content')
  <div class="page">
    <div class="page-header">
    </div>

    <div class="page-content">
      <div class="row">
        @foreach ($packages as $package)
        <div class="col-xl-6">
          {{ $package->name }}
        </div>
        @endforeach
      </div>
    </div>
  </div>
@endsection
