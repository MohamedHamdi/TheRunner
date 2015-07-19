function ground(x,y,w,h,image)
{
    mainObject.call(this,x,y,w,h,image);
    
     this.Draw = function(context)
   {
        var GroundPattern = context.createPattern(this.Img , "repeat");
        context.fillStyle = GroundPattern;
        context.fillRect( this.x, this.y, this.width, this.height);
       
   }
    
}