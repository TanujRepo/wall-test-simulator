if(hascollided (bullet,wall));
{
   bullet.velocityX=0;
   var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

   if (damage>10)
   {
     wall.shapeColor=color(255,0,0);
   }
     if (damage<10)
     {
       wall.shapeColor=color(0,255,0);
     }

}