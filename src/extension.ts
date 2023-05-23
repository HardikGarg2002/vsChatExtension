import * as vscode from 'vscode';
import fetch from 'node-fetch';

import { Configuration, OpenAIApi } from 'openai';


export async function activate(context: vscode.ExtensionContext) {

	
	console.log('Congratulations, your extension "chatextension" is now active!');

	let disposable = vscode.commands.registerCommand('chatextension.helloWorld',async () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from chatExtension!');
	});

	let question = vscode.commands.registerCommand('chatextension.askQuestion',async () => {
		// const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
		const url = 'https://catfact.ninja/fact';

		const options = {
		method: 'GET',
		// headers: {
		// 'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		// 'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
		// }
		};

	});

	
	

	context.subscriptions.push(disposable,question);
}

// This method is called when your extension is deactivated
export function deactivate() {}




// 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