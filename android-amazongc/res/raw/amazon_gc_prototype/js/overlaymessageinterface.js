/*! Copyright 2013 Amazon Digital Services, Inc. All rights reserved. */
function loginClick(){var a={};a[constants.ServiceActionCode.ACTION_CODE_KEY]=constants.ServiceActionCode.AUTHENTICATE;var b=NativeTransport.callNative({nativeCall:"backgroundTask",args:a});hostinterface.closeOverlay()}function corClick(b){var a={};a[constants.ServiceActionCode.ACTION_CODE_KEY]=constants.ServiceActionCode.UPDATE_COUNTRY_OF_RESIDENCE;a[constants.BindingKeys.COUNTRY_OF_RESIDENCE]=b;var c=NativeTransport.callNative({nativeCall:"backgroundTask",args:a});hostinterface.closeOverlay()}function tosClick(){var a={};a[constants.ServiceActionCode.ACTION_CODE_KEY]=constants.ServiceActionCode.AUTHENTICATE;var b=NativeTransport.callNative({nativeCall:"backgroundTask",args:a});hostinterface.closeOverlay()}function handleOverlayData(b){initData={};if(b!=null){if(b.appName){initData.appName=b.appName}if(b.gameCircleVersion){initData.gameCircleVersion=b.gameCircleVersion}if(b.clientVersion){initData.clientVersion=b.clientVersion}if(b.contentVersion){initData.contentVersion=b.contentVersion}if(b.languageCode){initData.languageCode=b.languageCode}else{initData.languageCode="en"}if(b.countryCode){initData.countryCode="US"}else{initData.countryCode="US"}if(b.deviceId){initData.deviceId=b.deviceId}else{initData.deviceId=""}if(b.deviceManufacturer){initData.deviceManufacturer=b.deviceManufacturer}else{initData.deviceManufacturer=""}if(b.deviceModel){initData.deviceModel=b.deviceModel}else{initData.deviceModel=""}if(b.deviceType){initData.deviceType=b.deviceType}else{initData.deviceType=""}if(b.experiments){initData.experiments=b.experiments}else{initData.experiments={}}var a=b[constants.OverlayBindingKeys.OVERLAY_ACTION_CODE_KEY];if(a==constants.OverlayActionCode.SHOW_LOGIN){initData.initialPage=Page.FTUELogin;window.onPlatformReady(initData)}else{if(a==constants.OverlayActionCode.SHOW_LEARN_MORE){initData.initialPage=Page.LearnMore;window.onPlatformReady(initData)}else{if(a==constants.OverlayActionCode.SHOW_TERMS_OF_SERVICE){initData.initialPage=Page.FTUETOS;window.onPlatformReady(initData)}else{if(a==constants.OverlayActionCode.SHOW_COR_SELECTION){initData.initialPage=Page.FTUECORSelection;window.onPlatformReady(initData)}else{if(a==constants.OverlayActionCode.SHOW_COR_UNSUPPORTED){initData.initialPage=Page.FTUECORUnsupported;window.onPlatformReady(initData)}else{if(a==constants.OverlayActionCode.SHOW_AGE_VERIFICATION){initData.initialPage=Page.FTUEAgeVerification;window.onPlatformReady(initData)}else{if(a==constants.OverlayActionCode.SHOW_AGE_VIOLATION){initData.initialPage=Page.FTUEAgeViolation;window.onPlatformReady(initData)}else{if(a==constants.OverlayActionCode.SHOW_ACHIEVEMENT_SIGN_IN_PROMPT){initData.initialPage=Page.AchievementSignInPrompt;window.onPlatformReady(initData)}else{if(a==constants.OverlayActionCode.SHOW_LEADERBOARD_SIGN_IN_PROMPT){initData.initialPage=Page.LeaderboardSignInPrompt;window.onPlatformReady(initData)}else{if(a==constants.OverlayActionCode.SHOW_ACHIEVEMENTS){initData.initialPage=Page.Achievements;window.onPlatformReady(initData)}else{if(a==constants.OverlayActionCode.SHOW_LEADERBOARDS){initData.initialPage=Page.Leaderboards;window.onPlatformReady(initData)}else{if(a==constants.OverlayActionCode.SHOW_LEADERBOARD_RANKS){initData.initialPage=Page.LeaderboardRanks;initData.leaderboardIdToDisplay=b[constants.LeaderboardBindingKeys.LEADERBOARD_ID_KEY];window.onPlatformReady(initData)}else{if(a==constants.OverlayActionCode.SHOW_SUMMARY){initData.initialPage=Page.Summary;window.onPlatformReady(initData)}else{if(a==constants.OverlayActionCode.SHOW_PROFILE){initData.initialPage=Page.Profile;window.onPlatformReady(initData)}else{$("body").append("<p>Overlay page: "+a+"</p>");$("body").append('<p><a href="javascript:hostinterface.closeOverlay();">Close Overlay</a></p>')}}}}}}}}}}}}}}}else{$("body").append("<p>No overlay data!</p>");$("body").append('<p><a href="javascript:hostinterface.closeOverlay();">Close Overlay</a></p>')}}hostinterface.setReadyForMessages();console.log("overlaymessageinterface loaded.");