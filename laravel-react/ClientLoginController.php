<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;


class ClientLoginController extends Controller
{

    use AuthenticatesUsers;

    protected $redirectTo = '/dashboard';

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function guard()
    {
        return Auth::guard('reseller_client');
    }
    public function showLoginForm()
    {
        return view('auth.client_login');
    }

    public function login(Request $request)
    {
        $credentials = $request->only('name', 'password');

        if (Auth::guard('reseller_client')->attempt($credentials)) {
            // Authentication passed
            return redirect()->intended($this->redirectTo);
        }

        // // Authentication failed
        // return redirect()->back()->withErrors([
        //     'email' => 'Invalid credentials',
        // ]);
    }

    public function logout()
    {
        Auth::guard('reseller_client')->logout();

        return redirect('/');
    }
}
