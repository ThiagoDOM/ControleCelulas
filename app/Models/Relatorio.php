<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Relatorio extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'celula_id',
        'date',
        'membros_totais',
        'membros_presentes',
        'batizados',
        'frequentadores',
        'visitantes',
        'vl_oferta'
    ];

    public function celula()
    {
        return $this->belongsTo(Celula::class);
    }
}
