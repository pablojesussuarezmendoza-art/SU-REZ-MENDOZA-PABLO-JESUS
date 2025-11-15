import { Attendee, AttendanceStatus } from '../types';

const rawData = `
GRUPO 8101
202528040	Aguilar Martínez Vanessa Lizbeth	l202528040@jilotepec.tecnm.mx
202528561	Alcantara Pérez Angel Yael	l202528561@jilotepec.tecnm.mx
202528446	Angeles Blas Sergio	l202528446@jilotepec.tecnm.mx
202528244	ARANDA VALENTIN ADAIR GIOVANNI	l202528244@jilotepec.tecnm.mx
202528297	ARCE GONZALEZ JOSELIN ARELY	l202528297@jilotepec.tecnm.mx
202528308	ARCE GONZALEZ MARIBEL	l202528308@jilotepec.tecnm.mx
202528046	Barcenas Ramírez Karla Abril	l202528046@jilotepec.tecnm.mx
202528047	Becerra Cruz Kevin	l202528047@jilotepec.tecnm.mx
202528984	Blas Cruz Belen	l202528984@jilotepec.tecnm.mx
202528383	Cardenas Gil Mitzi Vania	l202528383@jilotepec.tecnm.mx
202528945	CASTRO VIDAL EVELIN	l202528945@jilotepec.tecnm.mx
202528049	Celerino Hernández José Miguel	l202528049@jilotepec.tecnm.mx
202528300	Cruz Cruz Marcos	l202528300@jilotepec.tecnm.mx
202528309	Cruz Rueda Carol Jesmi	l202528309@jilotepec.tecnm.mx
202528880	CRUZ CRUZ ABRIL YULIETH	l202528880@jilotepec.tecnm.mx
202528951	Cruz Luz Aldo	l202528951@jilotepec.tecnm.mx
202528311	Cruz Sanchez Jorge Arturo	l202528311@jilotepec.tecnm.mx
202528804	Cruz Santiago Karla Jimena	l202528804@jilotepec.tecnm.mx
202528255	Cuevas García Carmen Montserrat	l202528255@jilotepec.tecnm.mx
202528064	DOROTEO Zuñiga ALICIA	l202528064@jilotepec.tecnm.mx
202528450	Estrada Cruz Brandon	l202528450@jilotepec.tecnm.mx
202528568	Franco Martinez Giovanni	l202528568@jilotepec.tecnm.mx
202528304	FUENTES MARTINEZ ALISON CRISTAL	l202528304@jilotepec.tecnm.mx
202528528	GAMA MIRANDA ISABEL GUADALUPE	l202528528@jilotepec.tecnm.mx
202528150	García Rosas Citlali	l202528150@jilotepec.tecnm.mx
202528319	González Martinez Ricardo	l202528319@jilotepec.tecnm.mx
R202528546	González Osorio Silvia	lr202528546@jilotepec.tecnm.mx
202528379	Hernández Blas Maria Fernanda	l202528379@jilotepec.tecnm.mx
202528310	hernandez hernandez DIANA VANESSA	l202528310@jilotepec.tecnm.mx
202528587	Hernández Marcelo Iván	l202528587@jilotepec.tecnm.mx
202528321	Hernández Zepeda Alan Uriel	l202528321@jilotepec.tecnm.mx
R202528554	HERNANDEZ NICOLAS Onecimo Alejandro	lr202528554@jilotepec.tecnm.mx
202528418	Hurtado Sánchez Ivonne	l202528418@jilotepec.tecnm.mx
202528165	Jaime Salinas Arisbeth	l202528165@jilotepec.tecnm.mx
202528452	LIBRADO PALMA MARIA DE LOS ANGELES	l202528452@jilotepec.tecnm.mx
202528410	Lugo Camargo Jaquelinne	l202528410@jilotepec.tecnm.mx
202528454	Lugo Zuñiga Juan Pablo	l202528454@jilotepec.tecnm.mx
202528316	Marcelo Nicolas Eduardo	l202528316@jilotepec.tecnm.mx
202528853	Martinez Albino Yonathan	l202528853@jilotepec.tecnm.mx
202528029	Martínez Anaya Dulce María	l202528029@jilotepec.tecnm.mx
202528545	Martínez Gabriel Jaqueline	l202528545@jilotepec.tecnm.mx
202528168	Martinez Navarrete Paola	l202528168@jilotepec.tecnm.mx
202528978	Mendoza Rojo Jimena	l202528978@jilotepec.tecnm.mx
202528927	Miranda Castillo Janet	l202528927@jilotepec.tecnm.mx
202528576	MIRANDA MARTINEZ CRISTIAN	l202528576@jilotepec.tecnm.mx
202528179	Molina Esquivel Victor Jesús	l202528179@jilotepec.tecnm.mx
202528591	Noguez Castañeda Bryan Israel	l202528591@jilotepec.tecnm.mx
202528557	Ortiz Sanchez Ruby Adamary	l202528557@jilotepec.tecnm.mx
202528973	Paredes Barrios karla gisel	l202528973@jilotepec.tecnm.mx
202528301	Pérez Alcántara Diego	l202528301@jilotepec.tecnm.mx
202528551	Sanabria Rodríguez Amanda	l202528551@jilotepec.tecnm.mx
202528302	Sánchez Hernández Alvaro	l202528302@jilotepec.tecnm.mx
202528840	Sánchez Sánchez Wendy	l202528840@jilotepec.tecnm.mx
202528465	SANDOVAL DAMIAN JOSUÉ ARMANDO	l202528465@jilotepec.tecnm.mx
202528012	SANTANA GARCIA BRITTANY MARELYN	l202528012@jilotepec.tecnm.mx
202528460	Santiago Lara Abigail	l202528460@jilotepec.tecnm.mx
202528207	SERRANO GONZALEZ LEONEL	l202528207@jilotepec.tecnm.mx
202528210	Tellez Garcia Ximena	l202528210@jilotepec.tecnm.mx
202528226	Vázquez Aranda Ariana	l202528226@jilotepec.tecnm.mx
202528235	Zavala González José David	l202528235@jilotepec.tecnm.mx
GRUPO 8102
202528442	AGUIRRE GARCIA LILIANA GUADALUPE	l202528442@jilotepec.tecnm.mx
202528404	Alcántara González Nayeli	l202528404@jilotepec.tecnm.mx
202528448	Carlos Garduño Oswaldo	l202528448@jilotepec.tecnm.mx
202528298	Ciriaco Gutiérrez Ivonne Lucero	l202528298@jilotepec.tecnm.mx
R202528299	Cisneros Torres Carlo Josafat	lr202528299@jilotepec.tecnm.mx
202528931	Cordero García Sherlyn	l202528931@jilotepec.tecnm.mx
202528402	Cruz Anselmo Alejandra	l202528402@jilotepec.tecnm.mx
202528296	Cruz . Eric Antonio	l202528296@jilotepec.tecnm.mx
202528839	Cruz Castañeda Teresa	l202528839@jilotepec.tecnm.mx
202528054	Cruz González Regina	l202528054@jilotepec.tecnm.mx
202528552	CRUZ GREGORIO NIDIA JAQUELINE	l202528552@jilotepec.tecnm.mx
202528468	Cruz Serrano Ariana Suzette	l202528468@jilotepec.tecnm.mx
202528462	Damian Montiel Cristopher Alexander	l202528462@jilotepec.tecnm.mx
202528702	DE LA CRUZ ZENON DIEGO	l202528702@jilotepec.tecnm.mx
202528258	DUARTE SANCHEZ ARELY JOCELYN	l202528258@jilotepec.tecnm.mx
202528131	Franco Martinez Jose Eduardo	l202528131@jilotepec.tecnm.mx
202528526	Franco Nuñez Ronay	l202528526@jilotepec.tecnm.mx
202528914	Garcia Perea Marely	l202528914@jilotepec.tecnm.mx
202528271	García Sánchez Alexandra	l202528271@jilotepec.tecnm.mx
R202528469	Garduño García Brisa Violeta	lr202528469@jilotepec.tecnm.mx
R202528553	Gutiérrez Monroy Eros joshuah	lr202528553@jilotepec.tecnm.mx
202528463	HERNANDEZ ROBLES LESLY PAOLA	l202528463@jilotepec.tecnm.mx
202528962	Hernandez Alvarez Wendy	l202528962@jilotepec.tecnm.mx
202528808	Hernández Carlos Giovanni	l202528808@jilotepec.tecnm.mx
202528950	Hernandez Casiano Maria Trinidad	l202528950@jilotepec.tecnm.mx
202528163	Hernández Jiménez David	l202528163@jilotepec.tecnm.mx
202528562	Hernandez Orozco Xochitl	l202528562@jilotepec.tecnm.mx
202528538	Hernández Aguilar Giuseppe	l202528538@jilotepec.tecnm.mx
202528470	IGLESIAS SALAZAR MIGUEL ANGEL	l202528470@jilotepec.tecnm.mx
202528305	Jiménez Lugo Ana Karen	l202528305@jilotepec.tecnm.mx
202528294	LOVERA LOVERA BRANDON ALEXIS	l202528294@jilotepec.tecnm.mx
202528579	Marcelo Arce Jaquelin	l202528579@jilotepec.tecnm.mx
202528457	Martinez Anaya Jimena Paola	l202528457@jilotepec.tecnm.mx
202528427	Martínez Lovera Loreley Fernanda	l202528427@jilotepec.tecnm.mx
202528380	Martínez Martinez Elizabeth	l202528380@jilotepec.tecnm.mx
202528277	Martínez Martínez Sergio	l202528277@jilotepec.tecnm.mx
202528923	Martinez Hernández Hector Gustavo	l202528923@jilotepec.tecnm.mx
202528192	Martinez Sanchez Evelyn	l202528192@jilotepec.tecnm.mx
R202528558	Mayen Sánchez Israel	lr202528558@jilotepec.tecnm.mx
202528870	Miranda Cruz Yara Abigail	l202528870@jilotepec.tecnm.mx
202528183	Monroy Martínez Adriana Regina	l202528183@jilotepec.tecnm.mx
202528189	Monroy Mateos Daniel Alejandro	l202528189@jilotepec.tecnm.mx
202528864	NAVARRETE VAZQUEZ LESLY	l202528864@jilotepec.tecnm.mx
202528873	Ortega Mondragón Kamila	l202528873@jilotepec.tecnm.mx
202528539	perea garcia Valeria	l202528539@jilotepec.tecnm.mx
R202528458	PEREZ SALINAS BRAYAN AZIEL	lr202528458@jilotepec.tecnm.mx
202528323	Pichardo Pichardo Jesús Ariel	l202528323@jilotepec.tecnm.mx
R202528369	PICHARDO GARCIA SAMUEL	lr202528369@jilotepec.tecnm.mx
202528915	Reyes Serrano Nataly Aremy	l202528915@jilotepec.tecnm.mx
202528221	Rodríguez Peralta Andrick	l202528221@jilotepec.tecnm.mx
202528524	Salvador Anaya Tania Itzel	l202528524@jilotepec.tecnm.mx
202528885	Sánchez Galván Katia	l202528885@jilotepec.tecnm.mx
202528994	Sánchez Cruz Luz de Cielo	l202528994@jilotepec.tecnm.mx
202528366	SANTILLAN BARRIOS YARETZI	l202528366@jilotepec.tecnm.mx
202528286	VALDEZ HERNANDEZ GUADALUPE	l202528286@jilotepec.tecnm.mx
202528317	Valentín Rodríguez Jesús	l202528317@jilotepec.tecnm.mx
202528461	Zenón García Adolfo Gael	l202528461@jilotepec.tecnm.mx
GRUPO 8103
202528805	Aguilar Zamorano Luis Angel	l202528805@jilotepec.tecnm.mx
202528045	Angeles Estanislao Anali	l202528045@jilotepec.tecnm.mx
202528318	Barrios Medel Melany	l202528318@jilotepec.tecnm.mx
202528252	Caballero Martinez Ximena	l202528252@jilotepec.tecnm.mx
202528862	Carlos Alvarez Melisa Janeth	l202528862@jilotepec.tecnm.mx
202528387	CASTAÑEDA BECERRIL DAIRA VALENTINA	l202528387@jilotepec.tecnm.mx
202528052	Chimal Monroy Aldo	l202528052@jilotepec.tecnm.mx
202528288	Cruz Cruz Diego	l202528288@jilotepec.tecnm.mx
202528372	Cruz De Dios Marely Guadalupe	l202528372@jilotepec.tecnm.mx
R202528467	Cruz Rodríguez Armando	lr202528467@jilotepec.tecnm.mx
202528570	Cruz Rojas Omar	l202528570@jilotepec.tecnm.mx
202528057	Cruz Granados Diana Mariela	l202528057@jilotepec.tecnm.mx
202528972	Damian Angeles Lisseth Guadalupe	l202528972@jilotepec.tecnm.mx
R202528041	Damian Martinez Nataly Yamileth	lr202528041@jilotepec.tecnm.mx
202528060	Dominguez Vargas Andrid	l202528060@jilotepec.tecnm.mx
202528292	FLORES ORTA BRITTANY	l202528292@jilotepec.tecnm.mx
202528582	García Alaniz Iván Armando	l202528582@jilotepec.tecnm.mx
202528878	García Resendiz Alexandra	l202528878@jilotepec.tecnm.mx
202528313	García Rodríguez Héctor Adán	l202528313@jilotepec.tecnm.mx
202528142	Garcia Miranda Sbeidy Citlalli	l202528142@jilotepec.tecnm.mx
202528875	Gonzalez Eugenio Jose Eduardo	l202528875@jilotepec.tecnm.mx
202528523	Hernandez De Jesús Jenifer	l202528523@jilotepec.tecnm.mx
202528320	Hernández Martínez Jose Armando	l202528320@jilotepec.tecnm.mx
202528991	Hernández Martinez Nora	l202528991@jilotepec.tecnm.mx
202528161	HERNANDEZ ISLAS DULCE YAMILETH	l202528161@jilotepec.tecnm.mx
202528295	Huitron Becerril Julissa Ignacia	l202528295@jilotepec.tecnm.mx
202528164	Islas Barrera Daniel	l202528164@jilotepec.tecnm.mx
202528451	LEON MIRANDA STEPHANIE	l202528451@jilotepec.tecnm.mx
202528166	Marcelo Cruz Leonardo	l202528166@jilotepec.tecnm.mx
202528954	Martínez Blas Andrea	l202528954@jilotepec.tecnm.mx
202528471	Martinez Martinez Verónica	l202528471@jilotepec.tecnm.mx
202528273	MARTINEZ GARCIA DANIEL ALEXANDER	l202528273@jilotepec.tecnm.mx
202528173	Matias Gonzalez Ailin Mariana	l202528173@jilotepec.tecnm.mx
202528584	Mendoza Hernández Rodolfo	l202528584@jilotepec.tecnm.mx
202528566	Mendoza Martinez Magaly	l202528566@jilotepec.tecnm.mx
202528860	Miranda Aguilar Pedro	l202528860@jilotepec.tecnm.mx
202528176	MIRANDA BARRIOS CRISTIAN	l202528176@jilotepec.tecnm.mx
202528556	Monroy Escobar Ángel Raúl	l202528556@jilotepec.tecnm.mx
202528312	Moran Colin Raymundo	l202528312@jilotepec.tecnm.mx
202528515	NOGUEZ GARCIA VALERIA ASTRID	l202528515@jilotepec.tecnm.mx
202528194	Obregón López Angelica	l202528194@jilotepec.tecnm.mx
202528869	Ortega Garcia Julia Fernanda	l202528869@jilotepec.tecnm.mx
202528322	Pérez Soto Aldo	l202528322@jilotepec.tecnm.mx
202528459	Pichardo Ramírez Israel	l202528459@jilotepec.tecnm.mx
202528911	Reyes Vidal Ximena	l202528911@jilotepec.tecnm.mx
202528280	Rodriguez Vazquez Marely	l202528280@jilotepec.tecnm.mx
202528199	Rosas Trejo Gonzalo Roman	l202528199@jilotepec.tecnm.mx
202528831	Santiago Zarza Katia	l202528831@jilotepec.tecnm.mx
202528205	Santiago González José Fernando	l202528205@jilotepec.tecnm.mx
202528473	Sedeño Martinez Maria Fernanda	l202528473@jilotepec.tecnm.mx
202528934	Vargas Saldivar Marely	l202528934@jilotepec.tecnm.mx
202528806	Vargas Rueda Leibani Jimena	l202528806@jilotepec.tecnm.mx
202528303	VELAZQUEZ MARTINEZ ARIEL	l202528303@jilotepec.tecnm.mx
202528026	Zaragoza Sánchez Quetzalli	l202528026@jilotepec.tecnm.mx
202528835	Zuñiga Reyes Alan	l202528835@jilotepec.tecnm.mx
GRUPO 8301
202428728	ALMAZAN RINCÓN LIZANIA	l202428728@jilotepec.tecnm.mx
R202428392	Bernal Vargas Diego Israel	lr202428392@jilotepec.tecnm.mx
202428316	CALDERON CAPETILLO CARLOS	l202428316@jilotepec.tecnm.mx
202428629	Casimiro Martínez Luis Enrique	enriquecasimirolui4444@gmail.com
202428355	Flores Martinez Ingrid Sai	l202428355@jilotepec.tecnm.mx
202428404	Flores Zuñiga America Guadalupe	l202428404@jilotepec.tecnm.mx
202428090	Gabriel German Juan Raziel	l202428090@jilotepec.tecnm.mx
202428161	Garcia Espinoza Quetzalli	l202428161@jilotepec.tecnm.mx
202428525	Gonzalez Martinez Sergio	l202428525@jilotepec.tecnm.mx
C201928102	GUERRERO MATEO CARLOS	carlos.guerreroterrazas22@gmail.com
202428326	HERNÁNDEZ BLAS MAGALI	l202428326@jilotepec.tecnm.mx
202428427	hernandez Garduño Oliver	l202428427@jilotepec.tecnm.mx
202428625	Hernández MARTINEZ ANGEL	l202428625@jilotepec.tecnm.mx
202428612	HERNANDEZ GUZMAN RICARDO YAHIR	l202428612@jilotepec.tecnm.mx
202428750	Hernandez Najera Alondra Zoe	l202428750@jilotepec.tecnm.mx
202428741	Huitrón Mendoza Carlos Ernesto	l202428741@jilotepec.tecnm.mx
202428383	Jiménez Reséndiz Joshua	l202428383@jilotepec.tecnm.mx
202428443	López Alcántara Kenia Sherlyn	l202428443@jilotepec.tecnm.mx
202428403	Martinez Franco Christian	l202428403@jilotepec.tecnm.mx
202428059	Martinez Lugo Diana Laura	l202428059@jilotepec.tecnm.mx
202428035	Martinez Lugo Maria Fernanda	l202428035@jilotepec.tecnm.mx
202428329	MARTINEZ ALCANTARA KEVIN	l202428329@jilotepec.tecnm.mx
202428317	MARTINEZ PADILLA GABRIELA	l202428317@jilotepec.tecnm.mx
202428145	MENDOZA REYES MARIANA	l202428145@jilotepec.tecnm.mx
202428992	MIRANDA MORALES HÉCTOR MANUEL	l202428992@jilotepec.tecnm.mx
202428640	Miranda Barrera Yoselyn	l202428640@jilotepec.tecnm.mx
202428020	Noguez Castañeda Kille Monserrat	l202428020@jilotepec.tecnm.mx
202428003	PÉREZ MARTINEZ AZUL ABIGAIL	l202428003@jilotepec.tecnm.mx
202428990	PLATA SANCHEZ MARICELA	l202428990@jilotepec.tecnm.mx
202428548	Quintananar Pérez Ivon Alejandra	l202428548@jilotepec.tecnm.mx
202428623	Reyes Cruz Luis Raúl	l202428623@jilotepec.tecnm.mx
202428416	Salazar Lugo Josué Manuel	l202428416@jilotepec.tecnm.mx
R202428734	Sánchez Cruz Alejandro	lr202428734@jilotepec.tecnm.mx
202428406	SANCHEZ SANCHEZ REGINA	l202428406@jilotepec.tecnm.mx
202428959	TORIBIO ALVARO VALERIA NATALY	l202428959@jilotepec.tecnm.mx
GRUPO 8302
202428037	Alcantara García Carlos Daniel	l202428037@jilotepec.tecnm.mx
202428001	ALCÁNTARA RODEA URIEL	l202428001@jilotepec.tecnm.mx
202428146	Aldana Cruz Maria Paulina	l202428146@jilotepec.tecnm.mx
202428006	ARANDA JIMENEZ LUIS ENRIQUE	l202428006@jilotepec.tecnm.mx
202428113	Arce Torres Andrea	l202428113@jilotepec.tecnm.mx
202428628	Arciniega Marin Diego	l202428628@jilotepec.tecnm.mx
202428349	Barrios Garcia Francisco Javier	l202428349@jilotepec.tecnm.mx
202428393	Brito Migueles Diego Fernando	l202428393@jilotepec.tecnm.mx
202428129	BUITRON PEREZ ALEXA VALERIA	l202428129@jilotepec.tecnm.mx
202428609	CABALLERO TAPIA ARLETH	l202428609@jilotepec.tecnm.mx
202428365	Castro Arce Areli Noemi	l202428365@jilotepec.tecnm.mx
R202428341	CISNEROS JUAREZ MARIA ISABEL	lr202428341@jilotepec.tecnm.mx
C202428201	Cruz Cruz Omar	lc202428201@jilotepec.tecnm.mx
R202428660	CRUZ MENDOZA ITZEL ALEJANDRA	lr202428660@jilotepec.tecnm.mx
202428445	De Jesús González Mayra	l202428445@jilotepec.tecnm.mx
202428622	de Jesus Hermenegildo Gabriel Alessandro	l202428622@jilotepec.tecnm.mx
202428614	Del Rio Franco Fatima Gudalupe	l202428614@jilotepec.tecnm.mx
202428320	FLORES NEPOMUCENO MARÍA JOSÉ	l202428320@jilotepec.tecnm.mx
202428324	FLORES VILCHIS ALEJANDRO	l202428324@jilotepec.tecnm.mx
202428370	FRANCO ORTIZ ZAINID YAJAIRA	l202428370@jilotepec.tecnm.mx
202428409	Gabino Morales Jonathan	l202428409@jilotepec.tecnm.mx
202428497	García Ramírez Cindy Naomi	l202428497@jilotepec.tecnm.mx
202428372	GARCIA BAUTISTA EMIR	l202428372@jilotepec.tecnm.mx
202428669	García Martínez Brayan Alexis	l202428669@jilotepec.tecnm.mx
202428154	GARCIA VELAZQUEZ EDUARDO	l202428154@jilotepec.tecnm.mx
202428635	Godoy Lopez Diego Alessandro	l202428635@jilotepec.tecnm.mx
202428646	Gonzalez Rueda Llarexy Aline	l202428646@jilotepec.tecnm.mx
C202428269	HERNANDEZ MARTINEZ LEONEL	lc202428269@jilotepec.tecnm.mx
202428038	Juarez Montiel Fatima	l202428038@jilotepec.tecnm.mx
202428995	LARA MARTÍNEZ SOL GABRIEL	l202428995@jilotepec.tecnm.mx
202428627	Lopez Ocañas Mariana	l202428627@jilotepec.tecnm.mx
202428733	LOVERA Rivas YAIR	l202428733@jilotepec.tecnm.mx
202428698	Lugo Vargas Nadia Yolet	l202428698@jilotepec.tecnm.mx
202428514	Maldonado Sanchez Lizbeth Guadalupe	l202428514@jilotepec.tecnm.mx
202428373	Martinez García Elizabeth	l202428373@jilotepec.tecnm.mx
202428477	MARTINEZ MUNGUIA LILIANA ISABEL	l202428477@jilotepec.tecnm.mx
202428617	Martinez Sebastián Javier	l202428617@jilotepec.tecnm.mx
C202428751	MARTINEZ OSORNIO YANET	lc202428751@jilotepec.tecnm.mx
202428539	Miranda Vega Briseyda Lizeth	l202428539@jilotepec.tecnm.mx
202428162	Navarrete Cruz Yadira	l202428162@jilotepec.tecnm.mx
202428375	Nepomuceno Gabriel Yoli	l202428375@jilotepec.tecnm.mx
202428661	Nepomuceno Martínez Mayeli Nataly	l202428661@jilotepec.tecnm.mx
202428004	NOGUEZ GARCÍA HELEN	l202428004@jilotepec.tecnm.mx
202428442	Núñez Calzadilla María Guadalupe	l202428442@jilotepec.tecnm.mx
202428114	Rebollar Franco Luis Alonso	l202428114@jilotepec.tecnm.mx
202428994	RODRÍGUEZ CRUZ JOCELYN GUADALUPE	l202428994@jilotepec.tecnm.mx
202428073	Saavedra Hernández Jostin Efrain	l202428073@jilotepec.tecnm.mx
202428061	Sánchez González Angel	l202428061@jilotepec.tecnm.mx
C202428551	SANCHEZ GONZALEZ CONSTANZA	lc202428551@jilotepec.tecnm.mx
202428160	Santiago Arce Valeria	l202428160@jilotepec.tecnm.mx
202428410	Saucillo Contreras Andrea	l202428410@jilotepec.tecnm.mx
202428619	Téllez Trejo Citlali Mairin	l202428619@jilotepec.tecnm.mx
202428564	Valdez Linares Luis Antonio	l202428564@jilotepec.tecnm.mx
202428664	Velázquez Martínez Josué	l202428664@jilotepec.tecnm.mx
202428634	Zarza Farias Heidy	l202428634@jilotepec.tecnm.mx
202428413	Zepeda Becerril Naomi Michelle	l202428413@jilotepec.tecnm.mx
GRUPO 8303
C202428293	Ángeles García José Manuel	lc202428293@jilotepec.tecnm.mx
202428611	Berny García Melvin Ariel	l202428611@jilotepec.tecnm.mx
202428353	Crisóstomo Martinez Gustavo	l202428353@jilotepec.tecnm.mx
202428334	Cuevas Garcia Yareli	l202428334@jilotepec.tecnm.mx
202428415	cuevas lucas gabriela	l202428415@jilotepec.tecnm.mx
202428389	Daniel Lovera Yuridia	l202428389@jilotepec.tecnm.mx
R202428668	De La Cruz Terrazas Jaime	lr202428668@jilotepec.tecnm.mx
C202428513	DE LA CRUZ MARTINEZ NATALI	lc202428513@jilotepec.tecnm.mx
202428402	Diaz Anselmo Angel Gabriel	diaa060128hmcznn44@bggem.mx
202428621	Dominguez Valdez Iris Arlette	l202428621@jilotepec.tecnm.mx
202428397	Esquivel Mora Esteban	l202428397@jilotepec.tecnm.mx
202428729	Galván Juarez Mireya Simone	l202428729@jilotepec.tecnm.mx
202428412	Garcia Maldonado Diego Angel	l202428412@jilotepec.tecnm.mx
202428174	Hernández Martínez Marcos	l202428174@jilotepec.tecnm.mx
202428540	Hernández Martínez María Belén	l202428540@jilotepec.tecnm.mx
202428423	Hernández Rangel Yahir Epifanio	l202428423@jilotepec.tecnm.mx
202428354	Jimenez Sanchez Yael Anastacio	l202428354@jilotepec.tecnm.mx
202428084	JIMENEZ GONZALEZ MARIANA	l202428084@jilotepec.tecnm.mx
202428608	López Castro Jennifer	l202428608@jilotepec.tecnm.mx
202428430	López Valdez Claritza Marcel	l202428430@jilotepec.tecnm.mx
202428340	Martínez Arciniega César	l202428340@jilotepec.tecnm.mx
202428396	Martínez Cruz Amairanni	l202428396@jilotepec.tecnm.mx
202428094	Martinez Fernandez Mariana	l202428094@jilotepec.tecnm.mx
202428405	MARTINEZ HERNANDEZ FATIMA JAZMIN	l202428405@jilotepec.tecnm.mx
202428446	Mendoza Padilla Lizbeth karely	l202428446@jilotepec.tecnm.mx
202428339	Miranda Martinez Adolfo	adolfomirandamart02@gmail.com
202428085	Monroy Jimenez Maritza	l202428085@jilotepec.tecnm.mx
202428327	Olmos García Brenda Areli	l202428327@jilotepec.tecnm.mx
202428357	Paredes Cruz Jenny Michel	l202428357@jilotepec.tecnm.mx
202428083	Pérez Gonzaga Jazmin Abigail	l202428083@jilotepec.tecnm.mx
202428303	PEREZ APOLINAR MIGUEL	l202428303@jilotepec.tecnm.mx
202428333	REYES RAMÍREZ CELIC ARIADNA	l202428333@jilotepec.tecnm.mx
202428360	Sánchez Sánchez Vania Victoria	l202428360@jilotepec.tecnm.mx
202428993	SUÁREZ SANDOVAL MARIA GUADALUPE	l202428993@jilotepec.tecnm.mx
202428313	VALENTIN RODRÍGUEZ JOSÉ ALFREDO	l202428313@jilotepec.tecnm.mx
202428631	Vargas Jiménez Abigail	l202428631@jilotepec.tecnm.mx
202428171	Vega Cruz Jose Angel	l202428171@jilotepec.tecnm.mx
202428610	Zarza Vázquez Luis Angel	l202428610@jilotepec.tecnm.mx
202428535	ZUÑIGA CARLOS TANIA	l202428535@jilotepec.tecnm.mx
GRUPO 8501
202328056	ALCANTARA JUAREZ FRANCELI GUADALUPE	l202328056@jilotepec.tecnm.mx
202328054	ANGELES LORENZO JESUS MARTIN	l202328054@jilotepec.tecnm.mx
202328022	ANGELES SANCHEZ GABRIEL	l202328022@jilotepec.tecnm.mx
202328783	APOLINAR ARANDA OMAR	l202328783@jilotepec.tecnm.mx
202328055	ARREDONDO RAMIREZ JOSÉ EFRAIN	l202328055@jilotepec.tecnm.mx
202328766	CHAVARRIA GRANADA SIBEL DAMITSAI	l202328766@jilotepec.tecnm.mx
202328036	CORREA CUEVAS SAMANTHA	l202328036@jilotepec.tecnm.mx
202328061	CORTEZ BARRIOS MARIANA	l202328061@jilotepec.tecnm.mx
202328773	CRUZ GARCÍA IRVIN	l202328773@jilotepec.tecnm.mx
202328180	DOMÍNGUEZ DE JESÚS CINTIA ANAY	l202328180@jilotepec.tecnm.mx
202328276	ESCALONA NÚÑEZ KAROL IVET	l202328276@jilotepec.tecnm.mx
202328131	FIGUEROA BECERRIL D'ALESSANDRO MAURICIO	l202328131@jilotepec.tecnm.mx
202328044	GARDUÑO MERCADO INGRID	l202328044@jilotepec.tecnm.mx
202328211	GARRIDO GARCÍA DÍANA KELLY	l202328211@jilotepec.tecnm.mx
202328132	HERNÁNDEZ CASTRO DULCE DANIELA	l202328132@jilotepec.tecnm.mx
202328238	HERNÁNDEZ MIRANDA GRISELDA	l202328238@jilotepec.tecnm.mx
202328129	HERNÁNDEZ ORDOÑEZ YURIDIAN	l202328129@jilotepec.tecnm.mx
202328031	MARTÍNEZ CORREA JOSÉ LEANDRO	l202328031@jilotepec.tecnm.mx
202328021	MARTÍNEZ MARTÍNEZ ALONSO	l202328021@jilotepec.tecnm.mx
202328900	MARTINEZ NIETO VALERIA	l202328900@jilotepec.tecnm.mx
C202328068	MARTINEZ GARCIA JEHIELI	lc202328068@jilotepec.tecnm.mx
E202418003	MARTINEZ GARRIDO JUAN PABLO	le202418003@jilotepec.tecnm.mx
202328060	MARTINEZ RODRIGUEZ PEDRO	l202328060@jilotepec.tecnm.mx
202328215	MATEO GREGORIO ROXANA	l202328215@jilotepec.tecnm.mx
202328067	MORENO ESPINOZA EVELYN	l202328067@jilotepec.tecnm.mx
202328685	MUNGUIA CRUZ MILEIDY SUJEY	mileidysujeymunguiacruz@gmail.com
202328038	NATIVIDAD SÁNCHEZ LUCERO	l202328038@jilotepec.tecnm.mx
202328043	ORDOÑEZ MONROY EMMANUEL	l202328043@jilotepec.tecnm.mx
C202328846	QUINTANAR RAMÍREZ ABRAHAM	lc202328846@jilotepec.tecnm.mx
202328016	RAMÍREZ MIRANDA ISAAC	l202328016@jilotepec.tecnm.mx
202328240	REBOLLAR NUÑEZ VALERIA	l202328240@jilotepec.tecnm.mx
202328066	RODRIGUEZ GARCIA EVELYN AMELLALY	l202328066@jilotepec.tecnm.mx
202328133	SANCHEZ BECERRA RODRIGO	l202328133@jilotepec.tecnm.mx
202328828	SEGUNDO SANTIAGO MARÍA GUADALUPE	l202328828@jilotepec.tecnm.mx
202328326	TOLENTINO OSORNIO SAMANTHA YAZMIN	l202328326@jilotepec.tecnm.mx
202328015	VAZQUEZ HERNANDEZ SARAI PAOLA	l202328015@jilotepec.tecnm.mx
202328200	VIDAL VIDAL LUIS ARTURO	l202328200@jilotepec.tecnm.mx
202328046	ZARZA GARCÍA SAMIA SOFÍA	l202328046@jilotepec.tecnm.mx
C202028041	ZUÑIGA MARTINEZ ELADIO	lc202028041@jilotepec.tecnm.mx
GRUPO 8502
R202328561	ALCANTARA BECERRIL ALEXIS JESUS	alexisalcantara349@gmail.com
202328821	ANSELMO VALERIANO CAROLINA	l202328821@jilotepec.tecnm.mx
202328584	ARCHUNDIA NOGUEZ CRISTOPHER	noguezcristopher804@gmail.com
202328578	CASIMIRO ESCOBAR KAROL IRIDIA	l202328578@jilotepec.tecnm.mx
C202128288	COLIN ZARZA CESAR MISAEL	lc202128288@jilotepec.tecnm.mx
202328452	CORREA MIRANDA BRENDA LIZETH	l202328452@jilotepec.tecnm.mx
202328360	CORREA MOLINA ANDREA	molandrea777@gmail.com
202328058	CRUZ ISIDORO SEBASTIAN	l202328058@jilotepec.tecnm.mx
202328835	CRUZ LEAL ALEXANDRA ABIGAIL	l202328835@jilotepec.tecnm.mx
202328489	CRUZ CRUZ FELIPE DE JESUS	l202328489@jilotepec.tecnm.mx
202328455	CRUZ GARCIA DIEGO	l202328455@jilotepec.tecnm.mx
202328576	ESQUIVEL OCAÑAS BRAYAN	l202328576@jilotepec.tecnm.mx
202328316	FACIO CRUZ SANDRA	sandyfacio2@gmail.com
202328236	GABRIEL ANGELES MARISOL	angelesmari92005@gmail.com
202328337	GARCÍA ANTONIO JOLETTE	l202328337@jilotepec.tecnm.mx
202328781	GARCIA MALDONADO ALAN RICARDO	l202328781@jilotepec.tecnm.mx
202328305	GONZÁLEZ SANTOS RUBI	l202328305@jilotepec.tecnm.mx
202328342	GONZALEZ GUTIERREZ MARLEN	l202328342@jilotepec.tecnm.mx
202328625	GRANADA MONDRAGÓN EDNA YULI	l202328625@jilotepec.tecnm.mx
202328064	GUADARRAMA OCAÑAS ANAYELY	l202328064@jilotepec.tecnm.mx
202328577	GUILLERMO CRUZ ADRIANA	l202328577@jilotepec.tecnm.mx
C202328689	HERNÁNDEZ DE JESÚS KARLA IVETH	lc202328689@jilotepec.tecnm.mx
202328586	HERNÁNDEZ HERNÁNDEZ TANIA	l202328586@jilotepec.tecnm.mx
202328562	JIMÉNEZ HERNÁNDEZ DENISE	l202328562@jilotepec.tecnm.mx
202328351	LEON GONZALEZ ANGELICA	l202328351@jilotepec.tecnm.mx
202328595	LÓPEZ OCAÑAS LEONARDO	l202328595@jilotepec.tecnm.mx
202328425	LUGO CRUZ ALEXIS SAID	l202328425@jilotepec.tecnm.mx
C202328093	MARTINEZ CADENA MARÍA DANIELA	lc202328093@jilotepec.tecnm.mx
202328344	MARTINEZ ESTEBEZ LAURA JARED	l202328344@jilotepec.tecnm.mx
202328574	MARTINEZ HERNANDEZ JONATHAN JESUS	l202328574@jilotepec.tecnm.mx
202328319	MARTINEZ CRUZ BELEN	l202328319@jilotepec.tecnm.mx
202028283	MARTINEZ OLVERA KARLA	l202028283@jilotepec.tecnm.mx
202328378	MORENO PINEDA FERNANDA MICHELLE	l202328378@jilotepec.tecnm.mx
202328568	NARVÁEZ CRUZ JANETH	l202328568@jilotepec.tecnm.mx
202328597	OROZCO SANTIAGO YESENIA	l202328597@jilotepec.tecnm.mx
202328388	RIVAS RIVAS OMAR	l202328388@jilotepec.tecnm.mx
202328839	RIVERA REBOLLAR LESLY EDELEN	l202328839@jilotepec.tecnm.mx
202328850	RUEDA RUEDA DOMINGO	l202328850@jilotepec.tecnm.mx
C202328901	RUEDA RUEDA SAUL	lc202328901@jilotepec.tecnm.mx
202328904	SALVADOR PÉREZ CASANDRA NATALI	l202328904@jilotepec.tecnm.mx
202328383	SÁNCHEZ CALDERÓN CHRISTOPHER	l202328383@jilotepec.tecnm.mx
202328362	SÁNCHEZ GARDUÑO XIMENA	l202328362@jilotepec.tecnm.mx
202328583	SÁNCHEZ MIRANDA JOSÉ ANTONIO	l202328583@jilotepec.tecnm.mx
202228798	SANCHEZ MONDRAGON CESAR DANIEL	l202228798@jilotepec.tecnm.mx
202328443	SANDOVAL GARCÍA KARLA	l202328443@jilotepec.tecnm.mx
202328390	SUAREZ MENDOZA MIGUEL ANGEL	l202328390@jilotepec.tecnm.mx
202328072	TREJO URBANO FERNANDA MARIEL	l202328072@jilotepec.tecnm.mx
R202328438	ZAMORANO RAMÍREZ JOSÉ ANTONIO	l202328438@jilotepec.tecnm.mx
202328859	ZAMUDIO ANAYA YASMIN	yasminzamudioanaya@gmail.com
202328325	ZUÑIGA ALCANTARA FERNANDA	l202328325@jilotepec.tecnm.mx
GRUPO 8503
202328179	ALCANTARA GONZÁLEZ SANDRA	l202328179@jilotepec.tecnm.mx
202328626	ALCÁNTARA SÁNCHEZ MARÍA DE JESÚS	l202328626@jilotepec.tecnm.mx
202328683	ALCÁNTARA SOTO ADAMARI PAOLA	l202328683@jilotepec.tecnm.mx
202028862	ANAYA TREJO SUSANA	l202028862@jilotepec.tecnm.mx
202328818	BECERRIL CHIMAL MARÍA MERCEDES	becerril18meche@gmail.com
C202328910	BENITEZ FRANCO BERNABE ANTONIO	lc202328910@jilotepec.tecnm.mx
201928803	BOLAÑOS CRUZ ANAHI	l201928803@jilotepec.tecnm.mx
202328588	CANO GARCIA FATIMA	l202328588@jilotepec.tecnm.mx
202328845	CASILLAS LOERA MARÍA FERNANDA	l202328845@jilotepec.tecnm.mx
202328194	CASTILLO NIEVES LUZ ELENA	l202328194@jilotepec.tecnm.mx
202328623	CRUZ TOLENTINO MARLEN	l202328623@jilotepec.tecnm.mx
202328617	CRUZ ROSENDO MARIANA	l202328617@jilotepec.tecnm.mx
202328756	GARCIA MARTINEZ FRANCISCO ISRAEL	l202328756@jilotepec.tecnm.mx
T202418009	GARCIA GONZALEZ JOSE EMILIANO	lt202418009@jilotepec.tecnm.mx
202328594	GARCIA ZUÑIGA ADENIZ ITZEL	l202328594@jilotepec.tecnm.mx
202328593	GONZÁLEZ PLATA BRANDON ALEXIS	l202328593@jilotepec.tecnm.mx
202328290	GUTIÉRREZ ROBLES FÁTIMA	gutierrezroblesfatima6@gmail.com
202328616	HERNANDEZ CRUZ LORENA	l202328616@jilotepec.tecnm.mx
C202328077	JIMÉNEZ VEGA KARELY AISLINN	lc202328077@jilotepec.tecnm.mx
202328619	LINARES CARLOS JUANA NOEMI	l202328619@jilotepec.tecnm.mx
202328609	MARTINEZ HUASO RODRIGO	l202328609@jilotepec.tecnm.mx
202328196	MARTÍNEZ MARTÍNEZ LUCERO	l202328196@jilotepec.tecnm.mx
202328703	MARTÍNEZ ORTIZ YENIFER	mtzotzyeni20@gmail.com
202328267	MONTOYA MARTÍNEZ EMMANUEL	l202328267@jilotepec.tecnm.mx
202328589	NARVÁEZ SÁNCHEZ SAÚL	l202328589@jilotepec.tecnm.mx
202328165	NAVARRETE BARRIOS DAYANE	l202328165@jilotepec.tecnm.mx
202328592	PEREZ COLIN YARELY	l202328592@jilotepec.tecnm.mx
202328684	PINTOR MONROY BRISSA	l202328684@jilotepec.tecnm.mx
202328690	REYNA MENDOZA GERARDO ZURIEL	l202328690@jilotepec.tecnm.mx
202328709	RUIZ HERNANDEZ PERLA	perlllanez@gmail.com
202328629	SANABRIA OROZCO DAMARIS	damarisorozco2004@gmail.com
202328715	SANCHEZ ALVAREZ ELIZABETH	l202328715@jilotepec.tecnm.mx
202328591	SÁNCHEZ CUEVAS JUAN PABLO	l202328591@jilotepec.tecnm.mx
202328646	SANCHEZ MARTINEZ BRANDON JAZIEL	l202328646@jilotepec.tecnm.mx
202328612	SANDOVAL MENDOZA HUGO	l202328612@jilotepec.tecnm.mx
202328682	TAPIA JIMENEZ ALEXA VIRIDIANA	l202328682@jilotepec.tecnm.mx
C202328556	TREJO MIGUELES ELÍAS ANTONIO	lc202328556@jilotepec.tecnm.mx
202328624	ZEPEDA DUARTE JOSE ARMANDO	josarm2311@gmail.com
202328590	ZUÑIGA MARTÍNEZ MARICARMEN	l202328590@jilotepec.tecnm.mx
GRUPO 8701
202228161	AGUILAR MEJIA MELANY GUADALUPE	l202228161@jilotepec.tecnm.mx
202228408	ALCANTARA MARCELO JOSE MANUEL	l202228408@jilotepec.tecnm.mx
202228194	ARCE ESPINOZA ANDREA MONSERRAT	l202228194@jilotepec.tecnm.mx
202228887	BECERRIL CRUZ EVELYN ITZEL	l202228887@jilotepec.tecnm.mx
202228886	CARRILLO ROSALES EDIEE AXEL	l202228886@jilotepec.tecnm.mx
202228159	CORTES GARCIA BRENDA YOZELIN	l202228159@jilotepec.tecnm.mx
202228370	CRUZ ARCHUNDIA CARLOS	l202228370@jilotepec.tecnm.mx
202228668	CRUZ CRUZ ADRIANA	l202228668@jilotepec.tecnm.mx
202228568	CRUZ GARCIA KEVIN	l202228568@jilotepec.tecnm.mx
202228882	CRUZ HERNANDEZ JENNIFER AIDA	l202228882@jilotepec.tecnm.mx
202228284	CRUZ MARTINEZ LUIS ANTONIO	l202228284@jilotepec.tecnm.mx
202128045	CRUZ VAZQUEZ ANETTE XIMENA	l202128045@jilotepec.tecnm.mx
202228440	CUEVAS GUADARRAMA JUAN ANTONIO	l202228440@jilotepec.tecnm.mx
202228442	DIAZ DE LA CRUZ ABRIL	l202228442@jilotepec.tecnm.mx
202028459	ESCOBAR CHAPARRO ALMA PALOMA	l202028459@jilotepec.tecnm.mx
202228516	GARCIA CRUZ BRENDA	l202228516@jilotepec.tecnm.mx
C202228403	GARCIA FACIO ANDY	garfan082@gmail.com
202228034	GARCIA HERNANDEZ DANIELA	l202228034@jilotepec.tecnm.mx
202228498	GONZALEZ CRUZ MARIA FERNANDA	l202228498@jilotepec.tecnm.mx
202228197	HERNANDEZ CRUZ LIDIA ISABEL	l202228197@jilotepec.tecnm.mx
202228963	HERNÁNDEZ HUITRÓN FERNANDO	l202228963@jilotepec.tecnm.mx
202228003	HERNANDEZ SANCHEZ KAREN	l202228003@jilotepec.tecnm.mx
202228245	HUITRON CARLOS JOSE BELEM	l202228245@jilotepec.tecnm.mx
202228266	LEONARDO ARCE MONTSERRAT	l202228266@jilotepec.tecnm.mx
202228698	MANRIQUEZ NOGUEZ MIRIAM ITZEL	l202228698@jilotepec.tecnm.mx
202228718	MANUEL ZUÑIGA KAREN	l202228718@jilotepec.tecnm.mx
202228547	MARTINEZ BUSTAMANTE CAROLINA	l202228547@jilotepec.tecnm.mx
202228671	MARTINEZ GOMEZ JOSE FERNANDO	l202228671@jilotepec.tecnm.mx
202228254	MARTINEZ HERNANDEZ BRISEIDA ESMERALDA	l202228254@jilotepec.tecnm.mx
202228166	MARTINEZ JUAREZ GIOVANNY	l202228166@jilotepec.tecnm.mx
202228411	MARTINEZ MARTINEZ HORACIO	l202228411@jilotepec.tecnm.mx
202228251	MARTINEZ NARVAEZ MARICRUZ	l202228251@jilotepec.tecnm.mx
202228112	MARTINEZ SERRANO SANDRA YOSELIN	l202228112@jilotepec.tecnm.mx
202228212	MIRANDA BRAVO ESTHELA	l202228212@jilotepec.tecnm.mx
202228173	MOLINA CRUZ EDUARDO ROBERTO	l202228173@jilotepec.tecnm.mx
202228752	MONROY GUADARRAMA ALEJANDRO	l202228752@jilotepec.tecnm.mx
202228758	MONROY SANCHEZ JORGE GUADALUPE	l202228758@jilotepec.tecnm.mx
202228967	NOGUEZ LUGO JOAB JASCIEL	l202228967@jilotepec.tecnm.mx
202228147	PEREZ HERNANDEZ TANIA	l202228147@jilotepec.tecnm.mx
202228472	PIEDRA ROMERO GUADALUPE ISABEL	l202228472@jilotepec.tecnm.mx
202228677	PIÑA JIMENEZ KEVIN MISAEL	l202228677@jilotepec.tecnm.mx
202228552	RANGEL MIGUELES YAIR DONOVAN	l202228552@jilotepec.tecnm.mx
E202318005	REYES SANCHEZ ARIADNA PAOLA	reyespao320@gmail.com
202228454	SANCHEZ ALCANTARA YESSENIA ELVIRA	l202228454@jilotepec.tecnm.mx
R202228877	SÁNCHEZ ALMARAZ MARILUZ	lr202228877@jilotepec.tecnm.mx
202228049	SANTANA SANTANA ANNET JOCELYN	l202228049@jilotepec.tecnm.mx
202228533	SANTIAGO BALDOMERO OSCAR	l202228533@jilotepec.tecnm.mx
202228950	SANTIAGO HERNANDEZ DANIELA	l202228950@jilotepec.tecnm.mx
202228083	SUAREZ MENDOZA PABLO JESUS	l202228083@jilotepec.tecnm.mx
202028182	TORRES ARTEAGA REYNA CRISTINA	l202028182@jilotepec.tecnm.mx
202228331	VALENTIN SANDOVAL YULIANA	l202228331@jilotepec.tecnm.mx
GRUPO 8702
202228833	CABALLERO MIRANDA CHRISTOPHER	l202228833@jilotepec.tecnm.mx
202228027	CAZTRO DE JESUS DIANA	l202228027@jilotepec.tecnm.mx
202228872	CRISOSTOMO FRANCO WENDY ABIGAIL	l202228872@jilotepec.tecnm.mx
202228026	CRUZ CRUZ OSVALDO	l202228026@jilotepec.tecnm.mx
202028199	CRUZ ESPINOSA ARLIN MICHELLE	l202028199@jilotepec.tecnm.mx
C202228091	CRUZ MIRANDA ARELI	lc202228091@jilotepec.tecnm.mx
202228850	CRUZ VILLEGAS ANGEL	l202228850@jilotepec.tecnm.mx
202228210	CRUZ ZUÑIGA ALMA MARIEL	l202228210@jilotepec.tecnm.mx
202228238	DE LA LUZ SANTIAGO GILBERTO YUBAL	l202228238@jilotepec.tecnm.mx
202228087	ENRIQUEZ VALENCIA VALERIA SAIDALY	l202228087@jilotepec.tecnm.mx
202228515	ESCOBAR PERALTA MARIA DEL CARMEN	l202228515@jilotepec.tecnm.mx
202228686	ESCOBAR SANCHEZ SANDRA	l202228686@jilotepec.tecnm.mx
202228188	ESPINOSA GARCIA MAURICIO	l202228188@jilotepec.tecnm.mx
202228354	GABINO FIDEL KARINA	l202228354@jilotepec.tecnm.mx
202228560	GARCIA GENERA MARIA GUADALUPE	l202228560@jilotepec.tecnm.mx
202228874	GARDUÑO ARCE ALVARO	l202228874@jilotepec.tecnm.mx
202228871	HERNÁNDEZ GUERRERO MARÍA ISABEL	l202228871@jilotepec.tecnm.mx
R202228766	HERNANDEZ MARTINEZ OSVALDO	lr202228766@jilotepec.tecnm.mx
202228875	IGLESIAS CRUZ MARIA FERNANDA	l202228875@jilotepec.tecnm.mx
202228723	LARA MARTINEZ JUAN FELIPE	l202228723@jilotepec.tecnm.mx
202228157	LOPEZ DIAZ HUGO	l202228157@jilotepec.tecnm.mx
202228041	MALDONADO BECERRIL ALEXIA	l202228041@jilotepec.tecnm.mx
202228239	MARTINEZ ALCANTAR STHEPHANIE	l202228239@jilotepec.tecnm.mx
202228138	MARTINEZ DE JESUS DENISSE	l202228138@jilotepec.tecnm.mx
202228712	MARTINEZ GARCIA RAUL	l202228712@jilotepec.tecnm.mx
202228109	MARTINEZ JIMENEZ YOCELIN	l202228109@jilotepec.tecnm.mx
R202228323	MARTINEZ NARVAEZ JOSE FRANCISCO	lr202228323@jilotepec.tecnm.mx
C202228891	MARTINEZ PEREZ BRYAN	lc202228891@jilotepec.tecnm.mx
202228772	MARTINEZ SANTANA FERNANDO JAIR	l202228772@jilotepec.tecnm.mx
202228037	MARTINEZ VENTURA ALEXANDER	l202228037@jilotepec.tecnm.mx
202228351	MIRANDA BASILIO ANDREA MONTSERRAT	l202228351@jilotepec.tecnm.mx
202228339	MIRANDA LOVERA JULIANET	l202228339@jilotepec.tecnm.mx
202128587	MIRANDA LOVERA NANCY ARLET	l202128587@jilotepec.tecnm.mx
C202228130	MIRANDA PADILLA ANA MARIA	lc202228130@jilotepec.tecnm.mx
202228386	MOLINA PADILLA JUAN PABLO	l202228386@jilotepec.tecnm.mx
202228428	MONROY CRUZ LIZETH DANIELA	l202228428@jilotepec.tecnm.mx
202228565	MONROY MIRANDA ANDREA	l202228565@jilotepec.tecnm.mx
C202228059	MORALES MARTINEZ SUSANA	lc202228059@jilotepec.tecnm.mx
202228216	MUCIO PINEDA DULCE AYLIN	l202228216@jilotepec.tecnm.mx
202028783	OBREGON HERNANDEZ DIANA	l202028783@jilotepec.tecnm.mx
202228181	ORTIZ ORTIZ HERNAN	l202228181@jilotepec.tecnm.mx
202228137	PRUDENCIO RAMIREZ JOSE	l202228137@jilotepec.tecnm.mx
202228834	RIVERA CORREA LINETTE ALEJANDRA	l202228834@jilotepec.tecnm.mx
202228702	RODRIGUEZ LAGUNAS KATYA	l202228702@jilotepec.tecnm.mx
202228828	ROJO LOPEZ BRENDA CITLALLI	l202228828@jilotepec.tecnm.mx
202228505	SAIZ ROSTRO DANIELA MICHELLE	l202228505@jilotepec.tecnm.mx
202228177	SANCHEZ NARVAEZ JOHN DAIR	l202228177@jilotepec.tecnm.mx
202228535	SANTILLAN ALANIZ YARETZI	l202228535@jilotepec.tecnm.mx
202228249	SOSA GRANADOS JAZMIN	l202228249@jilotepec.tecnm.mx
202228649	TOLENTINO HERNANDEZ JESUS URIEL	l202228649@jilotepec.tecnm.mx
202228792	VAZQUEZ SANCHEZ JENNIFER	l202228792@jilotepec.tecnm.mx
202228820	VELARDE FACIO MIGUEL ANGEL	l202228820@jilotepec.tecnm.mx
202228407	VENTURA LAGUNAS WENDY	l202228407@jilotepec.tecnm.mx
`;

const capitalize = (s: string) => {
  if (typeof s !== 'string') return '';
  return s.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
};

const allAttendees: Attendee[] = [];
let currentGroup = '';

const lines = rawData.trim().split('\n');

for (const line of lines) {
  const trimmedLine = line.trim();
  if (trimmedLine.startsWith('GRUPO')) {
    currentGroup = trimmedLine.replace(/GRUPO\s|:/g, '').trim();
    continue;
  }

  if (trimmedLine && currentGroup) {
    const parts = trimmedLine.split('\t');
    if (parts.length === 3) {
      const [matricula, name, email] = parts;
      allAttendees.push({
        id: matricula,
        matricula: matricula,
        name: capitalize(name),
        email: email,
        grupo: currentGroup,
        status: AttendanceStatus.PENDING,
        progress: {
          checkIn: false,
          workshop: false,
          conference: false,
          boxLunch: false,
        },
      });
    }
  }
}

export const mockAttendees: Attendee[] = allAttendees;