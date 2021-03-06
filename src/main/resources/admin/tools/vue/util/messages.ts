export const dialog = {
  selectCtyFolder: 'Please select the content-types folder.',
  selectXml: 'Please select a content type XML schema.',
  defineCtyName: 'What is the name of the new content type?',
  loading: 'Loading content type schema...',
  savedCty: 'Your changes have been saved.',
  confirm: 'Are you sure ?',
  changesInCty:
    'You have made changes to the schema which will be lost if you continue. Do you want to save your changes ?',
};

export const error = {
  fileNotXml: 'This is not a XML file.',
  saveXml: 'Failed to save the content type schema.',
  folderNotCty: (selectedFolderName: string) => `Please select the content-types folder, you've selected a folder named ${selectedFolderName}.`,
  incompatibleBrowser: 'This application is using features that are currently not supported by your browser. Please use Google Chrome.',
  rules: {
    required: 'This field is required.',
    validRegex: 'This regular expression is not valid.',
    noSpaces: 'This field does not allow spaces.',
    numbersOnly: 'This field has to be a number.',
    numberNonNegative: 'This field has to be a non negative number.',
  },
};
