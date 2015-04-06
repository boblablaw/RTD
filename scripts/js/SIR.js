_ws.SIR = new Object();
_ws.SIR.IDRWrapper = new IDRWrapper();

function IDRWrapper() {
   //
   // Attributes for the IDRWrapper object
   // Values should only be changed with following function calls
   //
   this.customer_id				= '';
   this.iso3_language_cd		= '';
   this.application_disposition_cd	= '';
   this.feature_bit_field		= '';
   this.term_checkpoint_utc_tm	= '';
   this.term_checkpoint_cd		= '';
   this.speech_dip_utc_tm		= '';
   this.user_defined_fld1		= '';
   this.user_defined_fld2		= '';
   this.user_defined_fld3		= '';
   this.user_defined_fld4		= '';
   this.user_defined_fld5		= '';   
   this.global_interaction_key	= '';

   //
   // Function calls for the IDRWrapper object
   //
   this.f_setCustomerId = setCustomerId;
   this.f_setIso3LanguageCode = setIso3LanguageCode;
   this.f_setApplicationDisposition = setApplicationDisposition;
   this.f_setFeatureBitField = setFeatureBitField;
   this.f_setTermCheckpointTime = setTermCheckpointTime;
   this.f_setTermCheckpoint = setTermCheckpoint;
   this.f_startSpeechDipTime = startSpeechDipTime;
   this.f_setUserDefined1 = setUserDefined1;
   this.f_setUserDefined2 = setUserDefined2;
   this.f_setUserDefined3 = setUserDefined3;
   this.f_setUserDefined4 = setUserDefined4;
   this.f_setUserDefined5 = setUserDefined5;
   this.f_setGlobalInteractionKey = setGlobalInteractionKey;
}

//
// Set the customer id (typically set in SIRapp.tt)
//
function setCustomerId(id) {
   this.customer_id = id;
}

//
// ISO 3166-1 alpha-3 code for country of the called number
//
function setIso3LanguageCode( langcode ) {
   this.iso3_language_cd = langcode;
}

//
// User defined application disposition
//
function setApplicationDisposition( code ) {
   this.application_disposition_cd = code;
}

//
// User defined binary feature indicator
//
function setFeatureBitField( featureBit ) {
   this.feature_bit_field += featureBit;
}

//
//Date and Time of last user defined termination check point
//
function setTermCheckpointTime(utcTm) {
	this.term_checkpoint_utc_tm = utcTm;
}

//
// User defined termination check point
//
function setTermCheckpoint( point ) {
   this.term_checkpoint_cd = point;
}

//
// Date and time that an IVR first accessed a speech service
//
function startSpeechDipTime() {
   this.speech_dip_utc_tm = new Date();
}

//
// User defined field #1
//
function setUserDefined1( userVal ) {
   this.user_defined_fld1 = userVal;
}
//
// User defined field #2
//
function setUserDefined2( userVal ) {
   this.user_defined_fld2 = userVal;
}
//
// User defined field #3
//
function setUserDefined3( userVal ) {
   this.user_defined_fld3 = userVal;
}
//
// User defined field #4
//
function setUserDefined4( userVal ) {
   this.user_defined_fld4 = userVal;
}
//
// User defined field #5
//
function setUserDefined5( userVal ) {
   this.user_defined_fld5 = userVal;
}

//
// Global Interaction key to relate the SIR with other related transactions
//
function setGlobalInteractionKey( key ) {
   this.global_interaction_key = key;
}

