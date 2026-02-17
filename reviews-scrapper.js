(async function () {



  function downloadJSON(data, filename = "reviews.json") {
    const jsonString = JSON.stringify(data, null, 2); // formatted JSON
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }




  const TARGET_COUNT =  100;
  const DELAY = 2000;  
  const elements = document.querySelectorAll('.DxyBCb,.R4aD0e');
  const parent = elements[elements.length - 1];
  if (!parent) {
    console.error("Parent div not found ❌");
    return;
  }

  let processedCount = 0; 
  async function scrollToBottom() {
    parent.scrollTo({
      top: parent.scrollHeight,
      behavior: 'smooth'
    });
  }

  const allReviews = [];
  let lastCount = 0;
  while (true) {
    const divs = parent.querySelectorAll('.jftiEf,.bwb7ce');
    if (divs.length === lastCount) break;
    lastCount = divs.length;
    
    for (let i = processedCount; i < divs.length; i++) {
      const textElement = divs[i].querySelector('.wiI7pd,.OA1nbd');
      const reviewText = textElement ? textElement.innerText.trim() : '';
      var userImage = divs[i].querySelector('.WEBjve img')?.src || '';
      if(!userImage){
      const styleAttribute = divs[i]
        .querySelector('.wSokxc')
        ?.getAttribute('style')?.trim() || '';
        const match  = styleAttribute.match(/http[s]?:\/\/[^'") ]+/);
        userImage = match ? match[0] : null;
      }
      const imageUrl = userImage.replace(/=w\d+.*$/, '');
      const ratings = divs[i].querySelector('.kvMYJc,.dHX2k').getAttribute('aria-label')?.trim() || '';
      const userName = divs[i].querySelector('.d4r55,.Vpc5Fe').innerText?.trim() || '';
      const reviewTime = divs[i].querySelector('.rsqaWe,.y3Ibjb').innerText?.trim() || '';
      if (reviewText == '' || reviewText.length < 20) continue;

      allReviews.push({imageUrl,userName,reviewText,ratings, reviewTime})
      processedCount++;

      if (processedCount >= lastCount) break;
    }

    await scrollToBottom();
    await new Promise(resolve => setTimeout(resolve, DELAY));
  }
  console.log("Done ✅ All Reviews JSON :");
  downloadJSON(allReviews, "google-reviews.json");

})();