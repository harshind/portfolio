/*
<tr>
					<td style="font-size: 26px;">Redux</td>
					<td class="slidecontainer" style="padding-left: 80px; " >
  						<input type="range" min="1" max="100" value="50" class="slider" id="myRange">
					</td>
				</tr>

*/
const skillData = [
	"JavaScript|80",
	"HTML|80",
	"CSS|80",
	"React|40",
	"Bootstrap|80",
	"Postgres|75"
]

function createRow(skillData){
	const table = document.getElementById('table')
	for(let i=0; i< skillData.length;i++){
		const arr = skillData[i].split("|")
		const row = document.createElement('div')
		row.classList.add('row')
		const skill = document.createElement('div')
		skill.classList.add('col-lg-4')
		skill.style ="font-size:26px";
		skill.innerHTML =arr[0]
		const experience = document.createElement('div')
		experience.classList.add('sliderContainer','col-lg-8',"pt-3")
		const input = document.createElement('input');
		input.setAttribute('type', "range");
		input.setAttribute('min',"1");
		input.setAttribute('max',"100");
		input.setAttribute('class',"slider")
		input.value = arr[1]
		input.disabled = true;
		experience.appendChild(input)
		row.appendChild(skill);
		row.appendChild(experience)
		table.appendChild(row)
	}  

}

document.addEventListener("DOMContentLoaded",()=>{
	createRow(skillData)
})