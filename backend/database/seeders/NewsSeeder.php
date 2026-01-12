<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\News;
use App\Models\User;

class NewsSeeder extends Seeder
{
    public function run()
    {
        $user = User::first(); // assign news to first user

        News::create([
            'user_id'     => $user->id,
            'title'       => 'First News Post',
            'subtitle'    => 'Subtitle example',
            'description' => 'Short description text...',
            'image_url'   => '/images/sample.jpg',
        ]);

        News::factory()->count(5)->create([
            'user_id' => $user->id
        ]);
    }
}
