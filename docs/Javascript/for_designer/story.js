import { Event } from "../imported_modules/event.js";

export const Start = new Event({
	Name : "Start",
	Occurence : "Start of the game",
	Question : "",
	Possible_Answer_List : [],
	// Next_event_name should be the first event in the game
	Answers_For_Next_Event_List : [{trigger : "A", next_event_name: "Kamu_Dipindahkan_Ke_Dunia_Lain_Secara_Tiba_Tiba"}],
	Ending : {
		"A" : [
			{
			type : "default_ending",
			story_bit : "" 
			},
		]
	}
});

export const Kamu_Dipindahkan_Ke_Dunia_Lain_Secara_Tiba_Tiba = new Event ({
	Name : "Kamu_Dipindahkan_Ke_Dunia_Lain_Secara_Tiba_Tiba",
	Occurence : "Kamu dipindahkan ke dunia lain secara tiba-tiba.",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu kebingungan dengan apa yang barusan terjadi."
		},
		{
			id : "B",
			answer : "Kamu langsung tenang, dan langsung memikirkan apa yang akan kamu lakukan setelahnya."
		},
		{
			id : "C",
			answer : "Kamu senang luar biasa, berpikir hal luar biasa sedang terjadi kepadamu."
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : "Kamu_Panik_Setelah_Reinkarnasi_Di_Dunia_Lain"},
		{trigger : "B", next_event_name : "Kamu_Langsung_Bergerak_Dan_Sigap"},
		{trigger : "C", next_event_name : "Kamu_Langsung_Bergerak_Dan_Sigap"},
	],
	Lazy_Mode : true
});

export const Kamu_Panik_Setelah_Reinkarnasi_Di_Dunia_Lain = new Event ({
	Name : "Kamu_Panik_Setelah_Reinkarnasi_Di_Dunia_Lain",
	Occurence : "Kamu mulai panik dan cemas. Kamu tidak tahu apa yang sedang terjadi.",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu tetap duduk saja sambil ketakutan."
		},
		{
			id : "B",
			answer : "Kamu akan memperhatikan sekitar meskipun sedang ketakutan."
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : "Kamu_Memerhatikan_Lingkungan_Sekitar_Dengan_Ketakutan"},
		{trigger : "B", next_event_name : "Kamu_Memerhatikan_Lingkungan_Sekitar_Dengan_Ketakutan"}
	],
	Lazy_Mode : true
});

export const Kamu_Langsung_Bergerak_Dan_Sigap = new Event ({
	Name : "Kamu_Langsung_Bergerak_Dan_Sigap",
	Occurence : "Kamu langsung bergerak dan sigap dengan lingkungan sekitar. Kalian akan dengan cepat beradaptasi.",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu memilih untuk berjalan kaki untuk melihat lingkungan sekitar dengan santai."
		},
		{
			id : "B",
			answer : "Kamu duduk saja, memilih untuk tetap waspada dengan situasi."
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : "Kamu_Memerhatikan_Lingkungan_Sekitar_Dan_Melihat_Hewan"},
		{trigger : "B", next_event_name : "Kamu_Memerhatikan_Lingkungan_Sekitar"}
	],
	Lazy_Mode : true
});

export const Kamu_Memerhatikan_Lingkungan_Sekitar_Dengan_Ketakutan = new Event ({
	Name : "Kamu_Memerhatikan_Lingkungan_Sekitar_Dengan_Ketakutan",
	Occurence : "Kamu mulai memerhatikan lingkungan sekitar dengan bergetar dan ketakutan. Kamu sedang berada di sebuah hutan, sendirian. Hari sedang mendung berat dan semuanya tampak cukup gelap.",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu tetap ketakutan. Ditambah lagi dengan situasi sekelilingmu yang mengerikan, kamu semakin tidak berdaya."
		},
		{
			id : "B",
			answer : "Kamu akhirnya berusaha untuk tenang. Berusaha menangkap situasi yang sedang terjadi."
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : "Kamu_Berteriak_Keras_Lalu_Mulai_Berlari"},
		{trigger : "B", next_event_name : "Kamu_Memerhatikan_Lingkungan_Sekitar"}
	],
	Lazy_Mode : true
});

export const Kamu_Memerhatikan_Lingkungan_Sekitar_Dan_Melihat_Hewan = new Event ({
	Name : "Kamu_Memerhatikan_Lingkungan_Sekitar_Dan_Melihat_Hewan",
	Occurence : "Kamu mulai memerhatikan lingkungan sekitar. Kamu sedang berada di sebuah hutan, sendirian. Hari sedang mendung berat dan semuanya tampak cukup gelap. Kamu menemukan hewan yang tidak kamu kenal di dunia sebelumnya. Kamu merogoh saku bajumu dan menemukan sebuah belati.",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu memutuskan untuk memburu binatang itu."
		},
		{
			id : "B",
			answer : "Tinggalkan hewan itu dan tetap waspada dengan lingkungan sekitar. Kamu mengembalikan belati ke saku bajumu."
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : "Memburu_Hewan_Asing_Yang_Ditemui"},
		{trigger : "B", next_event_name : "Kamu_Akhirnya_Memutuskan_Untuk_Menghadapi_Hewan_Buas"}
	],
	Lazy_Mode : true
});

