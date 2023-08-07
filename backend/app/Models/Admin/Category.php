<?php

namespace App\Models\Admin;

use App\Models\Admin\Post;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory,SoftDeletes;


    protected $guarded = ['id'];

    protected $casts = ['image' => 'array'];

    public function posts() :HasMany
    {
        return $this->hasMany(Post::class,'cat_id');
    }
}
