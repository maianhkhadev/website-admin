<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Permission extends Model
{
    use SoftDeletes;

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    public function package()
    {
        return $this->belongsTo('App\Package');
    }

    public function roles()
    {
       return $this->belongsToMany('App\Role');
    }
}
