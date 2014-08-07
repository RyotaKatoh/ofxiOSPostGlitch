//
//  ofxiOSPostGlitch.h
//  
//
//  Created by Ryota Katoh on 2014/08/07.
//
//

#pragma once

#include "ofMain.h"
#include "ofxiOS.h"

const int Num_Shaders = 9;


class ofxiOSPostGlitch{
public:
    
    void setup(ofImage *inputImage_);
    void setup(ofVideoGrabber *camera);
    void update();
    void draw(int x, int y);
    void changeEffectPattern();
    void setShaderOn(int n);
    void setShaderOff(int n);
    
    ofImage         *targetImage;
    ofVideoGrabber  *targetCamera;
    bool            bUseCamera;
    
    ofFbo       layoutBuffer;   // layoutBuffer is for layouting some shader effects.
    ofFbo       shadingBuffer; // shaderBuffer is just effect a shader.
    
    // shader variables
    ofShader    shaders[Num_Shaders];
    bool        bUseShader[Num_Shaders];
    int         effectPatternNumber;
    
};