export const Kamu_Memerhatikan_Lingkungan_Sekitar = new Event ({
	Name : "Kamu_Memerhatikan_Lingkungan_Sekitar",
	Occurence : "Kamu mulai memerhatikan lingkungan sekitar. Kamu sedang berada di sebuah hutan, sendirian. Hari sedang mendung berat dan semuanya tampak cukup gelap.",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu akhirnya memutuskan untuk berdiri dan berjalan mengamati sekitar."
		},
		{
			id : "B",
			answer : "Lama kelamaan karena tidak terjadi apa-apa kamu mulai mengantuk, kamu akhirnya memutuskan untuk tertidur sambil menunggu langit cerah."
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : "Kamu_Memerhatikan_Lingkungan_Sekitar_Dan_Melihat_Hewan"},
		{trigger : "B", next_event_name : "Kamu_Diterkam_Tiba_Tiba_Dan_Mati"}
	],
	Lazy_Mode : true
});

export const Kamu_Diterkam_Tiba_Tiba_Dan_Mati = new Event ({
	Name : "Kamu_Diterkam_Tiba_Tiba_Dan_Mati​",
	Occurence : "Kamu terbangun dari tidurmu mendengar suara auman. Kamu kaget setelah melihat hewan asing yang besar sedang mengejar mu dari kejauhan. Kamu sudah mencoba menjauh, namun sudah terlambat karena kurangnya persiapan. Kamu mati terbunuh oleh hewan itu.​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : ""
		}
	],
	Lazy_Mode : true,
	End_Game_Event : true
});

export const Kamu_Berteriak_Keras_Lalu_Mulai_Berlari = new Event ({
	Name : "Kamu_Berteriak_Keras_Lalu_Mulai_Berlari",
	Occurence : "Secara refleks kamu berteriak keras, ketakutanmu sudah mencapai batasnya. Kamu tiba tiba saja masuk ke dunia lain yang benar-benar asing yang membuatmu panik. Kamu mulai berlarian tanpa arah sambil terus berteriak.",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu memilih untuk berlarian dalam garis lurus."
		},
		{
			id : "B",
			answer : "Kamu memilih untuk berlarian random (zig zag)."
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : "Percepat_Lari_Karena_Ada_Hewan_Buas_Mengejarmu"},
		{trigger : "B", next_event_name : "Percepat_Lari_Karena_Ada_Hewan_Buas_Mengejarmu"}
	],
	Lazy_Mode : true
});

export const Percepat_Lari_Karena_Ada_Hewan_Buas_Mengejarmu = new Event ({
	Name : "Percepat_Lari_Karena_Ada_Hewan_Buas_Mengejarmu",
	Occurence : "Ternyata ada auman hewan buas terdengar dari kejauhan! Kamu melihat ke belakang, ternyata ada hewan buas asing yang tidak kamu kenali sedang mengejarmu. Mungkin hewan itu mendengar teriakan kencangmu barusan. Kamu mempercepat larimu. ",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu memutuskan untuk mempercepat larimu dalam garis lurus."
		},
		{
			id : "B",
			answer : "Perasaanmu semakin tidak keruan. Kamu mempercepat larimu secara tidak beraturan atau zig zag."
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : "Kamu_Selamat_Dan_Terus_Berjalan"},
		{trigger : "B", next_event_name : "Kamu_Tewas_Diterkam_Setelah_Kelelahan_Berlari"}
	],
	Lazy_Mode : true
});

export const Kamu_Tewas_Diterkam_Setelah_Kelelahan_Berlari = new Event ({
	Name : "Kamu_Tewas_Diterkam_Setelah_Kelelahan_Berlari​",
	Occurence : "Kamu semakin Lelah dan hewan buas itu bisa mengejarmu dengan cepat dalam garis lurus. Kamu mati oleh serangan hewan buas itu.​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : ""
		}
	],
	Lazy_Mode : true,
	End_Game_Event : true
});

export const Kamu_Selamat_Dan_Terus_Berjalan = new Event ({
	Name : "Kamu_Selamat_Dan_Terus_Berjalan",
	Occurence : "Kamu selamat dari hewan buas itu karena larimu lebih cepat darinya. Kamu bersembunyi di balik sebuah pohon dan kehabisan napas.",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Karena ketakutan, kamu memutuskan untuk tetap melanjutkan berjalan karena tidak tahu apa yang menanti di tempat seperti ini.​"
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : "Kamu_Melihat_Sorot_Cahaya"}
	],
	Lazy_Mode : true
	/* Ending : {
		"A" : 
	} */
});

export const Memburu_Hewan_Asing_Yang_Ditemui = new Event ({
	Name : "Memburu_Hewan_Asing_Yang_Ditemui​",
	Occurence : "Hewan itu berpenampakan seperti seekor serigala. Ketika mendekatinya, hewan itu menyadari keberadaanmu dan langsung berancang-ancang untuk menerkammu.​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu memutuskan untuk mengayunkan belatimu secara refleks menuju kepala hewan itu.​"
		},
		{
			id : "B",
			answer : "Kamu memutuskan untuk mengelak terkaman hewan itu.​"
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : "Kamu_Diterkam_Oleh_Hewan_Karena_Gagal_Membunuhnya_Duluan"},
		{trigger : "B", next_event_name : "Kamu_Berhasil_Membunuh_Hewan_Buas_Itu"}
	],
	Lazy_Mode : true
});

