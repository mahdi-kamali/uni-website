<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Models\Admin\Category;
use App\Http\Controllers\Controller;
use App\Http\Services\Image\ImageService;
use App\Http\Resources\Admin\CategoryResource;
use App\Http\Requests\Admin\CategoryStoreRequest;
use App\Http\Requests\Admin\CategoryUpdateRequest;

class CategoryController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CategoryResource::collection(
            Category::Where('deleted_at',null)->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryStoreRequest $request,ImageService $imageService)
    {
        
        $inputs = $request->all();

        if ($request->hasFile('image')) {
            $imageService->setExclusiveDirectory('images' . DIRECTORY_SEPARATOR . 'Category');
            $result = $imageService->save($request->file('image'));
            if ($result === false) {
                return $this->error('', 'Your Image is not valid', 401);
            }
          
            $inputs['image'] = $result;
        }
        
    
        $category = Category::create([
            'title' => $request->title,
            'description' => $request->description,
            'image' =>$inputs['image']

        ]);
        
        return new CategoryResource($category);

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
    public function edit($id)
    {
        //
    }
    public function create()
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
    public function update(CategoryUpdateRequest $request, Category $category, ImageService $imageService)
    {
       
        $inputs = $request->all();
        if ($request->hasFile('image')) {
            if (!empty($category->image)) {
                $imageService->deleteDirectoryAndFiles($category->image['directory']);
            }
            $imageService->setExclusiveDirectory('images' . DIRECTORY_SEPARATOR . 'Category');
            $result = $imageService->save($request->file('image'));
            if ($result === false) {
                return $this->error('','could not upload image',403);
            }
            $inputs['image'] = $result;
        } 
        
    //    $category->update($inputs);

       return $this->success($category,'category Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete($category);
        return $this->success($category,'deleted successfully');
    }
}
