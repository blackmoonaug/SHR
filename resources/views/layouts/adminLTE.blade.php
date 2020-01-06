<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('app-title')</title>

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    
    <link rel="stylesheet" href="{{ asset('plugins/fontawesome-free/css/all.min.css') }}">

    <link href="{{ asset('css/datatables.min.css' )}}" rel="stylesheet" />
    <link href="{{ asset('css/dataTables.bootstrap4.min.css' )}}" rel="stylesheet" />
    <link href="{{ asset('css/loading.css') }}" rel="stylesheet">
    <link href="{{ asset('css/loading-btn.css')}}" rel="stylesheet"/>

    

    <style>
        .panel-bg {
            background: white;
            border-bottom: 3px solid #021B79;
            color: black;
        }

                
        .navi {
            background-image: linear-gradient(to right, #003366, #4bcffa) !important;
        }

    </style>
</head>
<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper" id="app">
        @include('layouts.alte-nav')
        @include('layouts.alte-aside')

        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    @yield('header')
                </div>
            </div>

            <div class="content">
                @yield('content')
            </div>
        </div>
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/swal.js') }}"></script>
    <script src="{{ asset('js/s.js') }}"></script>
    <script src="{{ asset('js/target.js') }}"></script>

    @yield('addons')

</body>
</html>