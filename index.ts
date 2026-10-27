


interface Student {
    id: string | number,
    name:string,
    mark:number,
    email?: string
};

const students =[
    {id:101,name:"Rahim",mark:45,email:"rahim@gmail.com"},
    {id:102,name:"Karim",mark:87,email:"karim@gmail.com"},
    {id:103,name:"Monir",mark:50,email:"monir@gmail.com"},
    {id:104,name:"BantuJi",mark:33,email:"bantu@gmail.com"},
    {id:105,name:"Tingku ",mark:27,email:"jiya@gmail.com"}
];

// function getPassedStudents (students:Student[]):Student[]{
//     return  students.filter((student)=>student.mark >=40)

// }
// console.log(getPassedStudents(students));

// function getAverageMarks(students:Student[]):number{
//     const avarageMarks =  students.reduce((sum,student)=> sum += student.mark,0) 
//     return avarageMarks / students.length
// };

// console.log(getAverageMarks(students))

function getStudentById(id: number):Student | undefined {
    return students.find(student => student.id === id);
}
console.log(getStudentById(102));
console.log(getStudentById(106));