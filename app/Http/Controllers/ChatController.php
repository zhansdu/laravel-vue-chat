<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\BroadcastMessage;

class ChatController extends Controller
{
	public function send(Request $request)
	{
		$data = [
			'message' => $request->input('message'),
			'nickname' => $request->input('nickname'),
		];
		event(new BroadcastMessage($data));
	}
}
