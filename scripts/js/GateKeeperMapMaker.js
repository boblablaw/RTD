  try {
   _ws.gateKeeper = new Packages.com.intervoice.fastpath.gatekeeper.GateKeeper();
   _ws.gateKeeper.createMapEntry("MultipleProductsAssociatedWithSerialNumber", Packages.com.intervoice.fastpath.gatekeeper.GateKeeperMapEntry.Type.BOOLEAN);
   _ws.gateKeeper.createMapEntry("Played1300", Packages.com.intervoice.fastpath.gatekeeper.GateKeeperMapEntry.Type.BOOLEAN);
   _ws.gateKeeper.createMapEntry("TransferReason", Packages.com.intervoice.fastpath.gatekeeper.GateKeeperMapEntry.Type.STRING);
   //_ws.gateKeeper.createMapEntry("RASSkillIsOpen", Packages.com.intervoice.fastpath.gatekeeper.GateKeeperMapEntry.Type.BOOLEAN);
   _ws.gateKeeper.createMapEntry("StringType", Packages.com.intervoice.fastpath.gatekeeper.GateKeeperMapEntry.Type.STRING);
   _ws.gateKeeper.createMapEntry("DNIS", Packages.com.intervoice.fastpath.gatekeeper.GateKeeperMapEntry.Type.STRING);
   //_ws.gateKeeper.createMapEntry("RCCSkillIsOpen", Packages.com.intervoice.fastpath.gatekeeper.GateKeeperMapEntry.Type.BOOLEAN);
   _ws.gateKeeper.createMapEntry("GotProductName", Packages.com.intervoice.fastpath.gatekeeper.GateKeeperMapEntry.Type.BOOLEAN);
   _ws.gateKeeper.createMapEntry("SupportType", Packages.com.intervoice.fastpath.gatekeeper.GateKeeperMapEntry.Type.STRING);
   _ws.gateKeeper.createMapEntry("Task", Packages.com.intervoice.fastpath.gatekeeper.GateKeeperMapEntry.Type.STRING);
   _ws.gateKeeper.createMapEntry("CaseNumberMatch", Packages.com.intervoice.fastpath.gatekeeper.GateKeeperMapEntry.Type.BOOLEAN);
   _ws.gateKeeper.createMapEntry("NumberType", Packages.com.intervoice.fastpath.gatekeeper.GateKeeperMapEntry.Type.STRING);
   _ws.gateKeeper.createMapEntry("SerialNumberFound", Packages.com.intervoice.fastpath.gatekeeper.GateKeeperMapEntry.Type.BOOLEAN);
   var devHandler = new Packages.com.intervoice.vui.DeveloperGateKeeperRequestHandler();
   _ws.gateKeeper.setDeveloperRequestHandler(devHandler);
   if (_ws.gateKeeperTestMode) {
	   if (_ws.gateKeeperUseFiles) {
		   if (_ws.gateKeeperTestPath == undefined || _ws.gateKeeperTestPath == '') {
			   _ws.gateKeeperTestPath = 'D:\\\\Intervoice\\testdata\\FastPath\\';
		   }
	       var fileName = _ws.gateKeeperTestPath  + _ws.gateKeeperTestId + '_data.csv';
	       var testHandler = new Packages.com.intervoice.fastpath.gatekeeper.GateKeeperTestRequestHandler(new Packages.com.intervoice.fastpath.gatekeeper.CacheCSVLoader(fileName));
	       _ws.gateKeeper.setTestingRequestHandler(testHandler);
	       _ws.gateKeeper.setTestingMode(true);
     }
     else {
    	 var gateKeeperDBHost =  _ws.session.connection.remote.uri.split('@')[1].split(':')[0]; 
    	 var testHandler = new Packages.com.intervoice.fastpath.gatekeeper.GateKeeperTestRequestHandler(new Packages.com.intervoice.fastpath.gatekeeper.CacheDBLoader(gateKeeperDBHost, _ws.gateKeeperVuiId, _ws.gateKeeperTestId));
    	 _ws.gateKeeper.setTestingRequestHandler(testHandler);
    	 _ws.gateKeeper.setTestingMode(true);
     }
   }
   _ws.gateKeeperStateManager = new _intv_StateManager();
  }
  catch (e) {
   throw new Error(e.message, e.message);
  }
