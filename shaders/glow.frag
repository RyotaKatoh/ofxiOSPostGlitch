
precision highp float;

uniform sampler2D tex0;
uniform float rand;


varying vec2 texCoordVarying;

void main()
{
    
    float   e = 2.718281828459045235360287471352;
    vec4    col   = texture2D(tex0, texCoordVarying);
    
    int     blur_w = 8;
    float   pi = 3.1415926535;
    vec4    gws = vec4(0.0, 0.0, 0.0, 1.0);
    float   weight;
    float   k = 1.0;
    
    weight = 1.0/(float(blur_w)*2.0+1.0)/(float(blur_w)*2.0+1.0);
    
    for(int i=0;i<blur_w*blur_w;i++){
    
        gws = gws + texture2D(tex0, vec2(texCoordVarying.x + float(mod(float(i), float(blur_w))), texCoordVarying.y + float(i/blur_w)))*weight*1.3;
        gws = gws + texture2D(tex0, vec2(texCoordVarying.x - float(mod(float(i), float(blur_w))), texCoordVarying.y + float(i/blur_w)))*weight*1.3;
        gws = gws + texture2D(tex0, vec2(texCoordVarying.x + float(mod(float(i), float(blur_w))), texCoordVarying.y - float(i/blur_w)))*weight*1.3;
        gws = gws + texture2D(tex0, vec2(texCoordVarying.x - float(mod(float(i), float(blur_w))), texCoordVarying.y - float(i/blur_w)))*weight*1.3;
        
    }
    
    
    gl_FragColor = col + gws;

}