// FASTPATH GENERATED FILE - DO NOT EDIT


_ws.vm = new _intv_VoiceModule(_ws, 'ID3150_RTDSerialNum');




_ws.vm.addInitialPromptGroup();
  _ws.vm.addInitialPrompt('ID3150_i_1');  /* Now say the instrument serial number one digit at a time, including any leading zeroes or dashes. */
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('ID3150_r_1');  /* Say or enter the serial number one digit at a time. Include any zeros at the beginning of the serial number, and say “dash” or press the star key for any dashes…or say ‘I don’t know it’ */
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('ID3150_r_1');  /* Say or enter the serial number one digit at a time. Include any zeros at the beginning of the serial number, and say “dash” or press the star key for any dashes…or say ‘I don’t know it’ */
_ws.vm.addDisconfirmPromptGroup('1', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addDisconfirmPrompt('ID3150_r_1');  /* Say or enter the serial number one digit at a time. Include any zeros at the beginning of the serial number, and say “dash” or press the star key for any dashes…or say ‘I don’t know it’ */
{
  var promptArray = [];
  var promptCounter = 0;
  {
    var f = _ws.gateKeeper._getDataFormat("serialnumber");
    promptArray[promptCounter++] = [ '<Result>', f ];
  }
  promptArray[promptCounter++] = [ 'ID3150_c_1', 'messageid' ];  /* Is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItemConfirmAlways('serialnumber', 'DATA', '<0-9,*>', promptArray);
  // TODO need to create dtmf grammar
  _ws.vm.addParallelGrammar('ID3150_RTDSerialNum_dtmf.grxml', 'dtmf');
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3150_c_2', 'messageid' ];  /* You said you don't know it, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('idontknowit', 'CHOICE',  '3', promptArray);
}

{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  //TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('representative', 'GLOBAL', '0', promptArray);
}

_ws.vm.setGrammar('ID3150_RTDSerialNum.grxml', 'voice');

/*TODO DEV_NOTES 3100-3225 have similar verbiage, and are only separate modules so that the serial numbers may be separated by family line and string type, so as to improve recognition.  The grammar in support of this module will be static, but is not documented here as the pattern is unconstrained and the list is long.*/
