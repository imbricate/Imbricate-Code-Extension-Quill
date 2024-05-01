/**
 * @author WMXPY
 * @namespace Command
 * @description Execute Prompt
 */

import * as vscode from "vscode";
import { IQuillLanguageService } from "../language-service/service";
import { IQuillPrompt } from "../prompt/prompt";

export const ExecutePromptCommand: string = "quill.prompt.execute";

export const registerExecutePromptCommand = (): vscode.Disposable => {

    const disposable = vscode.commands.registerCommand(ExecutePromptCommand, async (
        languageService: IQuillLanguageService,
        prompt: IQuillPrompt,
        inputText: string,
    ) => {

        const promptText: string = prompt.getPrompt(inputText);

        const output: string = await languageService.executePrompt(promptText);

        console.log(output);
    });

    return disposable;
};
