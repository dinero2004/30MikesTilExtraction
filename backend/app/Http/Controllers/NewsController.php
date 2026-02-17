<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class NewsController extends Controller
{
    // GET /api/news
    public function index(Request $request)
    {
        return News::with('coverImage', 'user')
            ->when(
                $request->slug,
                fn($q) =>
                $q->where('slug', $request->slug)
            )
            ->latest()
            ->paginate(10);
    }

    // GET /api/news/{news}
    public function show(News $news)
    {
        return response()->json(
            $news->load('coverImage', 'user')
        );
    }

    // POST /api/news
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'image_id' => 'nullable|exists:images,id'
        ]);

        $validated['slug'] = \Str::slug($validated['title']);
        $validated['user_id'] = $request->user()->id; // 🔥 IMPORTANT

        $news = News::create($validated);

        return response()->json([
            'message' => 'News created successfully',
            'data' => $news->load('coverImage', 'user')
        ], 201);
    }

    // PUT / PATCH /api/news/{news}
    public function update(Request $request, News $news)
{
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'subtitle' => 'nullable|string|max:255',
        'description' => 'nullable|string',
        'image_id' => 'nullable|exists:images,id'
    ]);

    $validated['slug'] = Str::slug($validated['title']);

    $news->update($validated);

    return response()->json([
        'message' => 'News updated successfully',
        'data' => $news->load('coverImage', 'user')
    ]);
}
    // DELETE /api/news/{news}
    public function destroy(News $news)
    {
        $news->delete();

        return response()->json([
            'message' => 'News deleted'
        ]);
    }
}
