#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    
    ofBackground(0, 0, 0);
    

#ifdef USE_CAMERA
    
    camera.initGrabber(ofGetWidth(), ofGetHeight());
    postGlitch.setup(&camera);
    
#else
    
    image.loadImage("0.jpg");
    image.resize(ofGetWidth(), ofGetWidth()*image.height / (float)image.width);
    postGlitch.setup(&image);
    
#endif
    
    effectNumber = 0;
}

//--------------------------------------------------------------
void ofApp::update(){

    postGlitch.update();
    
}

//--------------------------------------------------------------
void ofApp::draw(){
	
    postGlitch.draw(0, ofGetHeight()/2 - image.height/2);
    
}

//--------------------------------------------------------------
void ofApp::exit(){

}

//--------------------------------------------------------------
void ofApp::touchDown(ofTouchEventArgs & touch){
    
    for(int i=0;i<Num_Shaders;i++){
        
        if(Pattern[effectNumber][i] == 1)
            postGlitch.setShaderOn(i);
        
    }

}

//--------------------------------------------------------------
void ofApp::touchMoved(ofTouchEventArgs & touch){
    
}

//--------------------------------------------------------------
void ofApp::touchUp(ofTouchEventArgs & touch){
    
    for(int i=0;i<Num_Shaders;i++){
    
        if(Pattern[effectNumber][i] == 1)
            postGlitch.setShaderOff(i);
        
    }

    effectNumber ++;
    if(effectNumber >= Num_Pattern)
        effectNumber = 0;
    
}

//--------------------------------------------------------------
void ofApp::touchDoubleTap(ofTouchEventArgs & touch){

}

//--------------------------------------------------------------
void ofApp::touchCancelled(ofTouchEventArgs & touch){
    
}

//--------------------------------------------------------------
void ofApp::lostFocus(){

}

//--------------------------------------------------------------
void ofApp::gotFocus(){

}

//--------------------------------------------------------------
void ofApp::gotMemoryWarning(){

}

//--------------------------------------------------------------
void ofApp::deviceOrientationChanged(int newOrientation){

}
