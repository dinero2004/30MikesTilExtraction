<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // Login using username and password
  public function login(Request $request)
{
    $request->validate([
        'username' => 'required|string',
        'password' => 'required|string',
    ]);

    $user = User::where('username', $request->username)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json([
            'message' => 'Invalid credentials'
        ], 401);
    }

    $token = $user->createToken('api-token')->plainTextToken;

    return response()->json([
        'user' => $user,
        'access_token' => $token, // 🔥 IMPORTANT
    ], 200);
}


    // Logout and revoke all tokens
    public function logout()
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json(['error' => 'Unauthenticated'], 401);
        }

        // Revoke all tokens for the authenticated user
        $user->tokens()->delete();

        return response()->json(['message' => 'Logged out successfully'], 200);
    }
}