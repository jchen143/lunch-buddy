(function () {
  function resolveEnv(d) {
    return d || undefined
  }
  window.__env = {
    domain: resolveEnv(".secure.mealpal.com"),
    environment: resolveEnv("production"),
    features: {
      mmq: resolveEnv("false"),
      orderNumbers: resolveEnv("true"),
      dinner: resolveEnv("true"),
      paymentFailureEnabled: resolveEnv("true"),
      rafFlexPowerupEnabled: resolveEnv("false"),
      portionSizesEnabled: resolveEnv("true"),
      multipleMealsCityWhiteList: resolveEnv("NYC"),
      creditsPlansCityWhiteList: resolveEnv("NYC,SGP,SYD,MEL"),
      changeCancelViaEmailEnabled: resolveEnv("true"),
      donateACycleEnabled: resolveEnv("true"),
      pickupForAFriendEnabled: resolveEnv("false"),
      marketHoldReactivationCityWhiteList: resolveEnv("NYC")
    },
    i18n: {
        default: {
            termsUrl: resolveEnv("https://www.mealpal.com/terms-and-conditions"),
            privacyUrl: resolveEnv("https://www.mealpal.com/privacy-policy"),
            faqUrl: resolveEnv("https://www.mealpal.com/faq"),
            cookiesPolicyUrl: resolveEnv("https://www.mealpal.com/cookie-policy"),
            membershipDetailsUrl: resolveEnv("https://www.mealpal.com/membership-details"),
        },
        gbr: {
            termsUrl: resolveEnv("https://www.mealpal.co.uk/terms-and-conditions"),
            privacyUrl: resolveEnv("https://www.mealpal.co.uk/privacy-policy"),
            faqUrl: resolveEnv("https://www.mealpal.co.uk/faq"),
            cookiesPolicyUrl: resolveEnv("https://www.mealpal.co.uk/cookie-policy"),
            membershipDetailsUrl: resolveEnv("https://www.mealpal.co.uk/membership-details"),
        }
    },
    kitchenTimes: resolveEnv({"default":{"lunch":{"open_time":"17:00","close_time":"10:30","mealpal_now_open_time":"10:30","mealpal_now_close_time":"13:30","last_close_time":"15:00"},"dinner":{"open_time":"17:00","close_time":"16:00","mealpal_now_open_time":null,"mealpal_now_close_time":null,"last_close_time":"20:30"}}}),
    rollbarAccessToken: resolveEnv("163d4d2e380a4a88b1264cc22a81de07"),
    landingPageUrl: resolveEnv("https://www.mealpal.com"),
    criteoPixelAccountId: resolveEnv("53988"),
    googleAnalyticsTrackingId: resolveEnv("UA-71764562-1"),
    mobileCustomURLScheme: resolveEnv("mealpal://"),
    production: true,
    serverUrl: resolveEnv("https://secure.mealpal.com"),
    parse: {
        applicationId: resolveEnv("FgoCWKvEYwLPyYUEdL5vOJwCnZLhhqkNKQOSklGH"),
        javascriptKey: resolveEnv("JvLdrSwo8sOtWUTb2kveQcVgd1YrutPG27gY8m5c"),
        parseServerUrl: resolveEnv("https://secure.mealpal.com/1")
    },
    linkedinConnectUrl: resolveEnv("https://secure.mealpal.com/users/auth/linkedin"),
    restaurantPortalUrl: resolveEnv("https://restaurant.mealpal.com"),
    subscriberUrl: resolveEnv("https://secure.mealpal.com"),
    version: resolveEnv("a3f4f366b41246a35eb67366c67fb6cae93bb0b8")
  }
})()
