
let btn = document.getElementById("btn");

btn.onclick =()=>{
    votecasting();
}

function votecasting(){
    let age = parseInt(prompt("Enter your age"));

    if( age >= 18){

        alert("You can cast Vote")
    }
    else if( age <= 18){
        alert("You are just a kid you can not cast a vote")

    }
    else if( age >=60){
        alert("You are above 60 you can not cast vote")

    }
    else{
        alert("Something Wrong Please Enter a Valid number")
        let vote = confirm("Do You want To cast Another vote");
        if(vote == true){
            votecasting();
        }
        else{
            alert("Thank You Very much");
        }
    }
    

}