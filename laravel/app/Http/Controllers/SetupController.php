<?php

namespace App\Http\Controllers;

use App\Package;
use Illuminate\Http\Request;

class SetupController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $packages = Package::all();
        return view('setup', ['packages' => $packages]);
    }
}
