/**
 * @file warden.js
 * @module warden
 * @description Contains all the functions to manage the entire application framework at the highest level.
 * Also provides an interface to easily manage all the framework features & various functionality from a single entry point.
 * @requires module:dataBroker
 * @requires module:ruleBroker
 * @requires module:chiefCommander
 * @requires module:chiefConfiguration
 * @requires module:chiefData
 * @requires module:chiefPlugin
 * @requires module:chiefTheme
 * @requires module:chiefWorkflow
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:stack
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/15
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import dataBroker from '../brokers/dataBroker.js';
import ruleBroker from '../brokers/ruleBroker.js';
import chiefCommander from './chiefCommander.js';
import chiefConfiguration from './chiefConfiguration.js';
import chiefConstant from './chiefConstant.js';
import chiefData from './chiefData.js';
import chiefPlugin from './chiefPlugin.js';
import chiefTheme from './chiefTheme.js';
import chiefWorkflow from './chiefWorkflow.js';
import configurator from '../executrix/configurator.js';
import loggers from '../executrix/loggers.js';
import stack from '../structures/stack.js';
// eslint-disable-next-line no-unused-vars
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cmd, cfg, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.controllers.warden.
const namespacePrefix = wrd.cframework + bas.cDot + wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

 /**
 * @function processRootPath
 * @description Processes the root path of the application using business rules.
 * @NOTE: By calling path.resolve(__dirname); This does not return the true root path of the application.
 * It returns the path to the currently executing file, or the file that was executed first.
 * which is: C:/Calculator2/Application/Calculator2/
 * But what we really need for the root path is just C:/Calculator2/
 * @param {string} inputPath The path for the entry point to the framework, ie: main.js
 * @param {string} actualFrameworkName The name of the framework that the application is expecting to use.
 * @return {string} The true root path of the application.
 * @author Seth Hollingsead
 * @date 2021/10/12
 * @NOTE Cannot use the loggers here, because dependency data will have never been loaded.
 */
async function processRootPath(inputPath, actualFrameworkName) {
  // let functionName = processRootPath.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputPath is: ${inputPath}`);
  await ruleBroker.bootStrapBusinessRules();
  await chiefCommander.bootStrapCommands();
  let resolvedPath = await ruleBroker.processRules([inputPath, actualFrameworkName], [biz.cparseSystemRootPath]);
  await dataBroker.setupDataStorage();
  resolvedPath = path.normalize(resolvedPath);
  // console.log(`resolvedPath is: ${resolvedPath}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return resolvedPath;
}

/**
 * @function initFrameworkSchema
 * @description Setup all the framework data and configuration settings.
 * @param {object} configData All of the configuration data that should be parsed as part of the setup process.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/12
 */
