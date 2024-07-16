<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rule;
use App\Models\User;


class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->is('admin');
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
                'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($id)->whereNull('deleted_at')],
                'telefone' => 'nullable',
                'password' => ['nullable', 'confirmed', Rules\Password::defaults()],
            ];
        } else {
            $request = [
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->whereNull('deleted_at')],
                'telefone' => 'nullable',
                'password' => ['required', 'confirmed', Rules\Password::defaults()],
            ];
        }
        return $request;
    }
}
