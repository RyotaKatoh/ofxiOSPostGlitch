# ofxiOSPostGlitch
This add-on applies ofxPostGlitch (https://github.com/maxillacult/ofxPostGlitch/) for iOS.  

## Usage :
You need at least two classes 'ofImage' (or ofVideoGrabber) and 'ofxiOSPostGlitch' to use it.

	ofImage image;
	ofxiOSPostGlitch postGlitch;

In the Setup(), you should give ofImage's pointer to ofxiOSPostGlitch instance.

    void ofApp::setup(){
      image.loadImage("0.jpg");
      postGlitch.setup(&image);
    }

To apply effect or not, use setShaderOn() or setShaderOff() function.

	void ofApp::update(){
	  postGlitch.setShaderOn(0);
		postGlitch.update();
	}

	void ofApp::draw(){
		postGlitch.draw(0, 0);
	}

More details can be found in the example project file.

## Glitch FXs	
- Convergence
- Glow
- Shaker
- Cutslider
- Twist
- Outline
- Slitscan
- Swell
- Invert

## Developer info
Ryota Katoh
[http://ryotakatoh.com](http://ryotakatoh.com)

