<?php

namespace Database\Factories;
use Illuminate\Support\Str;
use App\Models\Image;
use App\Models\User;
use App\Models\News;
use Illuminate\Database\Eloquent\Factories\Factory;

class ImageFactory extends Factory
{
    protected $model = Image::class;

    public function definition(): array
    {
        $filename = Str::uuid() . '.png';
        
        return [
            'url' => "/storage/uploads/Admin/{$filename}",
            'name'    => $filename,
            'user_id' => User::inRandomOrder()->value('id'),
            'news_id' => News::inRandomOrder()->value('id'),
        ];
    }
}
