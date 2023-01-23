function getAge(){
    return Math.abs(new Date(Date.now() - new Date("09/24/1998").getTime()).getUTCFullYear() - 1970)
}
document.getElementById("age").innerHTML = `${getAge()}`
