// adapted from formspree.io template
  window.addEventListener("DOMContentLoaded", function () {

    var form = document.querySelector("form#subscribe")
    var button = form.querySelector("button")
    var status = form.querySelector("#status")

    function header () {
      return new Date() + "<br>"
    }

    function success () {
      status.className = "success"
      status.innerHTML = header() + "thanks!"
    }

    function error (err) {
      status.className = "error"
      status.innerHTML = header() + "ops! there was a problem: " + err.status + "<br>" + err.response
    }

    form.addEventListener("submit", function(ev) {
      ev.preventDefault()
      var data = new FormData(form)
      ajax(form.method, form.action, data, success, error)
    })
  })
  function ajax (method, url, data, success, error) {
    var xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.setRequestHeader("accept", "application/json")
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType)
      } else {
        error(xhr)
      }
    }
    xhr.send(data)
  }
  
// textarea auto resize copied from https://stackoverflow.com/a/25621277/274502 option 2
const tx = document.getElementsByTagName('textarea');
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
  tx[i].addEventListener("input", OnInput, false);
}
function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}