export const Kamu_Akhirnya_Memutuskan_Untuk_Menghadapi_Hewan_Buas = new Event ({
	Name : "Kamu_Akhirnya_Memutuskan_Untuk_Menghadapi_Hewan_Buas​",
	Occurence : "Setelah beberapa lama berjalan dan waspada, ternyata kamu tetap kembali menemukan hewan seperti yang kamu lihat tadi. Kamu sebenarnya ingin mengabaikannya, Namun wajah hewan itu terlihat mengerikan dan membuatmu tidak tenang.",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu memutuskan untuk mendekati hewan itu.​"
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : "Memburu_Hewan_Asing_Yang_Ditemui"}
	],
	Lazy_Mode : true
});

export const Kamu_Diterkam_Oleh_Hewan_Karena_Gagal_Membunuhnya_Duluan = new Event ({
	Name : "Kamu_Diterkam_Oleh_Hewan_Karena_Gagal_Membunuhnya_Duluan",
	Occurence : "Hewan itu ternyata berhasil menggigit belatimu dan membuangnya dari tanganmu. Kamu panik dan bersegera mengambil ancang ancang untuk pergi, namun sudah terlambat. Kamu sudah tidak bisa melakukan apa-apa lagi setelah hewan itu mulai mencabik-cabik anggota tubuhmu.​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : ""
		}
	],
	Lazy_Mode : true,
	End_Game_Event : true
});

export const Kamu_Berhasil_Membunuh_Hewan_Buas_Itu = new Event ({
	Name : "Kamu_Berhasil_Membunuh_Hewan_Buas_Itu",
	Occurence : "Kamu terus mengelak terkaman hewan itu, dan akhirnya menemukan sebuah celah untuk menyerang. Kamu menusukkan belatimu ke badan hewan itu dan mencabiknya. Hewan itu berhasil kamu bunuh.​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu memutuskan untuk mengumpulkan kayu dan membuat api untuk membakarnya.​"
		},
		{
			id : "B",
			answer : "Kamu memutuskan untuk memakannya secara mentah tanpa pikir panjang.​"
		},
		{
			id : "C",
			answer : "Kamu memutuskan untuk meninggalkan bangkai hewan itu begitu saja dan memilih untuk terus berjalan sambil meningkatkan kewaspadaan.​​"
		},
		{
			id : "D",
			answer : "Kamu memutuskan untuk membawa bangkai hewan itu denganmu dalam perjalananmu untuk sekarang.​​"
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : "Kamu_Mulai_Menguliti_Hewan_Buas_Itu"},
		{trigger : "B", next_event_name : "Mati_Keracunan"},
		{trigger : "C", next_event_name : "Kamu_Melihat_Sorot_Cahaya"},
		{trigger : "D", next_event_name : "Mati_Dikeroyok"}
	],
	Lazy_Mode : true
});

export const Mati_Keracunan = new Event ({
	Name : "Mati_Keracunan",
	Occurence : "Awalnya tak terasa terlalu buruk, dan kamu terus memakannya untuk menghilangkan lapar. Namun, beberapa menit kemudian kamu merasa mual luar biasa dan mulai muntah-muntah. Tak lama kemudian kamu mati keracunan dari daging mentah hewan itu.​​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : ""
		}
	],
	Lazy_Mode : true,
	End_Game_Event : true
});

export const Mati_Dikeroyok = new Event ({
	Name : "Mati_Dikeroyok",
	Occurence : "Beban itu berat dan memperlambat langkahmu. Namun tak disangka, beberapa hewan buas lain sejenis sepertinya sedang mendekatimu—mungkin karena bau bangkainya. Kamu berusaha lari namun sudah Lelah karena membawa beban yang berat. Kamu mati setelah dikeroyok kelompok hewan itu.​​​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : ""
		}
	],
	Ending : {
		"A" : [
			{
			type: "specific_event_checker",
			specification : {
				event_before : "Semua_Bagian_Bangkai_Belum_Selesai_Dipotong​"
			},
			story_bit : "Cuaca saat itu sedang gerimis. Beban itu berat dan memperlambat langkahmu. Namun tak disangka, beberapa hewan buas lain sejenis sepertinya sedang mendekatimu—mungkin karena bau bangkainya. Kamu berusaha lari namun sudah Lelah karena membawa beban yang berat. Kamu mati setelah dikeroyok kelompok hewan itu.​​​",
			},
			{
			type: "default_ending",
			story_bit : "Beban itu berat dan memperlambat langkahmu. Namun tak disangka, beberapa hewan buas lain sejenis sepertinya sedang mendekatimu—mungkin karena bau bangkainya. Kamu berusaha lari namun sudah Lelah karena membawa beban yang berat. Kamu mati setelah dikeroyok kelompok hewan itu.​​​",
			}
		]
	},
	End_Game_Event : true
});

