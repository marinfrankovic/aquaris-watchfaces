(() => {
  const catalog = window.AQUARIS_CATALOG;
  const container = document.querySelector('#catalog');
  const collection = document.querySelector('#collection');
  const detail = document.querySelector('#watch-detail');
  const installation = document.querySelector('#installation');
  const disclaimer = document.querySelector('#disclaimer');
  const parameters = new URLSearchParams(window.location.search);
  const view = parameters.get('view');
  const escape = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
  const imageMarkup = image => `<img src="${escape(image.src)}" width="454" height="454" alt="${escape(image.alt)}">`;
  document.querySelector('#collection-count').textContent = `${String(catalog.length).padStart(2, '0')} / ${catalog.length === 1 ? 'Watch face' : 'Watch faces'}`;
  container.innerHTML = catalog.map(watch => `<article class="watch-entry">
    <a class="watch-image" href="?face=${encodeURIComponent(watch.id)}" aria-label="Explore ${escape(watch.name)}">${imageMarkup(watch.images[0])}<span class="image-label">${escape(watch.resolution)} / AMOLED</span></a>
    <div class="watch-summary"><p class="eyebrow">Series ${escape(watch.series)} / ${escape(watch.category)}</p><h2><a href="?face=${encodeURIComponent(watch.id)}">${escape(watch.name)}</a></h2><p class="tagline">${escape(watch.tagline)}</p><ul class="highlights">${watch.highlights.slice(0, 2).map(item => `<li>${escape(item)}</li>`).join('')}</ul><p class="device">${escape(watch.device)}</p><a class="text-link" href="?face=${encodeURIComponent(watch.id)}">Explore ${escape(watch.series)} <span aria-hidden="true">&#8599;</span></a></div>
  </article>`).join('');
  installation.hidden = true;
  disclaimer.hidden = true;
  const requested = parameters.get('face');
  if (!requested && ['installation', 'disclaimer'].includes(view)) {
    collection.hidden = true;
    document.querySelector(`#${view}`).hidden = false;
    document.title = `${view === 'installation' ? 'Installation' : 'Disclaimer'} | AQUARIS`;
    document.querySelector('main').setAttribute('aria-label', view === 'installation' ? 'Installation' : 'Disclaimer');
    return;
  }
  if (!requested) return;
  const watch = catalog.find(item => item.id === requested);
  if (!watch) {
    const notice = document.createElement('p');
    notice.className = 'notice';
    notice.textContent = 'That watch face is not in the collection. Browse the current projects below.';
    collection.prepend(notice);
    return;
  }
  collection.hidden = true;
  detail.hidden = false;
  document.title = `${watch.name} | AQUARIS watch faces`;
  detail.innerHTML = `<a class="back-link" href="index.html">&#8592; Collection</a>
    <div class="detail-heading"><div><p class="eyebrow">Series ${escape(watch.series)} / ${escape(watch.category)}</p><h1 id="detail-title">${escape(watch.name)}</h1><p class="intro">${escape(watch.tagline)}</p></div><p class="device">${escape(watch.device)}<br>${escape(watch.resolution)} AMOLED</p></div>
    ${watch.download ? `<section class="download-strip" aria-label="Watch-face download"><div><p class="eyebrow">Release build / ${escape(watch.download.build)}</p><h2>Download ${escape(watch.series)}</h2><p>For ${escape(watch.download.device)} only. USB sideload installation.</p><p class="download-warning">Install and use at your own risk. No liability for watch damage, data loss, or related costs to the extent permitted by law. <a href="?view=disclaimer">Read the full disclaimer</a> before installing.</p><details><summary>File details / ${(watch.download.bytes / 1024).toFixed(1)} KB</summary><p><code>${escape(watch.download.filename)}</code><br>SHA-256: <code class="checksum">${escape(watch.download.sha256)}</code></p></details></div><a class="download-link" href="${escape(watch.download.url)}" download="${escape(watch.download.filename)}" aria-label="Download ${escape(watch.series)} PRG"><span aria-hidden="true">&#8595;</span> Download PRG</a></section>` : ''}
    <section class="key-functions" aria-label="Key functions">${watch.keyFunctions.map(([title, text]) => `<article><h2>${escape(title)}</h2><p>${escape(text)}</p></article>`).join('')}</section>
    <div class="detail-overview"><figure class="watch-gallery"><div class="gallery-image" id="gallery-image">${imageMarkup(watch.images[0])}</div><div class="image-switch" role="group" aria-label="Display mode">${watch.images.map((image, index) => `<button type="button" data-image="${index}" aria-pressed="${index === 0}">${escape(image.label)}</button>`).join('')}</div><figcaption id="image-caption">${escape(watch.images[0].caption)}</figcaption></figure><div class="overview-copy"><p class="eyebrow">The design</p><h2>Analog character.<br>Everyday readings.</h2><p>${escape(watch.description)}</p><dl class="specs"><div><dt>Series</dt><dd>${escape(watch.series)}</dd></div><div><dt>Display</dt><dd>${escape(watch.resolution)} AMOLED</dd></div><div><dt>Time format</dt><dd>${escape(watch.timeFormat || '24-hour digital + local analog')}</dd></div><div><dt>Distribution</dt><dd>${watch.download ? 'Release PRG / USB sideload' : 'Showcase only'}</dd></div></dl><a class="text-link" href="?view=installation">Installation guide <span aria-hidden="true">&#8599;</span></a></div></div>
    <section class="compatibility" aria-labelledby="compatibility-title"><p class="eyebrow">Device support</p><h2 id="compatibility-title">Compatible watches</h2><ul>${watch.compatibleWatches.map(device => `<li><strong>${escape(device.name)}</strong><span>${escape(device.status)}</span></li>`).join('')}</ul><p>${escape(watch.compatibilityNote)}</p></section>
    ${watch.compatibilityAssessment ? `<section class="compatibility-assessment" aria-labelledby="assessment-title"><h2 id="assessment-title">Compatibility test results</h2><p class="assessment-note">${watch.compatibilityAssessment.results.length} models tested / ${escape(watch.compatibilityAssessment.date)}. Simulator passes are not supported downloads.</p><dl class="assessment-groups">${[['Supported download', 'Supported download'], ['Simulator pass', 'Simulator pass only'], ['Blocked', 'Blocked']].map(([status, label]) => { const models = watch.compatibilityAssessment.results.filter(result => result[2] === status); return models.length ? `<div><dt>${escape(label)} (${models.length})</dt><dd>${models.map(result => escape(result[0])).join(', ')}.</dd></div>` : ''; }).join('')}</dl><details class="assessment-method"><summary>Test scope and limitations</summary><p>${escape(watch.compatibilityAssessment.method)}</p></details></section>` : ''}
    <section class="features" aria-labelledby="features-title"><p class="eyebrow">Inside ${escape(watch.series)}</p><h2 id="features-title">Functions &amp; details</h2><div class="feature-grid">${watch.features.map(([title, text], index) => `<article><span class="feature-number">${String(index + 1).padStart(2, '0')}</span><h3>${escape(title)}</h3><p>${escape(text)}</p></article>`).join('')}</div></section>
    <aside class="data-notes"><h2>Good to know</h2><ul>${watch.notes.map(note => `<li>${escape(note)}</li>`).join('')}</ul></aside>`;
  detail.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
    const image = watch.images[Number(button.dataset.image)];
    document.querySelector('#gallery-image').innerHTML = imageMarkup(image);
    document.querySelector('#image-caption').textContent = image.caption;
    detail.querySelectorAll('[data-image]').forEach(choice => choice.setAttribute('aria-pressed', String(choice === button)));
  }));
})();