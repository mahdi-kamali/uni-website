<?php

namespace App\Models\Admin;
use App\Models\Admin\StaffCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Staff extends Model
{
    use HasFactory,SoftDeletes;

    protected $guarded = ['id'];
    
    protected $casts = ['image' => 'array'];


    public function staffCategory() :BelongsTo {
        return $this->belongsTo(StaffCategory::class,'staff_cat','id');
    }
}
