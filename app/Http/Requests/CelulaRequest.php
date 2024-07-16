<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rule;
use App\Models\User;


class CelulaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->is('admin') || auth()->user()->is('pastor') || auth()->user()->is('discipulador') || auth()->user()->is('lider');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        $request = [
            'name' => ['required', 'string', 'max:255'],
            'lider_id' => 'required',
            'rede' => 'required',
            'dia' => 'required',
            'hora' => 'required',
            'cep' => 'required',
            'uf' => 'required',
            'cidade' => 'required',
            'bairro' => 'required',
            'logradouro' => 'required',
            'numero' => 'nullable',
            'complemento' => 'nullable',

        ];

        return $request;
    }
}
