const firePrevention = document.getElementById('fp-form');
console.log('fp', firePrevention)

firePrevention.addEventListener('submit', (e)=>{
  e.preventDefault();
  // create object 
  const obj = {}
 
 // UserInfo
 let townshipName = document.getElementById('nameOfTownship');
 let departmentEmail = document. getElementById('departmentEmail');
 let departmentPhone = document. getElementById('departmentPhone');

 // Private schools
 let privateSchoolInspectionFee = document.getElementById('privateSchoolInspectionFee');
 let privateSchoolAnnualInspection = document.getElementById('privateSchoolAnnualInspection');
 

 // structures owned by township
 let ownedByTownshipInspectionFee = document.getElementById('ownedByTownshipInspectionFee');
 let ownedByTownshipAnnualInspection = document.getElementById('ownedByTownshipAnnualInspection');


 // all other structures covered by code

 let otherStructuresInspectionFee = document.getElementById('otherStructuresInspectionFee');
 let otherStructuresAnnualInspection = document.getElementById('otherStructuresAnnualInspection');

 // All agricultural uses of a farm

 let agriculturalUsesInspectionFee = document.getElementById('agriculturalUsesInspectionFee');
 let agriculturalUsesAnnualInspection = document.getElementById('agriculturalUsesAnnualInspection');

 // Application processing section
let applicationProcessingFee = document.getElementById('applicationProcessingFee');
 
 // Certificate of Fire Code Status

 let certificateOfFireCodeStatusFee = document.getElementById('certificateOfFireCodeStatusFee');



 // pop 
   obj ['survey_name'] = 'firePrevention'    //  key: survey_name value: Fire Prevention
   obj["township_name"] = townshipName.value
   obj["department_name"] = departmentEmail.value
   obj["department_phone"] = departmentPhone.value
   obj["private_school_fee"] = privateSchoolInspectionFee.value
   obj["number_of_private_school_inspections"] = privateSchoolAnnualInspection.value
   obj["owned_by_township_fee"] = ownedByTownshipInspectionFee.value
   obj["number_of_owned_by_township_inspections"] = ownedByTownshipAnnualInspection.value
   obj["other_structures_fee"] = otherStructuresInspectionFee.value
   obj["number_of_other_structures_inspections"] = otherStructuresAnnualInspection.value
   obj["agricultural_use_fee"] = agriculturalUsesInspectionFee.value
   obj["number_of_agricultural_inspections"] = agriculturalUsesAnnualInspection.value
   obj["application_process_fee"] = applicationProcessingFee.value
   obj["certificate_fire_code_fee"] = certificateOfFireCodeStatusFee.value


 
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

      // message.innerText = parseRes.data.message
      console.log(parseRes.data.message);
    })
  })
  
  })