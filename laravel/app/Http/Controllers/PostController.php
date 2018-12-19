<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::orderBy('updated_at', 'DESC')->paginate(8);
        return view('posts.index', ['posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('posts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->hasFile('blods')) {
          $blods = $request->file('blods');
          var_dump('1'); die;
          // foreach($blods as $index=>$blod) {
          //   $image_url = asset('/storage\/'.$blod->store('contents', 'public'));
          //   $article->content = str_replace('{im-'.$index.'}', $image_url, $article->content);
          // }
        }

        var_dump($request->input()); die;

        $post = new Post();

        // $post->name = $request->input('name');
        // $post->color = $request->input('color');
        // $post->closed = false;
        //
        // $post->save();

        // $article = new Article();
        // $article->title = $request->title;
        // $article->description = $request->description;
        // $article->content = $request->content;
        // $article->collection_id = $request->collection_id;
        // $article->status = $request->status;
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
        // $article->save();
        // return $article;

        return redirect()->route('posts.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
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
