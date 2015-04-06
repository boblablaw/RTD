// FASTPATH GENERATED FILE - DO NOT EDIT


_ws.vm = new _intv_VoiceModule(_ws, 'IS7020_Get_Case_Number');




_ws.vm.addInitialPromptGroup();
  _ws.vm.addInitialPrompt('is7020_i_1');  /* Let's try something else.  Say or enter the investigation case number. */
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('global_i_5000');  /* Sorry, I didn't get that. */
  _ws.vm.addNomatchPrompt('is7020_r_2');  /* Say or enter the case number.  Or say "I don't have it". */
_ws.vm.addNomatchPromptGroup('2', 'sequence', false);
  _ws.vm.addNomatchPrompt('is7020_r_3');  /* Please Enter the case number.  If you dont have it press *. */
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('is7020_r_2');  /* Say or enter the case number.  Or say "I don't have it". */
_ws.vm.addNoinputPromptGroup('2', 'sequence', false);
  _ws.vm.addNoinputPrompt('is7020_r_3');  /* Please Enter the case number.  If you dont have it press *. */
_ws.vm.addDisconfirmPromptGroup('1', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('global_i_5001');  /* I'm sorry about that. */
  _ws.vm.addDisconfirmPrompt('is7020_r_2');  /* Say or enter the case number.  Or say "I don't have it". */
_ws.vm.addDisconfirmPromptGroup('2', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('is7020_r_3');  /* Please Enter the case number.  If you dont have it press *. */
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'is7020_c_1', 'messageid' ];  /* That was... */
  {
    var f = _ws.gateKeeper._getDataFormat("casenumber");
    promptArray[promptCounter++] = [ '<Result>', f ];
  }
  promptArray[promptCounter++] = [ 'is7020_c_2', 'messageid' ];  /* Is that right? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('casenumber', 'DATA', '', promptArray);
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'is7020_c_3', 'messageid' ];  /* You don't have a case number. Is that correct? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('idonthaveit', 'CHOICE',  '*', promptArray);
}
// Dynamic menu item - only available under the following conditions
if ((!(_ws.gateKeeperStateManager.getCurrentState().equalsIgnoreCase("AM4100_HiddenPassword")))
   )
// Dynamic menu item - only available under the following conditions
if ((!(_ws.gateKeeperStateManager.getCurrentState().equalsIgnoreCase("AM4100_HiddenPassword")))
   )
{
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItemConfirmNever('repeat', 'GLOBAL', 'null');
}
// TODO addMenuItem: First parameter must match the grammar return data
_ws.vm.addMenuItemConfirmNever('mainmenu', 'GLOBAL', 'null');
_ws.vm.setGrammar('IS7020_Get_Case_Number.grxml', 'voice');
_ws.vm.addParallelGrammar('builtin:dtmf/digits?language=en-US;minlength=8;maxlength=8', 'dtmf');


/*TODO DEV_NOTES 9 digit string*/
