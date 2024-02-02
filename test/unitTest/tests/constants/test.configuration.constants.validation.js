/**
 * @file test.configuration.constants.validation.js
 * @module test.configuration.constants.validation
 * @description Contains all validations for named test configuration constants.
 * @requires module:test.configuration.constants
 * @author Vlad Sorokin
 * @date 2023/12/05
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import * as tst_cfg from './test.configuration.constants.js';

/**
 * @function unitTestConfigurationConstantsValidation
 * @description Initializes the unit test configuration constants validation data objects array.
 * @return {array<Object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Vlad Sorokin
 * @date 2022/03/22
 */
export const unitTestConfigurationConstantsValidation = [
    {Name: 'cargumentDrivenInterface', Actual: tst_cfg.cargumentDrivenInterface, Expected: 'argumentDrivenInterface'},

    // Test Configuration String Names
    {Name: 'cFrameworkName', Actual: tst_cfg.cFrameworkName, Expected: 'FrameworkName'},
    {Name: 'cclientRootPath', Actual: tst_cfg.cclientRootPath, Expected: 'clientRootPath'},
    {Name: 'cappConfigResourcesPath', Actual: tst_cfg.cappConfigResourcesPath, Expected: 'appConfigResourcesPath'},
    {Name: 'cappConfigReferencePath', Actual: tst_cfg.cappConfigReferencePath, Expected: 'appConfigReferencePath'},
    {Name: 'cclientMetaDataPath', Actual: tst_cfg.cclientMetaDataPath, Expected: 'clientMetaDataPath'},
    {Name: 'cclientCommandAliasesPath', Actual: tst_cfg.cclientCommandAliasesPath, Expected: 'clientCommandAliasesPath'},
    {Name: 'cclientConstantsPath', Actual: tst_cfg.cclientConstantsPath, Expected: 'clientConstantsPath'},
    {Name: 'cclientRegisteredPlugins', Actual: tst_cfg.cclientRegisteredPlugins, Expected: 'clientRegisteredPlugins'},
    {Name: 'cclientWorkflowsPath', Actual: tst_cfg.cclientWorkflowsPath, Expected: 'clientWorkflowsPath'},
    {Name: 'cclientThemesPath', Actual: tst_cfg.cclientThemesPath, Expected: 'clientThemesPath'},
    {Name: 'cclientBusinessRules', Actual: tst_cfg.cclientBusinessRules, Expected: 'clientBusinessRules'},
    {Name: 'cclientCommands', Actual: tst_cfg.cclientCommands, Expected: 'clientCommands'},
    {Name: 'cappConfigPath', Actual: tst_cfg.cappConfigPath, Expected: 'appConfigPath'},
    {Name: 'cframeworkCommandAliasesPath', Actual: tst_cfg.cframeworkCommandAliasesPath, Expected: 'frameworkCommandAliasesPath'},
    {Name: 'cframeworkConfigPath', Actual: tst_cfg.cframeworkConfigPath, Expected: 'frameworkConfigPath'},
    {Name: 'cframeworkConstantsPath', Actual: tst_cfg.cframeworkConstantsPath, Expected: 'frameworkConstantsPath'},
    {Name: 'cframeworkFullMetaDataPath', Actual: tst_cfg.cframeworkFullMetaDataPath, Expected: 'frameworkFullMetaDataPath'},
    {Name: 'cframeworkResourcesPath', Actual: tst_cfg.cframeworkResourcesPath, Expected: 'frameworkResourcesPath'},
    {Name: 'cframeworkRootPath', Actual: tst_cfg.cframeworkRootPath, Expected: 'frameworkRootPath'},
    {Name: 'cframeworkThemesPath', Actual: tst_cfg.cframeworkThemesPath, Expected: 'frameworkThemesPath'},
    {Name: 'cframeworkWorkflowsPath', Actual: tst_cfg.cframeworkWorkflowsPath, Expected: 'frameworkWorkflowsPath'},
    {Name: 'cpluginCommandAliasesPath', Actual: tst_cfg.cpluginCommandAliasesPath, Expected: 'pluginCommandAliasesPath'},
    {Name: 'cpluginFullMetaDataPath', Actual: tst_cfg.cpluginFullMetaDataPath, Expected: 'pluginFullMetaDataPath'},
    {Name: 'cpluginReleaseResourcesPath', Actual: tst_cfg.cpluginReleaseResourcesPath, Expected: 'pluginReleaseResourcesPath'},
    {Name: 'cpluginResourcesPath', Actual: tst_cfg.cpluginResourcesPath, Expected: 'pluginResourcesPath'},
    {Name: 'cpluginRootPath', Actual: tst_cfg.cpluginRootPath, Expected: 'pluginRootPath'},
    {Name: 'cpluginWorkflowsPath', Actual: tst_cfg.cpluginWorkflowsPath, Expected: 'pluginWorkflowsPath'},

    // Test Configuration String Input Value
    {Name: 'cFrameworkNameInputValue', Actual: tst_cfg.cFrameworkNameInputValue, Expected: 'haystacks-async'},
    // {Name: 'cclientRootPathInputValue', Actual: tst_cfg.cclientRootPathInputValue, Expected: 'C:/haystacks-async'},
    {Name: 'cappConfigResourcesPathInputValue', Actual: tst_cfg.cappConfigResourcesPathInputValue, Expected: '/test/unitTest/testData/resources/'},
    {Name: 'cappConfigReferencePathInputValue', Actual: tst_cfg.cappConfigReferencePathInputValue, Expected: '/test/unitTest/testData/resources/clientTestData/'},
    {Name: 'cclientMetaDataPathInputValue', Actual: tst_cfg.cclientMetaDataPathInputValue, Expected: '/test/unitTest/testData/resources/metaData.json'},
    {Name: 'cclientCommandAliasesPathInputValue', Actual: tst_cfg.cclientCommandAliasesPathInputValue, Expected: '/test/testHarness/src/resources/commands/'},
    {Name: 'cclientConstantsPathInputValue', Actual: tst_cfg.cclientConstantsPathInputValue, Expected: '/test/testHarness/src/constants/'},
    {Name: 'cclientRegisteredPluginsInputValue', Actual: tst_cfg.cclientRegisteredPluginsInputValue, Expected: '/test/testHarness/src/resources/plugins/plugins.json'},
    {Name: 'cclientWorkflowsPathInputValue', Actual: tst_cfg.cclientWorkflowsPathInputValue, Expected: '/test/testHarness/src/resources/workflows/'},
    {Name: 'cclientThemesPathInputValue', Actual: tst_cfg.cclientThemesPathInputValue, Expected: '/test/testHarness/src/resources/themes/'},

    // Test Configuration String Expected Values
    {Name: 'cclientMetaDataPathChangedExpectedValue1', Actual: tst_cfg.cclientMetaDataPathChangedExpectedValue1, Expected: 'metaData.json'},
    {Name: 'cclientMetaDataPathChangedExpectedValue2', Actual: tst_cfg.cclientMetaDataPathChangedExpectedValue2, Expected: 'test\\unitTest\\testData\\resources\\metaData.json'},
    {Name: 'cframeworkCommandAliasesPathExpectedValue', Actual: tst_cfg.cframeworkCommandAliasesPathExpectedValue, Expected: '//src//resources//commands//'},
    {Name: 'cframeworkConfigPathExpectedValue', Actual: tst_cfg.cframeworkConfigPathExpectedValue, Expected: '//src//resources//configuration//'},
    {Name: 'cframeworkConstantsPathExpectedLinkedValue', Actual: tst_cfg.cframeworkConstantsPathExpectedValue, Expected: '/src/constants/'},
    // {Name: 'cframeworkConstantsPathExpectedUnlinkedValue', Actual: tst_cfg.cframeworkConstantsPathExpectedValue, Expected: 'C:/haystacks-async\\node_modules\\@haystacks\\constants\\src/constants/'},
    {Name: 'cframeworkFullMetaDataPathExpectedValue', Actual: tst_cfg.cframeworkFullMetaDataPathExpectedValue, Expected: 'C:\\haystacks-async\\src\\resources\\metaData.json'},
    {Name: 'cframeworkResourcesPathExpectedValue', Actual: tst_cfg.cframeworkResourcesPathExpectedValue, Expected: '\\src\\resources\\'},
    {Name: 'cframeworkThemesPathExpectedValue', Actual: tst_cfg.cframeworkThemesPathExpectedValue, Expected: '//src//resources//workflows//'},
    {Name: 'cframeworkWorkflowsPathExpectedValue', Actual: tst_cfg.cframeworkWorkflowsPathExpectedValue, Expected: '\\haystacks-async\\resources\\metaData.json'},
    {Name: 'cpluginCommandAliasesPathExpectedValue', Actual: tst_cfg.cpluginCommandAliasesPathExpectedValue, Expected: 'C:\\haystacks-async//resources//commands//'},
    {Name: 'cpluginFullMetaDataPathExpectedValue', Actual: tst_cfg.cpluginFullMetaDataPathExpectedValue, Expected: 'C:\\haystacks-async\\resources\\metaData.json'},
    {Name: 'cpluginReleaseResourcesPathExpectedValue', Actual: tst_cfg.cpluginReleaseResourcesPathExpectedValue, Expected: 'bin\\resources\\'},
    {Name: 'cpluginResourcesPathExpectedValue', Actual: tst_cfg.cpluginResourcesPathExpectedValue, Expected: '\\haystacks-async\\resources\\'},
    {Name: 'cpluginWorkflowsPathExpectedValue', Actual: tst_cfg.cpluginWorkflowsPathExpectedValue, Expected: 'resources//workflows//'}
  ];
  
