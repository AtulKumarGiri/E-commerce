<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index(){
        $users = User::all();

        return response()->json([
            'status' => 200,
            'users' => $users,
        ]);
    }

    public function viewUser($id){
        $user = User::find($id);

        if (!$user) {
            return response()->json(['status' => 404, 'message' => 'User not found'], 404);
        }
        return response()->json(['status' => 200, 'user' => $user]);
    }

    // public function activate($id){
    //     $user = User::find($id);
    
    //     if (!$user) {
    //         return response()->json(['message' => 'User not found'], 404);
    //     }
    
    //     $user->status = 0; // Set status to 1 for activation
    //     $user->save();
    
    //     return response()->json(['message' => 'Account activated']);
        
        
    // }
    
    // public function deactivate($id)
    // {
    //     $user = User::find($id);
    
    //     if (!$user) {
    //         return response()->json(['message' => 'User not found'], 404);
    //     }
    
    //     $user->status = 1; // Set status to 0 for deactivation
    //     $user->save();
    
    //     return response()->json(['message' => 'Account deactivated']);
    // }
}