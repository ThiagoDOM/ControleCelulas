<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Helpers\FuncHelper;

class RelatorioResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'celula_id' => $this->celula_id,
            'celula' => $this->celula->name,
            'date' => date('d/m/Y', strtotime($this->date)),
        ];
    }
}
