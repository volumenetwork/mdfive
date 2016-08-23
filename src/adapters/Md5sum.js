'use strict';

import AbstractAdapter from './AbstractAdapter';

const CMD = 'md5sum';

export default class Md5sum extends AbstractAdapter {

	constructor () {
		super();
	}

	static get CMD () {
		return CMD;
	}

	formatCmd (filePath) {
        return this.CMD + ' ' + testFilePath;
    }

    formatResult (string) {
        //example: aaec4956a2be31743c91a0d80ce3ef7b  myFile.txt
        return string.split(' ')[0];
    }
	
}