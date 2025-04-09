module.exports = {
	apps: [
	  {
		name: 'cms-be',
		script: 'npm',
		args: 'run start:win',
		interpreter: 'cmd.exe',
		cwd: 'C:\\inetpub\\cms-be',
	  },
	],
  };