class Player{
    constructor(name,times){
        this.name = name;
        this.times = new Array();
    }
    recordTime(start,end){
        
    }
    showStats(){
        let sum;
        this.times.map(item=>{
            sum+=item
            console.log(item)})
            console.log(sum/this.times.length)

    }
}
export default Player;