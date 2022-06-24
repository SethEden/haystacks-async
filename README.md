# Haystacks-Async
A basic NodeJS framework that can be easily re-used and forked to make many different kinds of apps written with ES6 syntax. The testHarness provides an example template application for how to use the framework. There is an example architecture with coding patterns you can follow to build out your own enterprise scale business automation applications.

# Purpose
The purpose of this repository is to provide a command-line utility to do whatever it is that you need to automate. It's a general purpose automation development platform.

# Run Locally
Pre-requisites
Install NPM - NODE Package Manager
Install GIT or Git-for-Windows

Open your favorite CLI/Powershell/BASH/CMD tool.
Navigate to your favorite projects folder.
Enter the command:
  git clone https://github.com/SethEden/haystacks-async.git

Navigate into the haystacks folder.
Enter the command:
  npm install

You can run the command by starting from the development environment by using NPM.
Enter the command:
  npm run test

This will launch the testHarness application from the development environment.

# Useful stuff you can do
I will assume you are still running in the argumentDrivenInterface value="False" mode for this tutorial.
This mode can be enabled in the configuration file to enable processing of command-line arguments as input to drive actions processing without user interaction.
Once you enter the command:
  npm run test


The application will display the application name, version number and application description:

```
> haystacks-async@0.1.0 test
> node ./test/testHarness/src/testHarness.js

BEGIN testHarness.application Function
.___________. _______     _______.___________. __    __       ___      .______      .__   __.  _______     _______.     _______.
|           ||   ____|   /       |           ||  |  |  |     /   \     |   _  \     |  \ |  | |   ____|   /       |    /       |
`---|  |----`|  |__     |   (----`---|  |----`|  |__|  |    /  ^  \    |  |_)  |    |   \|  | |  |__     |   (----`   |   (----`
    |  |     |   __|     \   \       |  |     |   __   |   /  /_\  \   |      /     |  . `  | |   __|     \   \        \   \
    |  |     |  |____.----)   |      |  |     |  |  |  |  /  _____  \  |  |\  \----.|  |\   | |  |____.----)   |   .----)   |
    |__|     |_______|_______/       |__|     |__|  |__| /__/     \__\ | _| `._____||__| \__| |_______|_______/    |_______/

0.0.1
A test harness application to test the haystacks framework.
BEGIN main program loop
BEGIN command parser
>
```

The application is now running and awaiting input via an interactive command prompt that will process commands entered in a program loop.
If you are not sure what you can do, you can type the command: ? and press enter.
You should see a table of commands:
```
>?
┌────────────────────────────┬──────────────────────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│          (index)           │             Name             │                                                          Description                                                          │
├────────────────────────────┼──────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│        echoCommand         │        'echoCommand'         │                                        'Echos back whatever is input to the command.'                                         │
│            exit            │            'exit'            │                                              'Exit the application completely.'                                               │
│          version           │          'version'           │                                      'Displays the current version of the application.'                                       │
│           about            │           'about'            │                                   'Displays the about message for the current application.'                                   │
│            name            │            'name'            │                                'Displays a message with the name of the current application.'                                 │
│        clearScreen         │        'clearScreen'         │         'Clears the screen of any extra data by pushing lots of empty strings past the cache of the console system.'          │
│            help            │            'help'            │                                    'Displays all of the commands names and descriptions.'                                     │
│        workflowHelp        │        'workflowHelp'        │                                        'Displays all the workflows, names and values.'                                        │
│      commandSequencer      │      'commandSequencer'      │                         'Takes a sequence of commands/aliases and enqueues all to the command queue.'                         │
│          workflow          │          'workflow'          │                  'Loads the specified workflow, calls the command sequencer to get each commands enqueued.'                   │
│       printDataHive        │       'printDataHive'        │ 'Prints the specified data hive (CommandWorkflows, CommandsAliases, Colors, Configuration, or root) in the D-data structure.' │
│  printDataHiveAttributes   │  'printDataHiveAttributes'   │             'Prints out all the specified attributes contained in a data set in the application data structure.'              │
│      clearDataStorage      │      'clearDataStorage'      │                       'Clears a sub-data hive or the entire Data Storage hive in the D-data structure.'                       │
│        businessRule        │        'businessRule'        │                               'Executes a user specified business rule and prints the results.'                               │
│      commandGenerator      │      'commandGenerator'      │                           'Generates and enqueues any number of command calls based on user input.'                           │
│   commandAliasGenerator    │   'commandAliasGenerator'    │                       'Generates command aliases given a command name and a list of word abbreviations.'                       │
│     constantsGenerator     │     'constantsGenerator'     │                     'Determines the most optimized way to define a new constant in the constants system.'                     │
│   constantsGeneratorList   │   'constantsGeneratorList'   │                                'Generates optimized constants from an input list of strings.'                                 │
│ constantsPatternRecognizer │ 'constantsPatternRecognizer' │                            'Finds common sub-string patterns in a coma separated list of strings.'                            │
│    businessRulesMetrics    │    'businessRulesMetrics'    │                     'Computes statistics on business rule performance metrics and displays the results.'                      │
│       commandMetrics       │       'commandMetrics'       │                        'Computes statistics on command performance metrics and displays the results.'                         │
│     saveConfiguration      │     'saveConfiguration'      │                                       'Saves all of the configuration data out to disk'                                       │
│       convertColors        │       'convertColors'        │                         'Converts all the colors in the color library from hex values to RGB values.'                         │
│     validateConstants      │     'validateConstants'      │                                'Validates all constants with a 2-phase verification process.'                                 │
│   validateCommandAliases   │   'validateCommandAliases'   │                                        'Validates all command aliases for duplicates.'                                        │
│     customEchoCommand      │     'customEchoCommand'      │                    'A client defined custom Echo command that echos back the input plus something extra.'                     │
│         bossPanic          │         'bossPanic'          │                          'Print a bunch of text on the screen so it looks like the computer is busy'                          │
│        placeHolder         │        'placeHolder'         │                                   'Description of the command, this is just a placeHolder.'                                   │
└────────────────────────────┴──────────────────────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
>
```

