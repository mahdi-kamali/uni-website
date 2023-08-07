<?php

namespace App\Models\Admin;

use App\Models\Admin\Category;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    use HasFactory,SoftDeletes;

    protected $guarded = ['id'];


    protected $casts = ['image' => 'array'];


    public function category() :BelongsTo
    {
        return $this->belongsTo(Category::class,'cat_id','id');
    }
}
