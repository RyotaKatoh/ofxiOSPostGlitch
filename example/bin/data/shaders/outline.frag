
precision highp float;

uniform sampler2D tex0;
uniform float imgWidth;
uniform float imgHeight;

varying vec2 texCoordVarying;

void main()
{

    int step = 3;
    vec4 cols[9];
    vec2 texCoord = vec2(texCoordVarying.x, texCoordVarying.y);
    
    for(int i=0;i<step;i++){
    
        for(int j=0;j<step;j++){
        
            cols[i*step + j] = texture2D(tex0, vec2( texCoordVarying.x + float(j)/imgWidth - 2.0/imgWidth , texCoordVarying.y + float(i)/imgHeight - 2.0/imgHeight ));
            cols[i*step + j].r = (cols[i*step +j].r + cols[i*step+j].g + cols[i*step+j].b)/3.0;
            
            
        }
        
    }
    
    float mn = 1.0, mx = 0.0;
    
    for(int i=0;i<step*step;i++){
    
        mn = min(cols[i].r, mn);
        mx = max(cols[i].r, mx);
        
    }
    
    float dst = abs(mx-mn);
    
    gl_FragColor.a = 1.0;
    gl_FragColor.rgb = vec3(dst,dst,dst);

}