export const Kamu_Mulai_Menguliti_Hewan_Buas_Itu = new Event ({
	Name : "Kamu_Mulai_Menguliti_Hewan_Buas_Itu",
	Occurence : "Kamu menguliti dan hendak memotong-motong bangkai hewan itu dengan pisaumu, bersiap membakarnya dengan peralatan seadanya.​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu melakukannya dengan terburu-buru karena takut akan diserang lagi, sehingga berusaha menyelesaikan secepatnya.​"
		},
		{
			id : "B",
			answer : "Kamu memilih mengerjakannya dengan santai dan teliti, agar semuanya rapi.​"
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : "Bangkai_Sudah_Jadi_Potongan_Kecil_Semua"},
		{trigger : "B", next_event_name : "Semua_Bagian_Bangkai_Belum_Selesai_Dipotong"}
	],
	Lazy_Mode : true
});

export const Kamu_Melihat_Sorot_Cahaya = new Event ({
	Name : "Kamu_Melihat_Sorot_Cahaya",
	Occurence : "Kamu terus berjalan dan semakin kelelahan. Hari juga semakin petang. Tapi tidak ada pilihan lain, terdapat hewan buas di hutan seperti ini dan mau tak mau kamu harus tetap berjalan dan siaga setiap saat. Bila menemukan keberadaan hewan buas, kamu langsung menjauhinya.<br>​Setelah beberapa lama berjalan, kamu akhirnya melihat sorot cahaya dari kejauhan di balik pohon-pohon.​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu memutuskan untuk mendekatinya untuk memeriksa.​",
			condition_list : [
				{
					type: "specific_event_checker", 
					specification : {
						event_name : "Kamu_Berhasil_Membunuh_Hewan_Buas_Itu",
						choice : "C"}
				}
			]
		},
		{
			id : "B",
			answer : "Kamu tetap waspada dan tidak mendekatinya. Karena hari sudah mulai malam dan kamu kelelahan, kamu memutuskan untuk tidur.​​"
		},
		{
			id : "C",
			answer : "Kamu memutuskan untuk mendekatinya untuk memeriksa.​",
			condition_list : [
				{
					type: "specific_event_checker", 
					specification : {
						event_name : "Bangkai_Sudah_Jadi_Potongan_Kecil_Semua"}
				}
			]
		},
		{
			id : "D",
			answer : "Kamu memutuskan untuk mendekatinya untuk memeriksa.​​​",
			condition_list : [
				{
					type: "specific_event_checker", 
					specification : {
						event_name : "Kamu_Selamat_Dan_Terus_Berjalan"}
				}
			]
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : ""},
		{trigger : "B", next_event_name : ""},
		{trigger : "C", next_event_name : ""},
		{trigger : "D", next_event_name : "Kamu_Menemukan_Pondok_Kecil_Rute_Ijo"}
	],
	Lazy_Mode : true
});

export const Bangkai_Sudah_Jadi_Potongan_Kecil_Semua = new Event ({
	Name : "Bangkai_Sudah_Jadi_Potongan_Kecil_Semua",
	Occurence : "Tapi, ternyata gerimis mulai turun.  Tentu saja kamu tidak jadi membakarnya. Karena kamu mengulitinya dengan terburu-buru, bangkainya sudah terbagi menjadi potongan kecil.​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu memutuskan untuk membawa beberapa potongan kecil untuk berjaga-jaga nanti.​"
		},
		{
			id : "B",
			answer : "Kamu memutuskan untuk meninggalkan semuanya karena merasa kesal setelah hujan turun.​"
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : "Kamu_Melihat_Sorot_Cahaya"},
		{trigger : "B", next_event_name : "Kamu_Melihat_Sorot_Cahaya"}
	],
	Lazy_Mode : true
});

export const Semua_Bagian_Bangkai_Belum_Selesai_Dipotong = new Event ({
	Name : "Semua_Bagian_Bangkai_Belum_Selesai_Dipotong",
	Occurence : "Tapi, ternyata gerimis mulai turun.  Tentu saja kamu tidak jadi membakarnya. Kamu belum selesai memotong semua bagian hewan. ​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu memutuskan untuk membawa beberapa potong kecil daging kecil di dalam saku bajumu untuk jaga-jaga. ​"
		},
		{
			id : "B",
			answer : "Kamu memutuskan untuk membawa potongan yang lebih besar untuk dibawa. Cukup berat, untuk jaga-jaga bila kelaparan nanti.​"
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : "Kamu_Melihat_Sorot_Cahaya"},
		{trigger : "B", next_event_name : "Kamu_Melihat_Sorot_Cahaya"}
	],
	Lazy_Mode : true
});

export const Kamu_Disergap_Oleh_Hewan_Buas_Di_Malam_Hari = new Event ({
	Name : "Kamu_Disergap_Oleh_Hewan_Buas_Di_Malam_Hari",
	Occurence : "Kamu terbangun dari tidurmu mendengar suara auman. Kamu kaget dan sudah kenal bahwa itu adalah auman hewan buas yang tadi. Namun hari sudah malam dan gelap, kamu susah melihat dalam kegelapan. Hewan itu dalam sekejap sudah menerkam mu dihadapanmu. Kamu mati terbunuh oleh hewan itu.​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : ""
		}
	],
	Lazy_Mode : true,
	End_Game_Event : true
});

