<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    protected $guarded = [];
     
    protected $casts = [
        'created_at' => 'date',
        'updated_at' => 'date'
    ];

    public function category() {
       return $this->hasOne(Category::class);
    }
    public function comments() {
        return $this->hasMany(Comment::class);
    }
}
