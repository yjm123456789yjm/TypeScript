Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/project/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0" assert { "resolution-mode": "import" };
import type { RequireInterface1 } from "pkg1" assert { "resolution-mode": "require" };


//// [/src/project/fileWithTypeRefs.ts]
/// <reference types="pkg2" resolution-mode="import"/>
/// <reference types="pkg3" resolution-mode="require"/>
interface LocalInterface extends ImportInterface2, RequireInterface3 {}
export {}


//// [/src/project/node_modules/@types/pkg4/index.d.ts]
export const x = 10;

//// [/src/project/node_modules/pkg0/import.d.ts]
export interface ImportInterface0 {}

//// [/src/project/node_modules/pkg0/package.json]
{"name":"pkg0","version":"0.0.1","exports":{"import":"./import.js","require":"./require.js"}}

//// [/src/project/node_modules/pkg0/require.d.ts]
export interface RequireInterface0 {}

//// [/src/project/node_modules/pkg1/import.d.ts]
export interface ImportInterface1 {}

//// [/src/project/node_modules/pkg1/package.json]
{"name":"pkg1","version":"0.0.1","exports":{"import":"./import.js","require":"./require.js"}}

//// [/src/project/node_modules/pkg2/import.d.ts]
export {};
declare global {
    interface ImportInterface2 {}
}


//// [/src/project/node_modules/pkg2/package.json]
{"name":"pkg2","version":"0.0.1","exports":{"import":"./import.js","require":"./require.js"}}

//// [/src/project/node_modules/pkg2/require.d.ts]
export {};
declare global {
    interface RequireInterface2 {}
}


//// [/src/project/node_modules/pkg3/import.d.ts]
export {};
declare global {
    interface ImportInterface3 {}
}


//// [/src/project/node_modules/pkg3/package.json]
{"name":"pkg3","version":"0.0.1","exports":{"import":"./import.js","require":"./require.js"}}

//// [/src/project/randomFileForImport.ts]
export const x = 10;

//// [/src/project/randomFileForTypeRef.ts]
export const x = 10;

//// [/src/project/tsconfig.json]
{"compilerOptions":{"moduleResolution":"node16","composite":true,"cacheResolutions":true,"traceResolution":true},"include":["*.ts"],"exclude":["*.d.ts"]}



