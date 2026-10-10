interface IStudent
{
  name : string,
  id : string,
  grade : number,
}
let student1Name : string = "Arikh";
console.log(student1Name);
let student1Age : number = 21;
console.log(student1Age);
let student1Grade : number =3.17;
console.log(student1Grade);

//Arithmatic oparation
let num1 : number =40;
let num2 : number =90;
let addition : number = num1 + num2 ;
console.log(addition);

function getStudentName() : string
{
  return "Arikh";
}
function getStudentId() : string
{
  return "23-52439-2";
}
function getStudentGrade() : number
{
  return 3.17;
}
function getStudentInfo() : IStudent
{
  const student: IStudent =
  {
    name : getStudentName(),
    id : getStudentId(),
    grade : getStudentGrade(),


  };
  console.log(student.name);
  console.log(student.id);
  console.log(student.grade);
  return student;
}

getStudentInfo();
async function getStudentInfoAsync() : Promise<IStudent>
{
  const student : IStudent =
  {
    name : getStudentName(),
    id : getStudentId(),
    grade : getStudentGrade(),
  };
  console.log("Student Name :" , student.name);
  console.log("Student ID :" , student.id);
  console.log("Student Grade :" , student.grade);
  
  return student;
  

}
 getStudentInfoAsync();