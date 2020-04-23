//var str = new String("Cat ipsum dolor sit amet, purr like an angel purr but sleep all day whilst slave is at work, play all night whilst slave is sleeping. Show belly allways wanting food for man running from cops stops to pet cats, goes to jail. Lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back love blinks and purr purr purr purr yawn sleep on my human's head. 𝕄𝔼𝕆𝕎 kitty loves pigs or sweet beast, for i am the best but love to play with owner's hair tie yet run around the house at 4 in the morning, why use post when this sofa is here. Do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life this human feeds me, i should be a god kitty loves pigs jump up to edge of bath, fall in then scramble in a mad panic to get out terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry decide to want nothing to do with my owner today. This human feeds me, i should be a god plays league of legends. Sleeps on my head. Eat the rubberband play riveting piece on synthesizer keyboard. Catty ipsum jump around on couch,");
//document.write(str.fontcolor( "blue" ));
//function init() {
//	document.getElementById("p").style.color = 'blue';
//}

/*function highlight(text) {
	var inputText = document.getElementById("inputText");
	var innerHTML = inputText.innerHTML;
	var index = innerHTML.indexOf(text);
	if (index >= 0) {
		innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
		inputText.innerHTML = innerHTML;
	}
}*/
//CHANGES TOP PARAGRAPH TEXT COLOR

/*button.addEventListener('click', function () {
	var demo = document.getElementById("demo");

	if(state === 1) {
		demo.style.color = 'red';
		state = 0;
	} else {
		demo.style.color = 'green';
		state = 1;
	}
}*/


/*const element = document.querySelector("para");

element.addEventListener("mouseover", function(){
	let para = document.getElementById('para');

	if(state ===1){
		para.style.color = "black";
		state =0;
	} else {
		para.style.color = "magenta";
		state = 1;
	}
});*/

/*const element = document.querySelector("para");
element.addEventListener("mouseover", event => {
	console.log("Mouse in");
})*/

//Changing Text Color (working version)
function highlight() {
	document.getElementById("text-color") .style.textColor = "magenta";
}

//TEXT COLOR RESET
function resetTextColor() {
	document.getElementById("text-color") .style.textColor = " ";
}


/*console.log(para.style.color);
para.style.color = "magenta";*/

//KEY EVENT. WHEN V IS PRESSED BACKGROUND CHANGES YELLOW
window.addEventListener("keydown", event => {
	if (event.key == "v") {
		document.body.style.background = "yellow";
	}
});
window.addEventListener("keyup", event => {
	if (event.key == "v"){
		document.body.style.background = ""
	}
});
// changed the font of second paragraph to Helvetica
let object = document.getElementById("object");
console.log(object.style.fontFamily);
object.style.fontFamily = "monospace";

//tired to figure out highlighting a word
/*function getElementByName(){
	elementByName = document.getElementsByName("kitty");
}
function highlight()
{
	for (var i=0; i<elementByName.length; i++)
	{
		elementByName[i].style.color = "green"
	}
}*/

/*function doSearch(text, backgroundColor) {
	if (window.find && window.getSelection) {
		document.designMode = "on";
		var sel =window.getSelection();
		sel.collapse(document.body,0);
		while (window.find(text)) {
			document.execCommand("HiliteColor", false, backgroundColor);
			sel.collapseToEnd();
		}
		document.designMode = "off";
	}
}\*/


//FIGURING OUT FETCH NEED TO WORK ON
/*fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(response => response.json("cat"))
	.then(json => console.log(json));*/