async function initFrameworkSchema(configData) {
  let functionName = initFrameworkSchema.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`configData is: ${JSON.stringify(configData)}`);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cconfigDataIs + JSON.stringify(configData));
  const appConfigPath = configData[cfg.cappConfigPath];
  const frameworkConfigPath = configData[cfg.cframeworkConfigPath];
  await chiefConfiguration.setupConfiguration(appConfigPath, frameworkConfigPath);
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cschemasLoaded, false);
  // re-declare the input now that the configuration is setup.
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cconfigDataIs + JSON.stringify(configData));

  let getJsonRule = [biz.cgetJsonData];
  let applicationMetaDataPathAndFilename = '';
  let frameworkMetaDataPathAndFilename = '';
  let pluginMetaDataPathAndFilename = '';
  let applicationMetaData = {};
  let frameworkMetaData = {};
  let pluginMetaData = {};
  applicationMetaDataPathAndFilename = configData[cfg.cclientMetaDataPath];
  frameworkMetaDataPathAndFilename = configData[cfg.cframeworkFullMetaDataPath];
  await loggers.consoleLog(namespacePrefix + functionName, msg.capplicationMetaDataPathAndFilenameIs + applicationMetaDataPathAndFilename);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkMetaDataPathAndFilenameIs + frameworkMetaDataPathAndFilename);
  applicationMetaData = await ruleBroker.processRules([applicationMetaDataPathAndFilename, ''], getJsonRule);
  frameworkMetaData = await ruleBroker.processRules([frameworkMetaDataPathAndFilename, ''], getJsonRule);
  await loggers.consoleLog(namespacePrefix + functionName, msg.capplicationMetaDataIs + JSON.stringify(applicationMetaData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkMetaDataIs + JSON.stringify(frameworkMetaData));
  if (configData[sys.cPluginName]) {
    pluginMetaDataPathAndFilename = configData[cfg.cpluginFullMetaDataPath];
    await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginMetaDataPathAndFilenameIs + pluginMetaDataPathAndFilename);
    pluginMetaData = await ruleBroker.processRules([pluginMetaDataPathAndFilename, ''], getJsonRule);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginMetaDataIs + JSON.stringify(pluginMetaData));
  }

  await configurator.setConfigurationSetting(wrd.csystem, cfg.cclientRootPath, configData[cfg.cclientRootPath]);
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cappConfigResourcesPath, configData[cfg.cappConfigResourcesPath]);
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cappConfigReferencePath, configData[cfg.cappConfigReferencePath]);
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cclientMetaDataPath, configData[cfg.cclientMetaDataPath]);
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cclientCommandAliasesPath, configData[cfg.cclientCommandAliasesPath]);
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cclientWorkflowsPath, configData[cfg.cclientWorkflowsPath]);
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkRootPath, configData[cfg.cframeworkRootPath]);
  if (configData[sys.cPluginName]) {
    await configurator.setConfigurationSetting(wrd.csystem, cfg.cpluginRootPath, configData[cfg.cpluginRootPath]);
    await configurator.setConfigurationSetting(wrd.csystem, cfg.cpluginReleaseResourcesPath, configData[cfg.cpluginReleaseResourcesPath]);
    await configurator.setConfigurationSetting(wrd.csystem, cfg.cpluginWorkflowsPath, configData[cfg.cpluginWorkflowsPath]);
    await configurator.setConfigurationSetting(wrd.csystem, cfg.cpluginCommandAliasesPath, configData[cfg.cpluginCommandAliasesPath]);
  }
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cappConfigPath, configData[cfg.cappConfigPath]);
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkResourcesPath, configData[cfg.cframeworkResourcesPath]);
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkFullMetaDataPath, configData[cfg.cframeworkFullMetaDataPath]);
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkConfigPath, configData[cfg.cframeworkConfigPath]);
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, configData[cfg.cframeworkThemesPath]);
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkSchemasPath, configData[cfg.cframeworkSchemasPath]);
  await configurator.setConfigurationSetting(wrd.csystem, cfg.capplicationSchemasPath, configData[cfg.capplicationSchemasPath]);
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkCommandAliasesPath, configData[cfg.cframeworkCommandAliasesPath]);
  await configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, configData[cfg.cframeworkWorkflowsPath]);

  await loggers.consoleLog(namespacePrefix + functionName, msg.cclientRootPathIs + configData[cfg.cclientRootPath]);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cappConfigResourcesPathIs + configData[cfg.cappConfigResourcesPath]);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cappConfigReferencePathIs + configData[cfg.cappConfigReferencePath]);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cclientMetaDataPathIs + configData[cfg.cclientMetaDataPath]);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cclientCommandAliasesPathIs + configData[cfg.cclientCommandAliasesPath]);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cclientWorkflowsPathIs + configData[cfg.cclientWorkflowsPath]);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkRootPathIs + configData[cfg.cframeworkRootPath]);
  if (configData[sys.cPluginName]) {
    await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRootPathIs + configData[cfg.cpluginRootPath]);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginReleaseResourcesPathIs + configData[cfg.cpluginReleaseResourcesPath]);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginWorkflowsPathIs + configData[cfg.cpluginWorkflowsPath]);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginCommandAliasesPathIs + configData[cfg.cpluginCommandAliasesPath]);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.cappConfigPathIs + configData[cfg.cappConfigPath]);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkResourcesPathIs + configData[cfg.cframeworkResourcesPath]);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkFullMetaDataPathIs + configData[cfg.cframeworkFullMetaDataPath]);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkConfigPathIs + configData[cfg.cframeworkConfigPath]);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkThemesPathIs + configData[cfg.cframeworkThemesPath]);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkSchemasPathIs + configData[cfg.cframeworkSchemasPath]);
  await loggers.consoleLog(namespacePrefix + functionName, msg.capplicationSchemasPathIs + configData[cfg.capplicationSchemasPath]);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkCommandAliasesPathIs + configData[cfg.cframeworkCommandAliasesPath]);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkWorkflowsPathIs + configData[cfg.cframeworkWorkflowsPath]);

  // Make sure the color data gets loaded as well! File: colors.csv (This is used by the colorizer to colorize the fonts for the console output)
  await chiefData.setupAllCsvData(cfg.cframeworkConfigPath, wrd.ccolors);

  let applicationMetaDataName = await configurator.getAmbiguousDataElement(applicationMetaData, [wrd.cname, wrd.cName, wrd.cNAME]);
  let applicationMetaDataVersion = await configurator.getAmbiguousDataElement(applicationMetaData, [wrd.cversion, wrd.cVersion, wrd.cVERSION]);
  let applicationMetaDataDescription = await configurator.getAmbiguousDataElement(applicationMetaData, [wrd.cdescription, wrd.cDescription, wrd.cDESCRIPTION]);
  await configurator.setConfigurationSetting(wrd.csystem, sys.cApplicationName, applicationMetaDataName);
  await configurator.setConfigurationSetting(wrd.csystem, sys.cApplicationVersionNumber, applicationMetaDataVersion);
  await configurator.setConfigurationSetting(wrd.csystem, sys.cApplicationDescription, applicationMetaDataDescription);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cApplicationNameIs + applicationMetaDataName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cApplicationVersionNumberIs + applicationMetaDataVersion);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cApplicationDescriptionIs + applicationMetaDataDescription);

  let frameworkMetaDataName = await configurator.getAmbiguousDataElement(frameworkMetaData, [wrd.cname, wrd.cName, wrd.cNAME]);
  let frameworkMetaDataVersion = await configurator.getAmbiguousDataElement(frameworkMetaData, [wrd.cversion, wrd.cVersion, wrd.cVERSION]);
  let frameworkMetaDataDescription = await configurator.getAmbiguousDataElement(frameworkMetaData, [wrd.cdescription, wrd.cDescription, wrd.cDESCRIPTION]);
  await configurator.setConfigurationSetting(wrd.csystem, sys.cFrameworkName, frameworkMetaDataName);
  await configurator.setConfigurationSetting(wrd.csystem, sys.cFrameworkVersionNumber, frameworkMetaDataVersion);
  await configurator.setConfigurationSetting(wrd.csystem, sys.cFrameworkDescription, frameworkMetaDataDescription);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cFrameworkNameIs + frameworkMetaDataName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cFrameworkVersionNumberIs + frameworkMetaDataVersion);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cFrameworkDescriptionIs + frameworkMetaDataDescription);

  // Don't forget this could be a plugin, if the build-release is running and building a plugin for release.
  if (configData[sys.cPluginName]) {
    let pluginMetaDataName = await configurator.getAmbiguousDataElement(pluginMetaData, [wrd.cname, wrd.cName, wrd.cNAME]);
    let pluginMetaDataVersion = await configurator.getAmbiguousDataElement(pluginMetaData, [wrd.cversion, wrd.cVersion, wrd.cVERSION]);
    let pluginMetaDataDescription = await configurator.getAmbiguousDataElement(pluginMetaData, [wrd.cdescription, wrd.cDescription, wrd.cDESCRIPTION]);
    await configurator.setConfigurationSetting(wrd.csystem, sys.cPluginName, pluginMetaDataName);
    await configurator.setConfigurationSetting(wrd.csystem, sys.cPluginVersionNumber, pluginMetaDataVersion);
    await configurator.setConfigurationSetting(wrd.csystem, sys.cPluginDescription, pluginMetaDataDescription);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginMetaDataName);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cPluginVersionNumberIs + pluginMetaDataVersion);
  }

  if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cenableConstantsValidation) === true) {
    let resolvedFrameworkConstantsPathActual = path.resolve(configData[cfg.cframeworkConstantsPath]);
    let resolvedClientConstantsPathActual = path.resolve(configData[cfg.cclientConstantsPath]);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedFrameworkConstantsPathActualIs + resolvedFrameworkConstantsPathActual);
    await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedClientConstantsPathActualIs + resolvedClientConstantsPathActual);
    await configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkConstantsPath, resolvedFrameworkConstantsPathActual);
    await configurator.setConfigurationSetting(wrd.csystem, cfg.capplicationConstantsPath, resolvedClientConstantsPathActual);

    await chiefConstant.initializeConstantsValidationData(); // This just makes sure that the data structure is created on the D-Data structure.
    let frameworkConstantsValidationData = await chiefConstant.generateFrameworkConstantsValidationData();
    let applicationConstantsValidationData = await configData[cfg.capplicationConstantsValidationData].call();
    await loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkConstantsValidationDataIs + JSON.stringify(frameworkConstantsValidationData));
    await loggers.consoleLog(namespacePrefix + functionName, msg.capplicationConstantsValidationDataIs + JSON.stringify(applicationConstantsValidationData));
    await chiefConstant.addConstantsValidationData(frameworkConstantsValidationData, wrd.cFramework);
    await chiefConstant.addConstantsValidationData(applicationConstantsValidationData, wrd.cApplication);
  } // End-if (configurator.getConfigurationSetting(wrd.csystem, cfg.cenableConstantsValidation) === true)

  let enableLogFileOutputSetting = await configurator.getConfigurationSetting(wrd.csystem, cfg.clogFileEnabled);
  if (enableLogFileOutputSetting === true) {
    await loggers.consoleLog(namespacePrefix + functionName, msg.cCaptureSessionDateTimeStampLogFileName);
    let sessionDateTimeStamp = await ruleBroker.processRules([await configurator.getConfigurationSetting(wrd.csystem, cfg.cdateTimeStamp), ''], [biz.cgetNowMoment]);
    await loggers.consoleLog(namespacePrefix + functionName, msg.csessionDateTimeStampIs + sessionDateTimeStamp);
    let logFileName = sessionDateTimeStamp + bas.cUnderscore + applicationMetaData[wrd.cVersion] + bas.cUnderscore + applicationMetaData[wrd.cName] + gen.cDotLog;
    await loggers.consoleLog(namespacePrefix + functionName, msg.clogFileNameIs + logFileName);
    await configurator.setConfigurationSetting(wrd.csystem, cfg.clogFileName, logFileName);
  } // End-if (enableLogFileOutputSetting === true)

  await mergeClientBusinessRules(configData[sys.cclientBusinessRules]);
  await mergeClientCommands(configData[sys.cclientCommands]);
  await loadCommandAliases(''); // This function will now pick up the defaults already saved in the configuration system.
  await loadCommandWorkflows(''); // Same as above.

  // Setup all themes
  if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cdebugSettings) === true) {
    await chiefTheme.initThemes();
    let frameworkThemesPath = configData[cfg.cframeworkThemesPath];
    // frameworkThemesPath is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkThemesPathIs + frameworkThemesPath);
    let frameworkThemeData = await chiefTheme.generateThemeDataFromThemeRootPath(frameworkThemesPath);
    // frameworkThemeData is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkThemeDataIs + JSON.stringify(frameworkThemeData));
    if (frameworkThemeData) {
      await chiefTheme.addThemeData(frameworkThemeData, wrd.cFramework);
    }
    if (configData[cfg.cclientThemesPath]) {
      let applicationThemesPath = configData[cfg.cclientThemesPath];
      // applicationThemesPath is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.capplicationThemesPathIs + applicationThemesPath);
      let applicationThemeData = await chiefTheme.generateThemeDataFromThemeRootPath(applicationThemesPath);
      // applicationThemeData is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.capplicationThemeDataIs + JSON.stringify(applicationThemeData));
      await chiefTheme.addThemeData(applicationThemeData, wrd.cApplication);
    }
  }

  // Setup all schemas
  await loadAllSchemas();

  // NOTE: We need this here, because the plugin itself will try to create an instance of haystacks to re-use its functionality.
  // When that happens the plugin will send execution back here and haystacks would again try to load the plugin from within the plugin!
  // We MUST prevent this from happening. So I've dropped this here to allow the plugin to control the loading of nested plugins.
  // -------------
  // NOTE: Apparently this is not an issue for the plugin?!? Maybe?
  // console.log('--Determine if the plugin is the one loading haystacks.');
  // if (configData[cfg.cenablePluginLoader] != null || configData[cfg.cenablePluginLoader] != undefined) {
  //   console.log('--Plugin IS LOADING Haystacks!!')
  //   console.log('--Determine if the plugin has disabled the plugin loader setting.');
  //   if (configData[cfg.cenablePluginLoader] === false) {
  //     console.log('--Plugin loader setting has been disabled successfully!');
  //     await configurator.setConfigurationSetting(wrd.csystem, cfg.cenablePluginLoader, false);
  //     console.log('--Force the configruation setting to disable the plugin loader!');
  //   }
  //   console.log('--DONE checking and disabling the plugin loader setting.');
  // }
  // console.log('--DONE checking if the plugin is the one loading the haystacks.');

  // console.log('--Now check if the plugin Loader setting is enabled or not');
  if (await configurator.getConfigurationSetting(wrd.csystem, cfg.cenablePluginLoader) === true) {
    // console.log('--Plugin loader is still enabled!');
    let pluginRegistryPath = path.resolve(configData[cfg.cclientRegisteredPlugins]);
    // pluginRegistryPath is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRegistryPathIs + pluginRegistryPath);
    await configurator.setConfigurationSetting(wrd.csystem, cfg.cpluginRegistryPath, pluginRegistryPath);
    let pluginRegistryData = await chiefPlugin.loadPluginRegistryData(pluginRegistryPath);
    // pluginRegistryData is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginRegistryDataIs + JSON.stringify(pluginRegistryData));
    await configurator.setConfigurationSetting(wrd.csystem, cfg.cpluginsRootPath, pluginRegistryData[wrd.cpath]);
    let pluginPersistedSuccess = await chiefPlugin.persistPluginRegistryToDataStructure(pluginRegistryData);
    if (pluginPersistedSuccess === true) {
      // The loaded data was saved to the D-data structure, we can continue processing on it now.
      // Should first scan it to determine if it contains any registered plugins.
      // We can add those to the load list.
      // Then should scan the specified path to determine if there are any other plugins that should be loaded and registered.
      // Then add them to the load list as well.
      // Examine if there are any plugins in an excluded list, and don't add them to the load list, and don't register them.
      if (await configurator.getConfigurationSetting(wrd.csystem, cfg.csynchronizePluginRegistryWithPluginFolder) === true) {
        await syncPluginRegistryWithPath();
      }
      await loadPluginsFromRegistry();
    }
  }
  if (await configurator.getConfigurationSetting(wrd.csystem, cfg.clogUserEnteredCommands) === true) {
    await stack.initStack(sys.cUserEnteredCommandLog);
  }
  if (await configurator.getConfigurationSetting(wrd.csystem, cfg.clogAllCommands) === true) {
    await stack.initStack(sys.cSystemCommandLog);
  }
  // We can pass in a name of a configuration setting that has a path to load plugin data this way.
  // console.log('Contents of D are: ' + JSON.stringify(D));
  // console.log(`END ${namespacePrefix}${functionName} function`);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function resetRulesAndCommands
 * @description Clears and then re-initializes the Haystacks platform framework business rules and commands.
 * This is needed because: When Haystacks is used to load plugins, the plugin needs to make a call back to Haystacks
 * to load all the plugin resource non-code files. When the plugin does that it is creating a new instance of Haystacks.
 * The new instance of Haystacks created by the plugin is not the same instance as the original instance of Haystacks.
 * We get around that by injecting all of the data from the original Haystacks into the new plugin-instance of Haystacks.
 * However, when trying to call the business rules or commands using the dependency injected data, the business rules are not found,
 * and cannot be executed. It turns out because the paths are completely different.
 * The original instance of Haystacks initialized all its business rules and commands from the original instance path.
 * So when executing those business rules and those commands it executes that code from those files using that path.
 * However, when trying to pump those same business rules and commands into the plugin instance and then execute the same code,
 * the plugin instance doesn't have access to or know about the paths to those business rules or commands.
 * So therefore the solution is to have the plugin instance of Haystacks to clear and re-initialize its own business rules and commands.
 * That way the plugin instance of Haystacks, when it tries to execute its own business rules and commands it will be doing so using,
 * its own path to those business rules and commands and should therefore work as expected.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2023/02/12
 */
