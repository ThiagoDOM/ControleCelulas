<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rule;
use App\Models\User;


class LiderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->is('admin') || auth()->user()->is('pastor');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if(request()->method() == 'PATCH'){
            $id = request()->route('admin') ?? request()->route('pastore') ?? request()->route('discipuladore') ?? request()->route('lidere');
            $request = [
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($id)],
                'telefone' => 'nullable',
                'responsavel_id' => 'required',
                'password' => ['nullable', 'confirmed', Rules\Password::defaults()],
            ];
        } else {
            $request = [
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)],
                'telefone' => 'nullable',
                'password' => ['required', 'confirmed', Rules\Password::defaults()],
            ];
        }
        return $request;
    }

    /**
 * Get custom attributes for validator errors.
 *
 * @return array<string, string>
 */
public function attributes(): array
{
    return [
        'responsavel_id' => 'discipulador',
    ];
}
}
