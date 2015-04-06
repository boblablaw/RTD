// FASTPATH GENERATED FILE - DO NOT EDIT

_ws.vm = new _intv_VoiceModule(_ws, 'ID3650_NonDPVantageInstrument');

_ws.vm.addInitialPromptGroup();
_ws.vm.addInitialPrompt('ID3650_i_1');  /* And lastly, are you calling about an instrument or software issue?  Say yes or press 1 or say No or Press 2 */

_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('ID3650_r_1');  /* are you calling about a hardware or software issue?  Say yes or press 1, or say No or press 2. */
_ws.vm.addNomatchPromptGroup('2', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNomatchPrompt('ID3650_r_1');  /* are you calling about a hardware or software issue?  Say yes or press 1, or say No or press 2. */
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('ID3650_r_1');  /* are you calling about a hardware or software issue?  Say yes or press 1, or say No or press 2. */
_ws.vm.addNoinputPromptGroup('2', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNoinputPrompt('ID3650_r_1');  /* are you calling about a hardware or software issue?  Say yes or press 1, or say No or press 2. */
_ws.vm.addDisconfirmPromptGroup('1', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addDisconfirmPrompt('ID3650_r_1');  /* are you calling about a hardware or software issue?  Say yes or press 1, or say No or press 2. */
_ws.vm.addDisconfirmPromptGroup('2', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addDisconfirmPrompt('ID3650_r_1');  /* are you calling about a hardware or software issue?  Say yes or press 1, or say No or press 2. */
 
  {
  var promptArray = [];
  var promptCounter = 0;
  _ws.vm.addMenuItemConfirmNever('rtd','CHOICE','1');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  _ws.vm.addMenuItemConfirmNever('rtdreagents','CHOICE','2');
  }

{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  _ws.vm.addMenuItem('representative', 'GLOBAL', '0', promptArray);
}
  
_ws.vm.setGrammar('ID3650_NonDPVantageInstrument.grxml', 'voice');