<?php

namespace App\Http\Controllers\Home;

use App\Models\Admin\File;
use App\Models\Admin\Staff;
use Illuminate\Http\Request;
use App\Models\Admin\Gallery;
use App\Models\Admin\Category;
use App\Models\Admin\StaffCategory;
use App\Http\Controllers\Controller;
use App\Models\Admin\GalleryCategory;
use App\Http\Resources\Home\FileResource;
use App\Http\Resources\Home\StaffResource;
use App\Http\Resources\Home\GalleryResource;
use App\Http\Resources\Home\CategoryResource;
use App\Http\Resources\Home\StaffCategoryResource;
use App\Http\Resources\Home\GalleryCategoryResource;
use App\Http\Resources\Admin\CategoryResource as AdminCategoryResource;
use App\Http\Resources\Home\CategoryPostsResource;
use App\Http\Resources\Home\PostResource;
use App\Models\Admin\Post;

class HomeController extends Controller
{
  public function staffCategory(){

    return StaffCategoryResource::collection(
        StaffCategory::Where('deleted_at',null)->get()
    );

  }

  public function posts(){

    return PostResource::collection(
        Post::Where('deleted_at',null)->get()
    );

  }

  public function categoryPosts($id){

    return CategoryPostsResource::collection(
        Post::Where('cat_id',$id)->get()
    );

  }
  public function staff(){

    return StaffResource::collection(
        Staff::Where('deleted_at',null)->get()
    );

  }

  public function category(){

    return CategoryResource::collection(
        Category::Where('deleted_at',null)->get()
    );

  }

  public function galleryCategory(){

    return GalleryCategoryResource::collection(
        GalleryCategory::Where('deleted_at',null)->get()
    );

  }

  public function gallery(){

    return GalleryResource::collection(
        Gallery::Where('deleted_at',null)->get()
    );

  }

  public function file(){

    return FileResource::collection(
        File::Where('deleted_at',null)->get()
    );

  }



}
