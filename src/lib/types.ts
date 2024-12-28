export type FieldType =
	| 'number'
	| 'search'
	| 'date'
	| 'text'
	| 'image'
	| 'time'
	| 'hidden'
	| 'color'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'month'
	| 'password'
	| 'reset'
	| 'submit'
	| 'tel'
	| 'url'
	| 'week';

export interface Field {
	id: string;
	label: string;
	type: FieldType;
	required?: boolean;
}

// URL untuk tindakan, bisa memasukkan `{id}` yang akan diganti dengan id item
export type Column = {
	label: string; // Nama kolom yang akan ditampilkan
	key: string; // Kunci untuk mengakses data dari objek
};

// Tipe untuk aksi CRUD
export type TableCrudAction = {
	label: string; // Label untuk tombol aksi
	color:
		| 'blue'
		| 'green'
		| 'red'
		| 'yellow'
		| 'purple'
		| 'light'
		| 'dark'
		| 'primary'
		| 'none'
		| 'alternative'; // Warna tombol
	href: string; // URL untuk tindakan, bisa memasukkan `{id}` yang akan diganti dengan id item
};
