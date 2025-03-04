/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// Last updated on 2023-01-09
export const backupStacks: string = `{
    "value": [
      {
        "id": null,
        "name": "dotnet",
        "type": "Microsoft.Web/functionAppStacks?stackOsType=All",
        "properties": {
          "displayText": ".NET",
          "value": "dotnet",
          "preferredOs": "windows",
          "majorVersions": [
            {
              "displayText": ".NET Framework 4.8",
              "value": "dotnetframework48",
              "minorVersions": [
                {
                  "displayText": ".NET Framework 4.8",
                  "value": "4.8",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "v6.0",
                      "isHidden": true,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "4.8.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "dotnet-isolated"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true,
                        "netFrameworkVersion": "v6.0"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "displayText": ".NET 7 Isolated",
              "value": "dotnet7isolated",
              "minorVersions": [
                {
                  "displayText": ".NET 7 Isolated",
                  "value": "7 (STS)",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "v7.0",
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "7.0.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "dotnet-isolated"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true,
                        "netFrameworkVersion": "v7.0"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4"
                      ]
                    },
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "DOTNET-ISOLATED|7.0",
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "7.0.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "dotnet-isolated"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true,
                        "linuxFxVersion": "DOTNET-ISOLATED|7.0"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "displayText": ".NET 6",
              "value": "dotnet6",
              "minorVersions": [
                {
                  "displayText": ".NET 6",
                  "value": "6",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "v6.0",
                      "isDefault": true,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "6.0.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "dotnet"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true,
                        "netFrameworkVersion": "v6.0"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4"
                      ]
                    },
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "DOTNET|6.0",
                      "isDefault": true,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "6.0.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "dotnet"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true,
                        "linuxFxVersion": "DOTNET|6.0"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "displayText": ".NET 6 Isolated",
              "value": "dotnet6isolated",
              "minorVersions": [
                {
                  "displayText": ".NET 6 Isolated",
                  "value": "6 Isolated",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "v6.0",
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "6.0.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "dotnet-isolated"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true,
                        "netFrameworkVersion": "v6.0"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4"
                      ]
                    },
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "DOTNET-ISOLATED|6.0",
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "6.0.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "dotnet-isolated"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true,
                        "linuxFxVersion": "DOTNET-ISOLATED|6.0"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "displayText": ".NET 5 (non-LTS)",
              "value": "dotnet5",
              "minorVersions": [
                {
                  "displayText": ".NET 5 (non-LTS)",
                  "value": "5 (non-LTS)",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "v5.0",
                      "isHidden": true,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "5.0.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "dotnet-isolated"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~3"
                      ],
                      "endOfLifeDate": "2022-05-08T00:00:00Z"
                    },
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "DOTNET-ISOLATED|5.0",
                      "isHidden": true,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "5.0.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "dotnet-isolated"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true,
                        "linuxFxVersion": "DOTNET-ISOLATED|5.0"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~3"
                      ],
                      "endOfLifeDate": "2022-05-08T00:00:00Z"
                    }
                  }
                }
              ]
            },
            {
              "displayText": ".NET Core 3",
              "value": "dotnetcore3",
              "minorVersions": [
                {
                  "displayText": ".NET Core 3.1",
                  "value": "3.1",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "3.1",
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "remoteDebuggingSupported": false,
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "3.1.301"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "dotnet"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~3"
                      ],
                      "endOfLifeDate": "2022-12-03T00:00:00Z",
                      "isDeprecated": true
                    },
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "dotnet|3.1",
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "remoteDebuggingSupported": false,
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "3.1.301"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "dotnet"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": false,
                        "linuxFxVersion": "dotnet|3.1"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~3"
                      ],
                      "endOfLifeDate": "2022-12-03T00:00:00Z",
                      "isDeprecated": true
                    }
                  }
                }
              ]
            },
            {
              "displayText": ".NET Core 2",
              "value": "dotnetcore2",
              "minorVersions": [
                {
                  "displayText": ".NET Core 2.2",
                  "value": "2.2",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "2.2",
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "remoteDebuggingSupported": false,
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "2.2.207"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "dotnet"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~2"
                      ]
                    },
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "dotnet|2.2",
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "remoteDebuggingSupported": false,
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "2.2.207"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "dotnet"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": false,
                        "linuxFxVersion": "dotnet|2.2"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~2"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "displayText": ".NET Framework 4",
              "value": "dotnetframework4",
              "minorVersions": [
                {
                  "displayText": ".NET Framework 4.7",
                  "value": "4.7",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "4.7",
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": false
                      },
                      "appSettingsDictionary": {},
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~1"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "id": null,
        "name": "node",
        "type": "Microsoft.Web/functionAppStacks?stackOsType=All",
        "properties": {
          "displayText": "Node.js",
          "value": "node",
          "preferredOs": "windows",
          "majorVersions": [
            {
              "displayText": "Node.js 18",
              "value": "18",
              "minorVersions": [
                {
                  "displayText": "Node.js 18",
                  "value": "18 LTS",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "~18",
                      "isPreview": true,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "18.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "node",
                        "WEBSITE_NODE_DEFAULT_VERSION": "~18"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true,
                        "netFrameworkVersion": "v6.0"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4"
                      ],
                      "endOfLifeDate": "2025-04-30T00:00:00Z"
                    },
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "Node|18",
                      "isPreview": true,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "18.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "node"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": false,
                        "linuxFxVersion": "Node|18"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4"
                      ],
                      "endOfLifeDate": "2025-04-30T00:00:00Z"
                    }
                  }
                }
              ]
            },
            {
              "displayText": "Node.js 16",
              "value": "16",
              "minorVersions": [
                {
                  "displayText": "Node.js 16 LTS",
                  "value": "16 LTS",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "~16",
                      "isPreview": false,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "16.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "node",
                        "WEBSITE_NODE_DEFAULT_VERSION": "~16"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true,
                        "netFrameworkVersion": "v6.0"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4"
                      ],
                      "endOfLifeDate": "2023-09-11T00:00:00Z"
                    },
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "Node|16",
                      "isPreview": false,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "16.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "node"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": false,
                        "linuxFxVersion": "Node|16"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4"
                      ],
                      "endOfLifeDate": "2023-09-11T00:00:00Z"
                    }
                  }
                }
              ]
            },
            {
              "displayText": "Node.js 14",
              "value": "14",
              "minorVersions": [
                {
                  "displayText": "Node.js 14 LTS",
                  "value": "14 LTS",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "~14",
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "14.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "node",
                        "WEBSITE_NODE_DEFAULT_VERSION": "~14"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true,
                        "netFrameworkVersion": "v6.0"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4",
                        "~3"
                      ],
                      "endOfLifeDate": "2023-04-30T00:00:00Z"
                    },
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "Node|14",
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "14.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "node"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": false,
                        "linuxFxVersion": "Node|14"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4",
                        "~3"
                      ],
                      "endOfLifeDate": "2023-04-30T00:00:00Z"
                    }
                  }
                }
              ]
            },
            {
              "displayText": "Node.js 12",
              "value": "12",
              "minorVersions": [
                {
                  "displayText": "Node.js 12 LTS",
                  "value": "12 LTS",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "~12",
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "12.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "node",
                        "WEBSITE_NODE_DEFAULT_VERSION": "~12"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~3"
                      ],
                      "endOfLifeDate": "2022-12-13T00:00:00Z"
                    },
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "Node|12",
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "12.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "node"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": false,
                        "linuxFxVersion": "Node|12"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~3"
                      ],
                      "endOfLifeDate": "2022-12-13T00:00:00Z"
                    }
                  }
                }
              ]
            },
            {
              "displayText": "Node.js 10",
              "value": "10",
              "minorVersions": [
                {
                  "displayText": "Node.js 10 LTS",
                  "value": "10 LTS",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "~10",
                      "isDeprecated": true,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "10.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "node",
                        "WEBSITE_NODE_DEFAULT_VERSION": "~10"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~2",
                        "~3"
                      ],
                      "endOfLifeDate": "2021-04-30T00:00:00Z"
                    },
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "Node|10",
                      "isDeprecated": true,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "10.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "node"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": false,
                        "linuxFxVersion": "Node|10"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~2",
                        "~3"
                      ],
                      "endOfLifeDate": "2021-04-30T00:00:00Z"
                    }
                  }
                }
              ]
            },
            {
              "displayText": "Node.js 8",
              "value": "8",
              "minorVersions": [
                {
                  "displayText": "Node.js 8 LTS",
                  "value": "8 LTS",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "~8",
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "8.x"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "node",
                        "WEBSITE_NODE_DEFAULT_VERSION": "~8"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~2"
                      ],
                      "endOfLifeDate": "2019-12-31T00:00:00Z"
                    }
                  }
                }
              ]
            },
            {
              "displayText": "Node.js 6",
              "value": "6",
              "minorVersions": [
                {
                  "displayText": "Node.js 6 LTS",
                  "value": "6 LTS",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "~6",
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": false
                      },
                      "appSettingsDictionary": {
                        "WEBSITE_NODE_DEFAULT_VERSION": "~6"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~1"
                      ],
                      "endOfLifeDate": "2019-04-30T00:00:00Z"
                    }
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "id": null,
        "name": "python",
        "type": "Microsoft.Web/functionAppStacks?stackOsType=All",
        "properties": {
          "displayText": "Python",
          "value": "python",
          "preferredOs": "linux",
          "majorVersions": [
            {
              "displayText": "Python 3",
              "value": "3",
              "minorVersions": [
                {
                  "displayText": "Python 3.10",
                  "value": "3.10",
                  "stackSettings": {
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "Python|3.10",
                      "remoteDebuggingSupported": false,
                      "isPreview": true,
                      "isDefault": false,
                      "isHidden": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "3.10"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "python"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": false,
                        "linuxFxVersion": "Python|3.10"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4"
                      ],
                      "endOfLifeDate": "2026-10-31T00:00:00Z"
                    }
                  }
                },
                {
                  "displayText": "Python 3.9",
                  "value": "3.9",
                  "stackSettings": {
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "Python|3.9",
                      "remoteDebuggingSupported": false,
                      "isPreview": false,
                      "isDefault": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "3.9"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "python"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": false,
                        "linuxFxVersion": "Python|3.9"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4",
                        "~3"
                      ],
                      "endOfLifeDate": "2025-10-31T00:00:00Z"
                    }
                  }
                },
                {
                  "displayText": "Python 3.8",
                  "value": "3.8",
                  "stackSettings": {
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "Python|3.8",
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "3.8"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "python"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": false,
                        "linuxFxVersion": "Python|3.8"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4",
                        "~3"
                      ],
                      "endOfLifeDate": "2024-10-31T00:00:00Z"
                    }
                  }
                },
                {
                  "displayText": "Python 3.7",
                  "value": "3.7",
                  "stackSettings": {
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "Python|3.7",
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "3.7"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "python"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": false,
                        "linuxFxVersion": "Python|3.7"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4",
                        "~3",
                        "~2"
                      ],
                      "endOfLifeDate": "2023-06-30T00:00:00Z"
                    }
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "id": null,
        "name": "java",
        "type": "Microsoft.Web/functionAppStacks?stackOsType=All",
        "properties": {
          "displayText": "Java",
          "value": "java",
          "preferredOs": "windows",
          "majorVersions": [
            {
              "displayText": "Java 17",
              "value": "17",
              "minorVersions": [
                {
                  "displayText": "Java 17",
                  "value": "17.0",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "17",
                      "isPreview": false,
                      "isHidden": false,
                      "isAutoUpdate": true,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "17"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "java"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true,
                        "javaVersion": "17",
                        "netFrameworkVersion": "v6.0"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4"
                      ],
                      "endOfLifeDate": "2031-09-01T00:00:00Z"
                    },
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "Java|17",
                      "isPreview": false,
                      "isHidden": false,
                      "isAutoUpdate": true,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "17"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "java"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": false,
                        "linuxFxVersion": "Java|17"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4"
                      ],
                      "endOfLifeDate": "2031-09-01T00:00:00Z"
                    }
                  }
                }
              ]
            },
            {
              "displayText": "Java 11",
              "value": "11",
              "minorVersions": [
                {
                  "displayText": "Java 11",
                  "value": "11.0",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "11",
                      "isAutoUpdate": true,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "11"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "java"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true,
                        "javaVersion": "11",
                        "netFrameworkVersion": "v6.0"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4",
                        "~3"
                      ],
                      "endOfLifeDate": "2026-09-01T00:00:00Z"
                    },
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "Java|11",
                      "isAutoUpdate": true,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "11"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "java"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": false,
                        "linuxFxVersion": "Java|11"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4",
                        "~3"
                      ],
                      "endOfLifeDate": "2026-09-01T00:00:00Z"
                    }
                  }
                }
              ]
            },
            {
              "displayText": "Java 8",
              "value": "8",
              "minorVersions": [
                {
                  "displayText": "Java 8",
                  "value": "8.0",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "1.8",
                      "isAutoUpdate": true,
                      "isDefault": true,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "8"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "java"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true,
                        "javaVersion": "1.8",
                        "netFrameworkVersion": "v6.0"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4",
                        "~3",
                        "~2"
                      ],
                      "endOfLifeDate": "2025-03-01T00:00:00Z"
                    },
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "Java|8",
                      "isAutoUpdate": true,
                      "isDefault": true,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true,
                        "supportedVersion": "8"
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "java"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": false,
                        "linuxFxVersion": "Java|8"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4",
                        "~3"
                      ],
                      "endOfLifeDate": "2025-03-01T00:00:00Z"
                    }
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "id": null,
        "name": "powershell",
        "type": "Microsoft.Web/functionAppStacks?stackOsType=All",
        "properties": {
          "displayText": "PowerShell Core",
          "value": "powershell",
          "preferredOs": "windows",
          "majorVersions": [
            {
              "displayText": "PowerShell 7",
              "value": "7",
              "minorVersions": [
                {
                  "displayText": "PowerShell 7.2",
                  "value": "7.2",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "7.2",
                      "isDefault": true,
                      "isPreview": false,
                      "isHidden": false,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "powershell"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true,
                        "powerShellVersion": "7.2",
                        "netFrameworkVersion": "v6.0"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4"
                      ],
                      "endOfLifeDate": "2024-11-08T00:00:00Z"
                    },
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "PowerShell|7.2",
                      "isDefault": true,
                      "isPreview": false,
                      "isHidden": false,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "powershell"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": false,
                        "linuxFxVersion": "PowerShell|7.2"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4"
                      ],
                      "endOfLifeDate": "2024-11-08T00:00:00Z"
                    }
                  }
                },
                {
                  "displayText": "PowerShell 7.0",
                  "value": "7.0",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "~7",
                      "isDeprecated": true,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "powershell"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true,
                        "powerShellVersion": "~7",
                        "netFrameworkVersion": "v6.0"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4",
                        "~3"
                      ],
                      "endOfLifeDate": "2022-12-03T00:00:00Z"
                    },
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "PowerShell|7",
                      "isAutoUpdate": true,
                      "isPreview": false,
                      "isDeprecated": true,
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "powershell"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": false,
                        "linuxFxVersion": "PowerShell|7"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4"
                      ],
                      "endOfLifeDate": "2022-12-03T00:00:00Z"
                    }
                  }
                }
              ]
            },
            {
              "displayText": "PowerShell Core 6",
              "value": "6",
              "minorVersions": [
                {
                  "displayText": "PowerShell Core 6.2",
                  "value": "6.2",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "~6",
                      "remoteDebuggingSupported": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "gitHubActionSettings": {
                        "isSupported": true
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "powershell"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true,
                        "powerShellVersion": "~6"
                      },
                      "isDeprecated": true,
                      "supportedFunctionsExtensionVersions": [
                        "~2",
                        "~3"
                      ],
                      "endOfLifeDate": "2022-09-30T00:00:00Z"
                    }
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "id": null,
        "name": "custom",
        "type": "Microsoft.Web/functionAppStacks?stackOsType=All",
        "properties": {
          "displayText": "Custom Handler",
          "value": "custom",
          "preferredOs": "windows",
          "majorVersions": [
            {
              "displayText": "Custom Handler",
              "value": "custom",
              "minorVersions": [
                {
                  "displayText": "Custom Handler",
                  "value": "custom",
                  "stackSettings": {
                    "windowsRuntimeSettings": {
                      "runtimeVersion": "custom",
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "remoteDebuggingSupported": false,
                      "gitHubActionSettings": {
                        "isSupported": false
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "custom"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": true,
                        "netFrameworkVersion": "v6.0"
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4",
                        "~3",
                        "~2"
                      ]
                    },
                    "linuxRuntimeSettings": {
                      "runtimeVersion": "",
                      "isPreview": false,
                      "appInsightsSettings": {
                        "isSupported": true
                      },
                      "remoteDebuggingSupported": false,
                      "gitHubActionSettings": {
                        "isSupported": false
                      },
                      "appSettingsDictionary": {
                        "FUNCTIONS_WORKER_RUNTIME": "custom"
                      },
                      "siteConfigPropertiesDictionary": {
                        "use32BitWorkerProcess": false,
                        "linuxFxVersion": ""
                      },
                      "supportedFunctionsExtensionVersions": [
                        "~4",
                        "~3",
                        "~2"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      }
    ],
    "nextLink": null,
    "id": null
  }`;
