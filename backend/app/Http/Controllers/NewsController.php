<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    // GET /news
    public function index()
    {
        return News::with('user')->get();
    }

    // GET /news/{id}
    public function show($id)
    {
        return News::with('user')->findOrFail($id);
    }

    // POST /news
    public function store(Request $request)
    {
        $data = $request->validate([
            'user_id'     => 'required|exists:users,id',
            'title'       => 'required|string|max:255',
            'subtitle'    => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'image_url'   => 'nullable|string|max:255'
        ]);

        return News::create($data);
    }

    // PUT/PATCH /news/{id}
    public function update(Request $request, $id)
    {
        $news = News::findOrFail($id);

        $data = $request->validate([
            'title'       => 'sometimes|string|max:255',
            'subtitle'    => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'image_url'   => 'sometimes|string|max:255',
            'user_id'     => 'sometimes|exists:users,id'
        ]);

        $news->update($data);

        return $news;
    }

    // DELETE /news/{id}
    public function destroy($id)
    {
        News::findOrFail($id)->delete();

        return response()->json(['message' => 'News deleted']);
    }
}
