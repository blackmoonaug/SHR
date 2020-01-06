<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\DB;

class AuthAPI extends Controller
{
    public function register(Request $request)
    {
        $validatedData = $this->validate($request, [
            'student_number' => ['required', 'string', 'alpha_num', 'max:255', 'exists:students,student_number', 'unique:users'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:12', 'confirmed'],
        ]);

        $user = User::create([
            'student_number' => $request->student_number,
            'email' => $request->email,
            'password' => \Hash::make($request->password),
        ]);

        return response([
            'success' => true,
        ]);
    }

    public function login(Request $request)
    {
        $validatedData = $this->validate($request, [
            'student_number' => 'required',
            'password' => 'required'
        ]);

        $validated_reg = $this->validate($request, [
            'student_number' => ['required', 'string', 'alpha_num', 'max:255', 'exists:users,student_number'],
        ]);

        if (!auth()->attempt($validatedData)) {
            return response([
                'success' => false,
                'message' => 'Wrong Login Credentials.'
            ]);
        }

        $accessToken = auth()->user()->createToken('bcpsp')->accessToken;

        return response([
            'success' => true,
            'user' => auth()->user(),
            'tok' => $accessToken,
            'message' => 'Successfully Login'
        ]);
    }

    public function resetPW(Request $request)
    {

        $vd = $this->validate($request, [
            'password' => 'required|confirmed',
            'password_confirmation' => 'required'
        ]);

        DB::beginTransaction();

        try {
            $user = User::find(auth()->user()->id);
            $user->password = \Hash::make($request->password);
            $user->save();
        } catch (\Exception $e) {
            DB::rollBack();
            \Log::critical($e);
            return response([
                'success' => false,
                'message' => 'Tampered Data, Rolling back Changes'
            ]);
        }

        DB::commit();

        return response([
            'success' => true
        ]);
    }
}
