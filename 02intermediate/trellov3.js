let trl={
    day:'monday',
    metting1:0,
    mettingdone:0,
    addmetting: function(num=0){
        this.metting1=this.metting1+num
    }   ,
    summaryy:function(){
        return`you have ${this.metting1} today`
    }
}

trl.addmetting(4);

console.log(trl.summaryy());
