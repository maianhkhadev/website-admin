<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

final class PostStatus
{
    const WAIT = 0;
    const ACCEPTED = 1;
    const DENIED = 2;
}

class PostController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('posts.index');

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
        $categories = Category::all();

        return view('posts.create', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $post = new Post();

        $post->user_id = Auth::id();
        $post->category_id = $request->input('category_id');
        $post->title = $request->input('title');
        $post->content = $request->input('content');

        if ($request->hasFile('thumbnail')) {
          $thumbnail = $request->file('thumbnail');
          $thumbnail_url = asset('/storage\/'.$thumbnail->store('thumbnails', 'public'));
          $post->thumbnail_url = $thumbnail_url;
        }

        $post->status = PostStatus::WAIT;

        $post->save();

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
        $post = Post::find($id);

        return view('posts.show', ['post' => $post]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = Post::find($id);
        $categories = Category::all();

        return view('posts.edit', ['categories' => $categories, 'post' => $post]);
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
        return redirect()->route('posts.index');
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
