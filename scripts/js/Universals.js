_ws.universals = new Object(); 
// PRELOAD replace all _intv_UniversalItem with _intv_UniversalItem
//name,slot,dtmf key (use empty for none), confirm prompt (use 0 for none), confirm level, weight
//_ws.universals.operator = new _intv_UniversalItem('operator', 'GLOBAL', '0','Global_C_01', 'ifneeded', 1.0);
_ws.universals.start_over = new _intv_UniversalItem('start_over', 'GLOBAL', '','Global_C_02', 'ifneeded', 1.0);
_ws.universals.main_menu = new _intv_UniversalItem('main_menu','GLOBAL', '','Global_C_03','ifneeded', 1.0);