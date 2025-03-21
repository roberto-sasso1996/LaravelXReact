<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nome' => 'required|string|min:3',
            'email' => 'required|email',
            'messaggio' => 'required|string|min:10',
        ]);

        $contatto = Contact::create($validated);

        return response()->json([
            'message' => 'Contatto salvato con successo!',
            'data' => $contatto
        ], 201);
    }
}
