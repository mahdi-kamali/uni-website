<?php

namespace App\Models\Admin;

use App\Models\Admin\GalleryCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Gallery extends Model
{
    use HasFactory,SoftDeletes;


    protected $guarded = ['id'];


    protected $casts = ['image' => 'array'];

    public function galleryCategory(){
        return  $this->belongsTo(GalleryCategory::class);
    }
}
