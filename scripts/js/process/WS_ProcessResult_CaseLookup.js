var wsClarifyCaseLookupReply = _ws.caseLookupResult;
_ws.errorCode = wsClarifyCaseLookupReply.getErrorCode();
_ws.accountNumber = wsClarifyCaseLookupReply.getAccountNumber();
_ws.instrumentName = wsClarifyCaseLookupReply.getInstrumentName();
_ws.errorDesc = wsClarifyCaseLookupReply.getErrorDesc();

//_ws.log('custom log:','>>> errorCode: ' + _ws.errorCode + '|accountNumber: ' +  _ws.accountNumber + '|instrumentName: ' + _ws.instrumentName + '|errorDesc: ' + _ws.errorDesc);
