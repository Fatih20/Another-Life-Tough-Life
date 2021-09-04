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
		{trigger : "A", next_event_name : "Kamu_Selamat_Dan_Terus_Berjalan​"},
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
	Name : "Kamu_Selamat_Dan_Terus_Berjalan​",
	Occurence : "Kamu selamat dari hewan buas itu karena larimu lebih cepat darinya. Kamu bersembunyi di balik sebuah pohon dan kehabisan napas.",
	Question : "",
	Possible_Answer_List : [
		{
			id : "A",
			answer : "Karena ketakutan, kamu memutuskan untuk tetap melanjutkan berjalan karena tidak tahu apa yang menanti di tempat seperti ini.​"
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : ""}
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
			answer : "Kamu memutuskan untuk mendekatinya untuk memeriksa.​"
		},
		{
			id : "B",
			answer : "Kamu tetap waspada dan tidak mendekatinya. Karena hari sudah mulai malam dan kamu kelelahan, kamu memutuskan untuk tidur.​​"
		},
		{
			id : "C",
			answer : "Kamu memutuskan untuk mendekatinya untuk memeriksa.​",
			conditions : {
				type: "specific_event_checker", 
				specification : {
					event_name : "Bangkai_Sudah_Jadi_Potongan_Kecil_Semua"}
				}
		},
		{
			id : "D",
			answer : "Kamu memutuskan untuk mendekatinya untuk memeriksa.​​​",
			conditions : {
				type: "specific_event_checker", 
				specification : {
					event_name : "Kamu_Selamat_Dan_Terus_Berjalan"}
				}
		}
	],
	Answers_For_Next_Event_List : [
		{trigger : "A", next_event_name : ""},
		{trigger : "B", next_event_name : ""},
		{trigger : "C", next_event_name : ""},
		{trigger : "D", next_event_name : ""}
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
		{trigger : "A", next_event_name : ""},
		{trigger : "B", next_event_name : ""}
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

export const Kamu_Disergap_Oleh_Hewan_Buas_Di_Malam_Harin = new Event ({
	Name : "Kamu_Disergap_Oleh_Hewan_Buas_Di_Malam_Hari",
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

};