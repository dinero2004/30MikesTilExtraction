<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // GET /users
    public function index()
    {
        return User::all();
    }

    // GET /users/{id}
    public function show($id)
    {
        return User::findOrFail($id);
    }

    // POST /users
    public function store(Request $request)
    {
        return User::create($request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ]));
    }

    // PUT/PATCH /users/{id}
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $user->update($request->validate([
            'name' => 'sometimes',
            'email' => 'sometimes|email|unique:users,email,' . $id,
            'password' => 'sometimes'
        ]));

        return $user;
    }

    // DELETE /users/{id}
    public function destroy($id)
    {
        User::findOrFail($id)->delete();
        return response()->json(['message' => 'User deleted']);
    }
}
