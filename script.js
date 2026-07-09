// Blog retrô - Arquivos da Madrugada

const posts = window.posts || [];

const blogTitle = "Arquivos da Madrugada";
const subtitle = "Registrando aquilo que eles não querem que você veja.";


const widgetLinks = [
  { titulo: "Área 51", url: "#" },
  { titulo: "Roswell", url: "#" },
  { titulo: "MUFON", url: "#" },
  { titulo: "Projeto Blue Book", url: "#" },
  { titulo: "Assombrações do Brasil", url: "#" }
];

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function isExternalMediaUrl(value) {
  return /^https?:\/\//i.test(value) || /^data:/i.test(value) || value.startsWith('//');
}

function getYouTubeEmbedUrl(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace('www.', '');

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      const videoId = parsed.searchParams.get('v');
      if (videoId) {
        const params = new URLSearchParams({
          rel: '0',
          modestbranding: '1',
          playsinline: '1',
          autoplay: '0'
        });
        return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
      }
    }

    if (host === 'youtu.be') {
      const videoId = parsed.pathname.split('/').filter(Boolean)[0];
      if (videoId) {
        const params = new URLSearchParams({
          rel: '0',
          modestbranding: '1',
          playsinline: '1',
          autoplay: '0'
        });
        return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
      }
    }
  } catch (error) {
    const fallbackMatch = url.match(/(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/i);
    if (fallbackMatch) {
      const videoId = fallbackMatch[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }

  return url;
}

function normalizeMedia(post) {
  if (post.midia) {
    if (typeof post.midia === 'string') {
      return [{ tipo: 'imagem', src: post.midia, alt: post.titulo }];
    }

    if (Array.isArray(post.midia)) {
      return post.midia.map(item => ({
        tipo: item.tipo || 'imagem',
        src: item.src || item.url || item.link,
        alt: item.alt || post.titulo
      }));
    }

    if (post.midia.tipo === 'video' || post.midia.tipo === 'youtube' || post.midia.video) {
      return [{
        tipo: 'video',
        src: post.midia.src || post.midia.url || post.midia.link || post.midia.video,
        alt: post.midia.alt || post.titulo
      }];
    }

    return [{
      tipo: post.midia.tipo || 'imagem',
      src: post.midia.src || post.midia.url || post.midia.link,
      alt: post.midia.alt || post.titulo
    }];
  }

  if (post.imagem) {
    const images = Array.isArray(post.imagem) ? post.imagem : [post.imagem];
    return images.map(src => ({ tipo: 'imagem', src, alt: post.titulo }));
  }

  if (post.video) {
    return [{ tipo: 'video', src: post.video, alt: post.titulo }];
  }

  return [];
}

function renderMedia(mediaItems, title) {
  if (!mediaItems || mediaItems.length === 0) return '';

  const items = mediaItems.filter(item => item && item.src);
  if (items.length === 0) return '';

  const images = items.filter(item => item.tipo !== 'video' && item.tipo !== 'youtube' && item.tipo !== 'iframe');
  const nonImages = items.filter(item => item.tipo === 'video' || item.tipo === 'youtube' || item.tipo === 'iframe');

  let html = '';

  if (images.length > 1) {
    html += '<div class="gallery">';
    images.forEach(item => {
      const alt = escapeHTML(item.alt || title);
      const src = escapeHTML(item.src);
      html += '<figure class="gallery-item"><img class="post-media-image" src="' + src + '" alt="' + alt + '" loading="lazy" data-full-src="' + src + '"></figure>';
    });
    html += '</div>';
  } else if (images.length === 1) {
    const item = images[0];
    const alt = escapeHTML(item.alt || title);
    const src = escapeHTML(item.src);
    html += '<figure class="media-frame"><img class="post-media-image" src="' + src + '" alt="' + alt + '" loading="lazy" data-full-src="' + src + '"></figure>';
  }

  nonImages.forEach(item => {
    const alt = escapeHTML(item.alt || title);
    const src = escapeHTML(item.src);
    if (item.tipo === 'iframe') {
      html += '<div class="media-frame media-frame--video">' + item.src + '</div>';
    } else if (item.tipo === 'video' || item.tipo === 'youtube') {
      if (/youtube|youtu\.be/i.test(item.src)) {
        html += '<div class="media-frame media-frame--video"><iframe class="post-media-video" src="' + escapeHTML(getYouTubeEmbedUrl(item.src)) + '" title="' + alt + '" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
      } else {
        html += '<div class="media-frame media-frame--video"><video class="post-media-video" controls preload="metadata"><source src="' + src + '"></video></div>';
      }
    }
  });

  return html;
}

function renderPosts() {
  const container = document.getElementById("posts-container");
  if (!container) return;

  container.innerHTML = "";
  posts.forEach((post, index) => {
    const preview = post.conteudo.length > 260 ? post.conteudo.slice(0, 260) + "..." : post.conteudo;
    
    const mediaItems = normalizeMedia(post);
    let html = '<article class="post">';
    html += '<h3>' + escapeHTML(post.titulo) + '</h3>';
    html += '<div class="meta">';
    html += '<span>' + escapeHTML(post.data) + '</span>';
    html += '<span>' + escapeHTML(post.categoria) + '</span>';
    html += '<span>' + post.comentarios.length + ' comentários</span>';
    html += '</div>';
    html += '<div class="post-content">';
    html += renderMedia(mediaItems, post.titulo);
    html += '<p class="excerpt">' + escapeHTML(preview) + '</p>';
    html += '<p class="full hidden">' + escapeHTML(post.conteudo) + '</p>';
    html += '</div>';
    html += '<button class="toggle" type="button" data-index="' + index + '">Leia mais</button>';
    html += '<div class="comments-box"><strong>Comentários</strong><div class="comments-list">';
    
    post.comentarios.forEach(comment => {
      html += '<div class="comment">';
      html += '<div><strong>' + escapeHTML(comment.autor) + '</strong> · ' + escapeHTML(comment.data) + '</div>';
      html += '<div>' + escapeHTML(comment.texto) + '</div>';
      html += '</div>';
    });
    
    html += '</div></div></article>';
    container.innerHTML += html;
  });
}

function renderWidgets() {
  const avistamentos = document.getElementById("widget-avistamentos");
  const links = document.getElementById("widget-links");

  if (avistamentos) {
    avistamentos.innerHTML = '<li>Luzes na fazenda</li><li>Figura no corredor do hospital</li><li>Sombra na mata</li><li>Objeto sobre a colina</li>';
  }

  if (links) {
    let html = '';
    widgetLinks.forEach(item => {
      html += '<li><a href="' + item.url + '">' + escapeHTML(item.titulo) + '</a></li>';
    });
    links.innerHTML = html;
  }
}

function renderHeaderInfo() {
  const title = document.querySelector(".banner h1");
  const subtitleEl = document.querySelector(".banner p");
  if (title) title.textContent = blogTitle;
  if (subtitleEl) subtitleEl.textContent = subtitle;

  const visitCount = document.getElementById("visitor-count");
  if (visitCount) visitCount.textContent = "1827";

  const lastUpdate = document.getElementById("last-updated");
  if (lastUpdate) lastUpdate.textContent = new Date().toLocaleDateString("pt-BR");

  const footerUpdate = document.getElementById("footer-updated");
  if (footerUpdate) footerUpdate.textContent = new Date().toLocaleDateString("pt-BR");
}

function attachToggleHandlers() {
  document.addEventListener("click", function(e) {
    const target = e.target;

    if (target.classList && target.classList.contains("toggle")) {
      const article = target.closest(".post");
      if (article) {
        const excerpt = article.querySelector(".excerpt");
        const full = article.querySelector(".full");
        if (full.classList.contains("hidden")) {
          excerpt.classList.add("hidden");
          full.classList.remove("hidden");
          target.textContent = "Recolher";
        } else {
          excerpt.classList.remove("hidden");
          full.classList.add("hidden");
          target.textContent = "Leia mais";
        }
      }
      return;
    }

    const clickableImage = target.closest(".post-media-image");
    if (clickableImage) {
      const fullSrc = clickableImage.getAttribute("data-full-src") || clickableImage.getAttribute("src");
      if (fullSrc) {
        const overlay = document.createElement("div");
        overlay.className = "image-overlay";
        overlay.innerHTML = '<div class="image-overlay-content"><img src="' + escapeHTML(fullSrc) + '" alt="Imagem em tela cheia"><button class="image-overlay-close" type="button">×</button></div>';
        document.body.appendChild(overlay);
      }
    }

    if (target.classList && target.classList.contains("image-overlay-close")) {
      target.closest(".image-overlay").remove();
    }
  });
}

function init() {
  renderHeaderInfo();
  renderPosts();
  renderWidgets();
  attachToggleHandlers();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
