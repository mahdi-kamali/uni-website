<?php

namespace App\Http\Resources\Home;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
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
                'title' => $this->title, 
               'cat_id' => $this->cat_id,
                'image' => $this->image,
                'description' => $this->description,

                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at,    
            ],
            'category' => $this->category->title,
        ];
    }
}
