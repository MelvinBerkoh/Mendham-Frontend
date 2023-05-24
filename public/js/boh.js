const boardOfHealth = document.getElementById('boh-form');
console.log('BOH', boardOfHealth)

// make id with no spaces use _ instead
// get rid of space after document. 
boardOfHealth.addEventListener('submit', (e)=>{
  e.preventDefault();
  const obj = {}
// UserInfo
let townshipName = document.getElementById('nameOfTownship');
let departmentEmail = document.getElementById('departmentEmail');
let departmentPhone = document.getElementById('departmentPhone');

// Resale Of Home section
let resaleOfHomeA = document.getElementById('resale_of_home A');
let resaleOfHomeB = document.getElementById('resale_of_home B');

// Wells section
let wellsA = document.getElementById('wells_A.');
let wellsB = document.getElementById('wells_B.');
let wellsC = document.getElementById('wells_C.');
let wellsD = document.getElementById('wells_D.');
let wellsE = document.getElementById('wells_E.');
let wellsF = document.getElementById('wells_F.');
let wellsG = document.getElementById('wells_G.');

// septic systems section
let septicSystemsA = document.getElementById('septic_systems_A.');
let septicSystemsB = document.getElementById('septic_systems_B.');
let septicSystemsC1 = document.getElementById('septic_systems_C1.');
let septicSystemsC2 = document.getElementById('septic_systems_C2.');
let septicSystemsC3 = document.getElementById('septic_systems_C3.');
let septicSystemsD = document.getElementById( 'septic_systems_D.');
let septicSystemsE1 = document.getElementById('septic_systems_E1.');
let septicSystemsE2 = document.getElementById('septic_systems_E2.');
let septicSystemsE3 = document.getElementById('septic_systems_E3.');
let septicSystemsF = document.getElementById('septic_systems_F.');
let septicSystemsG = document.getElementById('septic_systems_F.');
let septicSystemsH = document.getElementById('septic_systems_F.');

// Subdivision section
let subdivisionA = document.getElementById('subdivision_A.'); 

// Food handlers license

let foodHandlerA = document.getElementById('food_handlers_A.');
let foodHandlerB = document.getElementById('food_handlers_B.');
let foodHandlerC = document.getElementById('food_handlers_C.');

// Escrow accounts 

let escrowAccountA = document.getElementById('escrow_account_A.');
let escrowAccountB = document.getElementById('escrow_account_B.');
let escrowAccountC = document.getElementById('escrow_account_C.');

// animals
let animalA1A = document.getElementById('animal_A1A.');
let animalA1B = document.getElementById('animal_A1B.');
let animalA1C = document.getElementById('animal_A1C.');
let animalA2 = document.getElementById('animal_A2.');
let animalA3 = document.getElementById('animal_A3.');
let animalB1A = document.getElementById('animal_B1A.');
let animalB1B = document.getElementById('animal_B1B.');
let animalB1C = document.getElementById('animal_B1C.');
let animalB2 = document.getElementById('animal_B2.');
let animalB3 = document.getElementById('animal_B3.');

  obj['survey_name'] = 'boardOfHealth'
  obj["township_name"] = townshipName.value
  obj["department_name"] = departmentEmail.value
  obj["department_phone"] = departmentPhone.value
  obj["resale_of_home_a"] = resaleOfHomeA.value
  obj["resale_of_home_b"] = resaleOfHomeB.value
  obj["well_a"] = wellsA.value
  obj["well_b"] = wellsB.value
  obj["well_c"] = wellsC.value
  obj["well_d"] = wellsD.value
  obj["well_e"] = wellsE.value
  obj["well_f"] = wellsF.value
  obj["well_g"] = wellsG.value
  obj["septic_systems_a"] = septicSystemsA.value
  obj["septic_systems_b"] = septicSystemsB.value
  obj["septic_systems_c1"] = septicSystemsC1.value
  obj["septic_systems_c2"] = septicSystemsC2.value
  obj["septic_systems_c3"] = septicSystemsC3.value
  obj["septic_systems_d"] = septicSystemsD.value
  obj["septic_systems_e1"] = septicSystemsE1.value
  obj["septic_systems_e2"] = septicSystemsE2.value
  obj["septic_systems_e3"] = septicSystemsE3.value
  obj["septic_systems_f"] = septicSystemsF.value
  obj["septic_systems_g"] = septicSystemsG.value
  obj["septic_systems_h"] = septicSystemsH.value
  obj["subdivision_a"] = subdivisionA.value
  obj["food_handler_a"] = foodHandlerA.value
  obj["food_handler_b"] = foodHandlerB.value
  obj["ood_handler_c"] = foodHandlerC.value
  obj["escrow_account_a"] = escrowAccountA.value
  obj["escrow_account_b"] = escrowAccountB.value
  obj["escrow_account_c"] = escrowAccountC.value
  obj["animal_a1a"] = animalA1A.value
  obj["animal_a1b"] = animalA1B.value
  obj["animal_a1c"] = animalA1C.value
  obj["animal_a2"] = animalA2.value
  obj["animal_a3"] = animalA3.value
  obj["animal_b1a"] = animalB1A.value
  obj["animal_b1b"] = animalB1B.value
  obj["animal_b1c"] = animalB1C.value
  obj["animal_b2"] = animalB2.value
  obj["animal_b3"] = animalB3.value
 
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

// function onPageLoad() {
//   let townshipName = document.getElementById('nameOfTownship');
//   let departmentEmail = document.getElementById('departmentEmail');
//   let departmentPhone = document.getElementById('departmentPhone');
  
//   // Resale Of Home section
//   let resaleOfHomeA = document.getElementById('Resale of Home A');
//   let resaleOfHomeB = document.getElementById('Resale of Home B');
  
//   // Wells section
//   let wellsA = document.getElementById('Wells A.');
//   let wellsB = document.getElementById('Wells B.');
//   let wellsC = document.getElementById('Wells C.');
//   let wellsD = document.getElementById('Wells D.');
//   let wellsE = document.getElementById('Wells E.');
//   let wellsF = document.getElementById('Wells F.');
//   let wellsG = document.getElementById('Wells G.')
  
//   // septic systems section
//   let septicSystemsA = document.getElementById('Septic systems A.');
//   let septicSystemsB = document.getElementById('Septic systems B.');
//   let septicSystemsC1 = document.getElementById('Septic systems C1.');
//   let septicSystemsC2 = document.getElementById('Septic systems C2.');
//   let septicSystemsC3 = document.getElementById('Septic systems C3.');
//   let septicSystemsD = document.getElementById( 'Septic systems D.');
//   let septicSystemsE1 = document.getElementById('Septic systems E1.');
//   let septicSystemsE2 = document.getElementById('Septic systems E2.');
//   let septicSystemsE3 = document.getElementById('Septic systems E3.');
//   let septicSystemsF = document.getElementById('Septic systems F.');
//   let septicSystemsG = document.getElementById('Septic systems G.');
//   let septicSystemsH = document.getElementById('Septic systems H.');
  
//   // Subdivision section
//   let subdivisionA = document.getElementById('Subdivision A.'); 
  
//   // Food handlers license
  
//   let foodHandlerA = document.getElementById('Food handlers A.');
//   let foodHandlerB = document.getElementById('Food handlers B.');
//   let foodHandlerC = document.getElementById('Food handlers C.');
  
//   // Escrow accounts 
  
//   let escrowAccountA = document.getElementById('Escrow account A.');
//   let escrowAccountB = document.getElementById('Escrow account B.');
//   let escrowAccountC = document.getElementById('Escrow account C.');
  
//   // animals
//   let animalA1A = document.getElementById('Animal A1A.');
//   let animalA1B = document.getElementById('Animal A1B.');
//   let animalA1C = document.getElementById('Animal A1C.');
//   let animalA2 = document.getElementById('Animal A2.');
//   let animalA3 = document.getElementById('Animal A3.');
//   let animalB1A = document.getElementById('Animal A1C.');
//   let animalB1B = document.getElementById('Animal A1C.');
//   let animalB1C = document.getElementById('Animal A1C.');
//   let animalB2 = document.getElementById('Animal B2.');
//   let animalB3 = document.getElementById('Animal B3.');

//   townshipName.value = 'blah'
//   departmentEmail.value = 'blah@email.com'
//   departmentPhone.value = '123-456-7890'
//   resaleOfHomeA.value = 'blah'
//   resaleOfHomeB.value = 'blah'
//   wellsA.value = 'blah'
//   wellsB.value = 'blah'
//   wellsC.value = 'blah'
//   wellsD.value = 'blah'
//   wellsE.value = 'blah'
//   wellsF.value = 'blah'
//   septicSystemsA.value = 'blah'
//   septicSystemsB.value = 'blah'
//   septicSystemsC1.value = 'blah'
//   septicSystemsC2.value = 'blah'
//   septicSystemsC3.value = 'blah'
//   septicSystemsD.value = 'blah'
//   septicSystemsE1.value = 'blah'
//   septicSystemsE2.value = 'blah'
//   septicSystemsE3.value = 'blah'
//   septicSystemsF.value = 'blah'
//   septicSystemsG.value = 'blah'
//   septicSystemsH.value = 'blah'
//   subdivisionA.value = 'blah'
//   foodHandlerA.value = 'blah'
//   foodHandlerB.value = 'blah'
//   foodHandlerC.value = 'blah'
//   escrowAccountA.value = 'blah'
//   escrowAccountB.value = 'blah'
//   escrowAccountC.value = 'blah'
//   animalA1A.value = 'blah'
//   animalA1B.value = 'blah'
//   animalA1C.value = 'blah'
//   animalA2.value = 'blah'
//   animalA3.value = 'blah'
//   animalB1A.value = 'blah'
//   animalB1B.value = 'blah'
//   animalB1C.value = 'blah'
//   animalB2.value = 'blah'
//   animalB3.value = 'blah'
 

// }

// onPageLoad()