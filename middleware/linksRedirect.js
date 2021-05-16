export default function(ctx) {
  // Al-kwatar
  if(ctx.route.fullPath == '/al-kwatar' || ctx.route.fullPath == '/al-kwatar/') {
    return ctx.redirect(301, 'https://al-kwatar.sensass.fr')
  }
  // E3cortex
  if(ctx.route.fullPath == '/e3cortex' || ctx.route.fullPath == '/e3cortex/') {
    return ctx.redirect(301, 'https://e3cortex.fr/fr/')
  }
  // Cadastresolaire
  if(ctx.route.fullPath == '/cadastresolaire' || ctx.route.fullPath == '/cadastresolaire/') {
    return ctx.redirect(301, 'http://cadastresolaire.developpement.top')
  }
  // Dakatir
  if(ctx.route.fullPath == '/dakatir' || ctx.route.fullPath == '/dakatir/') {
    return ctx.redirect(301, 'https://dakatir.com')
  }
  // brulerie-meaux
  if(ctx.route.fullPath == '/brulerie-meaux' || ctx.route.fullPath == '/brulerie-meaux/') {
    return ctx.redirect(301, 'http://brulerie-meaux.sensass.fr')
  }
  // lescompagnonsdufroid
  if(ctx.route.fullPath == '/lescompagnonsdufroid' || ctx.route.fullPath == '/lescompagnonsdufroid/') {
    return ctx.redirect(301, ' https://lescompagnonsdufroid.com')
  }
  // chezpapyetmamie
  if(ctx.route.fullPath == '/chezpapyetmamie' || ctx.route.fullPath == '/chezpapyetmamie/') {
    return ctx.redirect(301, 'https://www.chezpapyetmamie.fr')
  }
  // doctori
  if(ctx.route.fullPath == '/doctori' || ctx.route.fullPath == '/doctori/') {
    return ctx.redirect(301, 'https://doctori.ma')
  }
  // sofprim
  if(ctx.route.fullPath == '/sofprim' || ctx.route.fullPath == '/sofprim/') {
    return ctx.redirect(301, 'https://sofprim.ma')
  }
  // Travel To Marrakech
  if(ctx.route.fullPath == '/travel-to-marrakech' || ctx.route.fullPath == '/travel-to-marrakech/') {
    return ctx.redirect(301, 'https://github.com/oubihis/Travel-To-Marrakech')
  }
  // weather widget
  if(ctx.route.fullPath == '/weather-widget' || ctx.route.fullPath == '/weather-widget/') {
    return ctx.redirect(301, 'https://codepen.io/oubihis/pen/zQPyjo')
  }
  // viralebom
  if(ctx.route.fullPath == '/viralebom' || ctx.route.fullPath == '/viralebom/') {
    return ctx.redirect(301, 'https://github.com/oubihis/Viralebom')
  }
  // alfissah
  if(ctx.route.fullPath == '/alfissah' || ctx.route.fullPath == '/alfissah/') {
    return ctx.redirect(301, 'https://al-fissah.com/')
  }
  // store-bts
  if(ctx.route.fullPath == '/store-bts' || ctx.route.fullPath == '/store-bts/') {
    return ctx.redirect(301, 'https://www.behance.net/gallery/80998123/Template-store-bootstrap')
  }
  // login-ux
  if(ctx.route.fullPath == '/login-ux' || ctx.route.fullPath == '/login-ux/') {
    return ctx.redirect(301, 'https://www.behance.net/gallery/93719419/Animal-Lost-Login-Form')
  }
  // cv19mr
  if(ctx.route.fullPath == '/cv19mr' || ctx.route.fullPath == '/cv19mr/') {
    return ctx.redirect(301, 'https://www.behance.net/gallery/94929225/Coronavirus-Morocco-Arabic')
  }
}
