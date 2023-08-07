<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Models\Admin\StaffCategory;
use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\StaffCategoryResource;
use App\Http\Requests\Admin\StaffCategoryStoreRequest;

class StaffCategoryController extends Controller
{

    use HttpResponses;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
        return StaffCategoryResource::collection(
            StaffCategory::Where('deleted_at',null)->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StaffCategoryStoreRequest $request)
    {
        $staffCategory = StaffCategory::create([
            'name' => $request->name
        ]);
        
        return new StaffCategoryResource($staffCategory);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(StaffCategory $staffCategory)
    {
        $staffCategory->delete($staffCategory);
        return $this->success($staffCategory,'deleted successfully');
    }

    public function create()
    {
      
    }
    public function show()
    {
      
    }
    public function edit()
    {
      
    }
    public function update()
    {
      
    }
}
