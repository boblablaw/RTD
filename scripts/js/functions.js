// *******************************************************
// 	Roche  -  RPS
// 	April 2012  :  Developer - Cindy Kepes
//  Convergys, Inc.
//
//	File to hold data functions called from VXML
// *******************************************************


//********************************************************************************
_ws.setCTI_UserData = function(caseNumber, accountNumber, serialNumber, instrumentName, documentType, lotNumber, deliveryMethod, faxNumber, ivrNotes){
	var dataVar = new Array();
	 
	//-----------------------------
	// CTI Variable 1 - Acct Number
	//-----------------------------
	dataVar[0] = new Object();
	dataVar[0].name = "user.ivr_case_number";
	dataVar[0].type = "Str";
	
	if ( (caseNumber  != undefined) && (caseNumber  != '') )  {
		dataVar[0].value = caseNumber ;
	} else {
		dataVar[0].value = " ";
	}
		
	//-----------------------------
	// CTI Variable 2 - Name
	//-----------------------------
	dataVar[1] = new Object();
	dataVar[1].name = "user.ivr_account_number";
	dataVar[1].type = "Str";
	
	if ( (accountNumber  != undefined) && (accountNumber  != '') )  {
		dataVar[1].value = accountNumber ;
	} else {
		dataVar[1].value = " ";
	}
	
	//-----------------------------
	// CTI Variable 3 - Serial # 
	//-----------------------------
	dataVar[2] = new Object();
	dataVar[2].name = "user.ivr_serial_number";
	dataVar[2].type = "Str";
	
	if ( (serialNumber != undefined) && (serialNumber != '') )  {
		dataVar[2].value = serialNumber;
	} else {
		dataVar[2].value = " ";
	}
	
	//-----------------------------
	// CTI Variable 4 - Instrument Name
	//-----------------------------
	
	dataVar[3] = new Object();
	dataVar[3].name = "user.ivr_instrument_name";
	dataVar[3].type = "Str";
	
	if ( (instrumentName != undefined) && (instrumentName  != '') )  {
		dataVar[3].value = instrumentName ;
	} else {
		dataVar[3].value = " ";
	}
	
	//-----------------------------
	// CTI Variable 5 - Document Type
	//-----------------------------
	
	dataVar[4] = new Object();
	dataVar[4].name = "user.ivr_document_type";
	dataVar[4].type = "Str";
	
	if ( (documentType != undefined) && (documentType  != '') )  {
		dataVar[4].value = documentType ;
	} else {
		dataVar[4].value = " ";
	}
	
	//-----------------------------
	// CTI Variable 6 - Lot Numbwer
	//-----------------------------
	
	dataVar[5] = new Object();
	dataVar[5].name = "user.ivr_lot_number";
	dataVar[5].type = "Str";
	
	if ( (lotNumber != undefined) && (lotNumber  != '') )  {
		dataVar[5].value = lotNumber ;
	} else {
		dataVar[5].value = " ";
	}

	//-----------------------------
	// CTI Variable 7 - Delivery Method
	//-----------------------------
	
	dataVar[6] = new Object();
	dataVar[6].name = "user.ivr_delivery_method";
	dataVar[6].type = "Str";
	
	if ( (deliveryMethod != undefined) && (deliveryMethod  != '') )  {
		dataVar[6].value = deliveryMethod ;
	} else {
		dataVar[6].value = " ";
	}

	//-----------------------------
	// CTI Variable 8 - Fax Number
	//-----------------------------
	
	dataVar[7] = new Object();
	dataVar[7].name = "user.ivr_fax_number";
	dataVar[7].type = "Str";
	
	if ( (faxNumber != undefined) && (faxNumber  != '') )  {
		dataVar[7].value = faxNumber ;
	} else {
		dataVar[7].value = " ";
	}
	//-----------------------------
	// CTI Variable 9 - Notes - free form notes, defined in IVR app for CSR 
	//-----------------------------
	dataVar[8] = new Object();
	dataVar[8].name = "user.ivr_notes";
	dataVar[8].type = "Str";
	
	if ( (ivrNotes != undefined) && (ivrNotes != '') )  {
		dataVar[8].value = ivrNotes;
	} else {
		dataVar[8].value = " ";
	}	
	
	return dataVar;
}

//Default VDN

_ws.defaultVDN = function(dnis, language){
	var transfer='';
	transfer = '30453'
	return transfer;
}

//custom logger
_ws.log = function(tag, msg) {
	if(! _ws.F_suppressLogger) {
		_intv_USERLOG_INFO(tag + msg);
	}
}

//Default server

_ws.defaultServer = function(host){
	var appStartURL='';
	if (host == 'ridms519'){
		appStartURL = 'http://RIDMS519:8080/';
	}else if (host == 'ridms108'){
		appStartURL = 'http://RIDMS108:8080/';
	}else if (host == 'ridms111'){
		appStartURL = 'http://RIDMS111:8080/';
	}else {appStartURL = 'http://RIDMS519:8080/'}
	return appStartURL;
}