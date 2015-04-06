// FASTPATH GENERATED FILE - DO NOT EDIT


_ws.pl = new promptConfig(_ws);
_ws.pl.setID('RP9050_TransferMessages');  //This PlayMsg can be used for Exit Actions or any PlayMsg steps
_ws.pl.addPromptGroup();


// IFCONDITION: If TransferReason = Standard
if (_ws.gateKeeper.getString("TransferReason").equalsIgnoreCase("Standard"))
{
  _ws.pl.addPromptGroupAudio('messageid', 'RP9050_i_1');  /* Just a moment while I transfer you. */
}
// ELSECONDITION: Else
else if (true)
{
  // IFCONDITION: Else if TransferReason = RASClosed
  if (_ws.gateKeeper.getString("TransferReason").equalsIgnoreCase("RTDClosed"))
  {
      //TODO: JASON - Update for RAS Closed
	  //_ws.pl.addPromptGroupAudio('messageid', 'RP9050_i_1');  /* In that case, let me go ahead and transfer you to an operator to schedule a call back. */
  }
  // ELSECONDITION: Else
  else if (true)
  {
    // IFCONDITION: Else if TransferReason = AgentRequestNeedProdName
    if (_ws.gateKeeper.getString("TransferReason").equalsIgnoreCase("AgentRequestNeedProdName"))
    {
      _ws.pl.addPromptGroupAudio('messageid', 'RP9050_i_6');  /* Transferring you now. */
    }
    // ELSECONDITION: Else
    else if (true)
    {
      // IFCONDITION: Else if TransferReason = AgentRequestHaveProdName
      if (_ws.gateKeeper.getString("TransferReason").equalsIgnoreCase("AgentRequestHaveProdName"))
      {
        _ws.pl.addPromptGroupAudio('messageid', 'RP9050_i_3');  /* Sure, just a moment while I connect you with a technical support specialist. */
      }
      // ELSECONDITION: Else
      else if (true)
      {
        // IFCONDITION: Else if TransferReason = MaxErrors
        if (_ws.gateKeeper.getString("TransferReason").equalsIgnoreCase("MaxErrors"))
        {
          _ws.pl.addPromptGroupAudio('messageid', 'RP9050_i_4');  /* I'm sorry we're having trouble.  Let me connect you with a technical support specialist. */
        }
        // ELSECONDITION: Else
          else if (true)
          {
              if (_ws.gateKeeper.getString("TransferReason").equalsIgnoreCase("French"))
              {
            	  _ws.pl.addPromptGroupAudio('messageid', 'RP9050_f_1');  /* Just a moment while I transfer you. */
              }
	              else if (true)
	              {
	                  if (_ws.gateKeeper.getString("TransferReason").equalsIgnoreCase("Operator"))
	                  {
	                	  _ws.pl.addPromptGroupAudio('messageid', 'RP9050_i_1');  /* Just a moment while I transfer you. */
	                  }
	                  else if (true)
                      {
                    	// IFCONDITION: Else if TransferReason = Accuchek
                          if (_ws.gateKeeper.getString("TransferReason").equalsIgnoreCase("DontKnowProductName"))
                          {
                        	  _ws.pl.addPromptGroupAudio('messageid', 'RP1100_e_1');  /* Okay. */
                          }
                      }
	              }
              	
          }
      }
    }
  }
}



