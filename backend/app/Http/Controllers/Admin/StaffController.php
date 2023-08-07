<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StaffStoreRequest;
use App\Http\Resources\Admin\StaffResource;
use App\Http\Services\Image\ImageService;
use App\Models\Admin\Staff;

class StaffController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return StaffResource::collection(
            Staff::Where('deleted_at',null)->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StaffStoreRequest $request,ImageService $imageService)
    {
        
        $inputs = $request->all();

        if ($request->hasFile('image')) {
            $imageService->setExclusiveDirectory('images' . DIRECTORY_SEPARATOR . 'Staff');
            $result = $imageService->createIndexAndSave($request->file('image'));
            if ($result === false) {
                return $this->error('', 'Your Image is not valid', 401);
            }
          
            $inputs['image'] = $result;
        }
        
    
        $staff = Staff::create([
            'name' => $request->name,
            'role' => $request->role,
            'mobile' => $request->mobile,
            'phone' => $request->phone,
            'staff_cat' => $request->staff_cat,
            'image' =>$inputs['image']

        ]);
        
        return new StaffResource($staff);

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
    }  public function edit($id)
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
    public function update(StaffStoreRequest $request, Staff $staff,ImageService $imageService)
    {
        $inputs = $request->all();
        if ($request->hasFile('image')) {
            if (!empty($staff->image)) {
                $imageService->deleteDirectoryAndFiles($staff->image['directory']);
            }
            $imageService->setExclusiveDirectory('images' . DIRECTORY_SEPARATOR . 'Staff');
            $result = $imageService->createIndexAndSave($request->file('image'));
            if ($result === false) {
                return $this->error('','could not upload image',403);
            }
            $inputs['image'] = $result;
        } 
       
       $staff->update($inputs);

       return $this->success($staff,'staff Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Staff $staff)
    {
        $staff->delete($staff);
        return $this->success($staff,'deleted successfully');
    }
}
