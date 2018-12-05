@extends('layouts.default')

@section('content')
  <div class="page">
    <div class="row">
      @foreach ($albums as $album)
        <div class="col-xl-3">
          <com-album :data="{{ $album }}"></com-album>
        </div>
      @endforeach
    </div>

    <div class="page-footer">
      {{ $albums->links('vendor.pagination.default') }}
    </div>
  </div>
@endsection
