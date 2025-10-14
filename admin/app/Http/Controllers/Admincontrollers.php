<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function showLogin()
    {
        return view('pages.samples.login');
    }

    public function doLogin(Request $request)
    {
        $username = $request->input('username');
        $password = $request->input('password');

        // Tài khoản mẫu
        if ($username === 'admin' && $password === '123456') {
            session(['loggedIn' => true]);
            return redirect('/admin/dashboard');
        } else {
            return back()->with('error', 'Sai tên đăng nhập hoặc mật khẩu!');
        }
    }

    public function dashboard()
    {
        if (!session('loggedIn')) {
            return redirect('/admin/login');
        }
        return view('admin.dashboard');
    }

    public function logout()
    {
        session()->forget('loggedIn');
        return redirect('/admin/login');
    }
}
