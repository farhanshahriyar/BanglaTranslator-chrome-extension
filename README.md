## TransBanglaWebExt - English to Bangla Webpage Translator

📝 Project Overview
---------------------------------------------
TransBanglaWebExt is a Chrome extension designed to make the web more accessible for Bangla-speaking users. This extension translates English content on any webpage to Bangla with a single click, empowering users who might struggle with English to consume information on English-only websites comfortably.
## 🔨 What I Built

**This project is a user-friendly Chrome extension that:**  

-	Automatically detects visible English text on any webpage.
-	Translates the content from English to Bangla using the MyMemory API.
-	Allows users to toggle translation via a simple popup interface with a "Translate to Bangla" button.

## 📜 Explanation

This extension leverages the Chrome extension APIs, JavaScript, and the MyMemory API to provide real-time, on-page translations. When activated, it scans the webpage for text elements, translates the English content to Bangla, and updates the page without needing to reload it.

**Core Functionalities**

- **Popup UI**: A user-friendly interface that provides a "Translate to Bangla" button to activate the translation.
- **Content Script Execution**: JavaScript code that scans text elements on the active webpage and replaces English text with translated Bangla text.
- **Translation API**: Sends text to the MyMemory API, retrieves the Bangla translations, and applies them to the webpage.

## ✨ Why Should People Use It?

-	**Accessibility:** For Bangla speakers with limited English proficiency, this extension makes online content more accessible.

-	**Convenience:** No need to copy-paste text into a separate translation tool; just click the button and get an instant translation on the page.

-	**Enhanced Web Experience:** Provides a smoother browsing experience for users who want to understand English content without language barriers.

## 👥 Who Should Use This Extension?

-	**Bangla-Speaking Users**: Primarily for those who read Bangla and prefer consuming information in their native language.

-	**Non-English-Speaking Users**: Those who struggle with English content but need to use English-only websites.
-	**Students, Researchers, and General Web Users:** Anyone who frequently encounters English text on the web and wants a quick translation tool.

## 🌍 Where to Use It?

This extension is ideal for use on English-only websites, such as:

-   Government and official sites
-	News websites
-	Research articles
-	Educational platforms
-	Blogs and forums

## 📖 How to Install and Use

-  To deploy this project run

```bash
  https://github.com/farhanshahriyar/BanglaTranslator-chrome-extension.git
```

**Load the Extension in Chrome:**
-	Go to chrome://extensions/.
-	Enable Developer mode.
-	Click Load unpacked and select the project folder.


**Use the Extension:**
-	Navigate to any English webpage.
-	Click the extension icon in the Chrome toolbar.
-	Click the "Translate to Bangla" button in the popup to translate the page content to Bangla.

## 💡 Use Case

**Scenario:** A Bangla-speaking user visits a popular English news website and struggles to understand the article in English. By using the TransBanglaWebExt, they can click the "Translate to Bangla" button to instantly view the article's content in Bangla, making it easier to read and comprehend.
## Screenshots

![App Screenshot](https://s4.ezgif.com/tmp/ezgif-4-0f8dc3e312.gif)


## 🚀 Future Improvements

-	**Customizable Language Options:** Adding support for other languages to broaden usability.
-	**Offline Translation:** Implementing a cached translation feature for faster translations without relying on the API.
-	**Enhanced Parsing Logic:** Improving text parsing to handle more complex webpage structures.

## Authors

- [@farhanshahriyar](https://github.com/farhanshahriyar)

