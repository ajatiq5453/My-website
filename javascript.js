let counters=document.querySelectorAll(".counter");
let time = 300;

counters.forEach(counter =>{
	
let upDateCount =() => {
	
let target = +counter.getAttribute("data-target");

let count = +counter.innerText;

let incresment = target/time;
	
	if(count < target){
		
		counter.innerText = Math.ceil(count + incresment);
		setTimeout(upDateCount,1)
	}else{
		counter.innerText = target;
	}
	
};	
upDateCount();
	
	
	
});