<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('relatorios', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('celula_id');
            $table->date('date');
            $table->tinyInteger('membros_totais');
            $table->tinyInteger('membros_presentes');
            $table->tinyInteger('batizados');
            $table->tinyInteger('frequentadores');
            $table->tinyInteger('visitantes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('relatorios');
    }
};
