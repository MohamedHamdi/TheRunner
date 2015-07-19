function testIntersection(A,B)
{
     return A.x <= B.x + B.width &&
                A.x + A.width >= B.x &&
                A.y <= B.y + B.height &&
                A.y + A.height >= B.y;
}