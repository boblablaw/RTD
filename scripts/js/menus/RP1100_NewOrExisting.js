// FASTPATH GENERATED FILE - DO NOT EDIT

_ws.vm = new _intv_VoiceModule(_ws, 'RP1100_NewOrExisting');

_ws.vm.addInitialPromptGroup();
  // IFCONDITION: If Played1300 = True

  // EDIT JASON: Asking if calling about Blood Gas
  //if (_ws.gateKeeper.getBoolean("Played1300"))
  //{
    //_ws.vm.addInitialPrompt('RP1100_e_1');  /* Are you calling about a case that already exists? */
    _ws.vm.addInitialPrompt('RP1100_i_1');  /* Are you calling about a case that already exists? */
  //}
  // ELSECONDITION: Else
  //else if (true)
  //{
  //  _ws.vm.addInitialPrompt('RP1100_i_2');  /* First, are you calling about a case that already exists? */
  //}
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('RP1100_r_1');  /* Are you calling about a case that has already been created?  Yes or no? */
_ws.vm.addNomatchPromptGroup('2', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNomatchPrompt('RP1100_r_2');  /* If you're calling about a case that has already been created with us, say 'yes' or press 1.  To ask about a new issue, say 'no' or press 2. */
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('RP1100_r_1');  /* Are you calling about a case that has already been created?  Yes or no? */
_ws.vm.addNoinputPromptGroup('2', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNoinputPrompt('RP1100_r_2');  /* If you're calling about a case that has already been created with us, say 'yes' or press 1.  To ask about a new issue, say 'no' or press 2. */
_ws.vm.addDisconfirmPromptGroup('1', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_1');  /* I'm sorry. */
_ws.vm.addDisconfirmPromptGroup('2', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_2');  /* My mistake. */
// TODO addMenuItem: First parameter must match the grammar return data
_ws.vm.addMenuItemConfirmNever('yes', 'CHOICE',  '1');
// TODO addMenuItem: First parameter must match the grammar return data
_ws.vm.addMenuItemConfirmNever('no', 'CHOICE',  '2');
//TODO addMenuItem: First parameter must match the grammar return data

{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('representative', 'GLOBAL', '1', promptArray);
}

_ws.vm.setGrammar('RP1100_NewOrExisting.grxml', 'voice');


