<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Relatorio;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        $relatorios = Relatorio::query();

        // Obtendo o valor da semana (ex.: "2024-W47")
        $weekString = $request->input('date');
        if($weekString){

            // Extraindo o ano e a semana
            [$year, $week] = explode('-W', $weekString);
            // Criando uma data Carbon para a primeira data da semana (segunda-feira)
            $startOfWeek = Carbon::now()->setISODate($year, $week);
            // Calculando a última data da semana (domingo)
            $endOfWeek = $startOfWeek->copy()->endOfWeek();

            $relatorios->whereBetween('date', [$startOfWeek, $endOfWeek]);
        }


        $result = $relatorios->get();

        $summary = [
            'totalMembros' => $result->sum('membros_totais'),
            'membrosPresentes' => $result->sum('membros_presentes'),
            'batizados' => $result->sum('batizados'),
            'frequentadores' => $result->sum('frequentadores'),
            'visitantes' => $result->sum('visitantes'),
            'oferta' => $result->sum('vl_oferta'),
        ];

        return Inertia::render('Admin/Dashboard', [
            'filters' => $request->all(),
            'summary' => $summary
        ]);
    }
}
