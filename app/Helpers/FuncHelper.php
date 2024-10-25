<?php

namespace App\Helpers;

class FuncHelper
{

    public static function mascaraTelefone($telefone)
    {
        // Remove caracteres não numéricos
        $telefone = preg_replace('/[^0-9]/', '', $telefone);

        // Aplica a máscara (##) ####-#### ou (##) #####-####
        if(mb_strlen($telefone) == 11)
            return preg_replace('/(\d{2})(\d{5})(\d{4})/', '($1) $2-$3', $telefone);
        if(mb_strlen($telefone) == 10)
            return preg_replace('/(\d{2})(\d{4})(\d{4})/', '($1) $2-$3', $telefone);
    }

    public static function desmascararTelefone($telefone)
    {
        // Remove caracteres não numéricos
        $telefone = preg_replace('/[^0-9]/', '', $telefone);

        // Remove a máscara
        return $telefone;
    }
}
