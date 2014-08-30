require('shelljs/global');

function cp_with_seconds (time){
	exec('gulp cp')
	
	setTimeout(function(){
		cp_with_seconds(time);
	},time);
}

function main(){
	cp_with_seconds(500);
}

main();