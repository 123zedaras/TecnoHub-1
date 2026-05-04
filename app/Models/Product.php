<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'sku',
        'description',
        'price',
        'stock',
        'image',
        'active',
        'documentacion',
    ];

    protected $casts = [
        'price'  => 'float',
        'stock'  => 'integer',
        'active' => 'boolean',
    ];

    public function sws()
    {
        return $this->hasMany(Sw::class);
    }
}