One thing you can do is type: workflow? and press enter.
This will display a list of al the workflows the application supports:
```
>workflow?
┌──────────────────────────────────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────┐
│                               (index)                                │                                  Name                                  │
├──────────────────────────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────┤
│                               startup                                │                               'startup'                                │
│                               details                                │                               'details'                                │
│                          applicationDetails                          │                          'applicationDetails'                          │
│                           frameworkDetails                           │                           'frameworkDetails'                           │
│                           stringToBoolean                            │                           'stringToBoolean'                            │
│                           stringToDataType                           │                           'stringToDataType'                           │
│                       determineObjectDataType                        │                       'determineObjectDataType'                        │
│                              isBoolean                               │                              'isBoolean'                               │
│                              isInteger                               │                              'isInteger'                               │
│                               isFloat                                │                               'isFloat'                                │
│                               isString                               │                               'isString'                               │
│                      singleQuoteSwapAfterEquals                      │                      'singleQuoteSwapAfterEquals'                      │
│                     swapForwardSlashToBackSlash                      │                     'swapForwardSlashToBackSlash'                      │
│                     swapBackSlashToForwardSlash                      │                     'swapBackSlashToForwardSlash'                      │
│              swapDoubleForwardSlashToSingleForwardSlash              │              'swapDoubleForwardSlashToSingleForwardSlash'              │
│                 swapDoubleBackSlashToSingleBackSlash                 │                 'swapDoubleBackSlashToSingleBackSlash'                 │
│                         getUserNameFromEmail                         │                         'getUserNameFromEmail'                         │
│                        replaceSpacesWithPlus                         │                        'replaceSpacesWithPlus'                         │
│                      replaceColonWithUnderscore                      │                      'replaceColonWithUnderscore'                      │
│                    replaceCharacterWithCharacter                     │                    'replaceCharacterWithCharacter'                     │
│                    cleanCarriageReturnFromString                     │                    'cleanCarriageReturnFromString'                     │
│                       convertStringToLowerCase                       │                       'convertStringToLowerCase'                       │
│                       convertStringToUpperCase                       │                       'convertStringToUpperCase'                       │
│                         getFileNameFromPath                          │                         'getFileNameFromPath'                          │
│                           getFileExtension                           │                           'getFileExtension'                           │
│                      removeDotFromFileExtension                      │                      'removeDotFromFileExtension'                      │
│                   removeFileExtensionFromFileName                    │                   'removeFileExtensionFromFileName'                    │
│            aggregateNumericalDifferenceBetweenTwoStrings             │            'aggregateNumericalDifferenceBetweenTwoStrings'             │
│                    convertCamelCaseStringToArray                     │                    'convertCamelCaseStringToArray'                     │
│                    convertArrayToCamelCaseString                     │                    'convertArrayToCamelCaseString'                     │
│                        mapWordToCamelCaseWord                        │                        'mapWordToCamelCaseWord'                        │
│                     simplifyAndConsolidateString                     │                     'simplifyAndConsolidateString'                     │
│               compareSimplifiedAndConsolidatedStrings                │               'compareSimplifiedAndConsolidatedStrings'                │
│             doesArrayContainLowerCaseConsolidatedString              │             'doesArrayContainLowerCaseConsolidatedString'              │
│                      doesArrayContainCharacter                       │                      'doesArrayContainCharacter'                       │
│                       removeCharacterFromArray                       │                       'removeCharacterFromArray'                       │
│                      ascertainMatchingFilenames                      │                      'ascertainMatchingFilenames'                      │
│                       doesArrayContainFilename                       │                       'doesArrayContainFilename'                       │
│                  getDataCatagoryFromDataContextName                  │                  'getDataCatagoryFromDataContextName'                  │
│             getDataCatagoryDetailNameFromDataContextName             │             'getDataCatagoryDetailNameFromDataContextName'             │
│                  getKeywordNameFromDataContextName                   │                  'getKeywordNameFromDataContextName'                   │
│                         parseSystemRootPath                          │                         'parseSystemRootPath'                          │
│                   replaceDoublePercentWithMessage                    │                   'replaceDoublePercentWithMessage'                    │
│                 removeXnumberOfFoldersFromEndOfPath                  │                 'removeXnumberOfFoldersFromEndOfPath'                  │
│                    getFirstTopLevelFolderFromPath                    │                    'getFirstTopLevelFolderFromPath'                    │
│                                isOdd                                 │                                'isOdd'                                 │
│                                isEven                                │                                'isEven'                                │
│                       replaceCharacterAtIndex                        │                       'replaceCharacterAtIndex'                        │
│                            stringParsing                             │                            'stringParsing'                             │
│          randomlyGenerateMixedCaseLetterOrSpecialCharacter           │          'randomlyGenerateMixedCaseLetterOrSpecialCharacter'           │
│          randomlyGenerateUpperCaseLetterOrSpecialCharacter           │          'randomlyGenerateUpperCaseLetterOrSpecialCharacter'           │
│          randomlyGenerateLowerCaseLetterOrSpecialCharacter           │          'randomlyGenerateLowerCaseLetterOrSpecialCharacter'           │
│   randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter    │   'randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter'    │
│   randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter    │   'randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter'    │
│   randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter    │   'randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter'    │
│            randomlyGenerateMixedCaseAlphaNumericCharacter            │            'randomlyGenerateMixedCaseAlphaNumericCharacter'            │
│            randomlyGenerateUpperCaseAlphaNumericCharacter            │            'randomlyGenerateUpperCaseAlphaNumericCharacter'            │
│            randomlyGenerateLowerCaseAlphaNumericCharacter            │            'randomlyGenerateLowerCaseAlphaNumericCharacter'            │
│                   randomlyGenerateNumericCharacter                   │                   'randomlyGenerateNumericCharacter'                   │
│                   randomlyGenerateSpecialCharacter                   │                   'randomlyGenerateSpecialCharacter'                   │
│                    randomlyGenerateNumberInRange                     │                    'randomlyGenerateNumberInRange'                     │
│                     randomlyGenerateBooleanValue                     │                     'randomlyGenerateBooleanValue'                     │
│             randomlyGenerateMixedCaseAlphabeticCharacter             │             'randomlyGenerateMixedCaseAlphabeticCharacter'             │
│                   randomlyGenerateUpperCaseLetter                    │                   'randomlyGenerateUpperCaseLetter'                    │
│                   randomlyGenerateLowerCaseLetter                    │                   'randomlyGenerateLowerCaseLetter'                    │
│                    convertNumberToUpperCaseLetter                    │                    'convertNumberToUpperCaseLetter'                    │
│                    convertNumberToLowerCaseLetter                    │                    'convertNumberToLowerCaseLetter'                    │
│                         characterGeneration                          │                         'characterGeneration'                          │
│                 generateRandomMixedCaseTextByLength                  │                 'generateRandomMixedCaseTextByLength'                  │
│                 generateRandomUpperCaseTextByLength                  │                 'generateRandomUpperCaseTextByLength'                  │
│                 generateRandomLowerCaseTextByLength                  │                 'generateRandomLowerCaseTextByLength'                  │
│       generateRandomMixedCaseTextWithSpecialCharactersByLength       │       'generateRandomMixedCaseTextWithSpecialCharactersByLength'       │
│       generateRandomUpperCaseTextWithSpecialCharactersByLength       │       'generateRandomUpperCaseTextWithSpecialCharactersByLength'       │
│       generateRandomLowerCaseTextWithSpecialCharactersByLength       │       'generateRandomLowerCaseTextWithSpecialCharactersByLength'       │
│           generateRandomMixedCaseAlphaNumericCodeByLength            │           'generateRandomMixedCaseAlphaNumericCodeByLength'            │
│           generateRandomUpperCaseAlphaNumericCodeByLength            │           'generateRandomUpperCaseAlphaNumericCodeByLength'            │
│           generateRandomLowerCaseAlphaNumericCodeByLength            │           'generateRandomLowerCaseAlphaNumericCodeByLength'            │
│                  generateRandomNumericCodeByLength                   │                  'generateRandomNumericCodeByLength'                   │
│ generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength │ 'generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength' │
│ generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength │ 'generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength' │
│ generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength │ 'generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength' │
│              generateRandomSpecialCharacterCodeByLength              │              'generateRandomSpecialCharacterCodeByLength'              │
│                         generateValidEmaila                          │                         'generateValidEmaila'                          │
│                        generateInvalidEmaila                         │                        'generateInvalidEmaila'                         │
│                         generateValidEmailb                          │                         'generateValidEmailb'                          │
│                        generateInvalidEmailb                         │                        'generateInvalidEmailb'                         │
│                           stringGeneration                           │                           'stringGeneration'                           │
│              stringParsingCharacterAndStringGeneration               │              'stringParsingCharacterAndStringGeneration'               │
│                         businessRulesMetrics                         │                         'businessRulesMetrics'                         │
│                            commandMetrics                            │                            'commandMetrics'                            │
│                          hex2rgbConversion                           │                          'hex2rgbConversion'                           │
│                              workflow1                               │                              'workflow1'                               │
│                              workflow2                               │                              'workflow2'                               │
│                          bossPanicWorkflow1                          │                          'bossPanicWorkflow1'                          │
│                          bossPanicWorkflow2                          │                          'bossPanicWorkflow2'                          │
│                          bossPanicWorkflow3                          │                          'bossPanicWorkflow3'                          │
│                          bossPanicWorkflow4                          │                          'bossPanicWorkflow4'                          │
│                          bossPanicWorkflow5                          │                          'bossPanicWorkflow5'                          │
│                          bossPanicWorkflow6                          │                          'bossPanicWorkflow6'                          │
│                          mostPopularNumber                           │                          'mostPopularNumber'                           │
│                          isAlmostPalindrome                          │                          'isAlmostPalindrome'                          │
│                          threePointAverage                           │                          'threePointAverage'                           │
│                             arrayCounter                             │                             'arrayCounter'                             │
│                        allClientBusinessRules                        │                        'allClientBusinessRules'                        │
│                  allClientAndFrameworkBusinessRules                  │                  'allClientAndFrameworkBusinessRules'                  │
└──────────────────────────────────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────┘
>
```

