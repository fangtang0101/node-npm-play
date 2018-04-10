const ora = require('ora');

const spinner = ora('Loading unicorns').start();
const colors = ['black','red','green','yellow','blue','magenta','cyan','white','gray'];
const types = ['warn','info','succeed','fail'];
let count = 0;

setInterval(show,3000)
function show (){
	// console.log('change ...\n')
	const num = Math.ceil(Math.random()*8);
	spinner.color = colors[num];
	spinner.text = `icon color is ${colors[num]}\n`;
	count++;
	if(count>4){
	   const num2 = Math.ceil(Math.random()*3);
	   spinner[types[num2]]();
	   spinner.text = `icon color is ${colors[num]} last spinner type is ${types[num2]}\n`;
	}
}

// spinner.start();//开始
// spinner.stop();//结束
// link  https://github.com/sindresorhus/ora/blob/master/readme.md
// color is effective for type of defalut
