chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [{
        id: 1,
        priority: 1,
        action: {
            type: "block",
        },
        condition: {
            urlFilter: "*://*.4399.com/antijs/Antiindulgence.js*",
        }
    }],
    removeRuleIds: [1]
});