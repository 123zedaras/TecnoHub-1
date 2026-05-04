<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sw extends Model
{
    protected $table = 'sws';

    protected $fillable = [
        'nombre',
        'descripcion',
        'precio',
        'instalador',
        'estado',
        'version',
        'product_id',
    ];

    protected $casts = [
        'precio' => 'decimal:2',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
