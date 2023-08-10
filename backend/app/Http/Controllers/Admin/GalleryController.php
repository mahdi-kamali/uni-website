<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\GalleryStoreRequest;
use App\Http\Requests\Admin\GalleryUpdateRequest;
use App\Http\Resources\Admin\GalleryResource;
use App\Http\Services\Image\ImageService;
use App\Models\Admin\Gallery;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return GalleryResource::collection(
            Gallery::Where('deleted_at',null)->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(GalleryStoreRequest $request,ImageService $imageService)
    {
           
        $inputs = $request->all();

        if ($request->hasFile('image')) {
            $imageService->setExclusiveDirectory('images' . DIRECTORY_SEPARATOR . 'Gallery');
            $result = $imageService->save($request->file('image'));
            if ($result === false) {
                return $this->error('', 'Your Image is not valid', 401);
            }
          
            $inputs['image'] = $result;
        }
        
    
        $gallery = Gallery::create([
            'title' => $request->title,
            'cat_id' => $request->cat_id,
            'image' =>$inputs['image']

        ]);
        
        return new GalleryResource($gallery);
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
    public function create()
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
    public function update(GalleryUpdateRequest $request, Gallery $gallery, ImageService $imageService)
    {
        $inputs = $request->all();
        if ($request->hasFile('image')) {
            if (!empty($gallery->image)) {
                $imageService->deleteDirectoryAndFiles($gallery->image['directory']);
            }
            $imageService->setExclusiveDirectory('images' . DIRECTORY_SEPARATOR . 'Gallery');
            $result = $imageService->createIndexAndSave($request->file('image'));
            if ($result === false) {
                return $this->error('','could not upload image',403);
            }
            $inputs['image'] = $result;
        } 
       
       $gallery->update($inputs);

       return $this->success($gallery,'gallery Updated Successfully');
   
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gallery $gallery)
    {
        $gallery->delete($gallery);
        return $this->success($gallery,'deleted successfully');
    }
}
