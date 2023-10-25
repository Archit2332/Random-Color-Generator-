const getColor =()=>{
    const randomNumber=Math.floor(Math.random() * 16777215);
    const randomcode="#"+randomNumber.toString(16);
    console.log(randomNumber,randomcode);
    document.body.style.backgroundColor=randomcode
    document.getElementById("color-code").innerHTML=randomcode
    navigator.clipboard.writeText(randomcode)
}
//event call
document.getElementById("btn").addEventListener('click',getColor)
//intial call
getColor()
