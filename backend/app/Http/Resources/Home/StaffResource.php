<?php

namespace App\Http\Resources\Home;

use Illuminate\Http\Resources\Json\JsonResource;

class StaffResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => (string)$this->id,
            'attributes' => [
                'name' => $this->name, 
                'role' => $this->role,
                'phone' => $this->phone,
                'mobile' => $this->mobile,
                'image' => $this->image,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at,
                'staffCategory' => $this->staffCategory,
            ],
        ];
    }
}
