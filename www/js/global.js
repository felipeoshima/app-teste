$(document).ready(function(){function a(a){for(l=0;l<baladas.length;l++){var i=baladas[l];i.genero.gen==a&&t(i),$(".openBar").html("<span class='fa fa-glass'></span>Open Bar"),$(".vip").html("<span class='fa fa-star'></span>VIP")}}function t(a){var t=$("#geral .listaFiltro"),i=$("#vip .listaFiltro"),s=$("#openbar .listaFiltro"),e='<div class="itemLista '+a.genero.gen+'"><div class="clearfix"><a href="detalhe.html" title="detalhe"><div class="imgLogo pull-left"><img src="http://www.nex2.com.br/app/imagens/'+a.logo+'" alt="'+a.nome+'"></div><div class="infoGeral pull-left"><h2>'+a.nome+'</h2><div class="data">'+a.data+" / "+a.hora+'</div><div class="festa">'+a.festa+'</div><div class="info"><span class="tit">O que toca?</span> '+a.genero.descricao+'</div><div class="info"><span class="tit">Lista</span>: '+a.comLista+'</div><div class="info"><span class="tit">Sem lista</span>:'+a.semLista+'</div></div></div><div class="barraInfo clearfix"><div class="tipo '+a.tipo+'"></div><div class="tipo rank"><span class="fa fa-heart"></span>65%</div></a></div></div>';t.append(e),-1!=a.tipo.indexOf("vip")&&i.append(e),-1!=a.tipo.indexOf("openBar")&&s.append(e)}function i(){$(".filtroGenero input[type=checkbox]:checked").length>0?($(".lista").hide(),$(".listaFiltro").show()):($(".lista").show(),$(".listaFiltro").hide())}function s(){var a={};$(".filtroGenero span").each(function(){var t=$(this).text();a[t]?$(this).parent().remove():a[t]=!0})}function e(){0==$("#geral .listaFiltro .itemLista").length?$("#geral .listaFiltro .semResultado").text("Nenhum resultado encontrado"):$("#geral .listaFiltro .semResultado").text(""),0==$("#openbar .listaFiltro .itemLista").length?$("#openbar .listaFiltro .semResultado").text("Nenhum resultado encontrado"):$("#openbar .listaFiltro .semResultado").text(""),0==$("#vip .listaFiltro .itemLista").length?$("#vip .listaFiltro .semResultado").text("Nenhum resultado encontrado"):$("#vip .listaFiltro .semResultado").text("")}for(var l=0;l<baladas.length;l++){var n=baladas[l],o='<div class="itemLista"><div class="clearfix"><a href="detalhe.html" title="detalhe"><div class="imgLogo pull-left"><img src="http://www.nex2.com.br/app/imagens/'+n.logo+'" alt="'+n.nome+'"></div><div class="infoGeral pull-left"><h2>'+n.nome+'</h2><div class="data">'+n.data+" / "+n.hora+'</div><div class="festa">'+n.festa+'</div><div class="info"><span class="tit">O que toca?</span> '+n.genero.descricao+'</div><div class="info"><span class="tit">Lista</span>: '+n.comLista+'</div><div class="info"><span class="tit">Sem lista</span>:'+n.semLista+'</div></div></div><div class="barraInfo clearfix"><div class="tipo '+n.tipo+'"></div><div class="tipo rank"><span class="fa fa-heart"></span>65%</div></a></div></div>';$("#geral .lista").append(o),-1!=n.tipo.indexOf("vip")&&$("#vip .lista").append(o),-1!=n.tipo.indexOf("openBar")&&$("#openbar .lista").append(o)}for($(".openBar").html("<span class='fa fa-glass'></span>Open Bar"),$(".vip").html("<span class='fa fa-star'></span>VIP"),$(".btnMenuPrincipal").on("click touchstart",function(a){$(".menuPrincipal").toggleClass("in"),$(".blackout").toggleClass("in"),a.preventDefault()}),$(".btnFiltro").on("click touchstart",function(a){$(".menuFiltro").toggleClass("in"),$(".blackout2").toggleClass("in"),a.preventDefault()}),$(".blackout").on("click touchstart",function(a){$(".menuPrincipal").toggleClass("in"),$(this).toggleClass("in"),a.preventDefault()}),$(".blackout2").on("click touchstart",function(a){$(".menuFiltro").toggleClass("in"),$(this).toggleClass("in"),a.preventDefault()}),$("#tabs").tab(),l=0;l<baladas.length;l++){var n=baladas[l],r=$("<li><input type='checkbox' value='"+n.genero.gen+"' name='gen2'><span>"+n.genero.descricao+"</span></li>");$(".filtroGenero").each(function(){$(this).append(r)})}$(".filtroGenero input[type=checkbox]").on("click",function(){var t=$(this).val();$(this).is(":checked")?a(t):$("."+t).remove(),i(),e()}),s()});