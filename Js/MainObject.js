function mainObject(x,y,w,h,image)
{
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.right = x+w;
    this.bottom = y+h;
    this.Img = image;
    this.isActive = true;
   
    
    
    
    this.Draw = function(context)
    {
        if(this.isActive)
        {
             context.drawImage(this.Img,this.x,this.y,this.width,this.height);
        }
           
        
    }
    this.update = function(vx,vy)
    {
        this.x += vx;
        this.y += vy;
        
    }
    
    
}