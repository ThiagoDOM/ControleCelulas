<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\FuncHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\DiscipuladorRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

class DiscipuladorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $users = User::query();
        $users->discipuladores();
        if ($request->name)
            $users->where('name', 'LIKE', "%$request->name%");


        $users->orderBy($request->order_key ?? 'name', $request->order == "true" ? "DESC" : "ASC");

        return Inertia::render('Admin/Discipuladores/List', [
            'query' => $request->all(),
            'users' => UserResource::collection(
                $users->paginate()->withQueryString()
            ),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = new User();
        $pastores = User::pastores()->get();

        return Inertia::render('Admin/Discipuladores/Form', [
            'user' => $user,
            'responsaveis' => $pastores
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DiscipuladorRequest $request)
    {
        $data = $request->all();

        $data['password'] = bcrypt($data['password']);
        $data['role'] = 'discipulador';
        $data['telefone'] = FuncHelper::desmascararTelefone($data['telefone']);
        $user = User::create($data);

        return Redirect::route('admin.discipuladores.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::findOrFail($id);
        $pastores = User::pastores()->get();

        if (!$user->is('discipulador'))
            abort(404);

        return Inertia::render('Admin/Discipuladores/Form', [
            'user' => $user,
            'responsaveis' => $pastores
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DiscipuladorRequest $request, string $id)
    {
        $user = User::findOrFail($id);

        if (!$user->is('discipulador'))
            abort(404);

        $data = $request->all();
        if (!$data['password'])
            unset($data['password']);
        else
            $data['password'] = bcrypt($data['password']);

        $data['telefone'] = FuncHelper::desmascararTelefone($data['telefone']);

        $user->fill($data);

        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }

        $user->save();

        return Redirect::route('admin.discipuladores.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        $user = User::findOrFail($id);

        if (!$user->is('discipulador'))
            abort(404);


        return $user->delete();
    }
}
