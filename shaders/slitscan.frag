
precision highp float;

uniform sampler2D tex0;
uniform float imgWidth;
uniform float imgHeight;
uniform float val3;

varying vec2 texCoordVarying;

void main()
{

    float slit_h = val3/512.;
    
    
    
    vec2 texCoord = vec2(3.0/512. + floor(texCoordVarying.x/slit_h)*slit_h, texCoordVarying.y);
    
    vec4 col = texture2D(tex0, texCoord);
    
    gl_FragColor = col;

}