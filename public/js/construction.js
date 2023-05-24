const construction = document.getElementById('construction-form')
console.log('construction', construction)
construction.addEventListener('submit', (e)=>{
  const obj = {}
 
 // UserInfo
 let townshipName = document.getElementById('nameOfTownship');
 let departmentEmail = document. getElementById('departmentEmail');
 let departmentPhone = document. getElementById('departmentPhone');

 // building sub-code
 let clubLicense = document.getElementById('clubLicense');
 let buildingSubCodeA1 = document.getElementById('building_subcode_A1');
 let buildingSubCodeA1B = document.getElementById('building_subcode_A1B');
 let minCharge1 = document.getElementById('minCharge1');
 let minCharge2 = document.getElementById('minCharge2');
 let minCharge3 = document.getElementById('minCharge3');

 // Alter, renovate, repairs, minor construction
 let buildingSubCodeA2 = document.getElementById('building_subcode_A2');
 let buildingSubCodeA3 = document.getElementById('building_subcode_A3');

 // Plumbing sub-code

 let plumbingSubcode1 = document.getElementById('plumbingSubcode_1');
 let plumbingSubcode2 = document.getElementById('plumbingSubcode_2');
 let plumbingSubcode3 = document.getElementById('plumbingSubcode_3');

 // Electrical sub-code
let electricalSubcode1 = document.getElementById('electricalSubcode_1');
let electricalSubcode2 = document.getElementById('electricalSubcode_2');
let electricalSubcode3 = document.getElementById('electricalSubcode_3');

// each motor or electrical device 

let electricalSubcode4A = document.getElementById('electricalSubcode_4A');
let electricalSubcode4B = document.getElementById('electricalSubcode_4B');
let electricalSubcode4C = document.getElementById('electricalSubcode_4C');
let electricalSubcode4D = document.getElementById('electricalSubcode_4D');
let electricalSubcode5A = document.getElementById('electricalSubcode_5A');
let electricalSubcode5B = document.getElementById('electricalSubcode_5B');
let electricalSubcode5C = document.getElementById('electricalSubcode_5C');

// pool inspection fee
let poolBondingInspection = document.getElementById('poolBondingInspection');

// fire sub-code

let fireSubcode1 = document.getElementById('fireSubcode_1');

// demolition

let demolition1 = document.getElementById('demolition1');
let demolition2 = document.getElementById('demolition2');
let demolition3 = document.getElementById('demolition3');
let demolition4 = document.getElementById('demolition4');

// Fire Prevention and Protection
let inspection1 = document.getElementById('inspection1');
let inspection2 = document.getElementById('inspection2');
let inspection3 = document.getElementById('inspection3');

// Land use Procedures and Fees 
let filingFees1 = document.getElementById('filingFees1');
let filingFees2 = document.getElementById('filingFees2');

// Demolition of building 

let demolitionOfBuilding = document.getElementById('demolitionOfBuilding');
let removalOfBuilding = document.getElementById('removalOfBuilding');

//Asbestos hazard abatement
let asbestosHazardAbatement = document.getElementById('asbestosHazardAbatement');

//Signs section
let signFees = document.getElementById('signFees');

// variancesFees

let variancesFees = document.getElementById('variancesFees');

// The fee for a certificate of occupancy

let certificatesOfOccupancy13a = document.getElementById('certificatesOfOccupancy13a');
let certificatesOfOccupancy13b = document.getElementById('certificatesOfOccupancy13b');
let certificatesOfOccupancy13c = document.getElementById('certificatesOfOccupancy13c');
let certificatesOfOccupancy13d = document.getElementById('certificatesOfOccupancy13d');
let certificatesOfOccupancy13e = document.getElementById('certificatesOfOccupancy13e');

 
 // pop obj
   obj['survey_name'] = 'construction'
   obj["township_name"] = townshipName.value
   obj["department_email"] = departmentEmail.value
   obj["department_phone"] = departmentPhone.value
   obj["club_license"] = clubLicense.value
   obj['building_sub_code_a1'] = buildingSubCodeA1.value
   obj['buildingSubCodeA1B']= buildingSubCodeA1B.value
   obj['building_sub_code_a2'] = buildingSubCodeA2.value
   obj['min_charge_1'] = minCharge1.value
   obj['min_charge_2'] = minCharge2.value
   obj['min_charge_3'] = minCharge3.value
   obj['building_sub_code_a3'] = buildingSubCodeA3.value
   obj['plumbing_sub_code_1'] = plumbingSubcode1.value
   obj['plumbing_sub_code_2'] = plumbingSubcode2.value
   obj['plumbing_sub_code_3'] = plumbingSubcode3.value
   obj['electrical_sub_code_1'] = electricalSubcode1.value
   obj['electrical_sub_code_2'] = electricalSubcode2.value
   obj['electrical_sub_code_3'] = electricalSubcode3.value
   obj['electrical_sub_code_4a'] = electricalSubcode4A.value 
   obj['electrical_sub_code_4b'] = electricalSubcode4B.value 
   obj['electrical_sub_code_4c'] = electricalSubcode4C.value 
   obj['electrical_sub_code_4d'] = electricalSubcode4D.value 
   obj['electrical_sub_code_5a'] =  electricalSubcode5A.value
   obj['electrical_sub_code_5b'] =  electricalSubcode5B.value
   obj['electrical_sub_code_5c'] =  electricalSubcode5C.value
   obj['pool_bonding_inspection'] = poolBondingInspection.value
   obj['fire_sub_code_1'] = fireSubcode1.value
   obj['demolition_1'] = demolition1.value
   obj['demolition_2'] = demolition2.value
   obj['demolition_3'] = demolition3.value
   obj['demolition_4'] = demolition4.value
   obj['inspection_1'] = inspection1.value
   obj['inspection_2'] = inspection2.value
   obj['inspection_3'] = inspection3.value
   obj['filing_fees_1'] = filingFees1.value
   obj['filing_fees_2'] = filingFees2.value
   obj['demolition_of_building'] = demolitionOfBuilding.value
   obj['removal_of_building'] = removalOfBuilding.value
   obj['asbestos_hazard_abatement'] = asbestosHazardAbatement.value
   obj['sign_fees'] = signFees.value
   obj['variances_fees'] = variancesFees.value
   obj[' certificates_of_occupancy_13a'] =  certificatesOfOccupancy13a.value
   obj[' certificates_of_occupancy_13b'] =  certificatesOfOccupancy13b.value
   obj[' certificates_of_occupancy_13c'] =  certificatesOfOccupancy13c.value
   obj[' certificates_of_occupancy_13d'] =  certificatesOfOccupancy13d.value
   obj[' certificates_of_occupancy_13e'] =  certificatesOfOccupancy13e.value




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