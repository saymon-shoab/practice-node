if (true) {
    var x = 12;
    let y = 22;
    const z = 99
}

// console.log("x=",x)
// console.log("y=",y)
// console.log("z=",z)


function outer (){
    const username= "parvej"
    function inner(){
        const nickname = "alga"
        console.log(username)
    }
    inner()
    // console.log(nickname)
}

// console.log(outer())
// outer()

if (true) {
    const username = "hello"
    if (username == "hello") {
        const website= " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}

function chay (){
   console.log(this)
}

chay()
// console.log(this)