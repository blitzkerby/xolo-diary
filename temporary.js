async function fetchText() {
  try {
    const response = await fetch('./temporary.txt');
    if (!response.ok) {
      throw new Error(`Error fetching the file: ${response.status} ${response.statusText}`);
    }
    const text = await response.text();
    // Replace newline characters with HTML line breaks
    // const formattedText = text.replace(/\n/g, '<br>');
    return text
  } catch (error) {
    console.error('Error fetching the file:', error);
    return null;
  }
}

// Usage:
const content = await fetchText();
console.log(content)

const modal_content_container = document.querySelector(".content-container");
modal_content_container.innerHTML = `<textarea class="dm-mono-regular" contenteditable="true">${content}</textarea>`