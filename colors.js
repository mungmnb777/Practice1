var Links = {
    setColor : function(color){
        $('a').css('color', color);
    }
}
var Bodys = {
    setColor : function(color){
        $('body').css('color', color);
    },
    setBackgroundColor : function(color){
        $('body').css('backgroundColor', color);
    }
}
function DaynNightHandler(self){
    if(self.value === 'night'){
        Bodys.setColor('black');
        Bodys.setBackgroundColor('white');
        Links.setColor('black');
        self.value = 'day';

    } else {
        Bodys.setColor('white');
        Bodys.setBackgroundColor('black');
        Links.setColor('white');
        self.value = 'night';
    }
}