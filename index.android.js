
'use strict';

import FirstProjectNative from "./index.native"
import React, { AppRegistry } from 'react-native';

class FirstAndroidProject extends FirstProjectNative {

};

AppRegistry.registerComponent('FirstAndroidProject', () => FirstAndroidProject);
