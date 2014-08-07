
precision highp float;

uniform sampler2D tex0;
uniform float rand;


varying vec2 texCoordVarying;

void main()
{
    
    vec4 col_s = texture2D(tex0, texCoordVarying + vec2(floor(sin(texCoordVarying.y / (30.0/512.)*rand + rand*rand))*30.0/512.*rand, 0));

    gl_FragColor = col_s;

}