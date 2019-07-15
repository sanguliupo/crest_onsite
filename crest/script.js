let submit= document.getElementById("submit")
let wrapper = document.getElementsByClassName('wrapper')[0];


function revertOriginal(){
	console.log("revertFunction")
	let boxes= document.getElementsByClassName("box")
	for (let i=0; i< boxes.length; i++){
		if (Number(boxes[i].innerHTML)>3){
			boxes[i].remove();	
		}
		
	}
}

function addBox(){
	// revert();
	let selectedValue= document.querySelector("select").value;
	for(let i=4; i<=selectedValue; i++){
  		let newDiv = document.createElement('div');
		newDiv.textContent = i;
		newDiv.classList.add('box');
		wrapper.appendChild(newDiv);
	}

}

submit.addEventListener('click', addBox);
revert.addEventListener('click', revertOriginal);