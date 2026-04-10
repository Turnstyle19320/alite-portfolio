(function() {
  var API_URL = "https://alite-chat-proxy.preppanel.workers.dev/chat";
  var toggle = document.getElementById("chat-toggle");
  var win = document.getElementById("chat-window");
  var messages = document.getElementById("chat-messages");
  var form = document.getElementById("chat-form");
  var input = document.getElementById("chat-input");
  var sendBtn = document.getElementById("chat-send");

  // Put SVG into button
  var svgEl = document.getElementById("smith-svg");
  var avatarSpan = toggle.querySelector(".avatar");
  var svgClone = svgEl.cloneNode(true);
  svgClone.style.display = "block";
  svgClone.removeAttribute("id");
  avatarSpan.appendChild(svgClone);

  var isOpen = false;
  var greeted = false;
  var loading = false;
  var conversationId = null;

  toggle.addEventListener("click", function() {
    isOpen = !isOpen;
    toggle.classList.toggle("open", isOpen);
    win.classList.toggle("open", isOpen);
    if (isOpen) {
      input.focus();
      if (!greeted) greet();
    }
  });

  function addMessage(role, text) {
    var div = document.createElement("div");
    div.className = "msg " + role;
    div.innerHTML = '<div class="bubble">' + escapeHtml(text) + '</div>';
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTyping() {
    var div = document.createElement("div");
    div.className = "msg assistant";
    div.id = "typing";
    div.innerHTML = '<div class="bubble"><div class="typing"><span></span><span></span><span></span></div></div>';
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function hideTyping() {
    var el = document.getElementById("typing");
    if (el) el.remove();
  }

  function setLoading(v) {
    loading = v;
    input.disabled = v;
    sendBtn.disabled = v || !input.value.trim();
  }

  function escapeHtml(str) {
    var d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function greet() {
    greeted = true;
    setLoading(true);
    showTyping();
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userInput: "hello" }),
    })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.executionId) conversationId = data.executionId;
        hideTyping();
        addMessage("assistant", data.result || "Hello! How can I help?");
        setLoading(false);
      })
      .catch(function() {
        hideTyping();
        addMessage("assistant", "Hello! How can I help you today?");
        setLoading(false);
      });
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    var text = input.value.trim();
    if (!text || loading) return;

    addMessage("user", text);
    input.value = "";
    sendBtn.disabled = true;
    setLoading(true);
    showTyping();

    var body = { userInput: text };
    if (conversationId) body.conversationId = conversationId;

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.executionId && !conversationId) conversationId = data.executionId;
        hideTyping();
        addMessage("assistant", data.result || "No response received.");
        setLoading(false);
      })
      .catch(function(err) {
        hideTyping();
        addMessage("assistant", "Something went wrong: " + err.message);
        setLoading(false);
      });
  });

  input.addEventListener("input", function() {
    sendBtn.disabled = loading || !input.value.trim();
  });
})();
