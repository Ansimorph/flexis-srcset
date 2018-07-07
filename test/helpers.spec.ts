import {
	attachMetadata,
	matchImage
} from '../src/helpers';
import image, { expectedSize } from './image';

describe('Helpers', () => {

	beforeEach(() => {
		Reflect.deleteProperty(image, 'metadata');
	});

	describe('attachMetadata', () => {

		it('should attach correct metadata', async () => {

			await attachMetadata(image);

			expect(image.metadata.width).toBe(expectedSize.width);
			expect(image.metadata.height).toBe(expectedSize.height);
		});

		it('shouldn\'t reattach metadata', async () => {

			image.metadata = { mock: true };
			await attachMetadata(image);

			expect(image.metadata.mock).toBe(true);
		});
	});

	describe('matchImage', () => {

		it('should dismatch unsupported image format', async () => {

			const bmp = image.clone({ contents: false });

			bmp.extname = '.bmp';

			expect(await matchImage(bmp)).toBe(false);
		});

		it('should match by media query', async () => {
			expect(await matchImage(image, `(width: ${expectedSize.width}px)`)).toBe(true);
		});

		it('should dismatch by media query', async () => {
			expect(await matchImage(image, '(max-width: 10px)')).toBe(false);
		});

		it('should match by path glob', async () => {
			expect(await matchImage(image, '**/*.jpg')).toBe(true);
		});

		it('should dismatch by path glob', async () => {
			expect(await matchImage(image, '**/*.png')).toBe(false);
		});

		it('should match by function', async () => {
			expect(await matchImage(image, () => true)).toBe(true);
		});

		it('should dismatch by function', async () => {
			expect(await matchImage(image, () => false)).toBe(false);
		});

		it('should match by few matchers', async () => {
			expect(await matchImage(image, ['**/*.jpg', `(width: ${expectedSize.width}px)`])).toBe(true);
		});

		it('should dismatch by few matchers', async () => {
			expect(await matchImage(image, ['**/*.png', `(width: ${expectedSize.width}px)`])).toBe(false);
		});
	});
});
