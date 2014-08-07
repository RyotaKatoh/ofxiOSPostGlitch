
precision highp float;

uniform sampler2D tex0;
uniform float rand;

uniform float imgWidth, imgHeight;
uniform vec2 blur_vec;

float pix_w, pix_h;

varying vec2 texCoordVarying;

void main()
{

    vec4 col = texture2D(tex0, texCoordVarying);
    col.r = 1.0 - col.r;
    col.g = 1.0 - col.g;
    col.b = 1.0 - col.b;
    
    gl_FragColor = col;

}