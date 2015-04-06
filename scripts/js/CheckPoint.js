//---- CHECKPOINTS SECTION
_ws.checkpoints = [];




//---- GOALS SECTION
/* Guidelines:
 * 1. start and end modules that define a goal should call VoiceModule or PlayPromptSubroutine subroutine
 * 2. an end module should have a corresponding checkpoint defined in checkpoints section
 * 3. multiple values for start/end modules/options should be comma-separated
 * 4. use * to represent any option for a menu, or no option for a play prompt 
 * 5. when using multiple values, each start/end module should have a corresponding option (including *) 
 */

_ws.goals = [];



//---- GRAMMAR SYNONYMS
/* Notes:
 * - use comma-separated values for multiple synonyms
 */

_ws.grammarSynonyms = new Object();
_ws.grammarSynonyms.agent_request = 'agent,operator,representative';
_ws.grammarSynonyms.cant_provide = 'dont_know,dont_have_it';
_ws.grammarSynonyms.main_menu = 'main_menu';
