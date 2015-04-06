var wsClarifyAccountLookupReply = _ws.accountLookupResult;
_ws.errorCode = wsClarifyAccountLookupReply.getErrorCode();
_ws.accountFound = wsClarifyAccountLookupReply.getAccountFound();
_ws.errorDesc = wsClarifyAccountLookupReply.getErrorDesc();

//_ws.log('custom log:','>>> errorCode: ' + _ws.errorCode + '|accountFound: ' +  _ws.accountFound + '|errorDesc: ' + _ws.errorDesc);