async function resetRulesAndCommands() {
  let functionName = resetRulesAndCommands.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await chiefCommander.reinitializeCommands();
  await ruleBroker.resetBusinessRules();
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function mergeClientBusinessRules
 * @description Merges the map of client defined business rule names and client defined business rule function calls
 * with the existing D-data structure that should already have all of the system defined business rule.
 * @param {object} clientBusinessRules A map of client defined business rule names and client defined business rule function calls.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/09
 */
async function mergeClientBusinessRules(clientBusinessRules) {
  let functionName = mergeClientBusinessRules.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // console.log(`clientBusinessRules is: ${JSON.stringify(clientBusinessRules)}`);
  await ruleBroker.addClientRules(clientBusinessRules);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function mergeClientCommands
 * @description Merges the map of client defined command names and client defined command function calls
 * with the existing D-data structure that should already have all of the system defined commands.
 * @param {object} clientCommands A map of client defined command names and client defined command function calls.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/09
 */
async function mergeClientCommands(clientCommands) {
  let functionName = mergeClientCommands.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // console.log(`clientCommands is: ${JSON.stringify(clientCommands)}`);
  await chiefCommander.addClientCommands(clientCommands);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function loadCommandAliases
 * @description Loads and merges both the system defined command aliases XML file and
 * the client defined command aliases XML file, or an optional user defined command aliases path.
 * @param {string} commandAliasesPath The configuration name of the configuration setting where
 * the path to the commands aliases XML file is stored, that should be loaded (OPTIONAL).
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/09
 */
async function loadCommandAliases(commandAliasesPathConfigName) {
  let functionName = loadCommandAliases.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // commandAliasesPathConfigName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasesPathConfigNameIs + commandAliasesPathConfigName);
  let resolvedSystemCommandsAliasesPath;
  let resolvedClientCommandsAliasesPath;
  let resolvedPluginCommandAliasesPath;
  let resolvedCustomCommandsAliasesPath;
  if (commandAliasesPathConfigName) {
    resolvedCustomCommandsAliasesPath = path.resolve(await configurator.getConfigurationSetting(wrd.csystem, commandAliasesPathConfigName));
    // resolvedCustomCommandsAliasesPath is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedCustomCommandsAliasesPathIs + resolvedCustomCommandsAliasesPath);
    await chiefCommander.loadCommandAliasesFromPath(commandAliasesPathConfigName, wrd.cPlugin);
  } else {
    resolvedSystemCommandsAliasesPath = await configurator.getConfigurationSetting(wrd.csystem, cfg.cframeworkCommandAliasesPath);
    resolvedClientCommandsAliasesPath = await configurator.getConfigurationSetting(wrd.csystem, cfg.cclientCommandAliasesPath);
    // resolvedSystemCommandsAliasesPath is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedSystemCommandsAliasesPathIs + resolvedSystemCommandsAliasesPath);
    // resolvedClientCommandsAliasesPath is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedClientCommandsAliasesPathIs + resolvedClientCommandsAliasesPath);

    await chiefCommander.loadCommandAliasesFromPath(cfg.cframeworkCommandAliasesPath, sys.cFramework);
    await chiefCommander.loadCommandAliasesFromPath(cfg.cclientCommandAliasesPath, wrd.cApplication);

    if (await configurator.getConfigurationSetting(wrd.csystem, sys.cPluginName)) {
      await configurator.getConfigurationSetting(wrd.csystem, cfg.cpluginWorkflowsPath);
      resolvedPluginCommandAliasesPath = await configurator.getConfigurationSetting(wrd.csystem, cfg.cpluginCommandAliasesPath);

      // resolvedPluginCommandAliasesPath is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedPluginCommandsAliasesPathIs + resolvedPluginCommandAliasesPath);
      await chiefCommander.loadCommandAliasesFromPath(cfg.cpluginCommandAliasesPath, wrd.cPlugin);
    }
  }
  // console.log('ALL Loaded command aliases is: ' + JSON.stringify(D[sys.cCommandsAliases]));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function loadCommandWorkflows
 * @description Loads and merges both the system defined command workflows XML file and
 * client defined command workflows XML file, or an optional user defined workflow path.
 * @param {string} workflowPathConfigName The configuration name of the configuration setting where
 * the path to the workflows XML file is stored, that should be loaded (OPTIONAL).
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
async function loadCommandWorkflows(workflowPathConfigName) {
  let functionName = loadCommandWorkflows.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // workflowPathConfigName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowPathConfigurationNameIs + workflowPathConfigName);
  let resolvedSystemWorkflowsPath;
  let resolvedClientWorkflowsPath;
  let resolvedPluginWorkflowsPath;
  let resolvedCustomWorkflowsPath;
  if (workflowPathConfigName) {
    resolvedCustomWorkflowsPath = path.resolve(await configurator.getConfigurationSetting(wrd.csystem, workflowPathConfigName));
    // resolvedCustomWorkflowsPath is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedCustomWorkflowsPathIs + resolvedCustomWorkflowsPath);
    await chiefWorkflow.loadCommandWorkflowsFromPath(workflowPathConfigName, wrd.cPlugin);
  } else {
    resolvedSystemWorkflowsPath = await configurator.getConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath);
    resolvedClientWorkflowsPath = await configurator.getConfigurationSetting(wrd.csystem, cfg.cclientWorkflowsPath);
    // resolvedSystemWorkflowsPath is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedSystemWorkflowsPathIs + resolvedSystemWorkflowsPath);
    // resolvedClientWorkflowsPath is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedClientWorkflowsPathIs + resolvedClientWorkflowsPath);
    await chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, sys.cFramework);
    await chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cclientWorkflowsPath, wrd.cApplication);

    if (await configurator.getConfigurationSetting(wrd.csystem, sys.cPluginName)) {
      await configurator.getConfigurationSetting(wrd.csystem, cfg.cpluginWorkflowsPath);
      resolvedPluginWorkflowsPath = await configurator.getConfigurationSetting(wrd.csystem, cfg.cpluginWorkflowsPath);

      // resolvedPluginWorkflowsPath is:
      await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginWorkflowsPathIs + resolvedPluginWorkflowsPath);
      await chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cpluginWorkflowsPath, wrd.cPlugin);
    }
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function loadAllSchemas
 * @description Loads all of the schema data that will be used to control code behavior and business rule dissemination of execution logic.
 * @return {boolean} True or False to indicate if all of the schema's were loaded and stored or not.
 * @author Seth Hollingsead
 * @date 2024/10/23
 */
async function loadAllSchemas() {
  let functionName = loadAllSchemas.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  await dataBroker.initSchemaStorage();
  let frameworkSchemasPath = await configurator.getConfigurationSetting(wrd.csystem, cfg.cframeworkSchemasPath);
  // frameworkSchemasPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkSchemasPathIs + frameworkSchemasPath);
  let applicationSchemasPath = await configurator.getConfigurationSetting(wrd.csystem, cfg.capplicationSchemasPath);
  // applicationSchemasPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.capplicationSchemasPathIs + applicationSchemasPath);
  if (frameworkSchemasPath) {
    let frameworkSchemasData = await chiefData.loadAllJsonData(frameworkSchemasPath, wrd.cSchemas);
    // frameworkSchemasData is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkSchemasDataIs + JSON.stringify(frameworkSchemasData));
    returnData = await chiefData.storeAllSchemaData([frameworkSchemasData]);
    await configurator.setConfigurationSetting(wrd.csystem, cfg.cschemasLoaded, true);
  }
  if (applicationSchemasPath) {
    let applicationSchemasData = await chiefData.loadAllJsonData(applicationSchemasPath, wrd.cSchemas);
    // applicationSchemasData is:
    await loggers.consoleLog(namespacePrefix + functionName, msg.capplicationSchemasDataIs + JSON.stringify(applicationSchemasData));
    returnData = await chiefData.storeAllSchemaData([applicationSchemasData]);
  }
  // await loggers.consoleLog(namespacePrefix + functionName, 'Contents of D are: ' + JSON.stringify(D));
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function listLoadedPlugins
 * @description This is a wrapper function for chiefPlugin.listLoadedPlugins.
 * Which is in-turn a wrapper function for pluginBroker.listAllLoadedPlugins.
 * @return {array<string>} A list array of the names of the plugins that are currently loaded.
 * @author Seth Hollingsead
 * @date 2023/02/06
 */
async function listLoadedPlugins() {
  let functionName = listLoadedPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = [];
  returnData = await chiefPlugin.listLoadedPlugins();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function listAllPluginsInRegistry
 * @description This is a wrapper function for chiefPlugin.getAllPluginsInRegistry.
 * Which is in-turn a wrapper function for pluginBroker.listPluginsInRegistry.
 * @return {array<string>} A list array of the names of the plugins in the plugin registry.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function listAllPluginsInRegistry() {
  let functionName = listAllPluginsInRegistry.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = [];
  returnData = await chiefPlugin.getAllPluginsInRegistry();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function listAllPluginsInRegistryPath
 * @description This is a wrapper function for chiefPlugin.getAllPluginsInRegistryPath.
 * Which is in-turn a wrapper function for pluginBroker.listPluginsInRegistryPath.
 * @return {array<string>} A list array of the names of the plugins in the plugin registry.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function listAllPluginsInRegistryPath() {
  let functionName = listAllPluginsInRegistryPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = [];
  returnData = await chiefPlugin.getAllPluginsInRegistryPath();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function numberOfPluginsInRegistry
 * @description This is a wrapper function for chiefPlugin.countAllPluginsInRegistry.
 * Which is in-turn a wrapper function for pluginBroker.countPluginsInRegistry.
 * @return {integer} The count of the number of plugins listed in the plugin registry data hive.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function numberOfPluginsInRegistry() {
  let functionName = numberOfPluginsInRegistry.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = 0;
  returnData = await chiefPlugin.countAllPluginsInRegistry();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function numberOfPluginsInRegistryPath
 * @description This is a wrapper function for chiefPlugin.countAllPluginsInRegistryPath.
 * Which is in-turn a wrapper function for pluginBroker.countPluginsInRegistryPath.
 * @return {integer} The count of the number of plugin sub-folders in the plugins path listed in the plugin registry data hive.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function numberOfPluginsInRegistryPath() {
  let functionName = numberOfPluginsInRegistryPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = 0;
  returnData = await chiefPlugin.countAllPluginsInRegistryPath();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function registerPluginByNameAndPath
 * @description This is a wrapper function for chiefPlugin.registerNamedPlugin.
 * Which is in-turn a wrapper function for pluginBroker.registerPlugin.
 * @param {string} pluginName The name of the plugin that should be registered.
 * @param {string} pluginPath The path to the plugin, to be added to the plugin registry.
 * This should be the path to the plugin/package.json file, but not including the package.json as part of the path URI.
 * @return {boolean} True or False to indicate if the plugin was added to the plugin registry successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function registerPluginByNameAndPath(pluginName, pluginPath) {
  let functionName = registerPluginByNameAndPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  // pluginPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginPathIs + pluginPath);
  let returnData = false;
  returnData = await chiefPlugin.registerNamedPlugin(pluginName, pluginPath);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unregisterPluginByName
 * @description This is a wrapper function for chiefPlugin.unregisterNamedPlugin.
 * Which is in-turn a wrapper function for pluginBroker.unregisterPlugin.
 * @param {string} pluginName The name of the plugin that should be removed from the plugin registry.
 * @return {boolean} True or False to indicate if the plugin was removed from the plugin registry successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function unregisterPluginByName(pluginName) {
  let functionName = unregisterPluginByName.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  let returnData = false;
  returnData = await chiefPlugin.unregisterNamedPlugin(pluginName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unregisterPlugins
 * @description This is a wrapper function for chiefPlugin.unregisterPlugins.
 * Which is in-turn a wrapper function for pluginBroker.unregisterPlugins.
 * @param {array<string>} pluginsListArray A list array of plugin names that should be removed from the plugin registry.
 * @return {boolean} True or False to indicate if all the plugins were successfully removed from the plugin registry or not.
 * @author Seth Hollingsead
 * @date 2023/02/07
 */
async function unregisterPlugins(pluginsListArray) {
  let functionName = unregisterPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginsListArray is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginsListArrayIs + JSON.stringify(pluginsListArray));
  let returnData = false;
  returnData = await chiefPlugin.unregisterPlugins(pluginsListArray);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function syncPluginRegistryWithPath
 * @description This is a wrapper function for chiefPlugin.synchronizePluginRegistryWithPath
 * Which is in-turn a wrapper function for pluginBroker.synchPluginRegistryWithPluginRegistryPath.
 * @return {boolean} True or False to indicate if the synchronization was performed successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 * @NOTE It is expected that the number of plugins loaded at any one time will not be crazy high.
 * The function that is called in pluginBroker.synchPluginRegistryWithPluginRegistryPath will
 * do a O(n^2) brute force search,
 * if the number of plugins needed at any one time ever grows much over 100, then this solution will need to be re-evaluated!
 */
async function syncPluginRegistryWithPath() {
  let functionName = syncPluginRegistryWithPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = await chiefPlugin.synchronizePluginRegistryWithPath();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function clearAllPluginRegistry
 * @description This is a wrapper function for chiefPlugin.clearPluginRegistry.
 * Which is in-turn a wrapper function for pluginBroker.unregisterAllPlugins.
 * @return {boolean} True or False to indicate if the plugin registry data hive was cleared successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function clearAllPluginRegistry() {
  let functionName = clearAllPluginRegistry.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = await chiefPlugin.clearPluginRegistry();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function writePluginRegistryToDisk
 * @description This is a wrapper function for chiefPlugin.savePluginRegistryDisk.
 * Which is in-turn a wrapper function for pluginBroker.savePluginRegistry.
 * @return {boolean} True or False to indicate if the plugin registry was successfully saved to the disk or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function writePluginRegistryToDisk() {
  let functionName = writePluginRegistryToDisk.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = await chiefPlugin.savePluginRegistryDisk();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadPlugin
 * @description Calls the plugin initializePlugin function to get the plugin data:
 * Business rules, Commands, Workflows, Constants, Configurations, dependencies ist (dependant plugins), etc...
 * @param {string} pluginPath The fully qualified path where to load the plugin from,
 * or the folder name that will contain the plugin in the plugin registry path.
 * @return {boolean} True or False to indicate if the plugin was loaded successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function loadPlugin(pluginPath) {
  let functionName = loadPlugin.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginPathIs + pluginPath);
  let returnData = false;
  let pluginPathArray = [];
  pluginPathArray[0] = pluginPath;
  returnData = await loadPlugins(pluginPathArray);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadPlugins
 * @description Calls the plugin initializePlugin function to get the plugin data, for each of the plugins in the input array of plugin paths:
 * Business rules, Commands, Workflows, Constants, Configurations, dependencies list (dependant plugins), etc...
 * @param {array<string>} pluginsPaths An array of fully qualified paths where to load the plugins from.
 * @return {boolean} True or False to indicate if all the plugins were loaded or not.
 * @author Seth Hollingsead
 * @date 2022/09/01
 */
async function loadPlugins(pluginsPaths) {
  let functionName = loadPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginsPaths are:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginsPathsAre + JSON.stringify(pluginsPaths));
  let returnData = false;

  let pluginsMetaData = await chiefPlugin.loadAllPluginsMetaData(pluginsPaths);
  let pluginsExecutionPaths = await chiefPlugin.loadAllPluginsExecutionPaths(pluginsMetaData, pluginsPaths);
  let allPluginsData = await chiefPlugin.loadAllPlugins(pluginsExecutionPaths, pluginsMetaData);
  let allPluginsDataIntegrated = await chiefPlugin.integrateAllPluginsData(allPluginsData);
  let loadedVerification = await chiefPlugin.verifyAllPluginsLoaded();

  if (allPluginsDataIntegrated === true && loadedVerification === true) {
    // If and ONLY if both are true, then set returnData to true.
    // This means all the plugins were loaded successfully and all the data from all the plugins was also integrated successfully.
    returnData = true;
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadPluginsFromRegistry
 * @description Calls the plugin initializePlugin function to get teh plugin data, for each of the plugins and their paths from the plugin registry.
 * Business rules, Commands, Workflows, Constants, Configurations, dependencies list (dependant plugins), etc...
 * @return {boolean} True or False to ndicate if all the plugins were loaded or not.
 * @author Seth Hollingsead
 * @date 2022/09/16
 */
async function loadPluginsFromRegistry() {
  let functionName = loadPluginsFromRegistry.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  let pluginPathsArray = await chiefPlugin.getAllPluginsPathsInRegistry();
  // pluginPathsArray is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginPathsArrayIs + JSON.stringify(pluginPathsArray));
  returnData = await loadPlugins(pluginPathsArray);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unloadPlugin
 * @description Calls various functions in the chiefPlugin and pluginBroker to unload and remove all plugin metaData and data for the specified plugin:
 * Business rules, Commands, Workflows, Constants, Configurations, dependencies list (dependant plugins), etc...
 * @param {string} pluginName The name of the plugin that should be unloaded.
 * @return {boolean} True or False to indicate if the plugin was unloaded successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function unloadPlugin(pluginName) {
  let functionName = unloadPlugin.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNameIs + pluginName);
  let returnData = false;
  returnData = await chiefPlugin.unloadPlugin(pluginName);
  if (returnData === false) {
    // ERROR: There was an error unloading the plugin:
    console.log(msg.cErrorUnloadPluginMessage01 + pluginName);
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unloadPlugins
 * @description Calls various functions n the chiefPlugin and pluginBroker to unload and remove all the metaData and data for a list of plugins:
 * Business rules, Commands, Workflows, Constants, Configurations, dependencies list (dependant plugins), etc...
 * @param {array<string>} pluginNames An array ist of names of plugins that should be unloaded.
 * @return {boolean} True or False to indicate if all the plugins were unloaded successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function unloadPlugins(pluginNames) {
  let functionName = unloadPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginNames is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginNamesIs + JSON.stringify(pluginNames));
  let returnData = false;
  let noFailureEncountered = true;
  if (Array.isArray(pluginNames) === true) {
    for (let pluginNameKey in pluginNames) {
      let pluginName = pluginNames[pluginNameKey];
      if (pluginName) {
        await enqueueCommand(cmd.cunloadPlugin + bas.cSpace + pluginName);

      } else {
        // ERROR: No plugin name specified:
        console.log(msg.cErrorUnloadPluginsMessage01 + pluginName);
        noFailureEncountered = false;
      }
    }
  } // End-if (Array.isArray(pluginNames) === true)
  if (noFailureEncountered === true) {
    returnData = true;
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function unloadAllPlugins
 * @description Calls various functions in the chiefPlugin and pluginBroker to unload and remove all plugin metaData and data:
 * Business rules, Commands, Workflows, Constants, Configurations, dependencies ist (dependant plugins), etc...
 * @return {boolean} True or False to indicate if all the plugins were unloaded successfully or not.
 * @author Seth Hollingsead
 * @date 2022/09/15
 */
async function unloadAllPlugins() {
  let functionName = unloadAllPlugins.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  let allLoadedPlugins = await listLoadedPlugins();
  returnData = await unloadPlugins(allLoadedPlugins);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getPluginsRegistryPath
 * @description This is a wrapper function for the chiefPlugin.getPluginsRegistryPath.
 * Which is in-turn a wrapper function for pluginBroker.getPluginsRegistryPath.
 * @return {string} The path to the plugins listed in the plugin registry as meta-data.
 * @author Seth Hollingsead
 * @date 2023/02/07
 */
async function getPluginsRegistryPath() {
  let functionName = getPluginsRegistryPath.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = '';
  returnData = await chiefPlugin.getPluginsRegistryPath();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadPluginResourceData
 * @description Calls the necessary functions to load and parse the resource data from the specified path.
 * @param {string} contextName The type of resource that is being loaded, eg: configuration, commandAliases, workflows, etc...
 * @param {string} pluginResourcePath The fully qualified path to the plugin resource data.
 * @return {object} The JSON data that is loaded and parsed from the plugin path.
 * @author Seth Hollingsead
 * @date 2022/09/09
 */
async function loadPluginResourceData(contextName, pluginResourcePath) {
  let functionName = loadPluginResourceData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // contextName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  // pluginResourcePath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginResourcePathIs + pluginResourcePath);
  let returnData = {};
  switch (contextName) {
    case wrd.cconfiguration:
      returnData = await chiefConfiguration.setupPluginConfiguration(pluginResourcePath);
      break;
    case wrd.ccommand + wrd.cAliases:
      returnData = await chiefCommander.loadCommandAliasesFromPath(pluginResourcePath, wrd.cPlugin);
      break;
    case wrd.cworkflows:
      returnData = await chiefWorkflow.loadCommandWorkflowsFromPath(pluginResourcePath, wrd.cPlugin);
      break;
    case wrd.cthemes:
      returnData = await chiefTheme.generateThemeDataFromThemeRootPath(pluginResourcePath);
      break;
    default:
      // ERROR: Invalid data type specified:
      console.log(msg.cloadPluginResourceDataMessage01 + contextName);
      break;
  }
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadAllJsonData
 * @description Loads all of the JSON data at the specified path.
 * Can be used to load account data, transaction history logs, activity logs, or any other kind of JSON data.
 * @param {string|array<string>} dataPath The path to the JSON files that should be loaded, or the array of files to load.
 * @param {string} contextName The type of data that should be loaded.
 * @return {object} A JSON object that contains all of the data that was loaded and merged together.
 * @author Seth Hollingsead
 * @date 2023/02/27
 */
async function loadAllJsonData(dataPath, contextName) {
  let functionName = loadAllJsonData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataPathIs + JSON.stringify(dataPath));
  // contextName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let returnData = false;
  returnData = await chiefData.loadAllJsonData(dataPath, contextName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function storeData
 * @description Persist some data to the data storage in the D-data structure.
 * @param {string} dataName The name of the data, unique name used to store the data in the data structure.
 * @param {object|string|boolean|number|array} data The data that should be stored.
 * @return {boolean} True or False to indicate if the data was stored successfully or not.
 * @author Seth Hollingsead
 * @date 2023/02/27
 */
async function storeData(dataName, data) {
  let functionName = storeData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataNameIs + dataName);
  // data is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataIs + JSON.stringify(data));
  let returnData = false;
  returnData = await chiefData.storeData(dataName, data);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getData
 * @description Gets data from the D-Data structure data storage data hive.
 * @param {string} dataName The unique name the data should be stored under.
 * @return {object|string|boolean|number|array} The data element or object that was stored if any was found.
 * @author Seth Hollingsead
 * @date 2023/02/27
 */
async function getData(dataName) {
  let functionName = getData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataNameIs + dataName);
  let returnData = false;
  returnData = await chiefData.getData(dataName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function clearData
 * @description Wipes out the data using the unique specified data name,
 * if any is found in the D-0data structure data storage data hive.
 * @param {string} dataName The unique name of the data that should be cleared.
 * @return {boolean} True or False to indicate if the data was cleared successfully or not.
 * @author Seth Hollingsead
 * @date 2023/02/27
 */
async function clearData(dataName) {
  let functionName = clearData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cdataNameIs + dataName);
  let returnData = false;
  returnData = await chiefData.clearData(dataName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function setSchemaData
 * @description Sets the schema data for a specific schema name. This allows for schemas to be over-written / replaced
 * according to a client defined schema. This should be used with caution as it is very easy to cause/introduce breaking changes
 * in the haystacks-async development platform. Extra care should be taken here to only replace a schema with another schema that
 * adds functionality, or changes functionality but does not remove functionality.
 * @param {string} schemaName The name of the schema that is being added.
 * @param {object} schemaDataObject The JSON object that contains the schema data that is being added/replaced/over-written.
 * @return {boolean} True or False to indicate if the schema was successfully added/replaced/over-written.
 * @author Seth Hollingsead
 * @date 2024/12/31
 */
async function setSchemaData(schemaName, schemaDataObject) {
  let functionName = setSchemaData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // schemaName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cschemaNameIs + schemaName);
  // schemaDataObject is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cschemaDataObjectIs + JSON.stringify(schemaDataObject));
  let returnData = false;
  let schemasArray = [];
  let singleSchemaObject = {
    [wrd.cschemas]: {
      [schemaName]: schemaDataObject
    }
  };
  schemasArray.push(singleSchemaObject);
  returnData = await chiefData.storeAllSchemaData(schemasArray);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getSchemaData
 * @description Gets a specific named schema data object, that should be stored in the system, or all schema data if no name is specified.
 * @param {string} schemaName The name of the schema object that should exist in the list of currently loaded schemas.
 * @return {object} A JSON object that contains the schema content for the named schema, if it exists, or all schema data if no name is specified.
 * @author Seth Hollingsead
 * @date 2024/11/22
 */
async function getSchemaData(schemaName) {
  let functionName = getSchemaData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cschemaNameIs + schemaName);
  let returnData = false;
  returnData = await chiefData.getSchemaData(schemaName);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function executeBusinessRules
 * @description A wrapper to call a business rule from the application level code.
 * @param {array<string|integer|boolean|object|function,string|integer|boolean|object|function>} inputs The array of inputs:
 * inputs[0] = inputData - The input to the rule that is being called.
 * inputs[1] = inputMetaData - Additional data the input to the rule.
 * @param {array<string>} businessRules The array that contains the name(s) of the business rule that should be executed.
 * @return {string} The value that is returned from the rule is also returned.
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
async function executeBusinessRules(inputs, businessRules) {
  let functionName = executeBusinessRules.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // inputs is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputsIs + inputs);
  // businessRules is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cbusinessRulesIs + JSON.stringify(businessRules));
  let returnData;
  returnData = await ruleBroker.processRules(inputs, businessRules);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function enqueueCommand
 * @description Adds a command to the command queue.
 * It is worth noting that a command could actually load a whole workflow of commands.
 * So one command can spawn into many commands that cause
 * the command queue to be very full with a very complicated workflow.
 * This also acts as a wrapper for the chiefCommander.enqueueCommand function.
 * @param {string} command The command to add to the command queue for executing.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
async function enqueueCommand(command) {
  let functionName = enqueueCommand.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // command is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.ccommandIs + command);
  await chiefCommander.enqueueCommand(command);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function isCommandQueueEmpty
 * @description This is a wrapper for the chiefCommander.isCommandQueueEmpty function.
 * Determines if the command queue is empty or not,
 * which also determines if the application should continue executing commands from the command queue
 * in sequential order or prompt for another command or exit.
 * @return {boolean} True or False to indicate if command execution should continue or not.
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
async function isCommandQueueEmpty() {
  let functionName = isCommandQueueEmpty.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = await chiefCommander.isCommandQueueEmpty();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function processCommandQueue
 * @description This is just a wrapper for the chiefCommander.processCommandQueue function,
 * which will ultimately call chiefCommander.processCommand to process an individual command.
 * This is because a command could actually invoke a command workflow that might enqueue a bunch of commands
 * to the command queue. All of them must be executed in sequence as part of the main application loop.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
async function processCommandQueue() {
  let functionName = processCommandQueue.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = await chiefCommander.processCommandQueue();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function setConfigurationSetting
 * @description This is just a wrapper for the configurator setConfigurationSetting function.
 * @param {string} configurationNamespace The path in the configuration JSON object
 * where the configuration setting should be set.
 * Ex: businessRules.rules.stringParsing.countCamelCaseWords
 * @param {string} configurationName The key of the configuration setting.
 * @param {string|integer|boolean|double} configurationValue The value of the configuration setting.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
async function setConfigurationSetting(configurationNamespace, configurationName, configurationValue) {
  let functionName = setConfigurationSetting.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // configurationNamespace is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNamespaceIs + configurationNamespace);
  // configurationName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNameIs + configurationName);
  // configurationValue is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationValueIs + configurationValue);
  let returnData = false;
  // D[sys.cConfiguration][configurationName] = configurationValue;
  returnData = await configurator.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData
}

/**
 * @function getConfigurationSetting
 * @description This is just a wrapper for the configurator getConfigurationSetting function.
 * @param {string} configurationNamespace The path in the configuration JSON object
 * where the configuration setting should be found.
 * @param {string} configurationName The key of the configuration setting.
 * @return {string|integer|boolean|double} The value of whatever was stored in the D[configuration].
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
async function getConfigurationSetting(configurationNamespace, configurationName) {
  let functionName = getConfigurationSetting.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // configurationNamespace is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNamespaceIs + configurationNamespace);
  // configurationName is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNameIs + configurationName);
  // let returnConfigurationValue = D[sys.cConfiguration][configurationName];
  let returnConfigurationValue = await configurator.getConfigurationSetting(configurationNamespace, configurationName);
  // returnConfigurationValue is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnConfiguraitonValueIs + returnConfigurationValue);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnConfigurationValue;
}

/**
 * @function consoleLog
 * @description This is just a wrapper for the loggers.consoleLog function.
 * @param {string} classPath The class path for the caller of this function file.function or class.method.
 * @param {string|boolean|integer|object} message The message or data content that should be dumped to the output.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/16
 * @NOTE We cannot instrument this code with calls to loggers.consoleLog as it would introduce yet another circular dependency.
 * We will have to stick with just hard coded console.logs in this case to debug at this level.
 */
async function consoleLog(classPath, message) {
  // let functionName = consoleLog.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`classPath is: ${classPath}`);
  // console.log(`message is: ${message}`);
  await loggers.consoleLog(classPath, message);
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function consoleTableLog
 * @description This is just a wrapper for the loggers.consoleTableLog function,
 * It prints out a table with the data provided in the input tableDataArray.
 * @param {string} classPath The class path for the caller of this function file.function or class.method.
 * @param {array<object>} tableData An array of objects that should be printed to the console as if it was data.
 * @param {array<string>} columnNames An array of column names that should be used when outputting the table.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2023/11/07
 */
async function consoleTableLog(classPath, tableData, columnNames) {
  // let functionName = consoleTableLog.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`classPath is: ${classPath}`);
  // console.log(`tableData is: ${JSON.stringify(tableData)}`);
  // console.log(`columnNames is: ${JSON.stringify(columnNames)}`);
  await loggers.consoleTableLog(classPath, tableData, columnNames);
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

export default {
  processRootPath,
  initFrameworkSchema,
  resetRulesAndCommands,
  mergeClientBusinessRules,
  mergeClientCommands,
  loadCommandAliases,
  loadCommandWorkflows,
  loadAllSchemas,
  listLoadedPlugins,
  listAllPluginsInRegistry,
  listAllPluginsInRegistryPath,
  numberOfPluginsInRegistry,
  numberOfPluginsInRegistryPath,
  registerPluginByNameAndPath,
  unregisterPluginByName,
  unregisterPlugins,
  syncPluginRegistryWithPath,
  clearAllPluginRegistry,
  writePluginRegistryToDisk,
  loadPlugin,
  loadPlugins,
  loadPluginsFromRegistry,
  unloadPlugin,
  unloadPlugins,
  unloadAllPlugins,
  getPluginsRegistryPath,
  loadPluginResourceData,
  loadAllJsonData,
  storeData,
  getData,
  clearData,
  setSchemaData,
  getSchemaData,
  executeBusinessRules,
  enqueueCommand,
  isCommandQueueEmpty,
  processCommandQueue,
  setConfigurationSetting,
  getConfigurationSetting,
  consoleLog,
  consoleTableLog
};
