function player(x,y,w,h)
{
   
    
    
    
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.right = x+w;
    this.bottom = y+h;
    this.image;
    this.live = true;
    this.lives = 5;
    this.score = 0;
    this.IsOnGround ;
    this.JumpHeight=350;
   
    
    if(this.y==450)
    {
        this.IsOnGround = true;
    }
    else
    {
        this.IsOnGround = false;
    }
    
    
   
   
    
    this.Draw = function (context)
    {
        context.drawImage(this.image,this.x,this.y,this.width,this.height);
    }
    this.imageUpdate = function (image)
    {
        this.image = image;
    }
   
}