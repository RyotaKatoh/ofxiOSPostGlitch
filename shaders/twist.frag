
precision highp float;

uniform sampler2D tex0;
uniform float rand;

uniform float imgWidth, imgHeight;
uniform vec2 blur_vec;
uniform float timer;
uniform float val2, val3;

float pix_w, pix_h;

varying vec2 texCoordVarying;

void main()
{

    pix_w = 1.0 / float(imgWidth);
    pix_h = 1.0 / float(imgHeight);
    
    float v2, v3;
    v2 = val2 / 512.;
    v3 = val3 / 512.;
    
    vec2 texCoord = vec2( max(3.0/512., min(float(imgWidth), texCoordVarying.x + sin(texCoordVarying.y / (153.25/512.*rand*rand)*rand + rand*v2 + timer*3.0/512.)*v3)),  max(3.0/512.,min(float(imgHeight),texCoordVarying.y+cos(texCoordVarying.x/(251.57/512.*rand*rand)*rand+rand*v2+timer*2.4/512.)*v3)-3./512.) );
    
    vec4 col = texture2D(tex0, texCoord);
    
    gl_FragColor = col;

}