<?php

namespace App\Models\Admin;

use App\Models\Admin\Staff;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class StaffCategory extends Model
{
    use HasFactory,SoftDeletes;


    protected $guarded = ['id'];


    public function staffs() :HasMany {
        return $this->hasMany(Staff::class,'staff_cat');
    }


    
}
