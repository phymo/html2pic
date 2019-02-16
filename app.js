var vm = new Vue({
    el: '#app',
    data: {
        image: 'image/cat.png',
        oldPrice: 100,
        newPrice: 50,      
    },
    methods: {
        showPic: function(e){
            event.stopPropagation();
            var toPic = document.getElementById('toPic');
            console.log(toPic)
            html2canvas(toPic,{
                height: toPic.height+20,
                width: toPic.width+20,
                onrendered: function(canvas){
                    document.body.appendChild(canvas);
                    canvas.id ='ctx'

                }
            })
        },
        closePic: function(){
            if(document.getElementById('ctx'))
            window.location.reload();
        }
           
        
    }

})
