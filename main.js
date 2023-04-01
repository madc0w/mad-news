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
}
