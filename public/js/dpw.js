const dpw = document.getElementById('dpw-form');
console.log('dpw', dpw)

dpw.addEventListener('submit', (e)=>{
  e.preventDefault();
  // create object 
  const obj = {}
 
 // UserInfo
 let townshipName = document.getElementById('nameOfTownship');
 let departmentEmail = document. getElementById('departmentEmail');
 let departmentPhone = document. getElementById('departmentPhone');
 
  // solid waste: recycling
 
  let solidWasteRecyclingA1 = document.getElementById('solidWasteRecyclingA1');
  let solidWasteRecyclingA2 = document.getElementById('solidWasteRecyclingA2');
  let solidWasteRecyclingA3 = document.getElementById('solidWasteRecyclingA3');
  let solidWasteRecyclingA4 = document.getElementById('solidWasteRecyclingA4');
 
 
  // streets,sidewalks and driveways
 
  let streetsSidewalksDrivewaysA1 = document.getElementById('streetsSidewalksDrivewaysA1');
  let streetsSidewalksDrivewaysA2 = document.getElementById('streetsSidewalksDrivewaysA2');
  let streetsSidewalksDrivewaysA3 = document.getElementById('streetsSidewalksDrivewaysA3');
  
 
  // pop obj
  obj['survey_name'] = 'dpw'
  obj["township_name"] = townshipName.value
  obj["department_email"] = departmentEmail.value
  obj["department_phone"] = departmentPhone.value
  obj["solid_waste_recycling_a1"] = solidWasteRecyclingA1.value
  obj["solid_waste_recycling_a2"] = solidWasteRecyclingA2.value
  obj["solid_waste_recycling_a3"] = solidWasteRecyclingA3.value
  obj["solid_waste_recycling_a4"] = solidWasteRecyclingA4.value
  obj["streets_sidewalks_driveways_a1"] = streetsSidewalksDrivewaysA1.value
  obj["streets_sidewalks_driveways_a2"] = streetsSidewalksDrivewaysA2.value
  obj["streets_sidewalks_driveways_a3"] = streetsSidewalksDrivewaysA3.value


// print
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
      console.log(parseRes.data.message);
    })
  })
})

