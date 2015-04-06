_ws.vm = new _intv_VoiceModule(_ws, 'RP1050_LanguageCheck');

_ws.vm.addInitialPromptGroup();
  _ws.vm.addInitialPrompt('RP1050_i_1');  /* For service in French, press 9 */

// TODO addMenuItem: First parameter must match the grammar return data
_ws.vm.addMenuItemConfirmNever('english', 'CHOICE',  '1');
// TODO addMenuItem: First parameter must match the grammar return data
_ws.vm.addMenuItemConfirmNever('french', 'CHOICE',  '9');
//TODO addMenuItem: First parameter must match the grammar return data

_ws.vm.setGrammar('RP1050_LanguageCheck.grxml', 'dtmf');


