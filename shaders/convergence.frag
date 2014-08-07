
precision highp float;

uniform sampler2D tex0;
uniform float rand;


varying vec2 texCoordVarying;

void main()
{
    
    vec4 col   = texture2D(tex0, texCoordVarying);
    vec4 col_r = texture2D(tex0, texCoordVarying + vec2(-35.0/512.*rand,0));
    vec4 col_l = texture2D(tex0, texCoordVarying + vec2( 35.0/512.*rand,0));
    vec4 col_g = texture2D(tex0, texCoordVarying + vec2( -7.5/512.*rand,0));
 
    col.b = col.b + col_r.b*max(1.0,sin(texCoordVarying.y*1.2)*2.5)*rand;
    col.r = col.r + col_l.r*max(1.0,sin(texCoordVarying.y*1.2)*2.5)*rand;
    col.g = col.g + col_g.g*max(1.0,sin(texCoordVarying.y*1.2)*2.5)*rand;

    gl_FragColor = col;

}