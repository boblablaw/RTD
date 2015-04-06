
// FASTPATH GENERATED FILE - DO NOT EDIT

_ws.vm = new _intv_VoiceModule(_ws, 'RP1400_SerialNumberCheck');

_ws.vm.addInitialPromptGroup();
  // IFCONDITION: If Played1300 = True

  // EDIT JASON: Asking if calling about Blood Gas
  //if (_ws.gateKeeper.getBoolean("Played1300"))
  //{
    //_ws.vm.addInitialPrompt('RP1400_e_1');  /* Are you calling about a case that already exists? */
    _ws.vm.addInitialPrompt('RP1400_i_1');  /* Are you calling about a case that already exists? */
  //}
  // ELSECONDITION: Else
  //else if (true)
  //{
  //  _ws.vm.addInitialPrompt('RP1400_i_2');  /* First, are you calling about a case that already exists? */
  //}
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('RP1400_r_1');  
_ws.vm.addNomatchPromptGroup('2', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNomatchPrompt('RP1400_r_1');  
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('RP1400_r_1');  
_ws.vm.addNoinputPromptGroup('2', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNoinputPrompt('RP1400_r_2');  
_ws.vm.addDisconfirmPromptGroup('1', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_1');  /* I'm sorry. */
_ws.vm.addDisconfirmPromptGroup('2', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_2');  /* My mistake. */
// TODO addMenuItem: First parameter must match the grammar return data
_ws.vm.addMenuItemConfirmNever('yes', 'CHOICE',  '1');
// TODO addMenuItem: First parameter must match the grammar return data
_ws.vm.addMenuItemConfirmNever('no', 'CHOICE',  '2');
_ws.vm.addMenuItemConfirmNever('idontknow', 'CHOICE',  '3');
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('representative', 'GLOBAL', '1', promptArray);
}

_ws.vm.setGrammar('RP1400_SerialNumberCheck.grxml', 'voice');