export const Kamu_Menemukan_Pondok_Kecil_Rute_Ijo = new Event ({
	Name : "Kamu_Menemukan_Pondok_Kecil_Rute_Ijo",
	Occurence : "Kejutan! Ternyata di balik cahaya itu adalah sebuah pondok kecil. Arsitekturnya mirip dengan pondok yang ia kenali di dunia sebelumnya. Kemungkinan dibangun manusia. Tapi, tentu saja kamu ingin memastikan apakah di dunia lain ini  memang ada manusia lain sepertinya, dan sekarang adalah waktu yang paling pas untuk memastikannya.​​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu memilih cara yang sopan untuk mengetuk pintu terlebih dahulu. Kamu berpikir kamu mungkin bisa berkomunikasi dengan siapa/apapun penghuni tempat ini.​"
		},
		{
			id : "B",
			answer : "Karena tidak mengetahui apa-apa soal dunia ini, kamu memutuskan untuk mendobrak pintu depan. Kamu belum bisa memastikan penghuni tempat ini manusia atau bukan.​"
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : ""},
		{trigger : "B", next_event_name : ""}
	],
	Lazy_Mode : true
});

export const Kamu_Mendengar_Suara_Langkah_Dari_Dalam_Rute_Ijo = new Event ({
	Name : "Kamu_Mendengar_Suara_Langkah_Dari_Dalam_Rute_Ijo",
	Occurence : "Beberapa saat kemudian, kamu mendengar suara Langkah dari dalam dan pintu terbuka. Kamu terkejut. Benar! Pondok ini rupanya dihuni oleh manusia. Seorang pria paruh baya sekarang sedang berdiri di hadapannya. Manusia di hadapannya juga tampak terkejut, mulai berbicara Bahasa yang tidak kamu mengerti, dari raut wajahnya dia kelihatan takut dan cemas.​​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Meskipun kamu tidak mengerti bahasanya, kamu memutuskan untuk menggunakan Bahasa isyarat tubuhmu sebisa mungkin untuk menjelaskan situasimu untuk menegaskan kamu tidak berniat jahat.​"
		},
		{
			id : "B",
			answer : "Kamu memutuskan untuk diam saja dan menerima semua ocehan pria itu tanpa menjawab.​"
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : ""},
		{trigger : "B", next_event_name : ""}
	],
	Lazy_Mode : true
});

export const Pria_Asing_Tiba_Tiba_Mengeluarkan_Belati_Dari_Pinggangnya_Rute_Ijo = new Event ({
	Name : "Pria_Asing_Tiba_Tiba_Mengeluarkan_Belati_Dari_Pinggangnya_Rute_Ijo",
	Occurence : "Pria itu tiba-tiba mengeluarkan belati dari saku di pinggangnya. Wajahnya sangat ketakutan, sudah jelas-jelas menunjukkan ingin mengusirmu dari situ.​​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu berusaha tetap tenang, kamu semakin bingung harus berkata apa dan mulai salah tingkah. ​",
			condition_list : [
				{
					type: "specific_event_checker", 
					specification : {
						event_name : "Kamu_Mendengar_Suara_Langkah_Dari_Dalam_Rute_Ijo",
						choice : "B"}
				}
			]
		},
		{
			id : "B",
			answer : "Kamu berusaha tetap tenang, mencoba sekali lagi menggunakan Bahasa isyarat untuk menjelaskan situasimu.​",
			condition_list : [
				{
					type: "specific_event_checker", 
					specification : {
						event_name : "Kamu_Mendengar_Suara_Langkah_Dari_Dalam_Rute_Ijo",
						choice : "A"}
				}
			]
		},
		{
			id : "C",
			answer : "Kamu memutuskan untuk kabur dari TKP secepatnya. Langsung berlari tunggang langgang tanpa melihat kebelakang, tidak ingin mengambil risiko lebih jauh.​"
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : ""},
		{trigger : "B", next_event_name : ""}
	],
	Lazy_Mode : true
});

export const Ketakutan_Pria_Semakin_Parah_Dan_Kamu_Langsung_Ditusuk = new Event ({
	Name : "Ketakutan_Pria_Semakin_Parah_Dan_Kamu_Langsung_Ditusuk",
	Occurence : "Pada akhirnya, kecemasan di wajah pria itu tampak tidak berkurang sedikitpun dan justru semakin parah. Tanpa aba-aba, pria di hadapanmu itu langsung menusuk dadamu tepat di jantungmu. Kamu tewas seketika.​​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : ""
		}
	],
	Lazy_Mode : true,
	End_Game_Event : true
});

export const Kamu_Dikejar_Pria_Yang_Tadi = new Event ({
	Name : "Kamu_Dikejar_Pria_Yang_Tadi",
	Occurence : "Meskipun kamu sudah lari secepat yang kamu bisa, namun kamu masih mendengar derap kaki di belakangmu. Kamu juga merasa ada cahaya memancar dari belakangmu. Sepertinya orang tadi masih mengejarmu sambil membawa penerangan.​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu melanjutkan berlari tanpa melihat ke belakang.​"
		},
		{
			id : "B",
			answer : "Kamu memutuskan untuk mengambil risiko. Kamu berhenti tiba-tiba, mengambil batu segenggam tangan yang berada di tanah, dan melemparnya telak kepada pria di belakangmu.​"
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : ""},
		{trigger : "B", next_event_name : ""}
	],
	Lazy_Mode : true
});