You can run any of these workflows simply by typing the command:
workflow <Workflow-Name> and press enter.
I recommend the following command:
  workflow allClientAndFrameworkBusinessRules

This will run all of the client defined business rules and all of the framework defined business rules sequentially.
Client defined business rules can be found in the path:
./test/testHarness/src/businessRules/clientRules/*.js

Framework defined business rules can be found in the path:
./src/businessRules/rules/*.js

All of these business rules are merged at runtime as a function of how the haystacks framework is implemented at the architectural level.

The output should look something like this (abbreviated because the output is very long!)
```
>workflow allClientAndFrameworkBusinessRules
Rule output is: "2"
Rule output is: true
Rule output is: [2,2]
Rule output is: 2
Rule output is: true
Rule output is: true
Rule output is: true
Rule output is: true
Rule output is: 1
Rule output is: 1
Rule output is: 1
Rule output is: 1
Rule output is: "String"
Rule output is: "String"
Rule output is: "String"
Rule output is: "String"
Rule output is: false
Rule output is: false
Rule output is: false
Rule output is: false
Rule output is: true
Rule output is: true
Rule output is: true
Rule output is: true
Rule output is: true
Rule output is: true
Rule output is: true
Rule output is: true
Rule output is: false
Rule output is: false
Rule output is: false
Rule output is: false
Rule output is: "input[name=\"emailAddress\"][class=\"username\"]"
Rule output is: "input[name=\"emailAddress\"][class=\"username\"]"
Rule output is: "input[name=\"emailAddress\"][class=\"username\"]"
Rule output is: "input[name=\"emailAddress\"][class=\"username\"]"
Rule output is: "C:\\"
...
Rule output is: "abcorp3.com"
Rule output is: "Eml_YwG2*a+aVw$50r7^^UsR6yu)Y7HpYa=UVNtun+XK9XZRAhl-fykl^ihim=R=nv(DbCXhaQxOS#nNyLBwb-phabcorp3.com"
Rule output is: "abcorp3.com"
Rule output is: "abcorp3.com"
Rule output is: "b4ZPKRMUzs3Wo9gA2iCeVZxfvTVkQrA0PSRVrEnRLAgDmEI@CnLYKFocPFq3joEJqo2Q9HetCStfbGeE40sVU2XXdbgdQz.ZjI"
Rule output is: "KKGoTMUYQM8Jy2FL16QEfBZ8dFxf0E4ttObgDEMEEsyDSEkS@Im6jtitvIC4iQwVAo6I6z6Hmz5m8EHxjmhxOBV8Hsvznuh4Q.mN"
Rule output is: "eZqPmQNRN9FpbtgOfCsykHetiAnHpK0a32uRij62n0WbXJLA@5haQe1mhm1v0GKEBHjIa322V1hiTpUUjoJKoZeF5EaDUMMqm.Bt"
Rule output is: "oC1Y1AdEjH56oTugU7Pc7LbeMiuDCLspYf1SDmdR7NkTLCLX@miuGeYmSda9BEQohU1gbMhy6PgAEFq8GbmMhgssLtRVxDCWt.tV"
Rule output is: "A3v0VDaksZCptpL7NNnhfKIyEuD6vJ6RtiT0pAroTqAEtnL@o5tF40S8Q8KAvQOtDkYm1ZM6anYCfDwr4KR2ctREAtEnsf.fIM"
Rule output is: "szFhjHqAPyG3c8u3Rn8E3QED9Evl8w6Ux5J86OOctDWqeHh@M4rCfplM1kUYmEnnNGyFsqtp1sdyNciROZuEDTpXd9p6P7.ymY"
Rule output is: "ezY008VBlh07p1tlREqha4lmEbdbhHNfTwZCEmBlEEnIrpgm@Z8YXmxdpqcOfNezcxLwHi7zmF4iEDBPxHRqT8QSxYcm5j5pX.JC"
Rule output is: "L7wo8luWcIvlpayptIa9gsI8uHFK8RwCNdtQE58L4D57ALs@8pLuwaDEp67vDK3mRP99yNyOkWRgI66jDtpRqE6OtwqWRR.NDk"
Rule output is: "zok3kaFcbeaITvmE23FNhe7vpdMpCIa1dIAjN1pOmkXzExNW@Ed7gPeWh5bVIAQswGlZs3pa7B6v17rtkhtCrUywmWMptWSmZ.el"
Rule output is: "TJUiCQ4ZKmJ3arNd4WykFIie76zsmtJEBwSyR9cGoSiBEZ1s@5uyWNGewJUNenJJy78Sgptyo45wNyeFEBRw0pHfdyoztfLiQ.bg"
Rule output is: "@UJz"
Rule output is: "lx"
Rule output is: "@.mx"
Rule output is: "9QqwojbJAYsMaK41NFHAKkyjUcTXS5ON1inj1P8o4CLl0wzPvMwSZhPnyVAYVUwJzAE2m2dYuBuannW9qnsXmJuMsvdB6c9e2ZC@."
Rule output is: "gb9PCgtdZp46AwHwV9KaHVw6tkpi7HmjwVfOCdYLm7o1E3nDZFQ8BXxJeNtYrZCd5I55BPBzy3YTeksFR22gDWcbNPdzKf5h9E4E@."
Rule output is: ".hH"
Rule output is: ".sO"
Rule output is: "@.yyi"
Rule output is: "."
Rule output is: "LyH"
>
```

Now that all the business rules have been run sequentially you can run this command to compute statistical analysis on the performance data gathered on the execution of these business rules.
  businessRulesMetrics

This will compute and then display the performance statistics from the workflow you just performed:
```
>businessRulesMetrics
┌─────────┬────────────────────────────────────────────────────────────────────────┬─────────┬─────────────────────┐
│ (index) │                                  Name                                  │ Average │  StandardDeviation  │
├─────────┼────────────────────────────────────────────────────────────────────────┼─────────┼─────────────────────┤
│    0    │                          'mostPopularNumber'                           │    5    │          1          │
│    1    │                          'isAlmostPalindrome'                          │   0.5   │         0.5         │
│    2    │                          'threePointAverage'                           │   0.5   │         0.5         │
│    3    │                             'arrayCounter'                             │    0    │          0          │
│    4    │                           'stringToBoolean'                            │    0    │          0          │
│    5    │                           'stringToDataType'                           │  0.25   │ 0.4330127018922193  │
│    6    │                       'determineObjectDataType'                        │    0    │          0          │
│    7    │                              'isBoolean'                               │  0.125  │ 0.33071891388307384 │
│    8    │                              'isInteger'                               │  0.125  │ 0.33071891388307384 │
│    9    │                               'isFloat'                                │    0    │          0          │
│   10    │                               'isString'                               │  0.125  │ 0.33071891388307384 │
│   11    │                      'singleQuoteSwapAfterEquals'                      │  0.75   │ 0.6614378277661477  │
│   12    │                     'swapForwardSlashToBackSlash'                      │  0.125  │ 0.33071891388307384 │
│   13    │                     'swapBackSlashToForwardSlash'                      │    0    │          0          │
│   14    │              'swapDoubleForwardSlashToSingleForwardSlash'              │    0    │          0          │
│   15    │                 'swapDoubleBackSlashToSingleBackSlash'                 │    0    │          0          │
│   16    │                         'getUserNameFromEmail'                         │  0.125  │ 0.33071891388307384 │
│   17    │                        'replaceSpacesWithPlus'                         │  0.25   │ 0.4330127018922193  │
│   18    │                      'replaceColonWithUnderscore'                      │    0    │          0          │
│   19    │                    'replaceCharacterWithCharacter'                     │  0.125  │ 0.33071891388307384 │
│   20    │                    'cleanCarriageReturnFromString'                     │  0.25   │ 0.4330127018922193  │
│   21    │                       'convertStringToLowerCase'                       │  0.125  │ 0.33071891388307384 │
│   22    │                       'convertStringToUpperCase'                       │  0.25   │ 0.4330127018922193  │
│   23    │                         'getFileNameFromPath'                          │    0    │          0          │
│   24    │                           'getFileExtension'                           │  0.25   │ 0.4330127018922193  │
│   25    │                      'removeDotFromFileExtension'                      │  0.25   │ 0.4330127018922193  │
│   26    │                   'removeFileExtensionFromFileName'                    │    0    │          0          │
│   27    │            'aggregateNumericalDifferenceBetweenTwoStrings'             │  5.75   │  3.191786333700926  │
│   28    │                    'convertCamelCaseStringToArray'                     │    0    │          0          │
│   29    │                    'convertArrayToCamelCaseString'                     │   0.5   │         0.5         │
│   30    │                        'mapWordToCamelCaseWord'                        │  0.25   │ 0.4330127018922193  │
│   31    │                     'simplifyAndConsolidateString'                     │  0.125  │ 0.33071891388307384 │
│   32    │               'compareSimplifiedAndConsolidatedStrings'                │  0.375  │ 0.9921567416492215  │
│   33    │             'doesArrayContainLowerCaseConsolidatedString'              │ 22.875  │ 3.7893765978060294  │
│   34    │                      'doesArrayContainCharacter'                       │  0.125  │ 0.33071891388307384 │
│   35    │                       'removeCharacterFromArray'                       │  0.375  │ 0.4841229182759271  │
│   36    │                      'ascertainMatchingFilenames'                      │  0.375  │ 0.4841229182759271  │
│   37    │                       'doesArrayContainFilename'                       │  0.875  │ 0.5994789404140899  │
│   38    │                  'getDataCatagoryFromDataContextName'                  │    0    │          0          │
│   39    │             'getDataCatagoryDetailNameFromDataContextName'             │  0.125  │ 0.33071891388307384 │
│   40    │                  'getKeywordNameFromDataContextName'                   │  0.25   │ 0.4330127018922193  │
│   41    │                         'parseSystemRootPath'                          │    0    │          0          │
│   42    │                 'removeXnumberOfFoldersFromEndOfPath'                  │  0.25   │ 0.4330127018922193  │
│   43    │                    'getFirstTopLevelFolderFromPath'                    │  0.375  │ 0.4841229182759271  │
│   44    │                                'isOdd'                                 │  0.125  │ 0.33071891388307384 │
│   45    │                                'isEven'                                │  0.375  │ 0.4841229182759271  │
│   46    │                       'replaceCharacterAtIndex'                        │    0    │          0          │
│   47    │          'randomlyGenerateMixedCaseLetterOrSpecialCharacter'           │   0.8   │ 1.1661903789690602  │
│   48    │          'randomlyGenerateUpperCaseLetterOrSpecialCharacter'           │   0.1   │ 0.30000000000000004 │
│   49    │          'randomlyGenerateLowerCaseLetterOrSpecialCharacter'           │   0.5   │  0.806225774829855  │
│   50    │   'randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter'    │   0.1   │ 0.30000000000000004 │
│   51    │   'randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter'    │   0.3   │ 0.4582575694955839  │
│   52    │   'randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter'    │   0.2   │ 0.5099019513592785  │
│   53    │            'randomlyGenerateMixedCaseAlphaNumericCharacter'            │   0.2   │ 0.4000000000000001  │
│   54    │            'randomlyGenerateUpperCaseAlphaNumericCharacter'            │   0.3   │ 0.4582575694955839  │
│   55    │            'randomlyGenerateLowerCaseAlphaNumericCharacter'            │  0.05   │ 0.21794494717703367 │
│   56    │                   'randomlyGenerateNumericCharacter'                   │   0.4   │ 0.7348469228349535  │
│   57    │                   'randomlyGenerateSpecialCharacter'                   │  0.15   │ 0.35707142142714243 │
│   58    │                    'randomlyGenerateNumberInRange'                     │   0.2   │ 0.4000000000000001  │
│   59    │                     'randomlyGenerateBooleanValue'                     │    0    │          0          │
│   60    │             'randomlyGenerateMixedCaseAlphabeticCharacter'             │  0.35   │ 0.9096702699330127  │
│   61    │                    'convertNumberToUpperCaseLetter'                    │   0.1   │ 0.30000000000000004 │
│   62    │                    'convertNumberToLowerCaseLetter'                    │  0.05   │ 0.2179449471770336  │
│   63    │                 'generateRandomMixedCaseTextByLength'                  │  16.4   │  5.31413210223457   │
│   64    │                 'generateRandomUpperCaseTextByLength'                  │  18.4   │ 11.015443704181871  │
│   65    │                 'generateRandomLowerCaseTextByLength'                  │  18.75  │  12.38900722414835  │
│   66    │       'generateRandomMixedCaseTextWithSpecialCharactersByLength'       │  15.1   │  4.667976006793523  │
│   67    │       'generateRandomUpperCaseTextWithSpecialCharactersByLength'       │  23.25  │ 21.942823428173504  │
│   68    │       'generateRandomLowerCaseTextWithSpecialCharactersByLength'       │  23.85  │ 17.419170473934745  │
│   69    │           'generateRandomMixedCaseAlphaNumericCodeByLength'            │  21.7   │ 15.537374295549423  │
│   70    │           'generateRandomUpperCaseAlphaNumericCodeByLength'            │  19.95  │ 12.567716578599311  │
│   71    │           'generateRandomLowerCaseAlphaNumericCodeByLength'            │  17.7   │  10.49809506529637  │
│   72    │                  'generateRandomNumericCodeByLength'                   │  15.45  │  5.064336086793609  │
│   73    │ 'generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength' │  19.9   │ 17.731046218427156  │
│   74    │ 'generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength' │  20.65  │ 10.683047318064261  │
│   75    │ 'generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength' │  16.65  │  4.703987670051868  │
│   76    │              'generateRandomSpecialCharacterCodeByLength'              │  11.3   │  5.16817182376902   │
│   77    │                          'generateValidEmail'                          │ 16.225  │  8.597928529593625  │
│   78    │                         'generateInvalidEmail'                         │   6.2   │  7.950471684120383  │
└─────────┴────────────────────────────────────────────────────────────────────────┴─────────┴─────────────────────┘
>
```

Now you can run the commandMetrics command which will compute the performance statistics for the commands that have been executed:
  commandMetrics

The following table will output:
```
>commandMetrics
┌─────────┬────────────────────────┬──────────────────────┬─────────────────────┐
│ (index) │          Name          │       Average        │  StandardDeviation  │
├─────────┼────────────────────────┼──────────────────────┼─────────────────────┤
│    0    │       'workflow'       │ 0.24581005586592178  │ 0.5450865214592391  │
│    1    │   'commandSequencer'   │  0.6614583333333334  │  4.564741136771489  │
│    2    │         'name'         │ 0.025906735751295335 │ 0.35804306772992056 │
│    3    │       'version'        │ 0.005154639175257732 │ 0.07142573433671312 │
│    4    │        'about'         │ 0.005128205128205128 │   0.071244249007    │
│    5    │     'clearScreen'      │  4.497512437810945   │  25.53447218481813  │
│    6    │         'help'         │  0.3804878048780488  │ 3.0341334490947256  │
│    7    │     'workflowHelp'     │  0.4807692307692308  │  4.581809545011579  │
│    8    │     'businessRule'     │      6.34453125      │  10.50254514347171  │
│    9    │   'commandGenerator'   │  0.1411682892906815  │ 0.7206637989181904  │
│   10    │ 'businessRulesMetrics' │  4.556636553161918   │  172.7320307136272  │
└─────────┴────────────────────────┴──────────────────────┴─────────────────────┘
>
```

# Exit / Quit
To exit the application simply type the command:
  x
or X, or exist or Exit or quit, etc...

```
>x
END command parser
END main program loop
Exiting TEST HARNESS APPLICATION
END testHarness.application Function

C:\haystacks-async>
```

# Debugging
If you want to or need to debug any part of the application, or you are building on some business rules and adding functions that you want to debug.
Simply continue to following the existing patterns in the code then add your functions to the appropriate file <fileName>.json under the following path:
./src/resources/configuration/debugSettings/...
Or in the testHarness:
./test/testHarness/src/resources/configuration/debugSettings/...

If you want to debug any function in the entire framework you can find the related .json file open it and change either the file level log setting or the function level log setting like so:

Let us assume we want to debug the framework commands.
We can load the file found at the following path:
./src/resources/configuration/debugSettings/commandsBlob/commands/nominal.json

You'll see some JSON code that looks like this:
```
{
  "debugFiles|debugSetting.commandsBlob.commands.system": false,
  "debugFiles|debugSetting.commandsBlob.commands.system@ModuleFontStyle": "Bold|Underline",
  "debugFiles|debugSetting.commandsBlob.commands.system@FunctionFontStyle": "Bold|Underline",
  "debugFiles|debugSetting.commandsBlob.commands.system@MessageFontStyle": "Underline",
  "debugFiles|debugSetting.commandsBlob.commands.system@DataFontStyle": "Bold",
  "debugFiles|debugSetting.commandsBlob.commands.system@ModuleFontColor": "0,0,0",
  "debugFiles|debugSetting.commandsBlob.commands.system@FunctionFontColor": "0,0,0",
  "debugFiles|debugSetting.commandsBlob.commands.system@MessageFontColor": "0,0,0",
  "debugFiles|debugSetting.commandsBlob.commands.system@DataFontColor": "0,0,0",
  "debugFiles|debugSetting.commandsBlob.commands.system@ModuleFontBackgroundColor": "255,255,255",
  "debugFiles|debugSetting.commandsBlob.commands.system@FunctionFontBackgroundColor": "255,255,255",
  "debugFiles|debugSetting.commandsBlob.commands.system@MessageFontBackgroundColor": "255,255,255",
  "debugFiles|debugSetting.commandsBlob.commands.system@DataFontBackgroundColor": "255,255,255",
  "debugFunctions|debugSetting.commandsBlob.commands.system.echoCommand": false,
  "debugFunctions|debugSetting.commandsBlob.commands.system.echoCommand@ModuleFontStyle": "Default",
  "debugFunctions|debugSetting.commandsBlob.commands.system.echoCommand@FunctionFontStyle": "Default",
  "debugFunctions|debugSetting.commandsBlob.commands.system.echoCommand@MessageFontStyle": "Default",
  "debugFunctions|debugSetting.commandsBlob.commands.system.echoCommand@DataFontStyle": "Default",
  "debugFunctions|debugSetting.commandsBlob.commands.system.echoCommand@ModuleFontColor": "Blue",
  "debugFunctions|debugSetting.commandsBlob.commands.system.echoCommand@FunctionFontColor": "Blue",
  "debugFunctions|debugSetting.commandsBlob.commands.system.echoCommand@MessageFontColor": "Blue",
  "debugFunctions|debugSetting.commandsBlob.commands.system.echoCommand@DataFontColor": "Yellow",
  "debugFunctions|debugSetting.commandsBlob.commands.system.echoCommand@ModuleFontBackgroundColor": "Black",
  "debugFunctions|debugSetting.commandsBlob.commands.system.echoCommand@FunctionFontBackgroundColor": "Black",
  "debugFunctions|debugSetting.commandsBlob.commands.system.echoCommand@MessageFontBackgroundColor": "Black",
  "debugFunctions|debugSetting.commandsBlob.commands.system.echoCommand@DataFontBackgroundColor": "Black",
  "debugFunctions|debugSetting.commandsBlob.commands.system.exit": false,
  "debugFunctions|debugSetting.commandsBlob.commands.system.exit@ModuleFontStyle": "Default",
  "debugFunctions|debugSetting.commandsBlob.commands.system.exit@FunctionFontStyle": "Default",
  ...
}
```

Pay special attention to the following 3 entries:
```
"debugFiles|debugSetting.commandsBlob.commands.system": false,
...
"debugFunctions|debugSetting.commandsBlob.commands.system.echoCommand": false,
...
"debugFunctions|debugSetting.commandsBlob.commands.system.exit": false,
```

The first of these is the setting to enable logging of all commands in the system.js file.
The second line is the setting to enable logging for the echoCommand command ONLY.
The third line is the setting to enable logging for the exit command ONLY.

In this way you can control the logging for the beginning, ending, inputs and outputs of every single function in the entire framework and the application or any plugins that might be loaded as well.

Look for the following line and change it as follows and we will see how the output changes, changing the value to "true":
```
"debugFunctions|debugSetting.commandsBlob.commands.system.name": true,
```

Save the file, and re-run the application using the command:
  npm run test

```
C:\haystacks>npm run test

> haystacks@0.0.7 test
> babel-node ./test/testHarness/src/testHarness.js

BEGIN testHarness.application Function
BEGIN commandsBlob.commands.system.name Function
inputData is: ["name","application","true"]
inputMetaData is:
.___________. _______     _______.___________. __    __       ___      .______      .__   __.  _______     _______.     _______.
|           ||   ____|   /       |           ||  |  |  |     /   \     |   _  \     |  \ |  | |   ____|   /       |    /       |
`---|  |----`|  |__     |   (----`---|  |----`|  |__|  |    /  ^  \    |  |_)  |    |   \|  | |  |__     |   (----`   |   (----`
    |  |     |   __|     \   \       |  |     |   __   |   /  /_\  \   |      /     |  . `  | |   __|     \   \        \   \
    |  |     |  |____.----)   |      |  |     |  |  |  |  /  _____  \  |  |\  \----.|  |\   | |  |____.----)   |   .----)   |
    |__|     |_______|_______/       |__|     |__|  |__| /__/     \__\ | _| `._____||__| \__| |_______|_______/    |_______/

returnData is: true
END commandsBlob.commands.system.name Function
0.0.1
A test harness application to test the haystacks framework.
BEGIN main program loop
BEGIN command parser
```

Notice this time we have the following output lines:
```
BEGIN commandsBlob.commands.system.name Function
inputData is: ["name","application","true"]
inputMetaData is:
```

and:
```
returnData is: true
END commandsBlob.commands.system.name Function
```

These are the debugging lines included in this command function.
  BEGIN commandsBlob.commands.system.name Function - is logged from when the execution of the function begins.
  inputData is: ["name","application","true"] - logs the first input to the function.
  inputMetaData is: - logs the second input to the function, in this case it's an empty string because we don't use the second input.

  returnData is: true - ogs the return data from the function. In the case of commands they should always return true to indicate that the application should continue to execute,
  provided it is in the interactive mode and the argumentDrivenInterface configuration setting is set to False.
  The only time a command function should return false is if it is going to exit the application, which is exactly what the Exit command does.
  END commandsBlob.commands.system.name Function - logs the end of the function 1 line of code before the actual return/end of the function.

You can also enable logging for an entire file/class of functions simply by changing the configuration setting for a particular file/class.
Here you can see the configuration setting for the warden.js which acts as an internal central control manager for execution of the entire application/framework:
The file is found at the following path:
./src/resources/configuration/debugSettings/controllers/warden.json
```
{
  "debugFiles|debugSetting.controllers.warden": false,
  "debugFiles|debugSetting.controllers.warden@ModuleFontStyle": "Bold|Underline",
  "debugFiles|debugSetting.controllers.warden@FunctionFontStyle": "Bold|Underline",
  "debugFiles|debugSetting.controllers.warden@MessageFontStyle": "Underline",
  "debugFiles|debugSetting.controllers.warden@DataFontStyle": "Bold",
  "debugFiles|debugSetting.controllers.warden@ModuleFontColor": "Red",
  "debugFiles|debugSetting.controllers.warden@FunctionFontColor": "Red",
  "debugFiles|debugSetting.controllers.warden@MessageFontColor": "Red",
  "debugFiles|debugSetting.controllers.warden@DataFontColor": "Yellow",
  "debugFiles|debugSetting.controllers.warden@ModuleFontBackgroundColor": "Black",
  "debugFiles|debugSetting.controllers.warden@FunctionFontBackgroundColor": "Black",
  "debugFiles|debugSetting.controllers.warden@MessageFontBackgroundColor": "Black",
  "debugFiles|debugSetting.controllers.warden@DataFontBackgroundColor": "Black",
  "debugFunctions|debugSetting.controllers.warden.initFrameworkSchema": false,
  "debugFunctions|debugSetting.controllers.warden.initFrameworkSchema@ModuleFontStyle": "Default",
  "debugFunctions|debugSetting.controllers.warden.initFrameworkSchema@FunctionFontStyle": "Default",
  "debugFunctions|debugSetting.controllers.warden.initFrameworkSchema@MessageFontStyle": "Default",
```

Change the following line as follows, then resave the file.
NOTE: I have also reverted the above change in the nominal.json file.
```
"debugFiles|debugSetting.controllers.warden": true,
```

Now after re-running the command:
  npm run test

The following output will be displayed:
```
BEGIN controllers.warden.initFrameworkSchema Function
configData is: {"clientRootPath":"C:\\haystacks\\test\\testHarness","appConfigResourcesPath":"C:\\haystacks\\test\\testHarness/src/resources/","appConfigReferencePath":"C:\\haystacks\\test\\testHarness/src/resources/configuration/","clientMetaDataPath":"C:\\haystacks\\test\\testHarness\\src\\resources\\metaData.json","clientCommandAliasesPath":"C:\\haystacks\\test\\testHarness/src/resources/commands/","clientConstantsPath":"C:\\haystacks\\test\\testHarness/src/constants/","clientWorkflowsPath":"C:\\haystacks\\test\\testHarness/src/resources/workflows/","clientBusinessRules":{},"clientCommands":{},"frameworkRootPath":"C:\\haystacks","frameworkConstantsPath":"C:\\haystacks//src//constants//","appConfigPath":"C:\\haystacks\\test\\testHarness/src/resources/configuration/","frameworkResourcesPath":"C:\\haystacks//src//resources//","frameworkFullMetaDataPath":"C:\\haystacks\\src\\resources\\metaData.json","frameworkConfigPath":"C:\\haystacks//src//resources//configuration//","frameworkCommandAliasesPath":"C:\\haystacks//src//resources//commands//","frameworkWorkflowsPath":"C:\\haystacks//src//resources//workflows//"}
applicationMetaDataPathAndFilename is: C:\haystacks\test\testHarness\src\resources\metaData.json
frameworkMetaDataPathAndFilename is: C:\haystacks\src\resources\metaData.json
applicationMetaData is: {"Name":"testHarness","Version":"0.0.1","Description":"A test harness application to test the haystacks framework."}
frameworkMetaData is: {"Name":"haystacks","Version":"0.0.7","Description":"A framework to build any number or any kind of native application or automation solution."}
clientRootPath is: C:\haystacks\test\testHarness
appConfigResourcesPath is: C:\haystacks\test\testHarness/src/resources/
appConfigReferencePath is: C:\haystacks\test\testHarness/src/resources/configuration/
clientMetaDataPath is: C:\haystacks\test\testHarness\src\resources\metaData.json
clientCommandAliasesPath is: C:\haystacks\test\testHarness/src/resources/commands/
clientWorkflowsPath is: C:\haystacks\test\testHarness/src/resources/workflows/
frameworkRootPath is: C:\haystacks
appConfigPath is: C:\haystacks\test\testHarness/src/resources/configuration/
frameworkResourcesPath is: C:\haystacks//src//resources//
frameworkFullMetaDataPath is: C:\haystacks\src\resources\metaData.json
frameworkConfigPath is: C:\haystacks//src//resources//configuration//
frameworkCommandAliasesPath is: C:\haystacks//src//resources//commands//
frameworkWorkflowsPath is: C:\haystacks//src//resources//workflows//
ApplicationName is: testHarness
ApplicationVersionNumber is: 0.0.1
ApplicationDescription is: A test harness application to test the haystacks framework.
FrameworkName is: haystacks
FrameworkVersionNumber is: 0.0.7
FrameworkDescription is: A framework to build any number or any kind of native application or automation solution.
resolvedFrameworkConstantsPathActual is: C:\haystacks\src\constants
resolvedClientConstantsPathActual is: C:\haystacks\test\testHarness\src\constants
BEGIN controllers.warden.getConfigurationSetting Function
configurationNamespace is: system
configurationName is: applicationConstantsPath
returnConfigurationValue is: C:\haystacks\test\testHarness\src\constants
END controllers.warden.getConfigurationSetting Function
frameworkConstantsValidationData is: {...}
applicationConstantsValidationData is: {...}
Capture the session date-time-stamp so we can determine a log file name.
sessionDateTimeStamp is: 20220412-173620-384
logFileName is: 20220412-173620-384_0.0.1_testHarness.Log
BEGIN controllers.warden.mergeClientBusinessRules Function
END controllers.warden.mergeClientBusinessRules Function
BEGIN controllers.warden.mergeClientCommands Function
END controllers.warden.mergeClientCommands Function
BEGIN controllers.warden.loadCommandAliases Function
commandAliasesPathConfigName is:
resolvedSystemCommandsAliasesPath is: C:\haystacks//src//resources//commands//
resolvedClientCommandsAliasesPath is: C:\haystacks\test\testHarness/src/resources/commands/
END controllers.warden.loadCommandAliases Function
BEGIN controllers.warden.loadCommandWorkflows Function
workflowPathConfigurationName is:
resolvedSystemWorkflowsPath is: C:\haystacks//src//resources//workflows//
resolvedClientWorkflowsPath is: C:\haystacks\test\testHarness/src/resources/workflows/
END controllers.warden.loadCommandWorkflows Function
END controllers.warden.initFrameworkSchema Function
BEGIN testHarness.application Function
BEGIN controllers.warden.getConfigurationSetting Function
configurationNamespace is: system
configurationName is: argumentDrivenInterface
returnConfigurationValue is: false
END controllers.warden.getConfigurationSetting Function
BEGIN controllers.warden.enqueueCommand Function
command is: Workflow startup
END controllers.warden.enqueueCommand Function
BEGIN controllers.warden.isCommandQueueEmpty Function
returnData is: false
END controllers.warden.isCommandQueueEmpty Function
BEGIN controllers.warden.processCommandQueue Function
returnData is: true
END controllers.warden.processCommandQueue Function
BEGIN controllers.warden.isCommandQueueEmpty Function
returnData is: false
END controllers.warden.isCommandQueueEmpty Function
BEGIN controllers.warden.processCommandQueue Function
returnData is: true
END controllers.warden.processCommandQueue Function
BEGIN controllers.warden.isCommandQueueEmpty Function
returnData is: false
END controllers.warden.isCommandQueueEmpty Function
BEGIN controllers.warden.processCommandQueue Function
.___________. _______     _______.___________. __    __       ___      .______      .__   __.  _______     _______.     _______.
|           ||   ____|   /       |           ||  |  |  |     /   \     |   _  \     |  \ |  | |   ____|   /       |    /       |
`---|  |----`|  |__     |   (----`---|  |----`|  |__|  |    /  ^  \    |  |_)  |    |   \|  | |  |__     |   (----`   |   (----`
    |  |     |   __|     \   \       |  |     |   __   |   /  /_\  \   |      /     |  . `  | |   __|     \   \        \   \
    |  |     |  |____.----)   |      |  |     |  |  |  |  /  _____  \  |  |\  \----.|  |\   | |  |____.----)   |   .----)   |
    |__|     |_______|_______/       |__|     |__|  |__| /__/     \__\ | _| `._____||__| \__| |_______|_______/    |_______/

returnData is: true
END controllers.warden.processCommandQueue Function
BEGIN controllers.warden.isCommandQueueEmpty Function
returnData is: false
END controllers.warden.isCommandQueueEmpty Function
BEGIN controllers.warden.processCommandQueue Function
0.0.1
returnData is: true
END controllers.warden.processCommandQueue Function
BEGIN controllers.warden.isCommandQueueEmpty Function
returnData is: false
END controllers.warden.isCommandQueueEmpty Function
BEGIN controllers.warden.processCommandQueue Function
A test harness application to test the haystacks framework.
returnData is: true
END controllers.warden.processCommandQueue Function
BEGIN controllers.warden.isCommandQueueEmpty Function
returnData is: true
END controllers.warden.isCommandQueueEmpty Function
BEGIN main program loop
BEGIN command parser
BEGIN controllers.warden.isCommandQueueEmpty Function
returnData is: true
END controllers.warden.isCommandQueueEmpty Function
>
```

Here you can see that a large number of functions have been called, as well as the inputs to some functions and also some of the variables that are being set and processed inside some functions.
So if you want to see what is going on inside the application while it is running this is an excellent developers tool that allows you to control what is logged from where and when and even in the what color/font-style.
