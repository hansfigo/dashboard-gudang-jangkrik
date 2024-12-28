export function formatToRupiah(number: number) {
	if (typeof number !== 'number') {
		throw new Error('Input harus berupa angka');
	}

	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR'
	}).format(number);
}

export function formatDate(date: string | Date): string {
	const parsedDate = new Date(date);

	// Pastikan validitas tanggal
	if (isNaN(parsedDate.getTime())) {
		throw new Error('Invalid date format');
	}

	// Format menjadi tanggal singkat (dd/mm/yyyy)
	return parsedDate.toLocaleDateString('id-ID', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	});
}
