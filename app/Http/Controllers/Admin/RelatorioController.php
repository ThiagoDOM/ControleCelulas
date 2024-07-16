<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\RelatorioRequest;
use App\Http\Resources\RelatorioResource;
use App\Models\Celula;
use App\Models\Relatorio;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

class RelatorioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id, Request $request)
    {
        $celula = Celula::findOrFail($id);
        $relatorios = Relatorio::query();

        $data = $request->all();
        $data['order_key'] = isset($data['order_key']) ? $data['order_key'] : 'date';
        $data['order'] = isset($data['order']) ? $data['order'] : 'true';

        $relatorios->where('celula_id', $celula->id);

        // if ($request->name)
        //     $relatorios->where('name', 'LIKE', "%$request->name%");


        $relatorios->orderBy($data['order_key'], $data['order'] == "true" ? "DESC" : "ASC");

        return Inertia::render('Admin/Relatorios/List', [
            'query' => $data,
            'celula' => $celula,
            'relatorios' => RelatorioResource::collection(
                $relatorios->paginate()->withQueryString()
            ),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($id)
    {
        $celula = Celula::findOrFail($id);

        $relatorio = new Relatorio();

        return Inertia::render('Admin/Relatorios/Form', [
            'celula' => $celula,
            'relatorio' => $relatorio
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store($id, RelatorioRequest $request)
    {
        $celula = Celula::findOrFail($id);
        $data = $request->all();
        $data['celula_id'] = $id;

        $data['vl_oferta'] = str_replace('R$ ', '', $data['vl_oferta']);
        $data['vl_oferta'] = str_replace('.', '', $data['vl_oferta']);
        $data['vl_oferta'] = str_replace(',', '.', $data['vl_oferta']);

        $relatorio = Relatorio::create($data);

        return Redirect::route('admin.relatorios.index', $id);
    }

    public function edit($id, $relatorio)
    {
        $celula = Celula::findOrFail($id);
        $relatorio = Relatorio::findOrFail($relatorio);


        return Inertia::render('Admin/Relatorios/Form', [
            'celula' => $celula,
            'relatorio' => $relatorio
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, RelatorioRequest $request, string $relatorio)
    {
        $celula = Celula::findOrFail($id);
        $relatorio = Relatorio::findOrFail($relatorio);

        $data = $request->all();
        $data['celula_id'] = $id;

        $data['vl_oferta'] = str_replace('R$ ', '', $data['vl_oferta']);
        $data['vl_oferta'] = str_replace('.', '', $data['vl_oferta']);
        $data['vl_oferta'] = str_replace(',', '.', $data['vl_oferta']);

        $relatorio->fill($data);

        $relatorio->save();

        return Redirect::route('admin.relatorios.index', $id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id, Request $request, string $relatorio)
    {
        $celula = Celula::findOrFail($id);
        $relatorio = Relatorio::findOrFail($relatorio);

        return $relatorio->delete();
    }
}