export const Kamu_Tersandung_Dan_Dibunuh_Pria_Itu = new Event ({
	Name : "Kamu_Tersandung_Dan_Dibunuh_Pria_Itu",
	Occurence : "Kamu berlari secepat yang kamu bisa, namun tetap saja kamu sama sekali tidak mengenali tempat ini, ditambah hari sudah malam dan jarak pandang terbatas. Pada satu kesempatan, kamu tersandung oleh sesuatu yang tidak bisa kamu lihat dan pria itu berhasil mengejarmu. Ia tanpa ampun langsung menusuk dadamu tanpa dan membakarmu hidup-hidup. Kamu tewas seketika.​​​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : ""
		}
	],
	Lazy_Mode : true,
	End_Game_Event : true
});

export const Pria_Itu_Terjatuh_Setelah_Kamu_Lempar_Dan_Kamu_Berhasil_Kabur = new Event ({
	Name : "Pria_Itu_Terjatuh_Setelah_Kamu_Lempar_Dan_Kamu_Berhasil_Kabur",
	Occurence : "Buk! Lemparan itu sepertinya telak mengenainya. Pria itu terjatuh di tanah. Kamu tentu saja mengambil kesempatan ini dan berlari ke arah berbeda secepat mungkin dan menghindari pria itu. Akhirnya kamu bisa merasa tenang setelah semua benar-benar sunyi dan gelap gulita. Sekarang kamu sedang sendirian di hutan tanpa penerangan apapun, kelelahan setelah berlari lama tadi.​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu memutuskan untuk tidur karena benar-benar tidak ada yang bisa kamu lakukan sekarang. Kamu hanya pasrah dengan keadaanmu sekarang.​"
		},
		{
			id : "B",
			answer : "Kamu memutuskan untuk tetap berjaga walaupun gelap gulita. Bila sampai ada hewan buas seperti yang kamu lihat siang tadi menyerangmu sekarang.​"
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : ""},
		{trigger : "B", next_event_name : ""}
	],
	Lazy_Mode : true
});

export const Kamu_Tertidur_Di_Hutan_Dan_Pasrah_Saat_Dimangsa_Hewan_Buas = new Event ({
	Name : "Kamu_Tertidur_Di_Hutan_Dan_Pasrah_Saat_Dimangsa_Hewan_Buas",
	Occurence : "Kamu memilih tidur, hewan buas itu dengan mudah menemukanmu yang penuh celah dan memangsamu. Tentu saja karena sudah pasrah, kamu bahkan tidak memberikan perlawanan sama sekali.​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : ""
		}
	],
	Lazy_Mode : true,
	End_Game_Event : true
});

export const Kamu_Terlalu_Kelelahan_Dan_Pada_Akhirnya_Tetap_Dimangsa_Hewan_Buas = new Event ({
	Name : "Kamu_Terlalu_Kelelahan_Dan_Pada_Akhirnya_Tetap_Dimangsa_Hewan_Buas",
	Occurence : "Kamu memilih berjaga, tetap tidak ada yang bisa kamu lakukan—kamu kelelahan sekali dari tadi. Kamu tidak bisa kabur walaupun hewan buas itu mengejarmu. Kamu juga mati dimangsa oleh hewan buas pada malam itu.​​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : ""
		}
	],
	Lazy_Mode : true,
	End_Game_Event : true
});

export const Kamu_Mendobrak_Pintu_Dan_Mendengar_Suara_Manusia_Dari_Dalam_Rute_Ijo = new Event ({
	Name : "Kamu_Mendobrak_Pintu_Dan_Mendengar_Suara_Manusia_Dari_Dalam_Rute_Ijo",
	Occurence : "Kamu terbangun dari tidurmu mendengar suara auman. Kamu kaget dan sudah kenal bahwa itu adalah auman hewan buas yang tadi. Namun hari sudah malam dan gelap, kamu susah melihat dalam kegelapan. Hewan itu dalam sekejap sudah menerkam mu dihadapanmu. Kamu mati terbunuh oleh hewan itu.​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : ""
		},
		{
			id : "B",
			answer : ""
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : ""},
		{trigger : "B", next_event_name : ""}
	],
	Lazy_Mode : true
});

export const Ternyata_Ada_Seseorang_Pria_Di_Dalam_Sambil_Membawa_Belati = new Event ({
	Name : "Ternyata_Ada_Seseorang_Pria_Di_Dalam_Sambil_Membawa_Belati",
	Occurence : "Ternyata benar. Kamu tiba-tiba bertemu dengan seorang pria paruh baya di sebuah koridor kecil. Suara barusan tadi sepertinya benar berasal darinya. Dia tampak terkejut dan ketakutan, kedua tangannya sudah menggenggam erat sebuah belati. Dia mulai mengoceh dalam Bahasa yang tidak kamu mengerti.​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu memilih untuk menjelaskan situasinya sebisa mungkin dengan menggunakan Bahasa isyarat, berusaha menenangkan pria itu.​​"
		},
		{
			id : "B",
			answer : "Kamu memilih untuk mulai memberikan perlawanan karena pria di hadapanmu itu sudah bersiap dengan belatinya. Kamu tidak ingin bila disergap dengan tiba tiba.​​​"
		},
		{
			id : "C",
			answer : "Kamu memilih untuk berbalik dan berlari secepat mungkin yang kamu bisa.​​​"
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : ""},
		{trigger : "B", next_event_name : ""},
		{trigger : "C", next_event_name : ""}
	],
	Lazy_Mode : true
});

