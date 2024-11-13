document.getElementById("translate").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: function () {
          async function translateText(text) {
            const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|bn`);
            const data = await response.json();
            return data.responseData.translatedText;
          }
  
          async function translatePage() {
            const elements = document.body.querySelectorAll("*");
            for (const element of elements) {
              if (element.children.length === 0 && element.innerText.trim() !== "") {
                const translatedText = await translateText(element.innerText);
                element.innerText = translatedText;
              }
            }
          }
  
          translatePage();
        }
      });
    });
  });
  