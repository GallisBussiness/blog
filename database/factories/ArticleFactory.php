<?php

namespace Database\Factories;

use App\Models\Article;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ArticleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Article::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $title = $this->faker->sentence(rand(2,4));
        return [
            'title' => $title,
            'content' => $this->faker->sentences(4,true),
            'slug' => Str::slug($title),
            'image' => 'https://cdn.devdojo.com/images/may2021/fruit.jpg',
        ];
    }
}
