<?php

namespace App\Http\Controllers\Admin;


use App\Models\Admin\File;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\FileResource;
use App\Http\Requests\Admin\FileStoreRequest;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return FileResource::collection(
            File::Where('deleted_at',null)->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FileStoreRequest $request)
    {
        if($request->hasFile('file')){
            $uploadedFile = $request->file('file');
            
           $fileName = 'file/'. time(). Str::random(5) .'_'. $uploadedFile->getClientOriginalName() ;
          $finalFileName = trim($fileName, ' '); 
          $inputs['file'] = $finalFileName;
          $uploadedFile->move(public_path('file'), $finalFileName);
        }

        $file = File::create([
            'title' => $request->title,
            'description' => $request->description,
            'file' =>$inputs['file']

        ]);
        
        return new FileResource($file);
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

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(File $file)
    {
        $file->delete($file);
        return $this->success($file,'deleted successfully');
    }
    public function create($id)
    {
        //
    }
    public function edit($id)
    {
        //
    }
}
