import { stringify } from 'querystring';
import { useState } from 'react';
import { openDatabase } from 'react-native-sqlite-storage';
import { identity } from 'rxjs';

   export const Selectevent = async () => {
       const [userid, setUserId] = useState('');
     console.log('here we ');
    var db = await openDatabase({ name: 'events.db' });
    console.log('selecting ')
    db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM eventlist',
          [userid],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
              let res = results.rows.item(0);
                console.log("res ============================"+res)
            } else {
                console.log('no record found');
            }
          }
        );
      });
  }
   