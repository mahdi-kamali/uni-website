<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\GalleryCategoryStoreRequest;
use App\Http\Requests\Admin\GalleryCategoryUpdateRequest;
use App\Http\Resources\Admin\GalleryCategoryResource;
use App\Http\Services\Image\ImageService;
use App\Models\Admin\GalleryCategory;

class GalleryCategoryController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return GalleryCategoryResource::collection(
            GalleryCategory::Where('deleted_at',null)->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(GalleryCategoryStoreRequest $request, ImageService $imageService)
    {
        $inputs = $request->all();

        if ($request->hasFile('image')) {
            $imageService->setExclusiveDirectory('images' . DIRECTORY_SEPARATOR . 'GalleryCategory');
            $result = $imageService->save($request->file('image'));
            if ($result === false) {
                return $this->error('', 'Your Image is not valid', 401);
            }
          
            $inputs['image'] = $result;
        }
        
    
        $post = GalleryCategory::create([
            'title' => $request->title,
            'image' =>$inputs['image']

        ]);
        
        return new GalleryCategoryResource($post);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
    public function create($id)
    {
        //
    }
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(GalleryCategoryUpdateRequest $request, GalleryCategory $galleryCategory,ImageService $imageService)
    {
        $inputs = $request->all();
        if ($request->hasFile('image')) {
            if (!empty($galleryCategory->image)) {
                $imageService->deleteDirectoryAndFiles($galleryCategory->image['directory']);
            }
            $imageService->setExclusiveDirectory('images' . DIRECTORY_SEPARATOR . 'GalleryCategory');
            $result = $imageService->save($request->file('image'));
            if ($result === false) {
                return $this->error('','could not upload image',403);
            }
            $inputs['image'] = $result;
        } 
       
       $galleryCategory->update($inputs);

       return $this->success($galleryCategory,'Gallery category Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(GalleryCategory $galleryCategory)
    {
        $galleryCategory->delete($galleryCategory);
        return $this->success($galleryCategory,'deleted successfully');
    }
}
