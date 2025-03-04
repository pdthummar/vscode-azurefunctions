/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IActionContext } from "@microsoft/vscode-azext-utils";
import { Uri, WorkspaceFolder } from "vscode";
import { FuncVersion } from "../../FuncVersion";
import { ProjectLanguage } from "../../constants";
import { TemplateSchemaVersion } from "../../templates/TemplateProviderBase";
import { cliFeedUtils } from "../../utils/cliFeedUtils";

export interface IProjectWizardContext extends IActionContext {
    projectPath: string;
    workspacePath: string;
    workspaceFolder: WorkspaceFolder | undefined;

    language?: ProjectLanguage;
    languageModel?: number;
    languageFilter?: RegExp;

    version: FuncVersion;
    templateSchemaVersion?: TemplateSchemaVersion;
    projectTemplateKey: string | undefined;
    workerRuntime?: cliFeedUtils.IWorkerRuntime;
    openBehavior?: OpenBehavior;

    generateFromOpenAPI?: boolean;
    openApiSpecificationFile?: Uri[];

    targetFramework?: string | string[];
}

export type OpenBehavior = 'AddToWorkspace' | 'OpenInNewWindow' | 'OpenInCurrentWindow' | 'AlreadyOpen' | 'DontOpen';
