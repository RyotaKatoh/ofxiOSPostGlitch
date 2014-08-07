
precision highp float;

uniform sampler2D tex0;

uniform float rand;
uniform float timer;
uniform float imgWidth, imgHeight;
varying vec2 texCoordVarying;

void main()
{

    
    vec2 texCoord = texCoordVarying + vec2(sin(texCoordVarying.y*0.03*imgHeight + timer*20.0)*(6.0/512. + 12.0*rand/512.), 0);
    
    vec4 col = texture2D(tex0, texCoord);
    
    gl_FragColor = col;

}