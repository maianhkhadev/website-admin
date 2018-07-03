<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();

        return $users;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        // if ($request->hasFile('thumbnail')) {
        //   $thumbnail = $request->file('thumbnail');
        //   $thumbnail_url = asset('/storage\/'.$thumbnail->store('thumbnails', 'public'));
        //   $article->thumbnail_url = $thumbnail_url;
        // }
        // if ($request->hasFile('blods')) {
        //   $blods = $request->file('blods');
        //   foreach($blods as $index=>$blod) {
        //     $image_url = asset('/storage\/'.$blod->store('contents', 'public'));
        //     $article->content = str_replace('{im-'.$index.'}', $image_url, $article->content);
        //   }
        // }
        $user->save();

        return $user;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);

        return $user;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        // if ($request->hasFile('thumbnail')) {
        //   $thumbnail = $request->file('thumbnail');
        //   $thumbnail_url = asset('/storage\/'.$thumbnail->store('thumbnails', 'public'));
        //   $article->thumbnail_url = $thumbnail_url;
        // }
        // if ($request->hasFile('blods')) {
        //   $blods = $request->file('blods');
        //   foreach($blods as $index=>$blod) {
        //     $image_url = asset('/storage\/'.$blod->store('contents', 'public'));
        //     $article->content = str_replace('{im-'.$index.'}', $image_url, $article->content);
        //   }
        // }
        $user->save();

        return $user;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
