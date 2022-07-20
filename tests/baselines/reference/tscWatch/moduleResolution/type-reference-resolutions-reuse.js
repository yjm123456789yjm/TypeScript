Input::
//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"moduleResolution":"node16"}}

//// [/user/username/projects/myproject/index.ts]
/// <reference types="pkg" resolution-mode="import"/>
/// <reference types="pkg1" resolution-mode="require"/>
export interface LocalInterface extends RequireInterface {}


//// [/user/username/projects/myproject/a.ts]
export const x = 10;


//// [/user/username/projects/myproject/node_modules/pkg/package.json]
{"name":"pkg","version":"0.0.1","exports":{"import":"./import.js","require":"./require.js"}}

//// [/user/username/projects/myproject/node_modules/pkg/import.d.ts]
export {};
declare global {
    interface ImportInterface {}
}


//// [/user/username/projects/myproject/node_modules/pkg/require.d.ts]
export {};
declare global {
    interface RequireInterface {}
}


//// [/user/username/projects/myproject/node_modules/pkg1/package.json]
{"name":"pkg1","version":"0.0.1","exports":{"import":"./import.js","require":"./require.js"}}

//// [/user/username/projects/myproject/node_modules/pkg1/import.d.ts]
export {};
declare global {
    interface ImportInterface {}
}


//// [/user/username/projects/myproject/node_modules/@types/pkg2/index.d.ts]
export const x = 10;

//// [/a/lib/lib.d.ts]
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


