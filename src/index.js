import lib from './lib.css';
import application from "./application.scss"
var sayHello = require('./greeting.js');
import { sayHelloes6 } from './greetinges6.js'
import { checkBrowserWebrtc, checkBrowserWebrtcFirefox } from './webrtc.js'

//commonJS way
//sayHello();
//es6 way
//sayHelloes6();
//checkBrowserWebrtc();
checkBrowserWebrtcFirefox();
