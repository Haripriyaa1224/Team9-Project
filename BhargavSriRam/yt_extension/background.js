


chrome.tabs.onUpdated.addListener(async (tabId, tab) => {

  let t = await chrome.tabs.query({ active: true, lastFocusedWindow: true })


  console.log(tab)
  if (t[0].url && t[0].url.includes("youtube.com/watch")) {


    const queryParameters = t[0].url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);
    console.log(urlParameters)


    await chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v"),
    }, function (response) {
      if (!chrome.runtime.lastError) {
        console.log('response', response);
      } else {
        console.log(chrome.runtime.lastError);
      }
    });
  }



});