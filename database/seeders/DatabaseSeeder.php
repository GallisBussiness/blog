<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Category;
use App\Models\Comment;
use App\Models\User;
use GuzzleHttp\Promise\Create;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         User::factory(1)->create();
         $categories = Category::factory(5)->create();
         $articles = Article::factory(10)->create([
             'category_id' => $categories->random(5)->first()
            ]);
         Comment::factory(20)->create([
            'article_id' => $articles->random(10)->first()
         ]);
    }
}
