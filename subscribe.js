  window.addEventListener("DOMContentLoaded", function () {

    var form = document.getElementById("subscribe")
    var button = form.querySelector("button")
    var status = form.querySelector("#status")

    function success () {
      form.class = "success"
      status.innerHTML = "thanks! please check your mailbox for a confirmation."
    }

    function error (err) {
      form.class = "error"
      status.innerHTML = "ops! there was a problem: " + err.status + " " + err.response
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