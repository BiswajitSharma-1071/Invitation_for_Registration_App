import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function ListItem(props) {


  return (
    <div>
      <li>
        {'{ ' + props.data.id + ' , ' + props.data.mail.inputMail + ' , ' + props.data.mob.inputNumber + ' } '}
        <DeleteIcon onClick={() => props.deletedata(props.id)} />
      </li>
    </div>
  );
}

export default ListItem;
