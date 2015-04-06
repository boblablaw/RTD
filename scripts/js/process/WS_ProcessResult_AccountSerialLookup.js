var wsClarifyAccountSerialLookupReply = _ws.accountSerialLookupResult;
_ws.errorCode = wsClarifyAccountSerialLookupReply.getErrorCode();
_ws.instrumentName = wsClarifyAccountSerialLookupReply.getInstrumentName();
_ws.errorDesc = wsClarifyAccountSerialLookupReply.getErrorDesc();

//_ws.log('custom log:','>>> errorCode: ' + _ws.errorCode + '|instrumentName: ' +  _ws.instrumentName + '|errorDesc: ' + _ws.errorDesc);
