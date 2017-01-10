angular
.module('webui.ctrls.nav', [
	'webui.services.configuration', 'webui.services.modals',
	'webui.services.rpc', 'webui.services.rpc.helpers',
	'webui.services.settings', 'webui.services.utils'
])
.controller('NavCtrl', [
	'$scope', '$modals',
	'$rpc', '$rpchelpers', '$fileSettings',
	'$globalSettings', '$globalExclude',
	'$utils', '$translate', '$filter',
	function(
		scope, modals,
		rpc, rhelpers, fsettings,
		gsettings, gexclude,
		utils, translate, filter
	) {

	scope.isFeatureEnabled = function(f) { return rhelpers.isFeatureEnabled(f) };

	// initially collapsed in mobile resolution
	scope.collapsed = true;

	scope.onDownloadFilter = function() {
		// Forward to MainCtrl.
		scope.$parent.downloadFilter = scope.downloadFilter;
		scope.$parent.onDownloadFilter();
	};

	// manage download functions
	scope.forcePauseAll = function() {
		rpc.once('forcePauseAll', []);
	}

	scope.purgeDownloadResult = function() {
		rpc.once('purgeDownloadResult', []);
	}

	scope.unpauseAll = function() {
		rpc.once('unpauseAll', []);
	}

	scope.addUris = function() {
		modals.invoke(
			'getUris', _.bind(rhelpers.addUris, rhelpers)
		);
	};

	scope.addMetalinks = function() {
		modals.invoke(
			'getMetalinks', _.bind(rhelpers.addMetalinks, rhelpers)
		);
	};

	scope.addTorrents = function() {
		modals.invoke(
			'getTorrents', _.bind(rhelpers.addTorrents, rhelpers)
		);
	};

	scope.changeCSettings = function() {
		modals.invoke(
			'connection', rpc.getConfiguration(), _.bind(rpc.configure, rpc)
		);
	}

	scope.changeGSettings = function() {
		rpc.once('getGlobalOption', [], function(data) {
			var starred = utils.getCookie('aria2props');
			if (!starred || !starred.indexOf) starred = [];
			var vals = data[0];
			var settings = {};

			// global settings divided into
			// file settings + some global specific
			// settings

			_.forEach([fsettings, gsettings], function(sets) {
				for (var i in sets) {
					if (gexclude.indexOf(i) != -1) continue;

					settings[i] = _.cloneDeep(sets[i]);
					settings[i].starred = starred.indexOf(i) != -1;
				}
			});

			for (var i in vals) {
				if (i in gexclude) continue;

				if (!(i in settings)) {
					settings[i] = { name: i, val: vals[i], desc: '', starred: starred.indexOf(i) != -1 };
				}

				else {
					settings[i].val = vals[i];
				}
			}

			modals.invoke(
				'settings', _.cloneDeep(settings),
				filter('translate')('Global Settings'),
				filter('translate')('Save'),
				function(chsettings) {

					var sets = {};
					var starred = [];
					for (var i in chsettings) {
						// no need to change default values
						if (settings[i].val != chsettings[i].val)
							sets[i] = chsettings[i].val

						if (chsettings[i].starred) {
							starred.push(i);
						}
					};

					console.log('saving aria2 settings:', sets);
					console.log('saving aria2 starred:', starred);

					rpc.once('changeGlobalOption', [sets]);
					utils.setCookie('aria2props', starred);
				});
		});
	};

	scope.showServerInfo = function() {
		modals.invoke(
			'server_info'
		);
	};

	scope.showAbout = function() {
		modals.invoke(
			'about'
		);
	};

	scope.changeLanguage = function (langkey) {
		translate.use(langkey);
	};

	scope.shutDownServer = function () {
	    rpc.once('shutdown', []);
	};
}]);
