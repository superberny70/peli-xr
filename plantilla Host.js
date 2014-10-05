	/********************************************************************************	
	/* var ucaster: Objeto que representa el servidor ucaster					*
	/****************************************************************************/
	var ucaster= function(params) {
			/*
			<link>rtmp://$doregex[rtmpip]/live playpath=golrincondepensar?id=72584 conn=S:OK swfUrl=http://www.ucaster.eu/static/scripts/fplayer.swf pageUrl=http://www.ucaster.eu live=1 timeout=20</link>
			<regex>
			<name>rtmpip</name>
			<expres>redirect=(.*)</expres>
			<page>http://www.ucaster.eu:1935/loadbalancer</page>
			<referer>http://www.ucaster.eu/static/scripts/fplayer.swf</referer>
			</regex>
			*/
		//metodos publicos
		
		/************************************************************************
		/*	funcion esservidoradulto: Indica si es un servidor de adultos o no. *
		/*	Parametros: ninguno													*
		/*	Retorna: true si es un servidor de adultos, false si no lo es.		*
		/***********************************************************************/
		this.esservidoradulto= function () {
			return false;
		}
		
		/****************************************************************************
		/*	funcion geturl_video: Devuelve la url del video.						*
		/*	Parametros:																*
		/*		url_servidor: direccion de la que se debe extraer la url del video.	*	
		/*	Retorna: String que representa la url del video o 'error'				*									*
		/***************************************************************************/
		this.geturl_video= function (jsonRegexs)
		{
			var url_video ='error';
			
			var objRegexs=showtime.JSONDecode(jsonRegexs)

showtime.print (objRegexs.link)


			return url_video;	
		}
		
		
	}
	HostFactory.registrarHost("ucaster",ucaster); //Registrar la clase ucaster