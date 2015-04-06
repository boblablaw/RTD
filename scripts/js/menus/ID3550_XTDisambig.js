_ws.vm = new _intv_VoiceModule(_ws, 'ID3550_XTDisambig');

_ws.vm.addInitialPromptGroup();
  _ws.vm.addInitialPrompt('ID3550_i_1');  /* Is that e411 or u411? */
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('ID3550_i_1');  /* Is that e411 or u411? */
_ws.vm.addNomatchPromptGroup('2', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNomatchPrompt('ID3550_i_1');  /* Is that e411 or u411? */
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('ID3550_i_1');  /* Is that e411 or u411? */
_ws.vm.addNoinputPromptGroup('2', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNoinputPrompt('ID3550_r_1');  /* Is that e411 or u411? */
  
{
  _ws.vm.addMenuItemConfirmNever('benchmarkxtlt','CHOICE','null');
}
{
  _ws.vm.addMenuItemConfirmNever('discoveryxt','CHOICE','null');
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  _ws.vm.addMenuItem('representative', 'GLOBAL', '0', promptArray);
}

_ws.vm.setGrammar('ID3550_XTDisambig.grxml', 'voice');