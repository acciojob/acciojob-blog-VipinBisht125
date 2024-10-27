//your JS code here. If required.
function toggleParagraph() {
			const paragraph = document.getElementById('optimization-paragraph');
			if (paragraph.style.display === 'none' || paragraph.style.display === '') {
				paragraph.style.display = 'block';
			} else {
				paragraph.style.display = 'none';
			}
		}