module.exports = {
  message: 'NativeScript Plugins ~ made with โค๏ธ  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '๐ง': {
      script: `npx cowsay "NativeScript plugin demos make developers ๐"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla ๐ฆ"`,
        description: ` ๐ป Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: 'โ  Clean  ๐งน',
        },
        ios: {
          script: 'nx run demo:ios',
          description: 'โ  Run iOS  ๏ฃฟ',
        },
        android: {
          script: 'nx run demo:android',
          description: 'โ  Run Android  ๐ค',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` ๐ป Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: 'โ  Clean  ๐งน',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: 'โ  Run iOS  ๏ฃฟ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: 'โ  Run Android  ๐ค',
        },
      },
    },
    'โ๏ธ': {
      script: `npx cowsay "@prash/* packages will keep your โ๏ธ cranking"`,
      description: '_____________  @prash/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@prash': {
      // @prash/prash-ios-trial1
			'prash-ios-trial1': {
				build: {
					script: 'nx run prash-ios-trial1:build.all',
					description: '@prash/prash-ios-trial1: Build',
				},
			},
			// @prash/test-ios-native-package
			'test-ios-native-package': {
				build: {
					script: 'nx run test-ios-native-package:build.all',
					description: '@prash/test-ios-native-package: Build',
				},
			},
			// @prash/prash-pod-plugin
			'prash-pod-plugin': {
				build: {
					script: 'nx run prash-pod-plugin:build.all',
					description: '@prash/prash-pod-plugin: Build',
				},
			},
			'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    'โก': {
      script: `npx cowsay "Focus only on source you care about for efficiency โก"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      'prash-ios-trial1': {
				script: 'nx run prash-ios-trial1:focus',
				description: 'Focus on @prash/prash-ios-trial1',
			},
			'test-ios-native-package': {
				script: 'nx run test-ios-native-package:focus',
				description: 'Focus on @prash/test-ios-native-package',
			},
			'prash-pod-plugin': {
				script: 'nx run prash-pod-plugin:focus',
				description: 'Focus on @prash/prash-pod-plugin',
			},
			reset: {
        script: 'nx g @prash/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
