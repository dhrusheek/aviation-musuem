var i =0;
var images=[];
images[0]="cafe.jpg";
images[1]="harr.JPG";
images[2]="ships.JPG";
images[3]="view.jpg";
images[4]="Naval-Aviation-Museum-goa5-1.jpg";
images[5]="cafeout.jpg";
images[6]="plane.JPG";


function loadImg(){
    document.slide.src=images[0];
}
function goNext(){
    if(i<images.length-1){
        i++;
        document.slide.src=images[i];}
    else{
        i=0;
        document.slide.src=images[i];
    }


}
function goPrev(){

    if(i>0){
        i--;
        
        document.slide.src=images[i];}
    else{
        i=images.length-1;
        document.slide.src=images[i];
    }
    



}







window.onload = loadImg;