Output::
/lib/tsc -b /src/project --explainFiles
File '/src/project/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
======== Resolving module 'pkg0' from '/src/project/fileWithImports.ts'. ========
Explicitly specified module resolution kind: 'Node16'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Loading module 'pkg0' from 'node_modules' folder, target file type 'TypeScript'.
Found 'package.json' at '/src/project/node_modules/pkg0/package.json'.
'package.json' does not have a 'typesVersions' field.
File name '/src/project/node_modules/pkg0/import.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg0/import.ts' does not exist.
File '/src/project/node_modules/pkg0/import.tsx' does not exist.
File '/src/project/node_modules/pkg0/import.d.ts' exist - use it as a name resolution result.
Resolving real path for '/src/project/node_modules/pkg0/import.d.ts', result '/src/project/node_modules/pkg0/import.d.ts'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'. ========
======== Resolving module 'pkg1' from '/src/project/fileWithImports.ts'. ========
Explicitly specified module resolution kind: 'Node16'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Loading module 'pkg1' from 'node_modules' folder, target file type 'TypeScript'.
Found 'package.json' at '/src/project/node_modules/pkg1/package.json'.
'package.json' does not have a 'typesVersions' field.
File name '/src/project/node_modules/pkg1/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg1/require.ts' does not exist.
File '/src/project/node_modules/pkg1/require.tsx' does not exist.
File '/src/project/node_modules/pkg1/require.d.ts' does not exist.
File '/src/project/node_modules/@types/pkg1.d.ts' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Loading module 'pkg1' from 'node_modules' folder, target file type 'JavaScript'.
File '/src/project/node_modules/pkg1/package.json' exists according to earlier cached lookups.
File name '/src/project/node_modules/pkg1/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg1/require.js' does not exist.
File '/src/project/node_modules/pkg1/require.jsx' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Module name 'pkg1' was not resolved. ========
File '/src/project/node_modules/pkg0/package.json' exists according to earlier cached lookups.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
======== Resolving type reference directive 'pkg2', containing file '/src/project/fileWithTypeRefs.ts', root directory '/src/project/node_modules/@types'. ========
Resolving with primary search path '/src/project/node_modules/@types'.
Looking up in 'node_modules' folder, initial location '/src/project'.
Found 'package.json' at '/src/project/node_modules/pkg2/package.json'.
'package.json' does not have a 'typesVersions' field.
File name '/src/project/node_modules/pkg2/import.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg2/import.d.ts' exist - use it as a name resolution result.
Resolving real path for '/src/project/node_modules/pkg2/import.d.ts', result '/src/project/node_modules/pkg2/import.d.ts'.
======== Type reference directive 'pkg2' was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1', primary: false. ========
======== Resolving type reference directive 'pkg3', containing file '/src/project/fileWithTypeRefs.ts', root directory '/src/project/node_modules/@types'. ========
Resolving with primary search path '/src/project/node_modules/@types'.
Looking up in 'node_modules' folder, initial location '/src/project'.
Found 'package.json' at '/src/project/node_modules/pkg3/package.json'.
'package.json' does not have a 'typesVersions' field.
File name '/src/project/node_modules/pkg3/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg3/require.d.ts' does not exist.
File '/src/project/node_modules/@types/pkg3.d.ts' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Type reference directive 'pkg3' was not resolved. ========
File '/src/project/node_modules/pkg2/package.json' exists according to earlier cached lookups.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
======== Resolving type reference directive 'pkg4', containing file '/src/project/__inferred type names__.ts', root directory '/src/project/node_modules/@types'. ========
Resolving with primary search path '/src/project/node_modules/@types'.
File '/src/project/node_modules/@types/pkg4/package.json' does not exist.
File '/src/project/node_modules/@types/pkg4/index.d.ts' exist - use it as a name resolution result.
Resolving real path for '/src/project/node_modules/@types/pkg4/index.d.ts', result '/src/project/node_modules/@types/pkg4/index.d.ts'.
======== Type reference directive 'pkg4' was successfully resolved to '/src/project/node_modules/@types/pkg4/index.d.ts', primary: true. ========
File '/src/project/node_modules/@types/pkg4/package.json' does not exist according to earlier cached lookups.
File '/src/project/node_modules/@types/package.json' does not exist.
File '/src/project/node_modules/package.json' does not exist.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
[96msrc/project/fileWithImports.ts[0m:[93m2[0m:[93m40[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { RequireInterface1 } from "pkg1" assert { "resolution-mode": "require" };
[7m [0m [91m                                       ~~~~~~[0m

[96msrc/project/fileWithTypeRefs.ts[0m:[93m3[0m:[93m52[0m - [91merror[0m[90m TS2304: [0mCannot find name 'RequireInterface3'.

[7m3[0m interface LocalInterface extends ImportInterface2, RequireInterface3 {}
[7m [0m [91m                                                   ~~~~~~~~~~~~~~~~~[0m

[96msrc/project/fileWithTypeRefs.ts[0m:[93m2[0m:[93m23[0m - [91merror[0m[90m TS2688: [0mCannot find type definition file for 'pkg3'.

[7m2[0m /// <reference types="pkg3" resolution-mode="require"/>
[7m [0m [91m                      ~~~~[0m

lib/lib.d.ts
  Default library for target 'es3'
src/project/node_modules/pkg0/import.d.ts
  Imported via "pkg0" from file 'src/project/fileWithImports.ts' with packageId 'pkg0/import.d.ts@0.0.1'
src/project/fileWithImports.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/node_modules/pkg2/import.d.ts
  Type library referenced via 'pkg2' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg2/import.d.ts@0.0.1'
src/project/fileWithTypeRefs.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/randomFileForImport.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/randomFileForTypeRef.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/node_modules/@types/pkg4/index.d.ts
  Entry point for implicit type library 'pkg4'

Found 3 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped


//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./node_modules/pkg0/import.d.ts","./filewithimports.ts","./node_modules/pkg2/import.d.ts","./filewithtyperefs.ts","./randomfileforimport.ts","./randomfilefortyperef.ts","./node_modules/@types/pkg4/index.d.ts","./","./node_modules/pkg0/import.ts","./node_modules/pkg0/import.tsx","./node_modules/pkg0/package.json","./node_modules/@types/pkg2/package.json","./node_modules/pkg2/package.json","./node_modules/@types/pkg4/package.json"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"769951468-export interface ImportInterface0 {}","impliedFormat":1},{"version":"4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n","impliedFormat":1},{"version":"1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n","affectsGlobalScope":true,"impliedFormat":1},{"version":"-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"moduleResolution":3},"fileIdsList":[[2],[4]],"referencedMap":[[3,1],[5,2]],"exportedModulesMap":[[3,1],[5,2]],"semanticDiagnosticsPerFile":[1,[3,[{"file":"./filewithimports.ts","start":124,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],[5,[{"file":"./filewithtyperefs.ts","start":162,"length":17,"messageText":"Cannot find name 'RequireInterface3'.","category":1,"code":2304}]],8,2,4,6,7],"affectedFilesPendingEmit":[[3,1],[5,1],[8,1],[2,1],[4,1],[6,1],[7,1]],"emitSignatures":[3,5,6,7],"cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true,"packageId":{"name":"pkg0","subModuleName":"import.d.ts","version":"0.0.1"}},"failedLookupLocations":[10,11],"affectingLocations":[12]},{"resolvedTypeReferenceDirective":{"resolvedFileName":4,"packageId":{"name":"pkg2","subModuleName":"import.d.ts","version":"0.0.1"},"isExternalLibraryImport":true},"failedLookupLocations":[13],"affectingLocations":[14]},{"resolvedTypeReferenceDirective":{"primary":true,"resolvedFileName":8,"isExternalLibraryImport":true},"failedLookupLocations":[15]}],"names":["pkg0","pkg2","pkg4"],"resolutionEntries":[[1,1,99],[2,2,99],[3,3]],"modules":[[9,[1]]],"typeRefs":[[9,[2,3]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./filewithimports.ts",
      "./node_modules/pkg2/import.d.ts",
      "./filewithtyperefs.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./",
      "./node_modules/pkg0/import.ts",
      "./node_modules/pkg0/import.tsx",
      "./node_modules/pkg0/package.json",
      "./node_modules/@types/pkg2/package.json",
      "./node_modules/pkg2/package.json",
      "./node_modules/@types/pkg4/package.json"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/import.d.ts"
      ],
      [
        "./node_modules/pkg2/import.d.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg0/import.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}",
        "impliedFormat": "commonjs"
      },
      "./filewithimports.ts": {
        "version": "4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n",
        "signature": "4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg2/import.d.ts": {
        "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "signature": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./filewithtyperefs.ts": {
        "version": "-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n",
        "signature": "-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n",
        "impliedFormat": "commonjs"
      },
      "./randomfileforimport.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "./randomfilefortyperef.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "./node_modules/@types/pkg4/index.d.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "moduleResolution": 3
    },
    "referencedMap": {
      "./filewithimports.ts": [
        "./node_modules/pkg0/import.d.ts"
      ],
      "./filewithtyperefs.ts": [
        "./node_modules/pkg2/import.d.ts"
      ]
    },
    "exportedModulesMap": {
      "./filewithimports.ts": [
        "./node_modules/pkg0/import.d.ts"
      ],
      "./filewithtyperefs.ts": [
        "./node_modules/pkg2/import.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./filewithimports.ts",
        [
          {
            "file": "./filewithimports.ts",
            "start": 124,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      [
        "./filewithtyperefs.ts",
        [
          {
            "file": "./filewithtyperefs.ts",
            "start": 162,
            "length": 17,
            "messageText": "Cannot find name 'RequireInterface3'.",
            "category": 1,
            "code": 2304
          }
        ]
      ],
      "./node_modules/@types/pkg4/index.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./node_modules/pkg2/import.d.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts"
    ],
    "affectedFilesPendingEmit": [
      [
        "./filewithimports.ts",
        "Full"
      ],
      [
        "./filewithtyperefs.ts",
        "Full"
      ],
      [
        "./node_modules/@types/pkg4/index.d.ts",
        "Full"
      ],
      [
        "./node_modules/pkg0/import.d.ts",
        "Full"
      ],
      [
        "./node_modules/pkg2/import.d.ts",
        "Full"
      ],
      [
        "./randomfileforimport.ts",
        "Full"
      ],
      [
        "./randomfilefortyperef.ts",
        "Full"
      ]
    ],
    "emitSignatures": [
      "./filewithimports.ts",
      "./filewithtyperefs.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts"
    ],
    "cacheResolutions": {
      "resolutions": [
        {
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/import.d.ts",
            "isExternalLibraryImport": true,
            "packageId": {
              "name": "pkg0",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            }
          },
          "failedLookupLocations": [
            "./node_modules/pkg0/import.ts",
            "./node_modules/pkg0/import.tsx"
          ],
          "affectingLocations": [
            "./node_modules/pkg0/package.json"
          ]
        },
        {
          "resolvedTypeReferenceDirective": {
            "resolvedFileName": "./node_modules/pkg2/import.d.ts",
            "packageId": {
              "name": "pkg2",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            },
            "isExternalLibraryImport": true
          },
          "failedLookupLocations": [
            "./node_modules/@types/pkg2/package.json"
          ],
          "affectingLocations": [
            "./node_modules/pkg2/package.json"
          ]
        },
        {
          "resolvedTypeReferenceDirective": {
            "primary": true,
            "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
            "isExternalLibraryImport": true
          },
          "failedLookupLocations": [
            "./node_modules/@types/pkg4/package.json"
          ]
        }
      ],
      "names": [
        "pkg0",
        "pkg2",
        "pkg4"
      ],
      "resolutionEntries": [
        [
          "pkg0",
          {
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/import.d.ts",
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg0",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              }
            },
            "failedLookupLocations": [
              "./node_modules/pkg0/import.ts",
              "./node_modules/pkg0/import.tsx"
            ],
            "affectingLocations": [
              "./node_modules/pkg0/package.json"
            ]
          },
          "esnext"
        ],
        [
          "pkg2",
          {
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": "./node_modules/pkg2/import.d.ts",
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              "./node_modules/@types/pkg2/package.json"
            ],
            "affectingLocations": [
              "./node_modules/pkg2/package.json"
            ]
          },
          "esnext"
        ],
        [
          "pkg4",
          {
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              "./node_modules/@types/pkg4/package.json"
            ]
          }
        ]
      ],
      "modules": [
        [
          "./",
          [
            [
              "pkg0",
              {
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/import.d.ts",
                  "isExternalLibraryImport": true,
                  "packageId": {
                    "name": "pkg0",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  }
                },
                "failedLookupLocations": [
                  "./node_modules/pkg0/import.ts",
                  "./node_modules/pkg0/import.tsx"
                ],
                "affectingLocations": [
                  "./node_modules/pkg0/package.json"
                ]
              },
              "esnext"
            ]
          ]
        ]
      ],
      "typeRefs": [
        [
          "./",
          [
            [
              "pkg2",
              {
                "resolvedTypeReferenceDirective": {
                  "resolvedFileName": "./node_modules/pkg2/import.d.ts",
                  "packageId": {
                    "name": "pkg2",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  },
                  "isExternalLibraryImport": true
                },
                "failedLookupLocations": [
                  "./node_modules/@types/pkg2/package.json"
                ],
                "affectingLocations": [
                  "./node_modules/pkg2/package.json"
                ]
              },
              "esnext"
            ],
            [
              "pkg4",
              {
                "resolvedTypeReferenceDirective": {
                  "primary": true,
                  "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
                  "isExternalLibraryImport": true
                },
                "failedLookupLocations": [
                  "./node_modules/@types/pkg4/package.json"
                ]
              }
            ]
          ]
        ]
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 3246
}



Change:: no-change-run
Input::


Output::
/lib/tsc -b /src/project --explainFiles
File '/src/project/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
Reusing resolution of module 'pkg0' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
======== Resolving module 'pkg1' from '/src/project/fileWithImports.ts'. ========
Explicitly specified module resolution kind: 'Node16'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Loading module 'pkg1' from 'node_modules' folder, target file type 'TypeScript'.
Found 'package.json' at '/src/project/node_modules/pkg1/package.json'.
'package.json' does not have a 'typesVersions' field.
File name '/src/project/node_modules/pkg1/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg1/require.ts' does not exist.
File '/src/project/node_modules/pkg1/require.tsx' does not exist.
File '/src/project/node_modules/pkg1/require.d.ts' does not exist.
File '/src/project/node_modules/@types/pkg1.d.ts' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Loading module 'pkg1' from 'node_modules' folder, target file type 'JavaScript'.
File '/src/project/node_modules/pkg1/package.json' exists according to earlier cached lookups.
File name '/src/project/node_modules/pkg1/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg1/require.js' does not exist.
File '/src/project/node_modules/pkg1/require.jsx' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Module name 'pkg1' was not resolved. ========
Found 'package.json' at '/src/project/node_modules/pkg0/package.json'.
'package.json' does not have a 'typesVersions' field.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/fileWithTypeRefs.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
======== Resolving type reference directive 'pkg3', containing file '/src/project/fileWithTypeRefs.ts', root directory '/src/project/node_modules/@types'. ========
Resolving with primary search path '/src/project/node_modules/@types'.
Looking up in 'node_modules' folder, initial location '/src/project'.
Found 'package.json' at '/src/project/node_modules/pkg3/package.json'.
'package.json' does not have a 'typesVersions' field.
File name '/src/project/node_modules/pkg3/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg3/require.d.ts' does not exist.
File '/src/project/node_modules/@types/pkg3.d.ts' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Type reference directive 'pkg3' was not resolved. ========
Found 'package.json' at '/src/project/node_modules/pkg2/package.json'.
'package.json' does not have a 'typesVersions' field.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg4' from '/src/project/__inferred type names__.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/@types/pkg4/index.d.ts'.
File '/src/project/node_modules/@types/pkg4/package.json' does not exist.
File '/src/project/node_modules/@types/package.json' does not exist.
File '/src/project/node_modules/package.json' does not exist.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
[96msrc/project/fileWithImports.ts[0m:[93m2[0m:[93m40[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { RequireInterface1 } from "pkg1" assert { "resolution-mode": "require" };
[7m [0m [91m                                       ~~~~~~[0m

[96msrc/project/fileWithTypeRefs.ts[0m:[93m3[0m:[93m52[0m - [91merror[0m[90m TS2304: [0mCannot find name 'RequireInterface3'.

[7m3[0m interface LocalInterface extends ImportInterface2, RequireInterface3 {}
[7m [0m [91m                                                   ~~~~~~~~~~~~~~~~~[0m

[96msrc/project/fileWithTypeRefs.ts[0m:[93m2[0m:[93m23[0m - [91merror[0m[90m TS2688: [0mCannot find type definition file for 'pkg3'.

[7m2[0m /// <reference types="pkg3" resolution-mode="require"/>
[7m [0m [91m                      ~~~~[0m

lib/lib.d.ts
  Default library for target 'es3'
src/project/node_modules/pkg0/import.d.ts
  Imported via "pkg0" from file 'src/project/fileWithImports.ts' with packageId 'pkg0/import.d.ts@0.0.1'
src/project/fileWithImports.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/node_modules/pkg2/import.d.ts
  Type library referenced via 'pkg2' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg2/import.d.ts@0.0.1'
src/project/fileWithTypeRefs.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/randomFileForImport.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/randomFileForTypeRef.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/node_modules/@types/pkg4/index.d.ts
  Entry point for implicit type library 'pkg4'

Found 3 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped




Change:: write file not resolved by import
Input::
//// [/src/project/node_modules/pkg1/require.d.ts]
export interface RequireInterface1 {}



Output::
/lib/tsc -b /src/project --explainFiles
File '/src/project/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
Reusing resolution of module 'pkg0' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
======== Resolving module 'pkg1' from '/src/project/fileWithImports.ts'. ========
Explicitly specified module resolution kind: 'Node16'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Loading module 'pkg1' from 'node_modules' folder, target file type 'TypeScript'.
Found 'package.json' at '/src/project/node_modules/pkg1/package.json'.
'package.json' does not have a 'typesVersions' field.
File name '/src/project/node_modules/pkg1/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg1/require.ts' does not exist.
File '/src/project/node_modules/pkg1/require.tsx' does not exist.
File '/src/project/node_modules/pkg1/require.d.ts' exist - use it as a name resolution result.
Resolving real path for '/src/project/node_modules/pkg1/require.d.ts', result '/src/project/node_modules/pkg1/require.d.ts'.
======== Module name 'pkg1' was successfully resolved to '/src/project/node_modules/pkg1/require.d.ts' with Package ID 'pkg1/require.d.ts@0.0.1'. ========
Found 'package.json' at '/src/project/node_modules/pkg0/package.json'.
'package.json' does not have a 'typesVersions' field.
File '/src/project/node_modules/pkg1/package.json' exists according to earlier cached lookups.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/fileWithTypeRefs.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
======== Resolving type reference directive 'pkg3', containing file '/src/project/fileWithTypeRefs.ts', root directory '/src/project/node_modules/@types'. ========
Resolving with primary search path '/src/project/node_modules/@types'.
Looking up in 'node_modules' folder, initial location '/src/project'.
Found 'package.json' at '/src/project/node_modules/pkg3/package.json'.
'package.json' does not have a 'typesVersions' field.
File name '/src/project/node_modules/pkg3/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg3/require.d.ts' does not exist.
File '/src/project/node_modules/@types/pkg3.d.ts' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Type reference directive 'pkg3' was not resolved. ========
Found 'package.json' at '/src/project/node_modules/pkg2/package.json'.
'package.json' does not have a 'typesVersions' field.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg4' from '/src/project/__inferred type names__.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/@types/pkg4/index.d.ts'.
File '/src/project/node_modules/@types/pkg4/package.json' does not exist.
File '/src/project/node_modules/@types/package.json' does not exist.
File '/src/project/node_modules/package.json' does not exist.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
[96msrc/project/fileWithTypeRefs.ts[0m:[93m3[0m:[93m52[0m - [91merror[0m[90m TS2304: [0mCannot find name 'RequireInterface3'.

[7m3[0m interface LocalInterface extends ImportInterface2, RequireInterface3 {}
[7m [0m [91m                                                   ~~~~~~~~~~~~~~~~~[0m

[96msrc/project/fileWithTypeRefs.ts[0m:[93m2[0m:[93m23[0m - [91merror[0m[90m TS2688: [0mCannot find type definition file for 'pkg3'.

[7m2[0m /// <reference types="pkg3" resolution-mode="require"/>
[7m [0m [91m                      ~~~~[0m

lib/lib.d.ts
  Default library for target 'es3'
src/project/node_modules/pkg0/import.d.ts
  Imported via "pkg0" from file 'src/project/fileWithImports.ts' with packageId 'pkg0/import.d.ts@0.0.1'
src/project/node_modules/pkg1/require.d.ts
  Imported via "pkg1" from file 'src/project/fileWithImports.ts' with packageId 'pkg1/require.d.ts@0.0.1'
src/project/fileWithImports.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/node_modules/pkg2/import.d.ts
  Type library referenced via 'pkg2' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg2/import.d.ts@0.0.1'
src/project/fileWithTypeRefs.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/randomFileForImport.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/randomFileForTypeRef.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/node_modules/@types/pkg4/index.d.ts
  Entry point for implicit type library 'pkg4'

Found 2 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped


//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./node_modules/pkg0/import.d.ts","./node_modules/pkg1/require.d.ts","./filewithimports.ts","./node_modules/pkg2/import.d.ts","./filewithtyperefs.ts","./randomfileforimport.ts","./randomfilefortyperef.ts","./node_modules/@types/pkg4/index.d.ts","./","./node_modules/pkg0/import.ts","./node_modules/pkg0/import.tsx","./node_modules/pkg0/package.json","./node_modules/pkg1/require.ts","./node_modules/pkg1/require.tsx","./node_modules/pkg1/package.json","./node_modules/@types/pkg2/package.json","./node_modules/pkg2/package.json","./node_modules/@types/pkg4/package.json"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"769951468-export interface ImportInterface0 {}","impliedFormat":1},{"version":"-3547817137-export interface RequireInterface1 {}","impliedFormat":1},{"version":"4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n","affectsGlobalScope":true,"impliedFormat":1},{"version":"-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"moduleResolution":3},"fileIdsList":[[2,3],[5]],"referencedMap":[[4,1],[6,2]],"exportedModulesMap":[[6,2]],"semanticDiagnosticsPerFile":[1,4,[6,[{"file":"./filewithtyperefs.ts","start":162,"length":17,"messageText":"Cannot find name 'RequireInterface3'.","category":1,"code":2304}]],9,2,3,5,7,8],"affectedFilesPendingEmit":[[4,1],[6,1],[9,1],[2,1],[3,1],[5,1],[7,1],[8,1]],"emitSignatures":[4,6,7,8],"cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true,"packageId":{"name":"pkg0","subModuleName":"import.d.ts","version":"0.0.1"}},"failedLookupLocations":[11,12],"affectingLocations":[13]},{"resolvedModule":{"resolvedFileName":3,"isExternalLibraryImport":true,"packageId":{"name":"pkg1","subModuleName":"require.d.ts","version":"0.0.1"}},"failedLookupLocations":[14,15],"affectingLocations":[16]},{"resolvedTypeReferenceDirective":{"resolvedFileName":5,"packageId":{"name":"pkg2","subModuleName":"import.d.ts","version":"0.0.1"},"isExternalLibraryImport":true},"failedLookupLocations":[17],"affectingLocations":[18]},{"resolvedTypeReferenceDirective":{"primary":true,"resolvedFileName":9,"isExternalLibraryImport":true},"failedLookupLocations":[19]}],"names":["pkg0","pkg1","pkg2","pkg4"],"resolutionEntries":[[1,1,99],[2,2,1],[3,3,99],[4,4]],"modules":[[10,[1,2]]],"typeRefs":[[10,[3,4]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./node_modules/pkg1/require.d.ts",
      "./filewithimports.ts",
      "./node_modules/pkg2/import.d.ts",
      "./filewithtyperefs.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./",
      "./node_modules/pkg0/import.ts",
      "./node_modules/pkg0/import.tsx",
      "./node_modules/pkg0/package.json",
      "./node_modules/pkg1/require.ts",
      "./node_modules/pkg1/require.tsx",
      "./node_modules/pkg1/package.json",
      "./node_modules/@types/pkg2/package.json",
      "./node_modules/pkg2/package.json",
      "./node_modules/@types/pkg4/package.json"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/import.d.ts",
        "./node_modules/pkg1/require.d.ts"
      ],
      [
        "./node_modules/pkg2/import.d.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg0/import.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}",
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg1/require.d.ts": {
        "version": "-3547817137-export interface RequireInterface1 {}",
        "signature": "-3547817137-export interface RequireInterface1 {}",
        "impliedFormat": "commonjs"
      },
      "./filewithimports.ts": {
        "version": "4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg2/import.d.ts": {
        "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "signature": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./filewithtyperefs.ts": {
        "version": "-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n",
        "signature": "-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n",
        "impliedFormat": "commonjs"
      },
      "./randomfileforimport.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "./randomfilefortyperef.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "./node_modules/@types/pkg4/index.d.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "moduleResolution": 3
    },
    "referencedMap": {
      "./filewithimports.ts": [
        "./node_modules/pkg0/import.d.ts",
        "./node_modules/pkg1/require.d.ts"
      ],
      "./filewithtyperefs.ts": [
        "./node_modules/pkg2/import.d.ts"
      ]
    },
    "exportedModulesMap": {
      "./filewithtyperefs.ts": [
        "./node_modules/pkg2/import.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./filewithimports.ts",
      [
        "./filewithtyperefs.ts",
        [
          {
            "file": "./filewithtyperefs.ts",
            "start": 162,
            "length": 17,
            "messageText": "Cannot find name 'RequireInterface3'.",
            "category": 1,
            "code": 2304
          }
        ]
      ],
      "./node_modules/@types/pkg4/index.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./node_modules/pkg1/require.d.ts",
      "./node_modules/pkg2/import.d.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts"
    ],
    "affectedFilesPendingEmit": [
      [
        "./filewithimports.ts",
        "Full"
      ],
      [
        "./filewithtyperefs.ts",
        "Full"
      ],
      [
        "./node_modules/@types/pkg4/index.d.ts",
        "Full"
      ],
      [
        "./node_modules/pkg0/import.d.ts",
        "Full"
      ],
      [
        "./node_modules/pkg1/require.d.ts",
        "Full"
      ],
      [
        "./node_modules/pkg2/import.d.ts",
        "Full"
      ],
      [
        "./randomfileforimport.ts",
        "Full"
      ],
      [
        "./randomfilefortyperef.ts",
        "Full"
      ]
    ],
    "emitSignatures": [
      "./filewithimports.ts",
      "./filewithtyperefs.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts"
    ],
    "cacheResolutions": {
      "resolutions": [
        {
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/import.d.ts",
            "isExternalLibraryImport": true,
            "packageId": {
              "name": "pkg0",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            }
          },
          "failedLookupLocations": [
            "./node_modules/pkg0/import.ts",
            "./node_modules/pkg0/import.tsx"
          ],
          "affectingLocations": [
            "./node_modules/pkg0/package.json"
          ]
        },
        {
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg1/require.d.ts",
            "isExternalLibraryImport": true,
            "packageId": {
              "name": "pkg1",
              "subModuleName": "require.d.ts",
              "version": "0.0.1"
            }
          },
          "failedLookupLocations": [
            "./node_modules/pkg1/require.ts",
            "./node_modules/pkg1/require.tsx"
          ],
          "affectingLocations": [
            "./node_modules/pkg1/package.json"
          ]
        },
        {
          "resolvedTypeReferenceDirective": {
            "resolvedFileName": "./node_modules/pkg2/import.d.ts",
            "packageId": {
              "name": "pkg2",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            },
            "isExternalLibraryImport": true
          },
          "failedLookupLocations": [
            "./node_modules/@types/pkg2/package.json"
          ],
          "affectingLocations": [
            "./node_modules/pkg2/package.json"
          ]
        },
        {
          "resolvedTypeReferenceDirective": {
            "primary": true,
            "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
            "isExternalLibraryImport": true
          },
          "failedLookupLocations": [
            "./node_modules/@types/pkg4/package.json"
          ]
        }
      ],
      "names": [
        "pkg0",
        "pkg1",
        "pkg2",
        "pkg4"
      ],
      "resolutionEntries": [
        [
          "pkg0",
          {
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/import.d.ts",
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg0",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              }
            },
            "failedLookupLocations": [
              "./node_modules/pkg0/import.ts",
              "./node_modules/pkg0/import.tsx"
            ],
            "affectingLocations": [
              "./node_modules/pkg0/package.json"
            ]
          },
          "esnext"
        ],
        [
          "pkg1",
          {
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg1/require.d.ts",
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg1",
                "subModuleName": "require.d.ts",
                "version": "0.0.1"
              }
            },
            "failedLookupLocations": [
              "./node_modules/pkg1/require.ts",
              "./node_modules/pkg1/require.tsx"
            ],
            "affectingLocations": [
              "./node_modules/pkg1/package.json"
            ]
          },
          "commonjs"
        ],
        [
          "pkg2",
          {
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": "./node_modules/pkg2/import.d.ts",
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              "./node_modules/@types/pkg2/package.json"
            ],
            "affectingLocations": [
              "./node_modules/pkg2/package.json"
            ]
          },
          "esnext"
        ],
        [
          "pkg4",
          {
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              "./node_modules/@types/pkg4/package.json"
            ]
          }
        ]
      ],
      "modules": [
        [
          "./",
          [
            [
              "pkg0",
              {
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/import.d.ts",
                  "isExternalLibraryImport": true,
                  "packageId": {
                    "name": "pkg0",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  }
                },
                "failedLookupLocations": [
                  "./node_modules/pkg0/import.ts",
                  "./node_modules/pkg0/import.tsx"
                ],
                "affectingLocations": [
                  "./node_modules/pkg0/package.json"
                ]
              },
              "esnext"
            ],
            [
              "pkg1",
              {
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg1/require.d.ts",
                  "isExternalLibraryImport": true,
                  "packageId": {
                    "name": "pkg1",
                    "subModuleName": "require.d.ts",
                    "version": "0.0.1"
                  }
                },
                "failedLookupLocations": [
                  "./node_modules/pkg1/require.ts",
                  "./node_modules/pkg1/require.tsx"
                ],
                "affectingLocations": [
                  "./node_modules/pkg1/package.json"
                ]
              },
              "commonjs"
            ]
          ]
        ]
      ],
      "typeRefs": [
        [
          "./",
          [
            [
              "pkg2",
              {
                "resolvedTypeReferenceDirective": {
                  "resolvedFileName": "./node_modules/pkg2/import.d.ts",
                  "packageId": {
                    "name": "pkg2",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  },
                  "isExternalLibraryImport": true
                },
                "failedLookupLocations": [
                  "./node_modules/@types/pkg2/package.json"
                ],
                "affectingLocations": [
                  "./node_modules/pkg2/package.json"
                ]
              },
              "esnext"
            ],
            [
              "pkg4",
              {
                "resolvedTypeReferenceDirective": {
                  "primary": true,
                  "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
                  "isExternalLibraryImport": true
                },
                "failedLookupLocations": [
                  "./node_modules/@types/pkg4/package.json"
                ]
              }
            ]
          ]
        ]
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 3571
}



Change:: write file not resolved by typeRef
Input::
//// [/src/project/node_modules/pkg3/require.d.ts]
export {};
declare global {
    interface RequireInterface3 {}
}




Output::
/lib/tsc -b /src/project --explainFiles
File '/src/project/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
Reusing resolution of module 'pkg0' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
Reusing resolution of module 'pkg1' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg1/require.d.ts' with Package ID 'pkg1/require.d.ts@0.0.1'.
Found 'package.json' at '/src/project/node_modules/pkg0/package.json'.
'package.json' does not have a 'typesVersions' field.
Found 'package.json' at '/src/project/node_modules/pkg1/package.json'.
'package.json' does not have a 'typesVersions' field.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/fileWithTypeRefs.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
======== Resolving type reference directive 'pkg3', containing file '/src/project/fileWithTypeRefs.ts', root directory '/src/project/node_modules/@types'. ========
Resolving with primary search path '/src/project/node_modules/@types'.
Looking up in 'node_modules' folder, initial location '/src/project'.
Found 'package.json' at '/src/project/node_modules/pkg3/package.json'.
'package.json' does not have a 'typesVersions' field.
File name '/src/project/node_modules/pkg3/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg3/require.d.ts' exist - use it as a name resolution result.
Resolving real path for '/src/project/node_modules/pkg3/require.d.ts', result '/src/project/node_modules/pkg3/require.d.ts'.
======== Type reference directive 'pkg3' was successfully resolved to '/src/project/node_modules/pkg3/require.d.ts' with Package ID 'pkg3/require.d.ts@0.0.1', primary: false. ========
Found 'package.json' at '/src/project/node_modules/pkg2/package.json'.
'package.json' does not have a 'typesVersions' field.
File '/src/project/node_modules/pkg3/package.json' exists according to earlier cached lookups.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg4' from '/src/project/__inferred type names__.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/@types/pkg4/index.d.ts'.
File '/src/project/node_modules/@types/pkg4/package.json' does not exist.
File '/src/project/node_modules/@types/package.json' does not exist.
File '/src/project/node_modules/package.json' does not exist.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
lib/lib.d.ts
  Default library for target 'es3'
src/project/node_modules/pkg0/import.d.ts
  Imported via "pkg0" from file 'src/project/fileWithImports.ts' with packageId 'pkg0/import.d.ts@0.0.1'
src/project/node_modules/pkg1/require.d.ts
  Imported via "pkg1" from file 'src/project/fileWithImports.ts' with packageId 'pkg1/require.d.ts@0.0.1'
src/project/fileWithImports.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/node_modules/pkg2/import.d.ts
  Type library referenced via 'pkg2' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg2/import.d.ts@0.0.1'
src/project/node_modules/pkg3/require.d.ts
  Type library referenced via 'pkg3' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg3/require.d.ts@0.0.1'
src/project/fileWithTypeRefs.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/randomFileForImport.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/randomFileForTypeRef.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/node_modules/@types/pkg4/index.d.ts
  Entry point for implicit type library 'pkg4'
exitCode:: ExitStatus.Success


//// [/src/project/fileWithImports.d.ts]
export {};


//// [/src/project/fileWithImports.js]
"use strict";
exports.__esModule = true;


//// [/src/project/fileWithTypeRefs.d.ts]
export {};


//// [/src/project/fileWithTypeRefs.js]
"use strict";
exports.__esModule = true;
/// <reference types="pkg2" resolution-mode="import"/>
/// <reference types="pkg3" resolution-mode="require"/>


//// [/src/project/randomFileForImport.d.ts]
export declare const x = 10;


//// [/src/project/randomFileForImport.js]
"use strict";
exports.__esModule = true;
exports.x = void 0;
exports.x = 10;


//// [/src/project/randomFileForTypeRef.d.ts]
export declare const x = 10;


//// [/src/project/randomFileForTypeRef.js]
"use strict";
exports.__esModule = true;
exports.x = void 0;
exports.x = 10;


//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./node_modules/pkg0/import.d.ts","./node_modules/pkg1/require.d.ts","./filewithimports.ts","./node_modules/pkg2/import.d.ts","./node_modules/pkg3/require.d.ts","./filewithtyperefs.ts","./randomfileforimport.ts","./randomfilefortyperef.ts","./node_modules/@types/pkg4/index.d.ts","./","./node_modules/pkg0/import.ts","./node_modules/pkg0/import.tsx","./node_modules/pkg0/package.json","./node_modules/pkg1/require.ts","./node_modules/pkg1/require.tsx","./node_modules/pkg1/package.json","./node_modules/@types/pkg2/package.json","./node_modules/pkg2/package.json","./node_modules/@types/pkg3/package.json","./node_modules/@types/pkg3/index.d.ts","./node_modules/pkg3/package.json","./node_modules/@types/pkg4/package.json"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"769951468-export interface ImportInterface0 {}","impliedFormat":1},{"version":"-3547817137-export interface RequireInterface1 {}","impliedFormat":1},{"version":"4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n","affectsGlobalScope":true,"impliedFormat":1},{"version":"-6568745979-export {};\ndeclare global {\n    interface RequireInterface3 {}\n}\n","affectsGlobalScope":true,"impliedFormat":1},{"version":"-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"moduleResolution":3},"fileIdsList":[[2,3],[5,6]],"referencedMap":[[4,1],[7,2]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,4,7,10,2,3,5,6,8,9],"latestChangedDtsFile":"./randomFileForTypeRef.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true,"packageId":{"name":"pkg0","subModuleName":"import.d.ts","version":"0.0.1"}},"failedLookupLocations":[12,13],"affectingLocations":[14]},{"resolvedModule":{"resolvedFileName":3,"isExternalLibraryImport":true,"packageId":{"name":"pkg1","subModuleName":"require.d.ts","version":"0.0.1"}},"failedLookupLocations":[15,16],"affectingLocations":[17]},{"resolvedTypeReferenceDirective":{"resolvedFileName":5,"packageId":{"name":"pkg2","subModuleName":"import.d.ts","version":"0.0.1"},"isExternalLibraryImport":true},"failedLookupLocations":[18],"affectingLocations":[19]},{"resolvedTypeReferenceDirective":{"resolvedFileName":6,"packageId":{"name":"pkg3","subModuleName":"require.d.ts","version":"0.0.1"},"isExternalLibraryImport":true},"failedLookupLocations":[20,21],"affectingLocations":[22]},{"resolvedTypeReferenceDirective":{"primary":true,"resolvedFileName":10,"isExternalLibraryImport":true},"failedLookupLocations":[23]}],"names":["pkg0","pkg1","pkg2","pkg3","pkg4"],"resolutionEntries":[[1,1,99],[2,2,1],[3,3,99],[4,4,1],[5,5]],"modules":[[11,[1,2]]],"typeRefs":[[11,[3,4,5]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./node_modules/pkg1/require.d.ts",
      "./filewithimports.ts",
      "./node_modules/pkg2/import.d.ts",
      "./node_modules/pkg3/require.d.ts",
      "./filewithtyperefs.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./",
      "./node_modules/pkg0/import.ts",
      "./node_modules/pkg0/import.tsx",
      "./node_modules/pkg0/package.json",
      "./node_modules/pkg1/require.ts",
      "./node_modules/pkg1/require.tsx",
      "./node_modules/pkg1/package.json",
      "./node_modules/@types/pkg2/package.json",
      "./node_modules/pkg2/package.json",
      "./node_modules/@types/pkg3/package.json",
      "./node_modules/@types/pkg3/index.d.ts",
      "./node_modules/pkg3/package.json",
      "./node_modules/@types/pkg4/package.json"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/import.d.ts",
        "./node_modules/pkg1/require.d.ts"
      ],
      [
        "./node_modules/pkg2/import.d.ts",
        "./node_modules/pkg3/require.d.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg0/import.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}",
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg1/require.d.ts": {
        "version": "-3547817137-export interface RequireInterface1 {}",
        "signature": "-3547817137-export interface RequireInterface1 {}",
        "impliedFormat": "commonjs"
      },
      "./filewithimports.ts": {
        "version": "4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg2/import.d.ts": {
        "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "signature": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg3/require.d.ts": {
        "version": "-6568745979-export {};\ndeclare global {\n    interface RequireInterface3 {}\n}\n",
        "signature": "-6568745979-export {};\ndeclare global {\n    interface RequireInterface3 {}\n}\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./filewithtyperefs.ts": {
        "version": "-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "./randomfileforimport.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./randomfilefortyperef.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/@types/pkg4/index.d.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "moduleResolution": 3
    },
    "referencedMap": {
      "./filewithimports.ts": [
        "./node_modules/pkg0/import.d.ts",
        "./node_modules/pkg1/require.d.ts"
      ],
      "./filewithtyperefs.ts": [
        "./node_modules/pkg2/import.d.ts",
        "./node_modules/pkg3/require.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./filewithimports.ts",
      "./filewithtyperefs.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./node_modules/pkg1/require.d.ts",
      "./node_modules/pkg2/import.d.ts",
      "./node_modules/pkg3/require.d.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts"
    ],
    "latestChangedDtsFile": "./randomFileForTypeRef.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/import.d.ts",
            "isExternalLibraryImport": true,
            "packageId": {
              "name": "pkg0",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            }
          },
          "failedLookupLocations": [
            "./node_modules/pkg0/import.ts",
            "./node_modules/pkg0/import.tsx"
          ],
          "affectingLocations": [
            "./node_modules/pkg0/package.json"
          ]
        },
        {
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg1/require.d.ts",
            "isExternalLibraryImport": true,
            "packageId": {
              "name": "pkg1",
              "subModuleName": "require.d.ts",
              "version": "0.0.1"
            }
          },
          "failedLookupLocations": [
            "./node_modules/pkg1/require.ts",
            "./node_modules/pkg1/require.tsx"
          ],
          "affectingLocations": [
            "./node_modules/pkg1/package.json"
          ]
        },
        {
          "resolvedTypeReferenceDirective": {
            "resolvedFileName": "./node_modules/pkg2/import.d.ts",
            "packageId": {
              "name": "pkg2",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            },
            "isExternalLibraryImport": true
          },
          "failedLookupLocations": [
            "./node_modules/@types/pkg2/package.json"
          ],
          "affectingLocations": [
            "./node_modules/pkg2/package.json"
          ]
        },
        {
          "resolvedTypeReferenceDirective": {
            "resolvedFileName": "./node_modules/pkg3/require.d.ts",
            "packageId": {
              "name": "pkg3",
              "subModuleName": "require.d.ts",
              "version": "0.0.1"
            },
            "isExternalLibraryImport": true
          },
          "failedLookupLocations": [
            "./node_modules/@types/pkg3/package.json",
            "./node_modules/@types/pkg3/index.d.ts"
          ],
          "affectingLocations": [
            "./node_modules/pkg3/package.json"
          ]
        },
        {
          "resolvedTypeReferenceDirective": {
            "primary": true,
            "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
            "isExternalLibraryImport": true
          },
          "failedLookupLocations": [
            "./node_modules/@types/pkg4/package.json"
          ]
        }
      ],
      "names": [
        "pkg0",
        "pkg1",
        "pkg2",
        "pkg3",
        "pkg4"
      ],
      "resolutionEntries": [
        [
          "pkg0",
          {
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/import.d.ts",
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg0",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              }
            },
            "failedLookupLocations": [
              "./node_modules/pkg0/import.ts",
              "./node_modules/pkg0/import.tsx"
            ],
            "affectingLocations": [
              "./node_modules/pkg0/package.json"
            ]
          },
          "esnext"
        ],
        [
          "pkg1",
          {
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg1/require.d.ts",
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg1",
                "subModuleName": "require.d.ts",
                "version": "0.0.1"
              }
            },
            "failedLookupLocations": [
              "./node_modules/pkg1/require.ts",
              "./node_modules/pkg1/require.tsx"
            ],
            "affectingLocations": [
              "./node_modules/pkg1/package.json"
            ]
          },
          "commonjs"
        ],
        [
          "pkg2",
          {
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": "./node_modules/pkg2/import.d.ts",
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              "./node_modules/@types/pkg2/package.json"
            ],
            "affectingLocations": [
              "./node_modules/pkg2/package.json"
            ]
          },
          "esnext"
        ],
        [
          "pkg3",
          {
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": "./node_modules/pkg3/require.d.ts",
              "packageId": {
                "name": "pkg3",
                "subModuleName": "require.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              "./node_modules/@types/pkg3/package.json",
              "./node_modules/@types/pkg3/index.d.ts"
            ],
            "affectingLocations": [
              "./node_modules/pkg3/package.json"
            ]
          },
          "commonjs"
        ],
        [
          "pkg4",
          {
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              "./node_modules/@types/pkg4/package.json"
            ]
          }
        ]
      ],
      "modules": [
        [
          "./",
          [
            [
              "pkg0",
              {
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/import.d.ts",
                  "isExternalLibraryImport": true,
                  "packageId": {
                    "name": "pkg0",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  }
                },
                "failedLookupLocations": [
                  "./node_modules/pkg0/import.ts",
                  "./node_modules/pkg0/import.tsx"
                ],
                "affectingLocations": [
                  "./node_modules/pkg0/package.json"
                ]
              },
              "esnext"
            ],
            [
              "pkg1",
              {
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg1/require.d.ts",
                  "isExternalLibraryImport": true,
                  "packageId": {
                    "name": "pkg1",
                    "subModuleName": "require.d.ts",
                    "version": "0.0.1"
                  }
                },
                "failedLookupLocations": [
                  "./node_modules/pkg1/require.ts",
                  "./node_modules/pkg1/require.tsx"
                ],
                "affectingLocations": [
                  "./node_modules/pkg1/package.json"
                ]
              },
              "commonjs"
            ]
          ]
        ]
      ],
      "typeRefs": [
        [
          "./",
          [
            [
              "pkg2",
              {
                "resolvedTypeReferenceDirective": {
                  "resolvedFileName": "./node_modules/pkg2/import.d.ts",
                  "packageId": {
                    "name": "pkg2",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  },
                  "isExternalLibraryImport": true
                },
                "failedLookupLocations": [
                  "./node_modules/@types/pkg2/package.json"
                ],
                "affectingLocations": [
                  "./node_modules/pkg2/package.json"
                ]
              },
              "esnext"
            ],
            [
              "pkg3",
              {
                "resolvedTypeReferenceDirective": {
                  "resolvedFileName": "./node_modules/pkg3/require.d.ts",
                  "packageId": {
                    "name": "pkg3",
                    "subModuleName": "require.d.ts",
                    "version": "0.0.1"
                  },
                  "isExternalLibraryImport": true
                },
                "failedLookupLocations": [
                  "./node_modules/@types/pkg3/package.json",
                  "./node_modules/@types/pkg3/index.d.ts"
                ],
                "affectingLocations": [
                  "./node_modules/pkg3/package.json"
                ]
              },
              "commonjs"
            ],
            [
              "pkg4",
              {
                "resolvedTypeReferenceDirective": {
                  "primary": true,
                  "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
                  "isExternalLibraryImport": true
                },
                "failedLookupLocations": [
                  "./node_modules/@types/pkg4/package.json"
                ]
              }
            ]
          ]
        ]
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 4073
}



Change:: modify randomFileForImport by adding import
Input::
//// [/src/project/randomFileForImport.ts]
import type { ImportInterface0 } from "pkg0" assert { "resolution-mode": "import" };
export const x = 10;



Output::
/lib/tsc -b /src/project --explainFiles
File '/src/project/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
Reusing resolution of module 'pkg0' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
Reusing resolution of module 'pkg1' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg1/require.d.ts' with Package ID 'pkg1/require.d.ts@0.0.1'.
Found 'package.json' at '/src/project/node_modules/pkg0/package.json'.
'package.json' does not have a 'typesVersions' field.
Found 'package.json' at '/src/project/node_modules/pkg1/package.json'.
'package.json' does not have a 'typesVersions' field.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/fileWithTypeRefs.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
Reusing resolution of type reference directive 'pkg3' from '/src/project/fileWithTypeRefs.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg3/require.d.ts' with Package ID 'pkg3/require.d.ts@0.0.1'.
Found 'package.json' at '/src/project/node_modules/pkg2/package.json'.
'package.json' does not have a 'typesVersions' field.
Found 'package.json' at '/src/project/node_modules/pkg3/package.json'.
'package.json' does not have a 'typesVersions' field.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of module 'pkg0' from '/src/project/randomFileForImport.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg4' from '/src/project/__inferred type names__.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/@types/pkg4/index.d.ts'.
File '/src/project/node_modules/@types/pkg4/package.json' does not exist.
File '/src/project/node_modules/@types/package.json' does not exist.
File '/src/project/node_modules/package.json' does not exist.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
lib/lib.d.ts
  Default library for target 'es3'
src/project/node_modules/pkg0/import.d.ts
  Imported via "pkg0" from file 'src/project/fileWithImports.ts' with packageId 'pkg0/import.d.ts@0.0.1'
  Imported via "pkg0" from file 'src/project/randomFileForImport.ts' with packageId 'pkg0/import.d.ts@0.0.1'
src/project/node_modules/pkg1/require.d.ts
  Imported via "pkg1" from file 'src/project/fileWithImports.ts' with packageId 'pkg1/require.d.ts@0.0.1'
src/project/fileWithImports.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/node_modules/pkg2/import.d.ts
  Type library referenced via 'pkg2' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg2/import.d.ts@0.0.1'
src/project/node_modules/pkg3/require.d.ts
  Type library referenced via 'pkg3' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg3/require.d.ts@0.0.1'
src/project/fileWithTypeRefs.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/randomFileForImport.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/randomFileForTypeRef.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/node_modules/@types/pkg4/index.d.ts
  Entry point for implicit type library 'pkg4'
exitCode:: ExitStatus.Success


//// [/src/project/randomFileForImport.js] file written with same contents
//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./node_modules/pkg0/import.d.ts","./node_modules/pkg1/require.d.ts","./filewithimports.ts","./node_modules/pkg2/import.d.ts","./node_modules/pkg3/require.d.ts","./filewithtyperefs.ts","./randomfileforimport.ts","./randomfilefortyperef.ts","./node_modules/@types/pkg4/index.d.ts","./","./node_modules/pkg0/import.ts","./node_modules/pkg0/import.tsx","./node_modules/pkg0/package.json","./node_modules/pkg1/require.ts","./node_modules/pkg1/require.tsx","./node_modules/pkg1/package.json","./node_modules/@types/pkg2/package.json","./node_modules/pkg2/package.json","./node_modules/@types/pkg3/package.json","./node_modules/@types/pkg3/index.d.ts","./node_modules/pkg3/package.json","./node_modules/@types/pkg4/package.json"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"769951468-export interface ImportInterface0 {}","impliedFormat":1},{"version":"-3547817137-export interface RequireInterface1 {}","impliedFormat":1},{"version":"4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n","affectsGlobalScope":true,"impliedFormat":1},{"version":"-6568745979-export {};\ndeclare global {\n    interface RequireInterface3 {}\n}\n","affectsGlobalScope":true,"impliedFormat":1},{"version":"-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"moduleResolution":3},"fileIdsList":[[2,3],[5,6],[2]],"referencedMap":[[4,1],[7,2],[8,3]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,4,7,10,2,3,5,6,8,9],"latestChangedDtsFile":"./randomFileForTypeRef.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true,"packageId":{"name":"pkg0","subModuleName":"import.d.ts","version":"0.0.1"}},"failedLookupLocations":[12,13],"affectingLocations":[14]},{"resolvedModule":{"resolvedFileName":3,"isExternalLibraryImport":true,"packageId":{"name":"pkg1","subModuleName":"require.d.ts","version":"0.0.1"}},"failedLookupLocations":[15,16],"affectingLocations":[17]},{"resolvedTypeReferenceDirective":{"resolvedFileName":5,"packageId":{"name":"pkg2","subModuleName":"import.d.ts","version":"0.0.1"},"isExternalLibraryImport":true},"failedLookupLocations":[18],"affectingLocations":[19]},{"resolvedTypeReferenceDirective":{"resolvedFileName":6,"packageId":{"name":"pkg3","subModuleName":"require.d.ts","version":"0.0.1"},"isExternalLibraryImport":true},"failedLookupLocations":[20,21],"affectingLocations":[22]},{"resolvedTypeReferenceDirective":{"primary":true,"resolvedFileName":10,"isExternalLibraryImport":true},"failedLookupLocations":[23]}],"names":["pkg0","pkg1","pkg2","pkg3","pkg4"],"resolutionEntries":[[1,1,99],[2,2,1],[3,3,99],[4,4,1],[5,5]],"modules":[[11,[1,2]]],"typeRefs":[[11,[3,4,5]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./node_modules/pkg1/require.d.ts",
      "./filewithimports.ts",
      "./node_modules/pkg2/import.d.ts",
      "./node_modules/pkg3/require.d.ts",
      "./filewithtyperefs.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./",
      "./node_modules/pkg0/import.ts",
      "./node_modules/pkg0/import.tsx",
      "./node_modules/pkg0/package.json",
      "./node_modules/pkg1/require.ts",
      "./node_modules/pkg1/require.tsx",
      "./node_modules/pkg1/package.json",
      "./node_modules/@types/pkg2/package.json",
      "./node_modules/pkg2/package.json",
      "./node_modules/@types/pkg3/package.json",
      "./node_modules/@types/pkg3/index.d.ts",
      "./node_modules/pkg3/package.json",
      "./node_modules/@types/pkg4/package.json"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/import.d.ts",
        "./node_modules/pkg1/require.d.ts"
      ],
      [
        "./node_modules/pkg2/import.d.ts",
        "./node_modules/pkg3/require.d.ts"
      ],
      [
        "./node_modules/pkg0/import.d.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg0/import.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}",
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg1/require.d.ts": {
        "version": "-3547817137-export interface RequireInterface1 {}",
        "signature": "-3547817137-export interface RequireInterface1 {}",
        "impliedFormat": "commonjs"
      },
      "./filewithimports.ts": {
        "version": "4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg2/import.d.ts": {
        "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "signature": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg3/require.d.ts": {
        "version": "-6568745979-export {};\ndeclare global {\n    interface RequireInterface3 {}\n}\n",
        "signature": "-6568745979-export {};\ndeclare global {\n    interface RequireInterface3 {}\n}\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./filewithtyperefs.ts": {
        "version": "-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "./randomfileforimport.ts": {
        "version": "-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./randomfilefortyperef.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/@types/pkg4/index.d.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "moduleResolution": 3
    },
    "referencedMap": {
      "./filewithimports.ts": [
        "./node_modules/pkg0/import.d.ts",
        "./node_modules/pkg1/require.d.ts"
      ],
      "./filewithtyperefs.ts": [
        "./node_modules/pkg2/import.d.ts",
        "./node_modules/pkg3/require.d.ts"
      ],
      "./randomfileforimport.ts": [
        "./node_modules/pkg0/import.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./filewithimports.ts",
      "./filewithtyperefs.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./node_modules/pkg1/require.d.ts",
      "./node_modules/pkg2/import.d.ts",
      "./node_modules/pkg3/require.d.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts"
    ],
    "latestChangedDtsFile": "./randomFileForTypeRef.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/import.d.ts",
            "isExternalLibraryImport": true,
            "packageId": {
              "name": "pkg0",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            }
          },
          "failedLookupLocations": [
            "./node_modules/pkg0/import.ts",
            "./node_modules/pkg0/import.tsx"
          ],
          "affectingLocations": [
            "./node_modules/pkg0/package.json"
          ]
        },
        {
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg1/require.d.ts",
            "isExternalLibraryImport": true,
            "packageId": {
              "name": "pkg1",
              "subModuleName": "require.d.ts",
              "version": "0.0.1"
            }
          },
          "failedLookupLocations": [
            "./node_modules/pkg1/require.ts",
            "./node_modules/pkg1/require.tsx"
          ],
          "affectingLocations": [
            "./node_modules/pkg1/package.json"
          ]
        },
        {
          "resolvedTypeReferenceDirective": {
            "resolvedFileName": "./node_modules/pkg2/import.d.ts",
            "packageId": {
              "name": "pkg2",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            },
            "isExternalLibraryImport": true
          },
          "failedLookupLocations": [
            "./node_modules/@types/pkg2/package.json"
          ],
          "affectingLocations": [
            "./node_modules/pkg2/package.json"
          ]
        },
        {
          "resolvedTypeReferenceDirective": {
            "resolvedFileName": "./node_modules/pkg3/require.d.ts",
            "packageId": {
              "name": "pkg3",
              "subModuleName": "require.d.ts",
              "version": "0.0.1"
            },
            "isExternalLibraryImport": true
          },
          "failedLookupLocations": [
            "./node_modules/@types/pkg3/package.json",
            "./node_modules/@types/pkg3/index.d.ts"
          ],
          "affectingLocations": [
            "./node_modules/pkg3/package.json"
          ]
        },
        {
          "resolvedTypeReferenceDirective": {
            "primary": true,
            "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
            "isExternalLibraryImport": true
          },
          "failedLookupLocations": [
            "./node_modules/@types/pkg4/package.json"
          ]
        }
      ],
      "names": [
        "pkg0",
        "pkg1",
        "pkg2",
        "pkg3",
        "pkg4"
      ],
      "resolutionEntries": [
        [
          "pkg0",
          {
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/import.d.ts",
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg0",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              }
            },
            "failedLookupLocations": [
              "./node_modules/pkg0/import.ts",
              "./node_modules/pkg0/import.tsx"
            ],
            "affectingLocations": [
              "./node_modules/pkg0/package.json"
            ]
          },
          "esnext"
        ],
        [
          "pkg1",
          {
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg1/require.d.ts",
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg1",
                "subModuleName": "require.d.ts",
                "version": "0.0.1"
              }
            },
            "failedLookupLocations": [
              "./node_modules/pkg1/require.ts",
              "./node_modules/pkg1/require.tsx"
            ],
            "affectingLocations": [
              "./node_modules/pkg1/package.json"
            ]
          },
          "commonjs"
        ],
        [
          "pkg2",
          {
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": "./node_modules/pkg2/import.d.ts",
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              "./node_modules/@types/pkg2/package.json"
            ],
            "affectingLocations": [
              "./node_modules/pkg2/package.json"
            ]
          },
          "esnext"
        ],
        [
          "pkg3",
          {
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": "./node_modules/pkg3/require.d.ts",
              "packageId": {
                "name": "pkg3",
                "subModuleName": "require.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              "./node_modules/@types/pkg3/package.json",
              "./node_modules/@types/pkg3/index.d.ts"
            ],
            "affectingLocations": [
              "./node_modules/pkg3/package.json"
            ]
          },
          "commonjs"
        ],
        [
          "pkg4",
          {
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              "./node_modules/@types/pkg4/package.json"
            ]
          }
        ]
      ],
      "modules": [
        [
          "./",
          [
            [
              "pkg0",
              {
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/import.d.ts",
                  "isExternalLibraryImport": true,
                  "packageId": {
                    "name": "pkg0",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  }
                },
                "failedLookupLocations": [
                  "./node_modules/pkg0/import.ts",
                  "./node_modules/pkg0/import.tsx"
                ],
                "affectingLocations": [
                  "./node_modules/pkg0/package.json"
                ]
              },
              "esnext"
            ],
            [
              "pkg1",
              {
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg1/require.d.ts",
                  "isExternalLibraryImport": true,
                  "packageId": {
                    "name": "pkg1",
                    "subModuleName": "require.d.ts",
                    "version": "0.0.1"
                  }
                },
                "failedLookupLocations": [
                  "./node_modules/pkg1/require.ts",
                  "./node_modules/pkg1/require.tsx"
                ],
                "affectingLocations": [
                  "./node_modules/pkg1/package.json"
                ]
              },
              "commonjs"
            ]
          ]
        ]
      ],
      "typeRefs": [
        [
          "./",
          [
            [
              "pkg2",
              {
                "resolvedTypeReferenceDirective": {
                  "resolvedFileName": "./node_modules/pkg2/import.d.ts",
                  "packageId": {
                    "name": "pkg2",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  },
                  "isExternalLibraryImport": true
                },
                "failedLookupLocations": [
                  "./node_modules/@types/pkg2/package.json"
                ],
                "affectingLocations": [
                  "./node_modules/pkg2/package.json"
                ]
              },
              "esnext"
            ],
            [
              "pkg3",
              {
                "resolvedTypeReferenceDirective": {
                  "resolvedFileName": "./node_modules/pkg3/require.d.ts",
                  "packageId": {
                    "name": "pkg3",
                    "subModuleName": "require.d.ts",
                    "version": "0.0.1"
                  },
                  "isExternalLibraryImport": true
                },
                "failedLookupLocations": [
                  "./node_modules/@types/pkg3/package.json",
                  "./node_modules/@types/pkg3/index.d.ts"
                ],
                "affectingLocations": [
                  "./node_modules/pkg3/package.json"
                ]
              },
              "commonjs"
            ],
            [
              "pkg4",
              {
                "resolvedTypeReferenceDirective": {
                  "primary": true,
                  "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
                  "isExternalLibraryImport": true
                },
                "failedLookupLocations": [
                  "./node_modules/@types/pkg4/package.json"
                ]
              }
            ]
          ]
        ]
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 4174
}



Change:: modify randomFileForTypeRef by adding typeRef
Input::
//// [/src/project/randomFileForTypeRef.ts]
/// <reference types="pkg2" resolution-mode="import"/>
export const x = 10;



Output::
/lib/tsc -b /src/project --explainFiles
File '/src/project/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
Reusing resolution of module 'pkg0' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
Reusing resolution of module 'pkg1' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg1/require.d.ts' with Package ID 'pkg1/require.d.ts@0.0.1'.
Found 'package.json' at '/src/project/node_modules/pkg0/package.json'.
'package.json' does not have a 'typesVersions' field.
Found 'package.json' at '/src/project/node_modules/pkg1/package.json'.
'package.json' does not have a 'typesVersions' field.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/fileWithTypeRefs.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
Reusing resolution of type reference directive 'pkg3' from '/src/project/fileWithTypeRefs.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg3/require.d.ts' with Package ID 'pkg3/require.d.ts@0.0.1'.
Found 'package.json' at '/src/project/node_modules/pkg2/package.json'.
'package.json' does not have a 'typesVersions' field.
Found 'package.json' at '/src/project/node_modules/pkg3/package.json'.
'package.json' does not have a 'typesVersions' field.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of module 'pkg0' from '/src/project/randomFileForImport.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/randomFileForTypeRef.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
Reusing resolution of type reference directive 'pkg4' from '/src/project/__inferred type names__.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/@types/pkg4/index.d.ts'.
File '/src/project/node_modules/@types/pkg4/package.json' does not exist.
File '/src/project/node_modules/@types/package.json' does not exist.
File '/src/project/node_modules/package.json' does not exist.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
lib/lib.d.ts
  Default library for target 'es3'
src/project/node_modules/pkg0/import.d.ts
  Imported via "pkg0" from file 'src/project/fileWithImports.ts' with packageId 'pkg0/import.d.ts@0.0.1'
  Imported via "pkg0" from file 'src/project/randomFileForImport.ts' with packageId 'pkg0/import.d.ts@0.0.1'
src/project/node_modules/pkg1/require.d.ts
  Imported via "pkg1" from file 'src/project/fileWithImports.ts' with packageId 'pkg1/require.d.ts@0.0.1'
src/project/fileWithImports.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/node_modules/pkg2/import.d.ts
  Type library referenced via 'pkg2' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg2/import.d.ts@0.0.1'
src/project/node_modules/pkg3/require.d.ts
  Type library referenced via 'pkg3' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg3/require.d.ts@0.0.1'
src/project/fileWithTypeRefs.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/randomFileForImport.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/randomFileForTypeRef.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
src/project/node_modules/@types/pkg4/index.d.ts
  Entry point for implicit type library 'pkg4'
exitCode:: ExitStatus.Success


//// [/src/project/randomFileForTypeRef.js]
"use strict";
exports.__esModule = true;
exports.x = void 0;
/// <reference types="pkg2" resolution-mode="import"/>
exports.x = 10;


//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./node_modules/pkg0/import.d.ts","./node_modules/pkg1/require.d.ts","./filewithimports.ts","./node_modules/pkg2/import.d.ts","./node_modules/pkg3/require.d.ts","./filewithtyperefs.ts","./randomfileforimport.ts","./randomfilefortyperef.ts","./node_modules/@types/pkg4/index.d.ts","./","./node_modules/pkg0/import.ts","./node_modules/pkg0/import.tsx","./node_modules/pkg0/package.json","./node_modules/pkg1/require.ts","./node_modules/pkg1/require.tsx","./node_modules/pkg1/package.json","./node_modules/@types/pkg2/package.json","./node_modules/pkg2/package.json","./node_modules/@types/pkg3/package.json","./node_modules/@types/pkg3/index.d.ts","./node_modules/pkg3/package.json","./node_modules/@types/pkg4/package.json"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"769951468-export interface ImportInterface0 {}","impliedFormat":1},{"version":"-3547817137-export interface RequireInterface1 {}","impliedFormat":1},{"version":"4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n","affectsGlobalScope":true,"impliedFormat":1},{"version":"-6568745979-export {};\ndeclare global {\n    interface RequireInterface3 {}\n}\n","affectsGlobalScope":true,"impliedFormat":1},{"version":"-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"moduleResolution":3},"fileIdsList":[[2,3],[5,6],[2],[5]],"referencedMap":[[4,1],[7,2],[8,3],[9,4]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,4,7,10,2,3,5,6,8,9],"latestChangedDtsFile":"./randomFileForTypeRef.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true,"packageId":{"name":"pkg0","subModuleName":"import.d.ts","version":"0.0.1"}},"failedLookupLocations":[12,13],"affectingLocations":[14]},{"resolvedModule":{"resolvedFileName":3,"isExternalLibraryImport":true,"packageId":{"name":"pkg1","subModuleName":"require.d.ts","version":"0.0.1"}},"failedLookupLocations":[15,16],"affectingLocations":[17]},{"resolvedTypeReferenceDirective":{"resolvedFileName":5,"packageId":{"name":"pkg2","subModuleName":"import.d.ts","version":"0.0.1"},"isExternalLibraryImport":true},"failedLookupLocations":[18],"affectingLocations":[19]},{"resolvedTypeReferenceDirective":{"resolvedFileName":6,"packageId":{"name":"pkg3","subModuleName":"require.d.ts","version":"0.0.1"},"isExternalLibraryImport":true},"failedLookupLocations":[20,21],"affectingLocations":[22]},{"resolvedTypeReferenceDirective":{"primary":true,"resolvedFileName":10,"isExternalLibraryImport":true},"failedLookupLocations":[23]}],"names":["pkg0","pkg1","pkg2","pkg3","pkg4"],"resolutionEntries":[[1,1,99],[2,2,1],[3,3,99],[4,4,1],[5,5]],"modules":[[11,[1,2]]],"typeRefs":[[11,[3,4,5]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./node_modules/pkg1/require.d.ts",
      "./filewithimports.ts",
      "./node_modules/pkg2/import.d.ts",
      "./node_modules/pkg3/require.d.ts",
      "./filewithtyperefs.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./",
      "./node_modules/pkg0/import.ts",
      "./node_modules/pkg0/import.tsx",
      "./node_modules/pkg0/package.json",
      "./node_modules/pkg1/require.ts",
      "./node_modules/pkg1/require.tsx",
      "./node_modules/pkg1/package.json",
      "./node_modules/@types/pkg2/package.json",
      "./node_modules/pkg2/package.json",
      "./node_modules/@types/pkg3/package.json",
      "./node_modules/@types/pkg3/index.d.ts",
      "./node_modules/pkg3/package.json",
      "./node_modules/@types/pkg4/package.json"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/import.d.ts",
        "./node_modules/pkg1/require.d.ts"
      ],
      [
        "./node_modules/pkg2/import.d.ts",
        "./node_modules/pkg3/require.d.ts"
      ],
      [
        "./node_modules/pkg0/import.d.ts"
      ],
      [
        "./node_modules/pkg2/import.d.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg0/import.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}",
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg1/require.d.ts": {
        "version": "-3547817137-export interface RequireInterface1 {}",
        "signature": "-3547817137-export interface RequireInterface1 {}",
        "impliedFormat": "commonjs"
      },
      "./filewithimports.ts": {
        "version": "4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg2/import.d.ts": {
        "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "signature": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg3/require.d.ts": {
        "version": "-6568745979-export {};\ndeclare global {\n    interface RequireInterface3 {}\n}\n",
        "signature": "-6568745979-export {};\ndeclare global {\n    interface RequireInterface3 {}\n}\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./filewithtyperefs.ts": {
        "version": "-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "./randomfileforimport.ts": {
        "version": "-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./randomfilefortyperef.ts": {
        "version": "-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/@types/pkg4/index.d.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "moduleResolution": 3
    },
    "referencedMap": {
      "./filewithimports.ts": [
        "./node_modules/pkg0/import.d.ts",
        "./node_modules/pkg1/require.d.ts"
      ],
      "./filewithtyperefs.ts": [
        "./node_modules/pkg2/import.d.ts",
        "./node_modules/pkg3/require.d.ts"
      ],
      "./randomfileforimport.ts": [
        "./node_modules/pkg0/import.d.ts"
      ],
      "./randomfilefortyperef.ts": [
        "./node_modules/pkg2/import.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./filewithimports.ts",
      "./filewithtyperefs.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./node_modules/pkg1/require.d.ts",
      "./node_modules/pkg2/import.d.ts",
      "./node_modules/pkg3/require.d.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts"
    ],
    "latestChangedDtsFile": "./randomFileForTypeRef.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/import.d.ts",
            "isExternalLibraryImport": true,
            "packageId": {
              "name": "pkg0",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            }
          },
          "failedLookupLocations": [
            "./node_modules/pkg0/import.ts",
            "./node_modules/pkg0/import.tsx"
          ],
          "affectingLocations": [
            "./node_modules/pkg0/package.json"
          ]
        },
        {
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg1/require.d.ts",
            "isExternalLibraryImport": true,
            "packageId": {
              "name": "pkg1",
              "subModuleName": "require.d.ts",
              "version": "0.0.1"
            }
          },
          "failedLookupLocations": [
            "./node_modules/pkg1/require.ts",
            "./node_modules/pkg1/require.tsx"
          ],
          "affectingLocations": [
            "./node_modules/pkg1/package.json"
          ]
        },
        {
          "resolvedTypeReferenceDirective": {
            "resolvedFileName": "./node_modules/pkg2/import.d.ts",
            "packageId": {
              "name": "pkg2",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            },
            "isExternalLibraryImport": true
          },
          "failedLookupLocations": [
            "./node_modules/@types/pkg2/package.json"
          ],
          "affectingLocations": [
            "./node_modules/pkg2/package.json"
          ]
        },
        {
          "resolvedTypeReferenceDirective": {
            "resolvedFileName": "./node_modules/pkg3/require.d.ts",
            "packageId": {
              "name": "pkg3",
              "subModuleName": "require.d.ts",
              "version": "0.0.1"
            },
            "isExternalLibraryImport": true
          },
          "failedLookupLocations": [
            "./node_modules/@types/pkg3/package.json",
            "./node_modules/@types/pkg3/index.d.ts"
          ],
          "affectingLocations": [
            "./node_modules/pkg3/package.json"
          ]
        },
        {
          "resolvedTypeReferenceDirective": {
            "primary": true,
            "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
            "isExternalLibraryImport": true
          },
          "failedLookupLocations": [
            "./node_modules/@types/pkg4/package.json"
          ]
        }
      ],
      "names": [
        "pkg0",
        "pkg1",
        "pkg2",
        "pkg3",
        "pkg4"
      ],
      "resolutionEntries": [
        [
          "pkg0",
          {
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/import.d.ts",
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg0",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              }
            },
            "failedLookupLocations": [
              "./node_modules/pkg0/import.ts",
              "./node_modules/pkg0/import.tsx"
            ],
            "affectingLocations": [
              "./node_modules/pkg0/package.json"
            ]
          },
          "esnext"
        ],
        [
          "pkg1",
          {
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg1/require.d.ts",
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg1",
                "subModuleName": "require.d.ts",
                "version": "0.0.1"
              }
            },
            "failedLookupLocations": [
              "./node_modules/pkg1/require.ts",
              "./node_modules/pkg1/require.tsx"
            ],
            "affectingLocations": [
              "./node_modules/pkg1/package.json"
            ]
          },
          "commonjs"
        ],
        [
          "pkg2",
          {
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": "./node_modules/pkg2/import.d.ts",
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              "./node_modules/@types/pkg2/package.json"
            ],
            "affectingLocations": [
              "./node_modules/pkg2/package.json"
            ]
          },
          "esnext"
        ],
        [
          "pkg3",
          {
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": "./node_modules/pkg3/require.d.ts",
              "packageId": {
                "name": "pkg3",
                "subModuleName": "require.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              "./node_modules/@types/pkg3/package.json",
              "./node_modules/@types/pkg3/index.d.ts"
            ],
            "affectingLocations": [
              "./node_modules/pkg3/package.json"
            ]
          },
          "commonjs"
        ],
        [
          "pkg4",
          {
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              "./node_modules/@types/pkg4/package.json"
            ]
          }
        ]
      ],
      "modules": [
        [
          "./",
          [
            [
              "pkg0",
              {
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/import.d.ts",
                  "isExternalLibraryImport": true,
                  "packageId": {
                    "name": "pkg0",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  }
                },
                "failedLookupLocations": [
                  "./node_modules/pkg0/import.ts",
                  "./node_modules/pkg0/import.tsx"
                ],
                "affectingLocations": [
                  "./node_modules/pkg0/package.json"
                ]
              },
              "esnext"
            ],
            [
              "pkg1",
              {
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg1/require.d.ts",
                  "isExternalLibraryImport": true,
                  "packageId": {
                    "name": "pkg1",
                    "subModuleName": "require.d.ts",
                    "version": "0.0.1"
                  }
                },
                "failedLookupLocations": [
                  "./node_modules/pkg1/require.ts",
                  "./node_modules/pkg1/require.tsx"
                ],
                "affectingLocations": [
                  "./node_modules/pkg1/package.json"
                ]
              },
              "commonjs"
            ]
          ]
        ]
      ],
      "typeRefs": [
        [
          "./",
          [
            [
              "pkg2",
              {
                "resolvedTypeReferenceDirective": {
                  "resolvedFileName": "./node_modules/pkg2/import.d.ts",
                  "packageId": {
                    "name": "pkg2",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  },
                  "isExternalLibraryImport": true
                },
                "failedLookupLocations": [
                  "./node_modules/@types/pkg2/package.json"
                ],
                "affectingLocations": [
                  "./node_modules/pkg2/package.json"
                ]
              },
              "esnext"
            ],
            [
              "pkg3",
              {
                "resolvedTypeReferenceDirective": {
                  "resolvedFileName": "./node_modules/pkg3/require.d.ts",
                  "packageId": {
                    "name": "pkg3",
                    "subModuleName": "require.d.ts",
                    "version": "0.0.1"
                  },
                  "isExternalLibraryImport": true
                },
                "failedLookupLocations": [
                  "./node_modules/@types/pkg3/package.json",
                  "./node_modules/@types/pkg3/index.d.ts"
                ],
                "affectingLocations": [
                  "./node_modules/pkg3/package.json"
                ]
              },
              "commonjs"
            ],
            [
              "pkg4",
              {
                "resolvedTypeReferenceDirective": {
                  "primary": true,
                  "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
                  "isExternalLibraryImport": true
                },
                "failedLookupLocations": [
                  "./node_modules/@types/pkg4/package.json"
                ]
              }
            ]
          ]
        ]
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 4243
}

