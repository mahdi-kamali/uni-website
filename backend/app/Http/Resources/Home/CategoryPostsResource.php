<?php

namespace App\Http\Resources\Home;

use App\Http\Resources\Home\PostResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryPostsResource extends JsonResource
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
                'image' => $this->image,
                'cat_id' => $this->cat_id,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at
            ],
            'categoryTitle' => $this->category->title,
        ];
    }
}
