import React, { useState } from "react";
import ListItem from "./ListItem";
import InputText from "./InputText";

import Login from "./Login";
import axios from "axios"


function App() {

  const [items, setItems] = useState([]);
  const [err, setErr] = useState('');
  const [isloggedIn, setisLoggedIn] = useState(false)
  const year = new Date().getFullYear();


  function addItem(inputData) {

    setItems(prevItems => {
      return [
        ...prevItems,
        {
          id: items.length + 1,
          mail: inputData.mail,
          mob: inputData.mob
        }];
    });
  }

  function deleteItem(id) {

    setItems(preValues => {
      return preValues.filter((element, index) => {
        return index !== id;
      });
    });

  }

  function handlesendInvite() {
    var data, i;

    for (i = 0; i < items.length; i++) {
      data = {
        index: items[i].id,
        email: items[i].mail.inputMail,
        mobile: items[i].mob.inputNumber
      }
      axios.post('http://13.235.134.196:8006/accounts/send_invitation/', data)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })

      console.log(data)
    }
  }




  return (
    isloggedIn ?
      <div>
        <div className="container">
          <div className="heading">
            <h1>Register Invite</h1>
          </div>
          <InputText
            dataItem={addItem}
          />
          <div>
            <ul>
              {items.map((todoItem, index) => (
                <ListItem
                  key={index}
                  id={index}
                  data={todoItem}
                  deletedata={deleteItem}
                />
              ))}
            </ul>
          </div>
          <button onClick={handlesendInvite} onMouseOut={() => setErr('')}>
            <span>Send Invitation</span>
          </button>
          {err && <div style={{ color: 'red' }}>{err}</div>}
        </div>
        <footer>
          <p>Copyright ⓒ Biswajit Sharma {year}</p>
        </footer>
      </div>
      : <Login loggedIn={setisLoggedIn} />
  );
}

export default App;