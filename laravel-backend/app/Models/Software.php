<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Software extends Model
{
    protected $table = 'software';

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
        'precio' => 'float',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
