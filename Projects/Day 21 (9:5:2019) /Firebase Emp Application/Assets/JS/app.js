var firebaseConfig = {
  apiKey: "AIzaSyAfd8NRu4X0ZItDknmZ-6HA_Ad0HnotwHQ",
  authDomain: "fir-employee-tracker.firebaseapp.com",
  databaseURL: "https://fir-employee-tracker.firebaseio.com",
  projectId: "fir-employee-tracker",
  storageBucket: "",
  messagingSenderId: "1051462162331",
  appId: "1:1051462162331:web:3b00937938c7b28443b33e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Setting the Link To The Database
var db = firebase.database();




// Variables 
const employeeName = document.querySelector('#empName');
const employeeRole = document.querySelector('#role');
const monthStarted = document.querySelector('#monthStarted');
const monthlyRate = document.querySelector('#monthlyRate');
// Grabbing the Submit Button from HTML
const submitBtn = document.querySelector('#submitBtn');
const clearBtn = document.querySelector('#clearBtn');
submitBtn.addEventListener('click', function(e){
  e.preventDefault();
  
  let data = {
    Employee_Name: employeeName.value,
    Employee_Role: employeeRole.value,
    Employee_Start_Date: monthStarted.value,
    Employee_Rate: monthlyRate.value
  }
  console.log(data);
  db.ref().push(data);
  // Moment JS Calculating the difference between the start date entered and the minutes
  console.log(moment().diff(moment(data.Employee_Start_Date), 'minutes'));

  db.ref().limitToLast(1).on('child_added',function(snapshot) {
    var results = snapshot.val();
    console.log('Results:');
    console.log(results);
  })
  clearInputFields();
})

clearBtn.addEventListener('click', function(e) {
  e.preventDefault();
  clearInputFields();
})

function clearInputFields() {
  employeeName.value = '';
  employeeRole.value = '';
  monthStarted.value = '';
  monthlyRate.value = '';
}