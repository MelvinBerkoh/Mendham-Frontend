// const policeDepartment = document.querySelector('.send-btn');
const policeDepartment = document.getElementById('pd-form');
console.log('pd', policeDepartment)


policeDepartment.addEventListener('submit', (e)=>{
  e.preventDefault();
  const obj = {}

// UserInfo

  let townshipName = document.getElementById('nameOfTownship');
  let departmentName = document. getElementById('departmentEmail');
  let departmentPhone = document.getElementById('departmentPhone');

  // Alarm systems
  let alarmSystemsA1 = document.getElementById('alarmSystemsA1');
  let alarmSystemsA2 = document.getElementById('alarmSystemsA2');
  let alarmSystemsA3 = document.getElementById('alarmSystemsA3');
  let alarmSystemsB1A = document.getElementById('alarmSystemsB1A');
  let alarmSystemsB1B = document.getElementById('alarmSystemsB1B');
  let alarmSystemsB1C = document.getElementById('alarmSystemsB1C');
  let alarmSystemsB2 = document.getElementById('alarmSystemsB2');


  // Vehicles, impoundment and storage
  let vis1 = document.getElementById('vis1');
  let vis2 = document.getElementById('vis2');
  let vis3 = document.getElementById('vis3');

  // pop obj
  obj['survey_name'] = 'policeDepartment'
  obj["township_name"] = townshipName.value
  obj["department_name"] = departmentName.value
  obj["department_phone"] = departmentPhone.value
  obj["alarm_systems_a1"] = alarmSystemsA1.value
  obj["alarm_systems_a2"] = alarmSystemsA2.value
  obj["alarm_systems_a3"] = alarmSystemsA3.value
  obj["alarm_systems_b1a"] = alarmSystemsB1A.value
  obj["alarm_systems_b1b"] = alarmSystemsB1B.value
  obj["alarm_systems_b1c"] = alarmSystemsB1C.value
  obj["alarm_systems_b2"] = alarmSystemsB2.value
  obj["vehicles_impoundment_storage_1"] = vis1.value
  obj["vehicles_impoundment_storage_2"] = vis2.value
  obj["vehicles_impoundment_storage_3"] = vis3.value


  console.log(obj)

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
      window.scrollTo(0,0)
      message.innerHTML = `
      <div class="send-complete-inner">
      <span
        class="closebtn"
        onclick="this.parentElement.style.display='none';"
        >&times;</span
      >
      <strong>Thank you!</strong>You have completed the survey. You may now close
      </div>
      `

      // message.innerText = parseRes.data.message
      console.log(parseRes.data.message);
    })
  })

})