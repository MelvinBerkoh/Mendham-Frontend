const clerk = document.getElementById('clerk-form');
console.log('clerk', clerk)

clerk.addEventListener('submit', (e)=>{
  const obj = {}
 
 // UserInfo
 let townshipName = document.getElementById('nameOfTownship');
 let departmentEmail = document. getElementById('departmentEmail');
 let departmentPhone = document. getElementById('departmentPhone');

 // access to records
 let accessToRecordsA1A = document.getElementById('accessToRecordsA1A');
 let accessToRecordsA1B = document.getElementById('accessToRecordsA1B');
 let accessToRecordsA2 = document.getElementById('accessToRecordsA2');
 let accessToRecordsA3 = document.getElementById('accessToRecordsA3');
 let accessToRecordsA4 = document.getElementById('accessToRecordsA4');
 let accessToRecordsB1 = document.getElementById('accessToRecordsB1');

 // Peddling and soliciting
 let peddlingAndSoliciting = document.getElementById('peddlingAndSoliciting');
 
 // pop obj
   obj['survey_name'] = 'clerk'
   obj["township_name"] = townshipName.value
   obj["department_email"] = departmentEmail.value
   obj["department_phone"] = departmentPhone.value
   obj["access_to_records_a1a"] = accessToRecordsA1A.value
   obj["access_to_records_a1b"] = accessToRecordsA1B.value
   obj["access_to_records_a2"] = accessToRecordsA2.value
   obj["access_to_records_a3"] = accessToRecordsA3.value
   obj["access_to_records_a4"] = accessToRecordsA4.value
   obj["access_to_records_b1"] = accessToRecordsB1.value
   obj["peddling_and_soliciting"] = peddlingAndSoliciting.value
 
 // print 
   console.log(obj) 
  e.preventDefault();
  console.log('Thanks. You have completed the survey')



  fetch("http://18.117.235.127:3000", {
    body: JSON.stringify(obj),
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => {
    res.text().then((res) => {
      const parseRes = JSON.parse(res)
      let message = document.getElementById('send-complete')
      message.innerText = parseRes.data.message
      console.log(parseRes.data.message);
    })
  })
 
  
  })