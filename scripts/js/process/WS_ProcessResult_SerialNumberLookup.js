var wsClarifySerialLookupReply = _ws.serialLookupResult;
_ws.errorCode = wsClarifySerialLookupReply.getErrorCode();
_ws.accountNumber = wsClarifySerialLookupReply.getAccountNumber();
_ws.instrumentName = wsClarifySerialLookupReply.getInstrumentName();
_ws.errorDesc = wsClarifySerialLookupReply.getErrorDesc();

//_ws.log('custom log:','>>> errorCode: ' + _ws.errorCode + '|accountNumber: ' +  _ws.accountNumber + '|instrumentName: ' + _ws.instrumentName + '|errorDesc: ' + _ws.errorDesc);
