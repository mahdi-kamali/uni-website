<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class StaffStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
       
            if($this->isMethod('post')){
                return [
                    'name' => 'required|max:120|min:2|regex:/^[ا-یa-zA-Z0-9\-۰-۹ء-ي., ]+$/u',
                    'role' => 'required|max:120|min:2|regex:/^[ا-یa-zA-Z0-9\-۰-۹ء-ي., ]+$/u',
                    'mobile' => 'required|numeric',
                    'staff_cat'=>'required|exists:staff_categories,id',
                    'phone' => 'required|numeric',
                    'image' => 'required|image|mimes:png,jpg,jpeg,gif,webp',   
                ];
            }
            else{
                return [
                    'name' => 'required|max:120|min:2|regex:/^[ا-یa-zA-Z0-9\-۰-۹ء-ي., ]+$/u',
                        'role' => 'required|max:120|min:2|regex:/^[ا-یa-zA-Z0-9\-۰-۹ء-ي., ]+$/u',
                        'mobile' => 'required|numeric',
                        'staff_cat'=>'required|exists:staff_categories,id',
                        'phone' => 'required|numeric',
                        'image' => 'image|mimes:png,jpg,jpeg,gif,webp',   
                ];
            }
    }
}






