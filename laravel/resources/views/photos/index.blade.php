@extends('layouts.default')

@section('content')
  <div class="page">
    <div class="row">
      @foreach ($photos as $photo)
        <div class="col-xl-2">
          <com-photo :data="{{ $photo }}"></com-photo>
        </div>
      @endforeach
    </div>

    <div class="page-footer">
      {{ $photos->links('vendor.pagination.default') }}
    </div>
  </div>
@endsection
