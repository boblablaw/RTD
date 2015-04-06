_ws.speechProperties  = new _intv_VoiceModuleSpeechProperties();
_ws.speechProperties.timeout     	  = '5000ms';
//_ws.speechProperties.interdigittimeout = '5000ms';
_ws.speechProperties.confidencelevel   = '0.3';
_ws.speechProperties.sensitivity       = '0.4';
//_ws.speechProperties.speedvsaccuracy   = '0.5';
//_ws.speechProperties.completetimeout   = '1000ms';
//_ws.speechProperties.incompletetimeout = '1500ms';
_ws.speechProperties.maxspeechtimeout  = '30000ms';
//_ws.speechProperties.termtimeout       = '0';

_ws.confirmProperties  = new _intv_VoiceModuleSpeechProperties();
_ws.confirmProperties.timeout     	   = '3000ms';
//_ws.confirmProperties.interdigittimeout = '5000ms';
_ws.confirmProperties.confidencelevel   = '0.3';
_ws.confirmProperties.sensitivity       = '0.4';
//_ws.confirmProperties.speedvsaccuracy   = '0.5';
//_ws.confirmProperties.completetimeout   = '1000ms';
//_ws.confirmProperties.incompletetimeout = '1500ms';
_ws.confirmProperties.maxspeechtimeout  = '5000ms';
//_ws.confirmProperties.termtimeout       = '0';

_ws.moduleParameters = new _intv_VoiceModuleParameters();
//_ws.moduleParameters.ttsFallback       = true;
//_ws.moduleParameters.noInputErrors     = 3;
//_ws.moduleParameters.noMatchErrors     = 3;
//_ws.moduleParameters.maxSpeechTimeoutErrors = 3; // this should be the same as noMatchErrors
_ws.moduleParameters.totalErrors       = 2;
_ws.moduleParameters.confirmLevel      = '0.3';
//_ws.moduleParameters.confirmUseDtmf    = true;
//_ws.moduleParameters.disconfirmErrors  = 2;
//_ws.moduleParameters.confirmGrammar    = 'confirm.grxml';
//_ws.moduleParameters.inputmodes = 'both';

_ws.moduleParameters.retriesCountInTotalErrors = true;
_ws.moduleParameters.timeOutsCountInTotalErrors = true;
_ws.moduleParameters.disconfirmsCountInTotalErrors = true;

_ws.VDN_transfer = 'AGENT'; //AGENT or GROUP  Agent = regular DNIS based routing Group = SCC group
_ws.ctiOn = 'T';

_ws.dataKeys = new Array('VDU', 'primary_dnis', 'primary_ani', 'route_vdn', 'vdu_id', 'ucid');
_ws.ivrNotes = '';
_ws.literatureFlag = 'N';
_ws.accountFound = 'F';
_ws.sccTransfer = '12345';
_ws.sccTransfer = 'N'
_ws.spoofDNIS = 'F';
_ws.testing = 'T';