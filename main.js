document.getElementById('regi').addEventListener('submit',function(event){
    event.preventDefault();
    const PHONE=document.getElementById('ph-no');
    const Password=document.getElementById('pass_word');
    const EMAIL=document.getElementById('email-id');
    const JOB1=document.getElementById('check-box1');
    const JOB2=document.getElementById('check-box2');
    const DROPDOWN=document.getElementById('exp');
    const YES=document.getElementById('yes-choice');
    const NO=document.getElementById('no-choice');
    const AGE=document.getElementById('age');
    const FILE=document.getElementById('fi_le');
    const DATETIME=document.getElementById('da_te');
    const ERROR=document.getElementById('error');
    if(PHONE.value==="" || Password.value==="" || EMAIL.value==="" || (!JOB1.checked && !JOB2.checked)||! DROPDOWN.value === 0  ||(!YES.checked && !NO.checked)|| AGE.value==="" || FILE.value==="" || DATETIME.value===""){
        ERROR.textContent="Please enter the details";
    }
    else{
        alert("Form is submitted Successfully");
        ERROR.textContent="";
        PHONE.value="";
        Password.value="";
        EMAIL.value="";
        JOB1.checked=false;
        JOB2.checked=false;
        DROPDOWN.value="";
        YES.checked=false;
        NO.checked=false;
        AGE.value="";
        FILE.value="";
        DATETIME.value="";
    }
});