export const Kamu_Terbunuh_Oleh_Pria_Itu_Karena_Tidak_Bisa_Bahasa_Isyarat_Dan_Karena_Mendobrak_Duluan = new Event ({
	Name : "Kamu_Terbunuh_Oleh_Pria_Itu_Karena_Tidak_Bisa_Bahasa_Isyarat_Dan_Karena_Mendobrak_Duluan",
	Occurence : "Percuma. Pria itu justru semakin ketakutan dengan Bahasa isyaratmu yang setengah2. Lagipula kamu juga masuk ke dalam dengan mendobrak, jelas itu sudah membuat pria itu waspada dari awal. Dia tanpa ampun langsung menusukkan belatinya tepat di jantungmu.​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : ""
		}
	],
	Lazy_Mode : true,
	End_Game_Event : true
});

export const Kamu_Mencoba_Melawan_Tapi_Gagal_Dan_Terbunuh_Oleh_Pria_Itu = new Event ({
	Name : "Kamu_Mencoba_Melawan_Tapi_Gagal_Dan_Terbunuh_Oleh_Pria_Itu",
	Occurence : "Percuma. Kepal tangan tidak akan menang dengan sayatan belati. Lagipula kamu sedang berada di koridor yang cukup sempit, tidak memungkinkanmu bergerak dengan leluasa. Tanganmu tersayat lebar dan kamu menjerit seketika. Pria itu juga tanpa ampun langsung menusuk tepat ke dalam jantungmu.​​​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : ""
		}
	],
	Lazy_Mode : true,
	End_Game_Event : true
});

export const Kamu_Terbunuh_Setelah_Punggungmu_Tertusuk_Dari_Lemparan_Pisau = new Event ({
	Name : "Kamu_Terbunuh_Setelah_Punggungmu_Tertusuk_Dari_Lemparan_Pisau",
	Occurence : "Kamu sudah berlari, namun kamu masih berada di dalam rumah. Gerakan mu terbatas sebelum mencapai pintu keluar, dan kamu merasakan sesuatu menusuk punggungmu dari belakang. Sepertinya pria tadi melempar pisaunya dan menancap di punggungmu. Dia kemudian dengan mudah menahanmu dan membunuhmu seketika.​​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : ""
		}
	],
	Lazy_Mode : true,
	End_Game_Event : true
});

export const Kamu_Disergap_Oleh_Hewan_Buas_Di_Malam_Harin = new Event ({
	Name : "Kamu_Disergap_Oleh_Hewan_Buas_Di_Malam_Hari",
	Occurence : "Setelah mendobrak, kamu terkejut karena ada respon suara seperti suara berat pria dari dalam. Sepertinya firasatmu benar, ada manusia di dalam pondok ini. Karena kamu sudah telanjur mendobrak, tidak ada jalan kembali lagi.​",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Kamu langsung berjalan menuju sumber suara untuk memastikan.​"
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : ""}
	],
	Lazy_Mode : true
});


