<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CelulaRequest;
use App\Http\Resources\CelulaResource;
use App\Models\Celula;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

class CelulaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $celulas = Celula::query();

        if ($request->name)
            $celulas->where('name', 'LIKE', "%$request->name%");


        $celulas->orderBy($request->order_key ?? 'name', $request->order == "true" ? "DESC" : "ASC");

        return Inertia::render('Admin/Celulas/List', [
            'query' => $request->all(),
            'celulas' => CelulaResource::collection(
                $celulas->paginate()->withQueryString()
            ),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $celula = new Celula();
        $lideres = User::lideres()->get();

        return Inertia::render('Admin/Celulas/Form', [
            'celula' => $celula,
            'lideres' => $lideres
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CelulaRequest $request)
    {
        $data = $request->all();
        $data['cep'] = str_replace('-', '', $data['cep']);

        $celula = Celula::create($data);

        return Redirect::route('admin.celulas.index');
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
        $celula = Celula::findOrFail($id);
        $lideres = User::lideres()->get();

        return Inertia::render('Admin/Celulas/Form', [
            'celula' => $celula,
            'lideres' => $lideres
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CelulaRequest $request, string $id)
    {
        $celula = Celula::findOrFail($id);

        $data = $request->all();
        $data['cep'] = str_replace('-', '', $data['cep']);

        $celula->fill($data);

        $celula->save();

        return Redirect::route('admin.celulas.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        $celula = Celula::findOrFail($id);

        return $celula->delete();
    }
}
