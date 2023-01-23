var students=[]
var student={
    name:`john`,
    birthyear:2002,
    course:'ift598',
    grade:90,
    active:true,
    age: function(){
        if(this.active){
            return 2022-this.birthyear
        }
        else{
            return 0;
        }
       
    }
}

var student2={
    name:`mary`,
    birthyear:2000,
    course:'ift598',
    grade:90,
    active:false,
    age: function(){
        if(this.active){
            return 2022-this.birthyear
        }
        else{
            return 0;
        }
       
    }
}

students.push(student)
students.push(student2)

//console.log(student.name)
//console.log(student['name'])

//console.log(student.age())
//console.log(student2.age())

students.forEach((item)=> console.log(item.age()))
console.log(students)