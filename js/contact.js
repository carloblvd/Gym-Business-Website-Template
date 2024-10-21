const faqItems = Array.from(document.querySelectorAll(".cs-faq-item"));

for (const item of faqItems) {
  item.addEventListener("click", () => {
    // First, remove 'active' from all items

    faqItems.forEach((i) => i.classList.remove("active"));

    // Then, add 'active' to the clicked item
    item.classList.add("active");
  });
}
