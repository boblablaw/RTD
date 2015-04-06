_ws.vm = new _intv_VoiceModule(_ws, 'RP1150_CaseNumber');

_ws.vm.addInitialPromptGroup();
  _ws.vm.addInitialPrompt('RP1150_i_1');  /* Please say or enter your 7 digit case ID. */
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('RP1150_r_1');  /* Please say or enter your 7 digit case ID, or just say, 'I don't know it'. */
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('RP1150_r_1');  /* Please say or enter your 7 digit case ID, or just say, 'I don't know it'. */
_ws.vm.addDisconfirmPromptGroup('1', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addDisconfirmPrompt('RP1150_r_1');  /* Please say or enter your 7 digit case ID, or just say, 'I don't know it'. */
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'RP1150_c_1', 'messageid' ];  /* Was that... */
  {
    var f = _ws.gateKeeper._getDataFormat("caseid");
    promptArray[promptCounter++] = [ '<Result>', f ];
  }
  promptArray[promptCounter++] = [ 'RP1150_c_2', 'messageid' ];  /* Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItemConfirmAlways('caseid', 'DATA', '<[87] 7 digits>', promptArray);
  _ws.vm.addMenuItemConfirmAlways('caseid', 'DATA', 'null', promptArray);
  // TODO need to create dtmf grammar
  _ws.vm.addParallelGrammar('RP1150_CaseNumber_dtmf.grxml', 'dtmf');
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'RP1150_c_3', 'messageid' ];  /* You don't know or have it, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('dontknowit', 'CHOICE',  'null', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('representative', 'GLOBAL', '1', promptArray);
}
_ws.vm.setGrammar('RP1150_CaseNumber.grxml', 'voice');


