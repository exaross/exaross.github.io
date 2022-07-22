$(".image__image").mouseover(function(){
    let path = this.src;
    if (path.includes('png')){
        let npath = path.replace('png','gif');
        this.src=npath;
    }
})
$(".image__image").mouseout(function(){
    let path = this.src;
    if (path.includes('gif')){
        let npath = path.replace('gif','png');
        this.src=npath;
    }
})