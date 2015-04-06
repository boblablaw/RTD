// FASTPATH GENERATED FILE - DO NOT EDIT


_ws.vm = new _intv_VoiceModule(_ws, 'ID3600_CallTypeCheckNonVantage');




_ws.vm.addInitialPromptGroup();
  // IFCONDITION: If Task = AgentRequest
  if (_ws.gateKeeper.getString("Task").equalsIgnoreCase("AgentRequest"))
  {
    _ws.vm.addInitialPrompt('ID3600_i_1');  /* Before I transfer you, please say what instrument you're calling about. */
  }
  // ELSECONDITION: Else
  else if (true)
  {
    // IFCONDITION: Else if SupportType = Literature
    //if (_ws.gateKeeper.getString("SupportType").equalsIgnoreCase("Literature"))
    //{
    //  _ws.vm.addInitialPrompt('ID3350_i_2');  /* What instrument are you calling about? */
    //}
    // ELSECONDITION: Else
    //else if (true)
    //{
      _ws.vm.addInitialPrompt('ID3350_i_1');  /* And finally, what instrument are you calling about? */
    //}
  }
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('ID3350_r_1');  /* What's the name of the instrument? */
_ws.vm.addNomatchPromptGroup('2', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNomatchPrompt('ID3350_r_2');  /* Please say the name of the instrument once more. */
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('ID3350_r_1');  /* What's the name of the instrument? */
_ws.vm.addNoinputPromptGroup('2', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNoinputPrompt('ID3350_r_2');  /* Please say the name of the instrument once more. */
_ws.vm.addDisconfirmPromptGroup('1', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addDisconfirmPrompt('ID3350_r_1');  /* What's the name of the instrument? */
_ws.vm.addDisconfirmPromptGroup('2', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addDisconfirmPrompt('ID3350_r_2');  /* Please say the name of the instrument once more. */
   {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_5', 'messageid' ];  /* Was that nine seventeen rack  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('917rack', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_6', 'messageid' ];  /* Was that accuchek inform Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('accuchekinform', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('accuchekinform','CHOICE','null');
  }
   var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('representative', 'GLOBAL', 'null', promptArray);
  }
_ws.vm.setGrammar('ID3350_RTDProductName.grxml', 'voice');

/*TODO DEV_NOTES 3350, 3400 and 3450 have the same verbiage, and are only separate modules so that the serial numbers may be separated by family line, so as to improve recognition.*/
