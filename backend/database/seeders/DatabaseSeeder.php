<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\News;
use App\Models\Image;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        /* 1️⃣ Create Admin */
        $user = User::create([
            'username' => 'Admin',
            'email' => 'admin@example.com',
            'password' => bcrypt('password'),
        ]);

        /* 2️⃣ Create Images */
        $filenames = [
            'EF-45_thin.png',
            'enemy_burning.png',
            'enemy.png',
            'enemy2.png',
            'office.png',
            'section3.png',
            'section4.png',
            'SR-42_thin.png',
            'Stahlritter_42.png',
        ];

        $images = collect();

        foreach ($filenames as $file) {
            $images->push(
                Image::create([
                    'user_id' => $user->id,
                    'name'    => pathinfo($file, PATHINFO_FILENAME),
                    'url'     => '/storage/uploads/Admin/' . $file,
                ])
            );
        }

        /* 3️⃣ First News */
        $firstTitle = 'First News Post';

        News::create([
            'user_id'     => $user->id,
            'title'       => $firstTitle,
            'subtitle'    => 'Subtitle example',
            'description' => 'Short description text...',
            'slug'        => $this->generateDateSlug($firstTitle),
            'image_id'    => $images->random()->id,
        ]);

        /* 4️⃣ Additional News */
        $newsPosts = [
            [
                'title' => 'Cut Off Behind Enemy Lines',
                'subtitle' => 'Hold your ground until extraction arrives',
                'description' => 'Your unit has lost contact with HQ. Secure a structure and survive until extraction.',
            ],
            [
                'title' => 'New Enemy Units Deployed',
                'subtitle' => 'Adaptive AI increases battlefield pressure',
                'description' => 'Armored assault units and fast flankers now patrol the area.',
            ],
            [
                'title' => 'Extraction Mode Overhaul',
                'subtitle' => 'Higher risk, greater reward',
                'description' => 'Extraction windows are shorter and enemy aggression scales.',
            ],
            [
                'title' => 'Weapon Arsenal Expansion',
                'subtitle' => 'More firepower, more tactical choices',
                'description' => 'New weapons added with improved recoil balancing.',
            ],
            [
                'title' => 'Demo Update Live Now',
                'subtitle' => 'Experience the survival loop',
                'description' => 'Refined AI behavior and optimized performance.',
            ],
        ];

        foreach ($newsPosts as $post) {
            News::create([
                'user_id'     => $user->id,
                'title'       => $post['title'],
                'subtitle'    => $post['subtitle'],
                'description' => $post['description'],
                'slug'        => $this->generateDateSlug($post['title']),
                'image_id'    => $images->random()->id,
            ]);
        }
    }

    private function generateDateSlug(string $title): string
    {
        return now()->format('Y-m-d') . '-' . Str::slug($title);
    }
}