/a/lib/tsc.js -w --traceResolution
Output::
>> Screen clear
[[90m12:00:45 AM[0m] Starting compilation in watch mode...

File '/user/username/projects/myproject/package.json' does not exist.
File '/user/username/projects/package.json' does not exist.
File '/user/username/package.json' does not exist.
File '/user/package.json' does not exist.
File '/package.json' does not exist.
File '/user/username/projects/myproject/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/package.json' does not exist according to earlier cached lookups.
File '/user/username/package.json' does not exist according to earlier cached lookups.
File '/user/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
======== Resolving type reference directive 'pkg', containing file '/user/username/projects/myproject/index.ts', root directory '/user/username/projects/myproject/node_modules/@types'. ========
Resolving with primary search path '/user/username/projects/myproject/node_modules/@types'.
Looking up in 'node_modules' folder, initial location '/user/username/projects/myproject'.
Found 'package.json' at '/user/username/projects/myproject/node_modules/pkg/package.json'.
'package.json' does not have a 'typesVersions' field.
File name '/user/username/projects/myproject/node_modules/pkg/import.js' has a '.js' extension - stripping it.
File '/user/username/projects/myproject/node_modules/pkg/import.d.ts' exist - use it as a name resolution result.
Resolving real path for '/user/username/projects/myproject/node_modules/pkg/import.d.ts', result '/user/username/projects/myproject/node_modules/pkg/import.d.ts'.
======== Type reference directive 'pkg' was successfully resolved to '/user/username/projects/myproject/node_modules/pkg/import.d.ts' with Package ID 'pkg/import.d.ts@0.0.1', primary: false. ========
======== Resolving type reference directive 'pkg1', containing file '/user/username/projects/myproject/index.ts', root directory '/user/username/projects/myproject/node_modules/@types'. ========
Resolving with primary search path '/user/username/projects/myproject/node_modules/@types'.
Looking up in 'node_modules' folder, initial location '/user/username/projects/myproject'.
Found 'package.json' at '/user/username/projects/myproject/node_modules/pkg1/package.json'.
'package.json' does not have a 'typesVersions' field.
File name '/user/username/projects/myproject/node_modules/pkg1/require.js' has a '.js' extension - stripping it.
File '/user/username/projects/myproject/node_modules/pkg1/require.d.ts' does not exist.
File '/user/username/projects/myproject/node_modules/@types/pkg1.d.ts' does not exist.
Directory '/user/username/projects/node_modules' does not exist, skipping all lookups in it.
Directory '/user/username/node_modules' does not exist, skipping all lookups in it.
Directory '/user/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Type reference directive 'pkg1' was not resolved. ========
File '/user/username/projects/myproject/node_modules/pkg/package.json' exists according to earlier cached lookups.
======== Resolving type reference directive 'pkg2', containing file '/user/username/projects/myproject/__inferred type names__.ts', root directory '/user/username/projects/myproject/node_modules/@types'. ========
Resolving with primary search path '/user/username/projects/myproject/node_modules/@types'.
File '/user/username/projects/myproject/node_modules/@types/pkg2/package.json' does not exist.
File '/user/username/projects/myproject/node_modules/@types/pkg2/index.d.ts' exist - use it as a name resolution result.
Resolving real path for '/user/username/projects/myproject/node_modules/@types/pkg2/index.d.ts', result '/user/username/projects/myproject/node_modules/@types/pkg2/index.d.ts'.
======== Type reference directive 'pkg2' was successfully resolved to '/user/username/projects/myproject/node_modules/@types/pkg2/index.d.ts', primary: true. ========
File '/user/username/projects/myproject/node_modules/@types/pkg2/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/node_modules/@types/package.json' does not exist.
File '/user/username/projects/myproject/node_modules/package.json' does not exist.
File '/user/username/projects/myproject/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/package.json' does not exist according to earlier cached lookups.
File '/user/username/package.json' does not exist according to earlier cached lookups.
File '/user/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/a/lib/package.json' does not exist.
File '/a/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
[96mindex.ts[0m:[93m2[0m:[93m23[0m - [91merror[0m[90m TS2688: [0mCannot find type definition file for 'pkg1'.

[7m2[0m /// <reference types="pkg1" resolution-mode="require"/>
[7m [0m [91m                      ~~~~[0m

[96mindex.ts[0m:[93m3[0m:[93m41[0m - [91merror[0m[90m TS2304: [0mCannot find name 'RequireInterface'.

[7m3[0m export interface LocalInterface extends RequireInterface {}
[7m [0m [91m                                        ~~~~~~~~~~~~~~~~[0m

[[90m12:00:50 AM[0m] Found 2 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/index.ts"]
Program options: {"moduleResolution":3,"watch":true,"traceResolution":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/node_modules/pkg/import.d.ts
/user/username/projects/myproject/index.ts
/user/username/projects/myproject/node_modules/@types/pkg2/index.d.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/node_modules/pkg/import.d.ts
/user/username/projects/myproject/index.ts
/user/username/projects/myproject/node_modules/@types/pkg2/index.d.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/a.ts (used version)
/user/username/projects/myproject/node_modules/pkg/import.d.ts (used version)
/user/username/projects/myproject/index.ts (used version)
/user/username/projects/myproject/node_modules/@types/pkg2/index.d.ts (used version)

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/a.ts:
  {"fileName":"/user/username/projects/myproject/a.ts","pollingInterval":250}
/user/username/projects/myproject/index.ts:
  {"fileName":"/user/username/projects/myproject/index.ts","pollingInterval":250}
/user/username/projects/myproject/node_modules/pkg/import.d.ts:
  {"fileName":"/user/username/projects/myproject/node_modules/pkg/import.d.ts","pollingInterval":250}
/user/username/projects/myproject/node_modules/@types/pkg2/index.d.ts:
  {"fileName":"/user/username/projects/myproject/node_modules/@types/pkg2/index.d.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/myproject/node_modules/pkg/package.json:
  {"fileName":"/user/username/projects/myproject/node_modules/pkg/package.json","pollingInterval":250}
/user/username/projects/myproject/node_modules/pkg1/package.json:
  {"fileName":"/user/username/projects/myproject/node_modules/pkg1/package.json","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/node_modules:
  {"directoryName":"/user/username/projects/myproject/node_modules"}
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types"}
/user/username/projects/myproject:
  {"directoryName":"/user/username/projects/myproject"}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js]
"use strict";
exports.__esModule = true;
exports.x = void 0;
exports.x = 10;


//// [/user/username/projects/myproject/index.js]
"use strict";
exports.__esModule = true;
/// <reference types="pkg" resolution-mode="import"/>
/// <reference types="pkg1" resolution-mode="require"/>



Change:: modify aFile by adding import

Input::
//// [/user/username/projects/myproject/a.ts]
/// <reference types="pkg" resolution-mode="import"/>
export const x = 10;



Output::
>> Screen clear
[[90m12:00:53 AM[0m] File change detected. Starting incremental compilation...

File '/a/lib/package.json' does not exist.
File '/a/package.json' does not exist.
File '/package.json' does not exist.
File '/user/username/projects/myproject/package.json' does not exist.
File '/user/username/projects/package.json' does not exist.
File '/user/username/package.json' does not exist.
File '/user/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
Found 'package.json' at '/user/username/projects/myproject/node_modules/pkg/package.json'.
'package.json' does not have a 'typesVersions' field.
File '/user/username/projects/myproject/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/package.json' does not exist according to earlier cached lookups.
File '/user/username/package.json' does not exist according to earlier cached lookups.
File '/user/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/node_modules/@types/pkg2/package.json' does not exist.
File '/user/username/projects/myproject/node_modules/@types/package.json' does not exist.
File '/user/username/projects/myproject/node_modules/package.json' does not exist.
File '/user/username/projects/myproject/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/package.json' does not exist according to earlier cached lookups.
File '/user/username/package.json' does not exist according to earlier cached lookups.
File '/user/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/package.json' does not exist according to earlier cached lookups.
File '/user/username/package.json' does not exist according to earlier cached lookups.
File '/user/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
======== Resolving type reference directive 'pkg', containing file '/user/username/projects/myproject/a.ts', root directory '/user/username/projects/myproject/node_modules/@types'. ========
Resolving with primary search path '/user/username/projects/myproject/node_modules/@types'.
Looking up in 'node_modules' folder, initial location '/user/username/projects/myproject'.
File '/user/username/projects/myproject/node_modules/pkg/package.json' exists according to earlier cached lookups.
File name '/user/username/projects/myproject/node_modules/pkg/import.js' has a '.js' extension - stripping it.
File '/user/username/projects/myproject/node_modules/pkg/import.d.ts' exist - use it as a name resolution result.
Resolving real path for '/user/username/projects/myproject/node_modules/pkg/import.d.ts', result '/user/username/projects/myproject/node_modules/pkg/import.d.ts'.
======== Type reference directive 'pkg' was successfully resolved to '/user/username/projects/myproject/node_modules/pkg/import.d.ts' with Package ID 'pkg/import.d.ts@0.0.1', primary: false. ========
File '/user/username/projects/myproject/node_modules/pkg/package.json' exists according to earlier cached lookups.
File '/user/username/projects/myproject/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/package.json' does not exist according to earlier cached lookups.
File '/user/username/package.json' does not exist according to earlier cached lookups.
File '/user/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg' from '/user/username/projects/myproject/index.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/node_modules/pkg/import.d.ts' with Package ID 'pkg/import.d.ts@0.0.1'.
Reusing resolution of type reference directive 'pkg1' from '/user/username/projects/myproject/index.ts' of old program, it was not resolved.
Reusing resolution of type reference directive 'pkg2' from '/user/username/projects/myproject/__inferred type names__.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/node_modules/@types/pkg2/index.d.ts'.
File '/user/username/projects/myproject/node_modules/@types/pkg2/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/node_modules/@types/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/node_modules/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/package.json' does not exist according to earlier cached lookups.
File '/user/username/package.json' does not exist according to earlier cached lookups.
File '/user/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
[96mindex.ts[0m:[93m2[0m:[93m23[0m - [91merror[0m[90m TS2688: [0mCannot find type definition file for 'pkg1'.

[7m2[0m /// <reference types="pkg1" resolution-mode="require"/>
[7m [0m [91m                      ~~~~[0m

[96mindex.ts[0m:[93m3[0m:[93m41[0m - [91merror[0m[90m TS2304: [0mCannot find name 'RequireInterface'.

[7m3[0m export interface LocalInterface extends RequireInterface {}
[7m [0m [91m                                        ~~~~~~~~~~~~~~~~[0m

[[90m12:00:57 AM[0m] Found 2 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/index.ts"]
Program options: {"moduleResolution":3,"watch":true,"traceResolution":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/node_modules/pkg/import.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/index.ts
/user/username/projects/myproject/node_modules/@types/pkg2/index.d.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/a.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/a.ts (computed .d.ts)

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/a.ts:
  {"fileName":"/user/username/projects/myproject/a.ts","pollingInterval":250}
/user/username/projects/myproject/index.ts:
  {"fileName":"/user/username/projects/myproject/index.ts","pollingInterval":250}
/user/username/projects/myproject/node_modules/pkg/import.d.ts:
  {"fileName":"/user/username/projects/myproject/node_modules/pkg/import.d.ts","pollingInterval":250}
/user/username/projects/myproject/node_modules/@types/pkg2/index.d.ts:
  {"fileName":"/user/username/projects/myproject/node_modules/@types/pkg2/index.d.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/myproject/node_modules/pkg/package.json:
  {"fileName":"/user/username/projects/myproject/node_modules/pkg/package.json","pollingInterval":250}
/user/username/projects/myproject/node_modules/pkg1/package.json:
  {"fileName":"/user/username/projects/myproject/node_modules/pkg1/package.json","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/node_modules:
  {"directoryName":"/user/username/projects/myproject/node_modules"}
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types"}
/user/username/projects/myproject:
  {"directoryName":"/user/username/projects/myproject"}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js]
"use strict";
exports.__esModule = true;
exports.x = void 0;
/// <reference types="pkg" resolution-mode="import"/>
exports.x = 10;


