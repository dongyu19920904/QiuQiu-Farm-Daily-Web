(() => {
  const root = document.querySelector("[data-ai-radar]");
  if (!root) return;

  const feedUrl = root.dataset.feedUrl;
  const list = root.querySelector("[data-ai-radar-list]");
  const updated = root.querySelector("[data-ai-radar-updated]");
  const maxAgeMs = 36 * 60 * 60 * 1000;

  const safeHttpUrl = (value) => {
    try {
      const url = new URL(value);
      return url.protocol === "http:" || url.protocol === "https:" ? url.href : null;
    } catch {
      return null;
    }
  };

  const formatTime = (value) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return new Intl.DateTimeFormat("zh-CN", {
      timeZone: "Asia/Shanghai",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const render = (payload) => {
    const generatedAt = new Date(payload.generated_at);
    const ageMs = Date.now() - generatedAt.getTime();
    if (
      Number.isNaN(generatedAt.getTime()) ||
      ageMs < -60 * 60 * 1000 ||
      ageMs > maxAgeMs ||
      !Array.isArray(payload.items)
    ) {
      return;
    }

    const items = payload.items
      .map((item) => ({
        title: String(item.title || "").trim(),
        source: String(item.source || "").trim(),
        publishedAt: item.published_at,
        url: safeHttpUrl(item.url),
      }))
      .filter((item) => item.url && item.title.length >= 6)
      .slice(0, 3);

    if (items.length < 3) return;

    const fragment = document.createDocumentFragment();
    items.forEach((item) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      const title = document.createElement("span");
      const meta = document.createElement("span");

      link.href = item.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      title.className = "ai-radar-strip__item-title";
      title.textContent = item.title;
      meta.className = "ai-radar-strip__item-meta";
      meta.textContent = [item.source, formatTime(item.publishedAt)].filter(Boolean).join(" · ");

      link.append(title, meta);
      listItem.append(link);
      fragment.append(listItem);
    });

    list.replaceChildren(fragment);
    updated.dateTime = generatedAt.toISOString();
    updated.textContent = `${formatTime(generatedAt)} 更新`;
    root.hidden = false;
  };

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 4500);

  fetch(feedUrl, {
    mode: "cors",
    credentials: "omit",
    signal: controller.signal,
  })
    .then((response) => {
      if (!response.ok) throw new Error(`AI Radar HTTP ${response.status}`);
      return response.json();
    })
    .then(render)
    .catch(() => {})
    .finally(() => window.clearTimeout(timeout));
})();
