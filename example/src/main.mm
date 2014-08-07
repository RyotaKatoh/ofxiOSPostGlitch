#include "ofMain.h"
#include "ofApp.h"

int main(){

    ofSetCurrentRenderer(ofGLProgrammableRenderer::TYPE);
	ofSetupOpenGL(1024,768,OF_FULLSCREEN);			// <-------- setup the GL context

	ofRunApp(new ofApp());
}
