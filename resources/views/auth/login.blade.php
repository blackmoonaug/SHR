@extends('layouts.react')

@section('content')
<div class="container-fluid mt-5">
    <div class="row justify-content-center">

        <div class="col-md-12 col-lg-3 ">
            <div class="card mt-5">
                <div class="card-header navi text-white d-flex justify-content-center">
                    <div class="">
                        Skyline Hotel and Restaurant - Billing
                    </div>
                </div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="form-group">
                            <label for="name" class="col-form-label"> Username</label>
 
                            <div>
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="password" class="col-form-label d-flex"><span>Password</span></label>

                            <div>
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group mb-0">
                            <button type="submit" class="btn btn-primary form-control navi text-white">
                                {{ __('Login') }}
                            </button>
                        </div>


                    </form>

                    <hr>

                </div>
            </div>
        </div>

    </div>
</div>
@endsection
