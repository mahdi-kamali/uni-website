<?php

namespace App\Models\Admin;

use App\Models\Admin\Gallery;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class GalleryCategory extends Model
{
    use HasFactory,SoftDeletes;


    protected $guarded = ['id'];

    protected $casts = ['image' => 'array'];

    public function images(){
        return  $this->hasMany(Gallery::class);
    }
}
