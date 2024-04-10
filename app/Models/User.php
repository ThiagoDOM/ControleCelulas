<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'telefone',
        'password',
        'role',
        'responsavel'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    /*
     * O responsável pode assumir 2 perfis, o responsável do líder é o discipulador, e por sua vez o pastor, e pastor pode ser responsavel de pastor tbm. TODO: Definir essa regra
     */
    public function responsavel()
    {
        return $this->belongsTo(User::class, 'responsavel');
    }

    /**
     * Check if this user is $profile.
     * @param  string $profile
     * @return bool
     */
    public function is($profile) : bool
    {
        return $this->role == $profile;
    }

    // Scopes
    public function scopeSuperAdmins($q)
    {
        $q->where('role', 'superadmin');
    }
    public function scopeAdmins($q)
    {
        $q->where('role', 'admin');
    }
    public function scopePastores($q)
    {
        $q->where('role', 'pastor');
    }
    public function scopeDiscipuladores($q)
    {
        $q->where('role', 'discipulador');
    }
    public function scopeLideres($q)
    {
        $q->where('role', 'lider');
    }
}
