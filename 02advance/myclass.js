class user{
    constructor(firstname,lastname,credit){
        this.firstname=firstname;
        this.lastname=lastname;
        this.credit=credit;
    }
    //in class no need to add function
    getfullname(){
        let fullname=`${this.firstname} + ${this.lastname}`
        return fullname;
    }
    editname(newname){
        const myname=newname.split(' ')
        this.firstname=myname[0];
        this.lastname=myname[1]
    }
}

class teacher extends user{
    constructor(firstname,lastname,credit,subject){
        super(firstname,lastname,credit);
        this.subject=subject;
    }
}

const john=new teacher("john","anderson",34,'science');
console.log(john)

john.editname("likkdsif sdf")

console.log(john.getfullname())