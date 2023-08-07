<?php

namespace App\Http\Controllers\Auth;
use Auth\sanctum;
use App\Models\User;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserLoginRequest;
use App\Http\Services\Image\ImageService;
use App\Http\Requests\Auth\StoreUserRequest;


class AuthController extends Controller
{
    use HttpResponses;

    public function login(UserLoginRequest $request)
    {
      $request->validated($request->all());

      $credentials = $request->only('email', 'password');
 
     
         if(!Auth::attempt($credentials)){
            return $this->error('','email or pass is wrong',401);
         }
         else{
      $user = User::where('email',$request->email)->first();
      
     
      $user = User::where('email',$request->email)->first();
      return $this->success([

         'user' => $user,
         'token' => $user->createToken('API Token of' . $user->name)->plainTextToken,

      ],'you seccesfully logged in');
   }

    }

    public function register(StoreUserRequest $request)
    {
      
      $user = $request->all();

        $user = User::create([
          'name' => $request->name,
          'email' => $request->email,
          'password' => Hash::make($request->password)
      ]);
        return $this->success([
            'user' => $user,
            'token' => $user->createToken('API Token of' . $user->name)->plainTextToken,
        ],
        'You successfully registered, Thanks for choosing us',
      );
    }

    public function logout(Request $request)
    {
      $request->user()->currentAccessToken()->delete();
    
    }


}
