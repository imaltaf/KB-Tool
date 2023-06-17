var inputField = document.getElementById("inputIds");
inputField.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        copyIds();
    }
});

function copyIds() {
    var input = inputField.value;
    var ids = input.split(" ");
    var count = ids.length;
    document.getElementById("count").innerHTML = "Count: " + count;
    document.getElementById("output").innerHTML = count + ":" + ids.join(",");
    var temp = document.createElement("textarea");
    temp.value = count + ":" + ids.join(",");
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    
}

function resetIds() {
    inputField.value = "";
    document.getElementById("count").innerHTML = "";
    document.getElementById("output").innerHTML = "";
}



function copyOutput() {
    const output = document.getElementById("output").innerText;
    navigator.clipboard.writeText(output);
  }

  function reset() {
    document.getElementById("input").value = "";
    document.getElementById("output").innerText = "";
  }



  
  function search() {
    var companyName = document.getElementById("companyName").value;
    var searchType = document.querySelector('input[name="searchType"]:checked').value;
    var query = searchType === "site" ? "site: " + companyName : companyName + " zauba";
    window.open("https://www.google.com/search?q=" + encodeURIComponent(query));
  }

  function resetForm() {
    document.getElementById("companyName").value = "";
    document.querySelector('input[name="searchType"][value="site"]').checked = true;
  }

  function copyToClipboard(text, button) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    button.classList.add('copied');
    setTimeout(() => {
      button.classList.remove('copied');
    }, 1000);
    const copiedMessage = button.querySelector('.copied-message');
    copiedMessage.classList.add('show');
    setTimeout(() => {
      copiedMessage.classList.remove('show');
    }, 2000);
  }