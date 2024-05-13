import './assets/css/style.css'

document.querySelector('#app').innerHTML = `
<section id="windowP" class="contentWindows sectionCards">
        
<div class="container-fluid "style="z-index: 9999;">
    <div id="v1" class="miDiv" style="height: 80vh;display: none;margin: 10px;position: absolute;width: 90%;">
        <div class="resize-handle top-left"></div>
        <div class="resize-handle top-right"></div>
        <div class="resize-handle bottom-left"></div>
        <div class="resize-handle bottom-right"></div>
        <div class="row" >
            <div style="position: relative;">
                <div style="position: absolute; top: 0; left: 0; width: 100%; background-color: white;border-radius:10px  10px 0 0;">
                    <div style="display: flex; justify-content: flex-end; padding: 0 10px;">
                        <button onclick="minimizarVentanaShell()" class="btnMinimize"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
                            </svg> 
                        </button>
                        <button onclick="cerrarVentanaShell()" class="btnClose"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg> 
                        </button>
                    </div>                            
                </div>
            </div>
        </div>
        <div class="row" style="height: 100%;border-radius:10px  10px 10px 10px;">
            <div class="container-fluid contentCol1">
                <div class="col-12 shell">
                    <p>Windows PowerShell Copyright (C) Microsoft Corporation. Todos los derechos reservados.</p>                                
                    <p>la nueva tecnología PowerShell multiplataforma https://aka.ms/pscore6</p>                                 
                    <p>Comandos para la navegación en la pagina:</p>                                 
                    <p>cd C:\Users\Home\proyectos</p>                                 
                    <p>cd C:\Users\Home\curriculum</p>                                 
                    <p>cd C:\Users\Home\tecnologias</p>
                    <form id="commandForm">
                        <p>C:\Users\Home><input class="inputShell" placeholder="escribe tu comando"id="commandInput"autocomplete="off"/></p> 
                    </form>
                    <div id="outputContainer"></div>                                                          
                </div>
            </div>                  
        </div>                
      </div> 
    <div id="v2" class="miDiv" style="height: 80vh;display: none;margin: 10px;position: absolute;width: 90%;">
        <div class="resize-handle top-left"></div>
        <div class="resize-handle top-right"></div>
        <div class="resize-handle bottom-left"></div>
        <div class="resize-handle bottom-right"></div>
        <div class="row" >
            <div style="position: relative;">
                <div style="position: absolute; top: 0; left: 0; width: 100%; background-color: white;border-radius:10px  10px 0 0;">
                    <div style="display: flex; justify-content: flex-end; padding: 0 10px;">
                        <button onclick="minimizarVentanaProjects()" class="btnMinimize"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
                            </svg> 
                        </button>
                        <button onclick="cerrarVentanaProjects()" class="btnClose"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg> 
                        </button>
                    </div>                            
                </div>
            </div>
        </div>
        <div class="row rowContentProjects" >
            <div class="container-fluid contentCol1">
                <div class="col-12 projects">
                    <div class="row rowProjects" >
                        <div class="col-sm-4 col-md-2 col-lg-2 col-xl-2 bg-body-tertiary colBtnProjects" >
                            <nav class="navbar flex-column">
                                <div class="container-fluid">
                                    <div id="navbarNav " class="navStyle">
                                        <ul class="navbar-nav ">
                                            <li class="nav-item" >
                                                <button class="nav-link active btnProjects" onclick="wDownloadMusic()">
                                                    <img src="./assets/img/iconDM-Player.png" style="width: 30px;"/> DownloadMusic
                                                </button>
                                            </li>
                                            <li class="nav-item">
                                                <button class="nav-link active btnProjects" onclick="wConvertFile()">
                                                    <img src="./assets/img/iconConvertFile.png" style="width: 30px;"/> ConvertiFile
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>                                
                        <div class="col-sm-8 col-md-10 col-lg-10 col-xl-10" style="display: none;background-color: #000000;border-radius:0 0 10px 0;" id="downloadMusic">
                            <div class="pt-2">
                                <div class="row" style="text-align: center;font-weight: bold;">
                                    <div class="col d-flex justify-content-center">
                                        <h1 class="title">DownloadMusic</h1>
                                        <div class="loader"> 
                                            <span class="bar"></span>
                                            <span class="bar"></span>
                                            <span class="bar"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col d-flex justify-content-center">
                                        <input class="inputDownloadMusic" placeholder="Url video de Youtube"/>
                                    </div>
                                </div>
                                <div class="row pt-3">
                                    <div class="col d-flex justify-content-end">
                                        <img class="imgMiniature"/>
                                    </div>                                            
                                    <div class="col" style="align-items:center; display: flex">
                                        <button class="btnDM" onclick="downloadMusicMP3()">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-filetype-mp3" viewBox="0 0 16 16">
                                              <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-4.911 9.67h-.443v-.609h.422a.7.7 0 0 0 .322-.073.56.56 0 0 0 .22-.2.5.5 0 0 0 .076-.284.49.49 0 0 0-.176-.392.65.65 0 0 0-.442-.15.7.7 0 0 0-.252.041.6.6 0 0 0-.193.112.5.5 0 0 0-.179.349H7.71q.009-.235.102-.437.094-.202.27-.352.176-.152.428-.237.255-.085.583-.088.418-.003.723.132.304.135.472.372a.9.9 0 0 1 .173.539.83.83 0 0 1-.12.478.96.96 0 0 1-.619.439v.041a1 1 0 0 1 .718.434.9.9 0 0 1 .144.521q.003.285-.117.507a1.1 1.1 0 0 1-.329.378q-.21.152-.486.234-.273.08-.583.08-.451 0-.77-.153a1.2 1.2 0 0 1-.487-.41 1.1 1.1 0 0 1-.178-.563h.726a.46.46 0 0 0 .106.258.7.7 0 0 0 .249.179 1 1 0 0 0 .357.067.9.9 0 0 0 .384-.076.6.6 0 0 0 .252-.217.56.56 0 0 0 .088-.319.56.56 0 0 0-.334-.522.8.8 0 0 0-.372-.079ZM.706 15.925v-2.66h.038l.952 2.16h.516l.946-2.16h.038v2.66h.715v-3.999h-.8l-1.14 2.596h-.026l-1.14-2.596H0v4zm5.458-3.999h-1.6v4h.792v-1.342h.803q.43 0 .732-.173.304-.177.463-.475a1.4 1.4 0 0 0 .161-.677q0-.374-.158-.677a1.2 1.2 0 0 0-.46-.477 1.4 1.4 0 0 0-.733-.179m.545 1.333a.8.8 0 0 1-.085.381.57.57 0 0 1-.237.24.8.8 0 0 1-.375.082h-.66v-1.406h.66q.328 0 .513.182.184.181.184.521"/>
                                            </svg>
                                            <h4 >Descargar audio</h4>
                                          </button>
                                        <button class='btnDV' onclick="downloadVideo()">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-film" viewBox="0 0 16 16">
                                              <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"/>
                                            </svg>
                                            <h4 >Descargar video</h4>
                                        </button>
                                    </div>                                            
                                </div>
                                <div class="row pt-2 stackTech">
                                    <div style="text-align: center;">
                                        <h2 >Tecnologías usadas</h2>
                                    </div>                                      
                                </div>
                                <div class="row stackTech">
                                    <div class="col d-flex justify-content-end ">
                                        <div class="svg-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                                <path fill="#80deea"
                                                    d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z">
                                                </path>
                                                <path fill="#80deea"
                                                    d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z">
                                                </path>
                                                <path fill="#80deea"
                                                    d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z">
                                                </path>
                                                <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                                            </svg>
                                            <h3>React</h3>
                                        </div>
                                    </div>
                                    <div class="col d-flex justify-content-start">
                                        <div class="svg-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                                <path fill="#388e3c"
                                                    d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013">
                                                </path>
                                                <path fill="#37474f"
                                                    d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z">
                                                </path>
                                                <path fill="#2e7d32"
                                                    d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076">
                                                </path>
                                                <path fill="#4caf50"
                                                    d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076">
                                                </path>
                                                <path fill="#37474f"
                                                    d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z">
                                                </path>
                                            </svg>
                                            <h3>NodeJs</h3>
                                        </div>
                                    </div>                                          
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-8 col-md-10 col-lg-10 col-xl-10" style="display: none;"id="convertFile">
                            <div style="padding-top: 20px;">
                                <div class="row" style="text-align: center;font-weight: bold;">
                                    <h1>ConvertFile</h1>
                                </div>
                                <div class="row " >
                                    <div class="col " >
                                        <h2 style="font-weight: bold;">Convierte imagenes a .webp</h2>
                                        <span>Optimización de imágenes con ConvertFile: Más velocidad, menos carga, formato .webp.</span>
                                    </div>
                                    <div class="col" >
                                        <div style="border-style:dashed;border-radius: 10px;display: flex;justify-content: center;align-items: center;padding-top: 10px;padding-bottom: 10px;padding-left: 30px;padding-right: 30px;">
                                            <button onclick="document.getElementById('fileInput').click()" style="border: none; background-color: #000000;color: white;font-weight: bold;font-size: x-large;border-radius: 10px;padding: 10px;height: fit-content;">Seleccionar Archivo</button>
                                            <input id="fileInput" type="file" accept=".png,.jpg,.jpeg" onchange="mostrarNombreArchivos(this);" style="display: none;" multiple />
                                        </div>
                                        <div style="overflow-y:scroll; height: 100px">
                                            <ul id="listaArchivos"></ul>  
                                        </div>                                                                                                                                                                                        
                                    </div>
                                </div>
                                <div class="row " style="display: flex;text-align: center;">
                                    <div class="pt-2">
                                        <button onclick="enviarArchivosAlServidor()" style="border: none;background-color: #67696C;padding: 10px;border-radius: 10px;color: white;font-weight: bold;">Convertir imágenes</button>
                                    </div>
                                </div>
                                <div class="row pt-2 stackTech">
                                    <div style="text-align: center;">
                                        <h2 style="color: #000000;">Tecnologías usadas</h2>
                                    </div>                                      
                                </div>
                                <div class="row stackTech">
                                    <div class="col d-flex justify-content-end ">
                                        <div class="svg-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                                <path fill="#80deea"
                                                    d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z">
                                                </path>
                                                <path fill="#80deea"
                                                    d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z">
                                                </path>
                                                <path fill="#80deea"
                                                    d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z">
                                                </path>
                                                <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                                            </svg>
                                            <h3 style="color: #000000;">React</h3>
                                        </div>
                                    </div>
                                    <div class="col d-flex justify-content-start">
                                        <div class="svg-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                                <path fill="#388e3c"
                                                    d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013">
                                                </path>
                                                <path fill="#37474f"
                                                    d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z">
                                                </path>
                                                <path fill="#2e7d32"
                                                    d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076">
                                                </path>
                                                <path fill="#4caf50"
                                                    d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076">
                                                </path>
                                                <path fill="#37474f"
                                                    d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z">
                                                </path>
                                            </svg>
                                            <h3 style="color: #000000;">NodeJs</h3>
                                        </div>
                                    </div>                                          
                                </div>
                            </div>                                    
                        </div>
                    </div>                          
                </div>
            </div>                  
        </div>                
      </div> 
    <div id="v3" class="miDiv" style="height: 80vh;display: none;margin: 10px;position: absolute;width: 90%;">
        <div class="resize-handle top-left"></div>
        <div class="resize-handle top-right"></div>
        <div class="resize-handle bottom-left"></div>
        <div class="resize-handle bottom-right"></div>
        <div class="row" >
            <div style="position: relative;">
                <div style="position: absolute; top: 0; left: 0; width: 100%; background-color: white;border-radius:10px  10px 0 0;">
                    <div style="display: flex; justify-content: flex-end; padding: 0 10px;">
                        <button onclick="minimizarVentanaCV()" class="btnMinimize"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
                            </svg> 
                        </button>
                        <button onclick="cerrarVentanaCV()" class="btnClose"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg> 
                        </button>
                    </div>                            
                </div>
            </div>
        </div>
        <div class="row rowContentProjects" >
            <div class="container-fluid contentCol1">
                <div class="col-12 projects">            
                    <object data='./HojaDeVida2024.pdf'type="application/pdf" width="100%" height="100%">
                    </object>                            
                </div>
            </div>                  
        </div>                
      </div> 
    <div id="v4" class="miDiv" style="height: 80vh;display: none;margin: 10px;position: absolute;width: 90%;">
        <div class="resize-handle top-left"></div>
        <div class="resize-handle top-right"></div>
        <div class="resize-handle bottom-left"></div>
        <div class="resize-handle bottom-right"></div>
        <div class="row" >
            <div style="position: relative;">
                <div style="position: absolute; top: 0; left: 0; width: 100%; background-color: white;border-radius:10px  10px 0 0;">
                    <div style="display: flex; justify-content: flex-end; padding: 0 10px;">
                        <button onclick="minimizarVentanaST()" class="btnMinimize"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
                            </svg> 
                        </button>
                        <button onclick="cerrarVentanaST()" class="btnClose"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg> 
                        </button>
                    </div>                            
                </div>
            </div>
        </div>
        <div class="row rowContentST" >
            <div class="container-fluid contentCol1">
                <div class="col-12 stackTech">            
                    <h3 >Stack tecnologico</h3>
                    <div class="container-fluid" style="display: flex;height: 100%;flex-direction: column;justify-content: space-evenly;">
                        <div class="row ">
                            <div class="col-sm-1 col-md-4 col-lg-4 col-xl-4 iconTech">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                    <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                                    <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                                    <path fill="#FFF"
                                        d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                                    <path fill="#EEE"
                                        d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z">
                                    </path>
                                </svg>
                            </div>
                            <div class="col-sm-1 col-md-4 col-lg-4 col-xl-4 iconTech">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                    <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                                    <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                                    <path fill="#FFF"
                                        d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z">
                                    </path>
                                    <path fill="#EEE"
                                        d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z">
                                    </path>
                                </svg>
                            </div>
                            <div class="col-sm-1 col-md-4 col-lg-4 col-xl-4 iconTech">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                    <path fill="#673ab7"
                                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z">
                                    </path>
                                    <path fill="#fff"
                                        d="M33.03,25.6c-0.65-0.9-1.59-1.52-2.8-1.85c0,0,1.02-0.37,1.94-1.75c0.55-0.88,0.83-1.94,0.83-3.18 c0-2.15-0.78-3.8-2.34-4.93C29.1,12.76,27.34,12,24.35,12H15v24h10.43c2.83-0.02,4.96-0.63,6.41-1.8c1.44-1.19,2.16-2.95,2.16-5.3 C34,27.6,33.68,26.5,33.03,25.6z M21,16c0,0,4.17,0,4.25,0c1.52,0,2.75,1.23,2.75,2.75c0,1.52-1.23,2.75-2.75,2.75 c-0.08,0-4.25,0-4.25,0V16z M26,32h-5v-6h5c1.66,0,3,1.34,3,3C29,30.66,27.66,32,26,32z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 iconTech">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                    <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                                    <path fill="#000001"
                                        d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z">
                                    </path>
                                </svg>
                            </div>
                            <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 iconTech">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                    <path fill="#00796b"
                                        d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z">
                                    </path>
                                    <path fill="#00796b"
                                        d="M13.441,29.281h1.92v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92 c0.008,0,0,5.968,0,5.993c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0 c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281 z">
                                    </path>
                                    <path fill="#f57f17"
                                        d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536v-1.368 c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z">
                                    </path>
                                    <path fill="#f57f17"
                                        d="M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96h-4.435 c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z">
                                    </path>
                                    <path fill="#f57f17"
                                        d="M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z">
                                    </path>
                                    <path fill="#00796b"
                                        d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z">
                                    </path>
                                    <path fill="#00796b"
                                        d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z">
                                    </path>
                                </svg>
                            </div>
                            <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 iconTech">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                    <path fill="#fff"
                                        d="M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z">
                                    </path>
                                    <path fill="#0277bd"
                                        d="M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z">
                                    </path>
                                    <path fill="#0277bd"
                                        d="M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z">
                                    </path>
                                    <path fill="#0277bd"
                                        d="M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3 col-md-4 col-lg-4 col-xl-4 iconTech">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                    <path fill="#80deea"
                                        d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z">
                                    </path>
                                    <path fill="#80deea"
                                        d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z">
                                    </path>
                                    <path fill="#80deea"
                                        d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z">
                                    </path>
                                    <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                                </svg>
                            </div>
                            <div class="col-sm-3 col-md-4 col-lg-4 col-xl-4 iconTech">
                                <svg fill="none" height="60" width="60" xmlns="http://www.w3.org/2000/svg" viewBox="670.088 32.46226489559854 2224.1720000000005 2666.4877351044024">
                                    <g fill="#61dafb">
                                        <path d="M2870 1250.22c0-145.34-182.01-283.079-461.07-368.495 64.4-284.424 35.78-510.711-90.34-583.159-29.07-16.994-63.05-25.044-100.17-25.044v99.728c20.57 0 37.12 4.025 50.98 11.627 60.82 34.882 87.21 167.703 66.63 338.536-4.91 42.038-12.96 86.311-22.8 131.479-87.66-21.466-183.36-38.012-283.98-48.745-60.37-82.734-122.98-157.865-186.04-223.604 145.79-135.504 282.64-209.741 375.66-209.741v-99.727c-122.99 0-283.98 87.653-446.76 239.703-162.79-151.156-323.78-237.914-446.76-237.914v99.727c92.57 0 229.86 73.79 375.65 208.399-62.61 65.74-125.22 140.423-184.7 223.157-101.07 10.733-196.77 27.279-284.42 49.192-10.29-44.72-17.89-88.1-23.26-129.69-21.01-170.833 4.92-303.654 65.3-338.983 13.41-8.05 30.85-11.627 51.43-11.627v-99.728c-37.57 0-71.56 8.05-101.07 25.044-125.67 72.447-153.84 298.287-89 581.817C857.119 968.036 676 1105.33 676 1250.22c0 145.35 182.013 283.09 461.07 368.5-64.4 284.43-35.78 510.71 90.34 583.16 29.07 16.99 63.05 25.04 100.62 25.04 122.98 0 283.98-87.65 446.76-239.7 162.78 151.16 323.78 237.92 446.76 237.92 37.56 0 71.55-8.05 101.07-25.05 125.66-72.45 153.84-298.29 88.99-581.81 277.27-85.42 458.39-223.16 458.39-368.06zm-582.26-298.284c-16.55 57.694-37.12 117.164-60.38 176.644-18.33-35.77-37.56-71.55-58.58-107.33-20.57-35.773-42.49-70.655-64.4-104.643 63.5 9.391 124.77 21.019 183.36 35.329zm-204.83 476.274c-34.88 60.38-70.65 117.62-107.77 170.84-66.64 5.81-134.16 8.94-202.14 8.94-67.53 0-135.06-3.13-201.24-8.5-37.12-53.22-73.35-110.01-108.23-169.94-33.99-58.58-64.84-118.06-93.02-177.98 27.73-59.93 59.03-119.86 92.58-178.44 34.88-60.37 70.65-117.616 107.77-170.834 66.64-5.814 134.16-8.944 202.14-8.944 67.53 0 135.06 3.13 201.24 8.497 37.12 53.218 73.35 110.011 108.23 169.941 33.99 58.58 64.84 118.06 93.02 177.99-28.18 59.92-59.03 119.85-92.58 178.43zm144.45-58.13a1918.154 1918.154 0 0 1 61.72 177.98c-58.59 14.31-120.3 26.39-184.25 35.78 21.91-34.43 43.82-69.76 64.4-105.99 20.57-35.77 39.8-72 58.13-107.77zm-453.47 477.17c-41.59-42.94-83.18-90.79-124.32-143.11 40.25 1.79 81.39 3.13 122.98 3.13 42.04 0 83.63-.89 124.33-3.13a1746.499 1746.499 0 0 1-122.99 143.11zm-332.72-263.41c-63.5-9.39-124.77-21.02-183.35-35.33 16.54-57.69 37.12-117.17 60.37-176.65 18.34 35.78 37.57 71.56 58.58 107.33 21.02 35.78 42.49 70.66 64.4 104.65zm330.49-930.638c41.59 42.931 83.18 90.783 124.32 143.106-40.25-1.789-81.39-3.13-122.98-3.13-42.04 0-83.63.894-124.32 3.13a1746.3 1746.3 0 0 1 122.98-143.106zm-330.94 263.405c-21.91 34.435-43.82 69.764-64.39 105.983-20.57 35.78-39.8 71.56-58.14 107.33a1914.757 1914.757 0 0 1-61.71-177.984c58.58-13.863 120.29-25.938 184.24-35.329zM1036 1476.51c-158.309-67.53-260.72-156.07-260.72-226.29 0-70.21 102.411-159.2 260.72-226.28 38.46-16.55 80.5-31.308 123.88-45.171 25.49 87.651 59.03 178.881 100.62 272.351-41.14 93.02-74.24 183.8-99.28 271.01-44.27-13.87-86.31-29.07-125.22-45.62zm240.6 639.06c-60.82-34.88-87.21-167.7-66.63-338.54 4.92-42.03 12.96-86.31 22.8-131.48 87.66 21.47 183.36 38.02 283.98 48.75 60.37 82.73 122.98 157.86 186.04 223.6-145.79 135.51-282.64 209.74-375.66 209.74-20.12-.44-37.11-4.47-50.53-12.07zm1060.78-340.77c21.01 170.83-4.92 303.65-65.3 338.98-13.41 8.05-30.85 11.63-51.43 11.63-92.57 0-229.86-73.79-375.65-208.4 62.61-65.74 125.22-140.42 184.7-223.16 101.07-10.73 196.77-27.28 284.42-49.19 10.29 45.17 18.34 88.55 23.26 130.14zm172.17-298.29c-38.46 16.55-80.5 31.31-123.88 45.17-25.49-87.65-59.03-178.88-100.62-272.35 41.15-93.02 74.24-183.8 99.28-271.009 44.28 13.864 86.31 29.069 125.67 45.619 158.31 67.52 260.72 156.07 260.72 226.28-.45 70.22-102.86 159.21-261.17 226.29z"/><path d="M1772.55 1454.6c112.88 0 204.38-91.5 204.38-204.38 0-112.87-91.5-204.37-204.38-204.37-112.87 0-204.37 91.5-204.37 204.37 0 112.88 91.5 204.38 204.37 204.38zM775.625 2578.81H708.16V2695h-38.072v-287.22h95.082c32.351 0 57.207 7.37 74.566 22.1 17.491 14.72 26.237 36.16 26.237 64.3 0 17.89-4.866 33.47-14.598 46.76-9.6 13.28-23.014 23.21-40.242 29.78l67.465 121.91v2.37h-40.637zm-67.465-30.97h58.194c18.806 0 33.732-4.87 44.779-14.6 11.178-9.73 16.767-22.75 16.767-39.06 0-17.75-5.326-31.36-15.978-40.83-10.521-9.47-25.776-14.27-45.766-14.4H708.16zm293.93 151.11c-28.936 0-52.477-9.47-70.625-28.41-18.149-19.07-27.223-44.52-27.223-76.34v-6.71c0-21.17 4.011-40.04 12.033-56.61 8.154-16.71 19.464-29.73 33.93-39.06 14.598-9.47 30.379-14.21 47.344-14.21 27.751 0 49.321 9.14 64.701 27.42 15.39 18.28 23.08 44.45 23.08 78.51v15.19H940.736c.526 21.05 6.642 38.08 18.346 51.1 11.836 12.88 26.828 19.33 44.978 19.33 12.89 0 23.8-2.63 32.74-7.89 8.95-5.26 16.77-12.23 23.48-20.91l22.29 17.36c-17.89 27.48-44.71 41.23-80.48 41.23zm-4.541-191.35c-14.729 0-27.091 5.39-37.086 16.17-9.995 10.66-16.176 25.65-18.543 44.98h106.92v-2.76c-1.05-18.54-6.05-32.88-14.99-43.01-8.95-10.25-21.05-15.38-36.301-15.38zM1259.52 2695c-2.11-4.21-3.82-11.7-5.13-22.49-16.97 17.62-37.22 26.44-60.76 26.44-21.04 0-38.33-5.92-51.88-17.76-13.41-11.97-20.12-27.09-20.12-45.37 0-22.22 8.42-39.45 25.25-51.68 16.96-12.37 40.77-18.55 71.41-18.55h35.51v-16.76c0-12.76-3.82-22.89-11.44-30.38-7.63-7.63-18.88-11.44-33.74-11.44-13.02 0-23.93 3.28-32.74 9.86-8.81 6.57-13.22 14.53-13.22 23.87h-36.69c0-10.65 3.75-20.91 11.24-30.78 7.63-9.99 17.89-17.88 30.78-23.67 13.02-5.78 27.28-8.68 42.8-8.68 24.6 0 43.86 6.18 57.8 18.55 13.94 12.23 21.17 29.13 21.7 50.69v98.24c0 19.6 2.5 35.18 7.5 46.75v3.16zm-60.56-27.81c11.44 0 22.29-2.96 32.55-8.88 10.25-5.92 17.68-13.61 22.29-23.08v-43.79h-28.61c-44.71 0-67.07 13.08-67.07 39.25 0 11.44 3.82 20.39 11.44 26.83 7.63 6.44 17.43 9.67 29.4 9.67zm234.15 1.97c13.02 0 24.4-3.95 34.13-11.84s15.12-17.75 16.17-29.59h34.53c-.66 12.23-4.87 23.87-12.63 34.92s-18.15 19.86-31.17 26.43c-12.89 6.58-26.56 9.87-41.03 9.87-29.06 0-52.21-9.67-69.44-29-17.09-19.47-25.64-46.03-25.64-79.7v-6.11c0-20.78 3.81-39.26 11.44-55.43 7.63-16.18 18.54-28.74 32.75-37.68 14.33-8.95 31.23-13.42 50.69-13.42 23.94 0 43.8 7.17 59.58 21.51 15.91 14.33 24.39 32.94 25.45 55.82h-34.53c-1.05-13.81-6.31-25.12-15.78-33.93-9.33-8.94-20.91-13.41-34.72-13.41-18.54 0-32.94 6.7-43.2 20.12-10.12 13.28-15.19 32.55-15.19 57.8v6.9c0 24.59 5.07 43.53 15.19 56.81 10.13 13.29 24.6 19.93 43.4 19.93zm175.37-239.28v51.68h39.85v28.21h-39.85v132.36c0 8.55 1.78 14.99 5.33 19.33 3.55 4.21 9.6 6.32 18.15 6.32 4.2 0 9.99-.79 17.35-2.37V2695c-9.6 2.63-18.93 3.95-28.01 3.95-16.3 0-28.6-4.94-36.89-14.8-8.28-9.86-12.42-23.87-12.42-42.02v-132.36h-38.87v-28.21h38.87v-51.68zM2017.81 2695h-38.08l-144.59-221.33V2695h-38.07v-287.22h38.07l144.99 222.32v-222.32h37.68zm193.32 0c-2.11-4.21-3.82-11.7-5.13-22.49-16.97 17.62-37.22 26.44-60.76 26.44-21.04 0-38.34-5.92-51.88-17.76-13.41-11.97-20.12-27.09-20.12-45.37 0-22.22 8.41-39.45 25.25-51.68 16.96-12.37 40.77-18.55 71.41-18.55h35.51v-16.76c0-12.76-3.82-22.89-11.45-30.38-7.62-7.63-18.87-11.44-33.73-11.44-13.02 0-23.93 3.28-32.74 9.86-8.81 6.57-13.22 14.53-13.22 23.87h-36.69c0-10.65 3.75-20.91 11.24-30.78 7.63-9.99 17.89-17.88 30.78-23.67 13.02-5.78 27.28-8.68 42.8-8.68 24.59 0 43.86 6.18 57.8 18.55 13.94 12.23 21.17 29.13 21.7 50.69v98.24c0 19.6 2.5 35.18 7.5 46.75v3.16zm-60.56-27.81c11.44 0 22.29-2.96 32.55-8.88 10.25-5.92 17.68-13.61 22.29-23.08v-43.79h-28.61c-44.71 0-67.07 13.08-67.07 39.25 0 11.44 3.82 20.39 11.44 26.83 7.63 6.44 17.43 9.67 29.4 9.67zm198.05-237.31v51.68h39.85v28.21h-39.85v132.36c0 8.55 1.78 14.99 5.33 19.33 3.55 4.21 9.6 6.32 18.15 6.32 4.2 0 9.99-.79 17.36-2.37V2695c-9.61 2.63-18.94 3.95-28.02 3.95-16.3 0-28.6-4.94-36.89-14.8-8.28-9.86-12.42-23.87-12.42-42.02v-132.36h-38.86v-28.21h38.86v-51.68zM2470.93 2695h-36.5v-213.44h36.5zm-39.46-270.06c0-5.91 1.78-10.91 5.33-14.99 3.68-4.08 9.07-6.11 16.17-6.11 7.11 0 12.5 2.03 16.18 6.11s5.52 9.08 5.52 14.99c0 5.92-1.84 10.85-5.52 14.8-3.68 3.94-9.07 5.92-16.18 5.92-7.1 0-12.49-1.98-16.17-5.92-3.55-3.95-5.33-8.88-5.33-14.8zm168.47 220.55l52.86-163.93h37.29L2613.55 2695h-27.82l-77.32-213.44h37.28zm211.07 53.46c-28.93 0-52.47-9.47-70.62-28.41-18.15-19.07-27.22-44.52-27.22-76.34v-6.71c0-21.17 4.01-40.04 12.03-56.61 8.15-16.71 19.46-29.73 33.93-39.06 14.6-9.47 30.38-14.21 47.34-14.21 27.75 0 49.32 9.14 64.71 27.42 15.38 18.28 23.08 44.45 23.08 78.51v15.19h-144.6c.53 21.05 6.64 38.08 18.35 51.1 11.83 12.88 26.83 19.33 44.97 19.33 12.89 0 23.81-2.63 32.75-7.89s16.77-12.23 23.48-20.91l22.29 17.36c-17.89 27.48-44.72 41.23-80.49 41.23zm-4.54-191.35c-14.72 0-27.09 5.39-37.08 16.17-10 10.66-16.18 25.65-18.54 44.98h106.91v-2.76c-1.05-18.54-6.05-32.88-14.99-43.01-8.94-10.25-21.04-15.38-36.3-15.38z"/>
                                    </g>
                                </svg>
                            </div>
                            <div class="col-sm-3 col-md-4 col-lg-4 col-xl-4 iconTech">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                    <path fill="#388e3c"
                                        d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013">
                                    </path>
                                    <path fill="#37474f"
                                        d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z">
                                    </path>
                                    <path fill="#2e7d32"
                                        d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076">
                                    </path>
                                    <path fill="#4caf50"
                                        d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076">
                                    </path>
                                    <path fill="#37474f"
                                        d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                  
        </div>                
      </div> 

</div>
<div class="container-fluid" style="padding-left: 0px; padding-right: 0px;">             
    <div class="row" style="position: fixed; bottom: 0px; width: 100%; margin-right: 0px; right: 0px; margin-left: 0px;">
        <div class="col-12" style="background-color: #3030308e;box-shadow: #ffff;">
            <div class="row" style="display: flex; align-items: center;">
                <div class="col-10" style="display: flex;align-items: center;padding: 0;">                        
                    <div  style="display: flex;align-items: center;">
                        <div class="dropdown dropup" >
                            <a id="v2" class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                <button class="buttonW" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-windows" viewBox="0 0 16 16">
                                        <path d="M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16z" />
                                    </svg>
                                </button>
                            </a>
                            <ul class="dropdown-menu styleDropdown" style="position: absolute;">
                                <li>
                                    <a class="dropdown-item" href="#" onclick="shell('shell')">Símbolo de sistema</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#" onclick="projects('projects')">Proyectos</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#" onclick="curriculum('CV')">Curriculum</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#" onclick="stackTech('st')">Tecnologias</a>
                                </li>
                                <button id="btnOff" onclick="btnOffW()">Cerrar Página</button>

                            </ul>
                        </div>
                    </div>
                    <div  style="display: flex;align-items: center;">
                        <button id="minimizedWindowsShell" class="ventana-minimizada"style="border: none; background-color: transparent;width: 100%;" onclick="abrirVentanaShell()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16" fill="#000000">
                                <path d="M10.875 7l2.008 5h-.711l-2.008-5h.711zm-5.125.594c-.276 0-.526.041-.75.125a1.542 1.542 0 0 0-.578.375c-.162.166-.287.37-.375.61a2.364 2.364 0 0 0-.133.827c0 .287.04.547.117.781.078.235.196.433.352.594.156.162.346.29.57.383.224.094.48.138.766.133a2.63 2.63 0 0 0 .992-.195l.125.484a1.998 1.998 0 0 1-.492.148 4.381 4.381 0 0 1-.75.07 2.61 2.61 0 0 1-.914-.156 2.207 2.207 0 0 1-.742-.453 1.878 1.878 0 0 1-.485-.742 3.204 3.204 0 0 1-.18-1.023c0-.365.06-.698.18-1 .12-.302.287-.563.5-.782.214-.218.471-.388.774-.507a2.69 2.69 0 0 1 1-.18c.296 0 .536.023.718.07.183.047.315.094.399.14l-.149.493a1.85 1.85 0 0 0-.406-.14 2.386 2.386 0 0 0-.539-.055zM8 8h1v1H8V8zm0 2h1v1H8v-1z" />
                                <path d="M15.5 1H.5l-.5.5v13l.5.5h15l.5-.5v-13l-.5-.5zM15 14H1V5h14v9zm0-10H1V2h14v2z" />
                            </svg>
                        </button>
                        <button id="minimizedWindowsProjects" class="ventana-minimizada"style="border: none; background-color: transparent;width: 100%;" onclick="abrirVentanaProjects()">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"/><path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"/></svg>
                        </button>
                        <button id="minimizedWindowsCV" class="ventana-minimizada"style="border: none; background-color: transparent;width: 100%;" onclick="abrirVentanaCV()">
                            <img src="./assets/img/cv_13423379.png" style="height: 30px;width: 30px;"/>
                        </button>
                        <button id="minimizedWindowsST" class="ventana-minimizada"style="border: none; background-color: transparent;width: 100%;" onclick="abrirVentanaST()">
                            <img src="./assets/img/stackTech.png" style="height: 30px;width: 30px;"/>
                        </button>
                    </div>                        
                    <div  style="display: flex;align-items: center;">
                        <a href="https://google.com" target="_blank" style="text-decoration: none;">
                            <button style="border: none; background-color: transparent; width: 100%;">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="30" width="30" version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
                                    <path style="fill:#82D889;" d="M256,386.648c-25.6,0-49.434-7.062-70.621-21.186c-21.186-14.124-37.076-31.779-47.669-53.848  L31.779,128C9.71,167.724,0,210.979,0,256c0,64.441,21.186,120.055,62.676,167.724s93.572,75.917,155.366,85.628l74.152-128.883  C285.131,383.117,271.89,386.648,256,386.648"/>
                                    <path style="fill:#E86438;" d="M175.669,150.069c23.834-18.538,50.317-26.483,80.331-26.483h219.807  c-22.952-38.841-53.848-67.09-92.69-89.159C344.276,11.476,301.903,0,256,0c-39.724,0-77.683,8.828-112.11,25.6  S76.8,67.09,53.848,98.869L128,220.69C135.062,192.441,151.834,168.607,175.669,150.069"/>
                                    <path style="fill:#FCE056;" d="M492.579,159.779H344.276c25.6,25.6,43.255,59.145,43.255,96.221  c0,27.366-7.945,52.083-22.952,75.034L258.648,512c69.738-0.883,129.766-25.6,179.2-75.917S512,325.738,512,256  C512,223.338,506.703,188.91,492.579,159.779"/>
                                    <path style="fill:#25B9E1;" d="M256,158.897c52.966,0,97.103,44.138,97.103,97.103S308.966,353.103,256,353.103  S158.897,308.966,158.897,256S203.034,158.897,256,158.897"/>
                                </svg>
                            </button>
                        </a>
                    </div>                      
                    <button id="fullscreen-btn"style="border: none; background-color: transparent;">Abrir en pantalla completa</button>
                </div>
                <div class="col-2" style="padding: 0;display: flex;justify-content: end;">
                    <span id="time" style="font-weight: 500;color: white;"></span>
                </div>             
            </div>
        </div>
    </div> 
</div>
<div  class="col-12 contentCol2" >
    <div class="main">
        <div class="up">                                      
            <button class="card2" onclick="linkedIn()">                        
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px" class="linkedIn">
                    <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                </svg>                  
            </button>                    
        </div>

        <div class="down">
            <button class="card3" onclick="gitHub()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" class="github">
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
            </button>
            <button class="card4" onclick="whatsapp()">
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" viewBox="0 0 48 48"class="whatsapp">
                    <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
    </div>
</div>

</section>
<section id="loadOn" class="windowsOn">
<div class="container-fluid ">
    <div  class="row d-flex justify-content-center">
        <div  class="dot-spinner">
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
        </div>
    </div>
    <h2 class="row d-flex justify-content-center">Iniciando portafolio</h2>
</div>
</section>
<section id="loadOff" class="windowsOn">
<div class="container-fluid ">
    <div  class="row d-flex justify-content-center">
        <div  class="dot-spinner">
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
        </div>
    </div>
    <h2 class="row d-flex justify-content-center">Cerrando portafolio</h2>
</div>
</section>
<section id="sectionBtnOn" class="windowsOn">
<div class="d-flex justify-content-center " >
    <button  id="btnOn" onclick="btnOnW()"class="btnOnW ">
        <img src="./assets/img/icon_On-Off.png"/>
    </button>
</div>
</section>
`


