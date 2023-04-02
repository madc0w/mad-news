function load() {
	document.getElementsByTagName('title')[0].innerHTML = data.headline;
	document.getElementById('main-heading').innerHTML = data.headline;

	let html = '';
	let isFirst = true;
	for (const text of data.text) {
		html +=
			'<div data-component="text-block" class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0">';
		html += '<div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">';
		html += '<p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">';
		if (isFirst) {
			html += `<b class="ssrcss-hmf8ql-BoldText e5tfeyi3">${text}</b>`;
		} else {
			html += text;
		}
		html += '</p>';
		html += '</div>';
		html += '</div>';

		isFirst = false;
	}
	document.getElementById('text-block-container').innerHTML = html;
	document.getElementById('byline').innerHTML = data.byline;

	const img1 = document.getElementById('img1');
	img1.setAttribute('src', data.image1.src);
	img1.setAttribute('alt', data.image1.alt);
	img1.setAttribute('style', data.image1.style);

	const img2 = document.getElementById('img2');
	img2.setAttribute('src', data.image2.src);
	img2.setAttribute('alt', data.image2.alt);
	img2.setAttribute('style', data.image2.style);

	document.getElementById('img1-caption').innerHTML = data.image1.alt;
	document.getElementById('img2-caption').innerHTML = data.image2.alt;
}