export const event_name_conversion = {
    "Start" : Start,
    "Kamu_Panik_Setelah_Reinkarnasi_Di_Dunia_Lain" : Kamu_Panik_Setelah_Reinkarnasi_Di_Dunia_Lain,
	"Kamu_Dipindahkan_Ke_Dunia_Lain_Secara_Tiba_Tiba" : Kamu_Dipindahkan_Ke_Dunia_Lain_Secara_Tiba_Tiba,
    "Kamu_Langsung_Bergerak_Dan_Sigap" : Kamu_Langsung_Bergerak_Dan_Sigap,
    "Kamu_Memerhatikan_Lingkungan_Sekitar_Dengan_Ketakutan" : Kamu_Memerhatikan_Lingkungan_Sekitar_Dengan_Ketakutan,
	"Kamu_Memerhatikan_Lingkungan_Sekitar_Dan_Melihat_Hewan" : Kamu_Memerhatikan_Lingkungan_Sekitar_Dan_Melihat_Hewan,
	"Kamu_Memerhatikan_Lingkungan_Sekitar" : Kamu_Memerhatikan_Lingkungan_Sekitar,
	"Kamu_Diterkam_Tiba_Tiba_Dan_Mati" : Kamu_Diterkam_Tiba_Tiba_Dan_Mati,
	"Kamu_Akhirnya_Memutuskan_Untuk_Menghadapi_Hewan_Buas" : Kamu_Akhirnya_Memutuskan_Untuk_Menghadapi_Hewan_Buas,
	"Kamu_Berteriak_Keras_Lalu_Mulai_Berlari" : Kamu_Berteriak_Keras_Lalu_Mulai_Berlari,
	"Percepat_Lari_Karena_Ada_Hewan_Buas_Mengejarmu" : Percepat_Lari_Karena_Ada_Hewan_Buas_Mengejarmu,
	"Kamu_Tewas_Diterkam_Setelah_Kelelahan_Berlari​" : Kamu_Tewas_Diterkam_Setelah_Kelelahan_Berlari,
	"Kamu_Selamat_Dan_Terus_Berjalan" : Kamu_Selamat_Dan_Terus_Berjalan,
	"Memburu_Hewan_Asing_Yang_Ditemui" : Memburu_Hewan_Asing_Yang_Ditemui,
	"Kamu_Diterkam_Oleh_Hewan_Karena_Gagal_Membunuhnya_Duluan" : Kamu_Diterkam_Oleh_Hewan_Karena_Gagal_Membunuhnya_Duluan,
	"Kamu_Berhasil_Membunuh_Hewan_Buas_Itu" : Kamu_Berhasil_Membunuh_Hewan_Buas_Itu,
	"Mati_Keracunan" : Mati_Keracunan,
	"Mati_Dikeroyok" : Mati_Dikeroyok,
	"Kamu_Mulai_Menguliti_Hewan_Buas_Itu" : Kamu_Mulai_Menguliti_Hewan_Buas_Itu,
	"Kamu_Melihat_Sorot_Cahaya" : Kamu_Melihat_Sorot_Cahaya,
	"Bangkai_Sudah_Jadi_Potongan_Kecil_Semua" : Bangkai_Sudah_Jadi_Potongan_Kecil_Semua,
	"Semua_Bagian_Bangkai_Belum_Selesai_Dipotong" : Semua_Bagian_Bangkai_Belum_Selesai_Dipotong,
	"Kamu_Disergap_Oleh_Hewan_Buas_Di_Malam_Hari" : Kamu_Disergap_Oleh_Hewan_Buas_Di_Malam_Hari,
	"Kamu_Menemukan_Pondok_Kecil_Rute_Ijo" : Kamu_Menemukan_Pondok_Kecil_Rute_Ijo,
	"Kamu_Mendengar_Suara_Langkah_Dari_Dalam_Rute_Ijo" : Kamu_Mendengar_Suara_Langkah_Dari_Dalam_Rute_Ijo,
	"Pria_Asing_Tiba_Tiba_Mengeluarkan_Belati_Dari_Pinggangnya_Rute_Ijo" : Pria_Asing_Tiba_Tiba_Mengeluarkan_Belati_Dari_Pinggangnya_Rute_Ijo,
	"Ketakutan_Pria_Semakin_Parah_Dan_Kamu_Langsung_Ditusuk" : Ketakutan_Pria_Semakin_Parah_Dan_Kamu_Langsung_Ditusuk,
	"Kamu_Dikejar_Pria_Yang_Tadi" : Kamu_Dikejar_Pria_Yang_Tadi,
	"Kamu_Tersandung_Dan_Dibunuh_Pria_Itu" : Kamu_Tersandung_Dan_Dibunuh_Pria_Itu,
	"Pria_Itu_Terjatuh_Setelah_Kamu_Lempar_Dan_Kamu_Berhasil_Kabur" : Pria_Itu_Terjatuh_Setelah_Kamu_Lempar_Dan_Kamu_Berhasil_Kabur,
	"Kamu_Tertidur_Di_Hutan_Dan_Pasrah_Saat_Dimangsa_Hewan_Buas" : Kamu_Tertidur_Di_Hutan_Dan_Pasrah_Saat_Dimangsa_Hewan_Buas,
	"Kamu_Terlalu_Kelelahan_Dan_Pada_Akhirnya_Tetap_Dimangsa_Hewan_Buas" : Kamu_Terlalu_Kelelahan_Dan_Pada_Akhirnya_Tetap_Dimangsa_Hewan_Buas,
	"Kamu_Mendobrak_Pintu_Dan_Mendengar_Suara_Manusia_Dari_Dalam_Rute_Ijo" : Kamu_Mendobrak_Pintu_Dan_Mendengar_Suara_Manusia_Dari_Dalam_Rute_Ijo,
	"Ternyata_Ada_Seseorang_Pria_Di_Dalam_Sambil_Membawa_Belati" : Ternyata_Ada_Seseorang_Pria_Di_Dalam_Sambil_Membawa_Belati,
	"Kamu_Terbunuh_Oleh_Pria_Itu_Karena_Tidak_Bisa_Bahasa_Isyarat_Dan_Karena_Mendobrak_Duluan" : Kamu_Terbunuh_Oleh_Pria_Itu_Karena_Tidak_Bisa_Bahasa_Isyarat_Dan_Karena_Mendobrak_Duluan,
	"Kamu_Mencoba_Melawan_Tapi_Gagal_Dan_Terbunuh_Oleh_Pria_Itu" : Kamu_Mencoba_Melawan_Tapi_Gagal_Dan_Terbunuh_Oleh_Pria_Itu,
	"Kamu_Terbunuh_Setelah_Punggungmu_Tertusuk_Dari_Lemparan_Pisau" : Kamu_Terbunuh_Setelah_Punggungmu_Tertusuk_Dari_Lemparan_Pisau
	
};