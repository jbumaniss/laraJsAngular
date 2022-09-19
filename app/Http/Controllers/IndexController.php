<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Guest;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index()
    {
        return view('index');
    }


    public function store(Request $request)
    {

        $fields = $request->validate([
            "name"=> ["required", "min:3"],
            "email"=> ["required", "email"],
            "website"=> ["required", "min:3"],
            "comment"=> ["required", "min:3"],
            "ipaddress"=> "required",
            "browser"=>["required", "min:3"]

        ]);


        Guest::create($fields);

        return 'Comment Created';
    }

    public function comments(Guest $guest)
    {
        $guests = [];
        foreach($guest::latest()->get()as $single){
            $guests[] = new Comment(
                $single->name,
                $single->website,
                $single->comment,
                (string) $single->created_at
            );
        }
        $arr = [
            'data' => $guests
        ];
        return json_encode($arr);



    }
}
