
precision highp float;

uniform sampler2D tex0;
uniform float rand;

uniform float imgWidth, imgHeight;
uniform vec2 blur_vec;

float pix_w, pix_h;

varying vec2 texCoordVarying;

void main()
{

    pix_w = 1.0 / float(imgWidth);
    pix_h = 1.0 / float(imgHeight);
    
    vec4 col = texture2D(tex0, texCoordVarying);
    
    vec4 col_s[5], col_s2[5];
    for(int i=0;i<5;i++){
    
        col_s[i] = texture2D(tex0, texCoordVarying + vec2(-pix_w*float(i)*blur_vec.x, -pix_h*float(i)*blur_vec.y));
        col_s2[i] = texture2D(tex0, texCoordVarying + vec2(pix_w*float(i)*blur_vec.x, pix_h*float(i)*blur_vec.y));
        
    }
    
    col_s[0] = (col_s[0] + col_s[1] + col_s[2] + col_s[3] + col_s[4])/5.0;
    col_s2[0]= (col_s2[0]+ col_s2[1]+ col_s2[2]+ col_s2[3]+ col_s2[4])/5.0;
    col = (col_s[0] + col_s2[0]) / 2.0;
    
    gl_FragColor = col;

}