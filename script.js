
//Homepage slider 
    var pic = document.getElementById('slider');
    var pic1 = "";
    var pic2 = "";
    var pic3 = "";
    var pic4 = "";

    var image = Math.floor(Math.random()*5) -1;

    if(image == 1){
        pic.src = pic1;
    }else{
        if(image == 2){
            pic.src = pic2;
        }else{
            if(image == 3){
                pic.src = pic3;
            }else{
                if(image == 4){
                    pic.src = pic4;
                }else{
                    pic.src = "blank.jpg";
                }   
            } 
        } 
    }


