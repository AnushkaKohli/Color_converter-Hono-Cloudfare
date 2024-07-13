import { Hono } from 'hono';
import { keyword } from 'color-convert';
import { KEYWORD } from 'color-convert/conversions';

const app = new Hono();

app.get('/', (c) => {
	return c.text('Simple color converter. Use /colorformat/colorname to get the color code.');
});

app.get('/:colorformat/:colorname', (c) => {
	const colorname: KEYWORD = c.req.param('colorname') as KEYWORD;
	const colorformat: string = c.req.param('colorformat');
	if (colorformat == 'hex') {
		const hex = keyword.hex(colorname);
		return c.text(`#${hex}`);
	} else if (colorformat == 'rgb') {
		const rgb = keyword.rgb(colorname);
		return c.text(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
	} else if (colorformat == 'hsl') {
		const hsl = keyword.hsl(colorname);
		return c.text(`hsl(${hsl[0]}, ${hsl[1]}, ${hsl[2]})`);
	} else {
		c.text('Invalid color format. Use hex, rgb, or hsl.');
	}
});

export default app;
