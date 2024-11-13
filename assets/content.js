// Function to translate text using MyMemory API
async function translateText(text) {
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|bn`);
    const data = await response.json();
    return data.responseData.translatedText;
  }
  
  // Main function to translate the entire page content
  async function translatePage() {
    const elements = document.body.querySelectorAll("*");
  
    for (const element of elements) {
      // Only translate elements with no child elements (leaf nodes) and with text content
      if (element.children.length === 0 && element.innerText.trim() !== "") {
        const translatedText = await translateText(element.innerText);
        element.innerText = translatedText;
      }
    }
  }
  