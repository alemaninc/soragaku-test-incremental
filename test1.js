const player = {
item: 0,
generators: 0,
gultiplier:0,
// i am not explaing this
upgrade: 1,
gcost: 10,
//gcost means generator cost
ucost: 50,
//ucost means upgrade cost
}
function click() {
	player.item++;
}
function addgenerator(player.item, player.gcost) {
	if(player.item >= player.gcost) {
		player.item-=player.gcost;
	player.gcost+=player.gcost;
	player.generators++
	}
}
	function addupgrade(player.item, player.ucost) {
	if(player.item >= player.ucost) {
		player.item-=player.ucost;
	player.ucost+=player.ucost;
	player.upgrade++
	}