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
        Schema::create('celulas', function (Blueprint $table) {
            $table->id();
            $table->string('name');

            $table->enum('rede', ['kids', 'aguia', 'familia']);
            $table->tinyInteger('dia');
            $table->time('hora');
            $table->char('cep', 8);
            $table->char('uf', 2);
            $table->string('cidade');
            $table->string('bairro');
            $table->string('logradouro');
            $table->integer('numero')->nullable();
            $table->string('complemento')->nullable();

            $table->unsignedBigInteger('lider_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('celulas');
    }
};
