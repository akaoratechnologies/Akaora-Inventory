
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

const prefetched = new Set();
function prefetch(url){
  if(!url || prefetched.has(url) || !url.endsWith(".html")) return;
  prefetched.add(url);
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = url;
  document.head.appendChild(link);
}
document.querySelectorAll('a[href$=".html"]').forEach(a => {
  a.addEventListener("mouseenter", () => prefetch(a.getAttribute("href")), {once:true});
  a.addEventListener("touchstart", () => prefetch(a.getAttribute("href")), {once:true, passive:true});
});

const bookingForm = document.getElementById("bookingForm");
bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(bookingForm);
  const message =
`Hello Akaora Technologies,
I want to book Akaora Inventory Bill Machine.

Name: ${data.get("name")}
Mobile: ${data.get("phone")}
Business: ${data.get("business")}
Business Type: ${data.get("type")}
City/Location: ${data.get("city")}
Quantity: ${data.get("quantity")}
Message: ${data.get("message") || "N/A"}

Offer Price: ₹4,999
Website: www.akaoratechnologies.in`;

  const url = "https://wa.me/919997173138?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
});
