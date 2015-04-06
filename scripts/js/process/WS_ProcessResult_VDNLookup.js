var wsVDNLookupReply = _ws.vDNRoutingLookupResult;
_ws.errorCode = wsVDNLookupReply.getErrorCode();
_ws.transferVDN = wsVDNLookupReply.getVDN();
_ws.errorDesc = wsVDNLookupReply.getErrorDesc();

//_ws.log('custom log:','>>> errorCode: ' + _ws.errorCode + '|vdn: ' +  _ws.transferVDN + '|errorDesc: ' + _ws.errorDesc);
