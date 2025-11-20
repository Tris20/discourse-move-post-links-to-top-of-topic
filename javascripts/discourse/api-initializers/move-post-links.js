import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.14.1", (api) => {
  api.onPageChange(() => {
    document.querySelectorAll(".topic-post").forEach((post) => {
      const meta = post.querySelector(".topic-meta-data");
      const links = post.querySelector(".post-links-container");

      if (!meta || !links || links.dataset.moved) {
        return;
      }

      // Move <div class="post-links-container"> right after
      // <div class="topic-meta-data" role="heading" aria-level="2">
      meta.insertAdjacentElement("afterend", links);

      links.dataset.moved = "true"; // ensure it's not moved twice
    });
  });
});
